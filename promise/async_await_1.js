/*
    Date : Monday September 29 2021
    Name : Kylie
    Content : async, await
*/

/* STUDY
    - 함수 선언할 때 async 붙이기, Promise 앞에 await 붙여주기 ==> 해당 프로미스가 끝날때까지 기다렸다가 다음 작업을 수행할 수 있음
    - async : 비동기 데이터 사용
    - await : 값이 반환될 때까지 함수의 실행을 중지
    - async/await가 Promise를 대체하지 않음
    - 프로미스로 변환
*/

function getUserPreferences(callback){
    const preference = new Promise((resolve, reject)=>{
        resolve({
            them : "apple"
        });
        reject({
            type : "ERROR!"
        })
    });
    return preference
}

async function getThem(){
    const {them} = await getUserPreferences();
    return them;
}

getThem().then(theme=>{
    console.log(theme)
})

/* STUDY
    getThem() 함수 내부에서 getUserPreferences() 호출
    함수를 호출하기 전에 await를 추가해서 getUserPreferences()가 프로미스를 반환한다는 것을 알려줘야함
        -> 프로미스 완료 후 반환되는 값이 새로운 변수에 담김
    getThem()은 프로미스로 변환
*/