/*
    Date : Monday September 29 2021
    Name : Kylie
    Content : 비동기 문제점과 callback 함수 2
*/

/* STUDY
    비동기 처리 : 이전의 코드가 완전히 해결되지 않아도 이어지는 코드를 실행할 수 있음
    callback :  다른 함수가 실행을 끝낸 뒤 실행되는 함수
                인자로 넘겨지는 함수
                여러함수를 선언하고 상황에 따라 필요한 다른 함수를 실행하고 싶을 때 활용
    setTimeout() : 지정된 시간이 지난 후에 함수를 call 함
*/

// CASE - 일반 함수 호출
function doHomework(subject){
    console.log('――――――――――――――――――――――――――――――――')
    console.log(`STARTING my ${subject} HOMEWORK`);
}

doHomework('English')

/* RESULT
    STARTING my English homework
*/

// CASE - callback 함수 만들기 (직접 선언)
function doStudy(subject,callback){
    console.log('――――――――――――――――――――――――――――――――')
    console.log(`1. STARTING my ${subject} study`);
    callback();
}

doStudy('MATH',()=>{
    console.log('2. FINISH my Study')
})

/* RESULT
*   STARTING my MATH study
    FINISH my Study
*/

/* STUDY
    doStudy()의 두번째 인자로 callback 설정 -> doStudy()함수가 실행하면서  callback 함수 실행
*/

// CASE - callback 함수 만들기 (연습)
function doSomething(things,callback){
    console.log('――――――――――――――――――――――――――――――――')
    console.log(`3. NOW, I am doing ${things} ~~~`);
    callback();
}
doSomething('Singing',()=>{
    console.log('4. WOW, I am finish THINGS!');
})