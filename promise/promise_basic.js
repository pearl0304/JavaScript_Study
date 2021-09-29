/*
 Date : Monday September 28 2021
 Name : Kylie
 Content : promise
 */

 /* STUDY
     :   - new promise 생성시 executor은 자동 실행
         - executor의 결과에 따라 resolve or reject 중 하나의 함수만 호출 ☞ 프라미스 객체 상태 변화
         - executor에 의해 처리가 끝난 일은 resolve or reject 인수 하나만 받고. 그 이외의 인수는 무시함
         - resolve (성공) : 작업이 끝나고 나서 또 다른 작업을 해야할 때에 Promise 뒤에 .then(...)을 붙여서 사용하기
         - reject (실패) : catch()를 통해 콜백 함수 처리
*/
// CASE - Promise basic : resolve
function getUserPreferences(){
    const preferences = new Promise((resolve, reject)=>{
        resolve({
            Beverage: 'Coffee'
        })
    });
    return preferences;
}

// CASE - Promise basic : reject
function failUserPreference(){
    const finder = new Promise((resolve, reject) => {
        reject({
            type : "접근 거부"
        })
    })
    return finder
}

// STUDY : 성공한 경우 다음 단계를 진행하고 싶다면 .then() ||  실패한 경우 다음 단계를 진행하고 싶다면 .catch()
getUserPreferences().then(preferences=>{
    console.log('SUCCESS -',preferences.Beverage)
}).catch(error=>{
    console.error(`ERROR - ${error.type}`)
})



