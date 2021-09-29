/*
    Date : Monday September 29 2021
    Name : Kylie
    Content : 비동기 문제점과 callback 함수 1
*/

/* STUDY
    비동기 처리 : 이전의 코드가 완전히 해결되지 않아도 이어지는 코드를 실행할 수 있음
    callback :  다른 함수가 실행을 끝낸 뒤 실행되는 함수
                인자로 넘겨지는 함수
                여러함수를 선언하고 상황에 따라 필요한 다른 함수를 실행하고 싶을 때 활용
    setTimeout() : 지정된 시간이 지난 후에 함수를 call 함
*/

// CASE -  기본
function first(){
    console.log(1);
}

function second(){
    console.log(2);
}

function third(){
    console.log(3);
}

first()
second()
third()

/* RESULT
    1
    2
    3
*/

// CASE - first 함수가 즉시 완료할 수 없는 코드를 포함할 경우
function first_(){
    setTimeout(()=>{
        console.log(4);
    },500)
}

function second_(){
    console.log(5);
}

function third_(){
    console.log(6);
}

first_();
second_();
third_();

/* RESULT
    5
    6
    4
*/

// STUDY : first_() 함수를 먼저 call 하더라도 0.5초뒤에 실행되기 때문에 second_()함수 와 third_()함수가 먼저 실행됨