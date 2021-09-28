/*
 Date : Monday September 28 2021
 Name : Kylie
 Content : promise

 study : new promise 생성시 executor은 자동 실행
         executor의 결과에 따라 resolve or reject 중 하나의 함수 호출 ☞ 프라미스 객체 상태 변화
         executor에 의해 처리가 끝난 일은 resolve or reject 인수 하나만 받고. 그 이외의 인수는 무시함

         작업이 끝나고 나서 또 다른 작업을 해야할 때에 Promise 뒤에 .then(...)을 붙여서 사용하기

*/

function increaseAndPrint(n){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const value = n+1;
            if(value === 5) {
                const error = new Error();
                error.name = 'Value IS Five Error';
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);

        },1000);
    })
}

increaseAndPrint(0)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e => {
    console.error(e)
})