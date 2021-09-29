/*
 Date : Monday September 29 2021
 Name : Kylie
 Content : promise
 */

function getUserPreference(callback){
    const preference = new Promise((resolve, reject)=>{
            resolve({
                kind : "Coffee"
            })
    })
    return preference;
}


function getBeverage(kind){
    if(kind==='Coffee'){
        return Promise.resolve({
            guid : "Which coffee shop do you want?"
        })
    }
    return Promise.resolve({
        guid : "How about Coffee?"
    })
}

getUserPreference()
    .then(preference=>{return getBeverage(preference.kind)})
    .then(beverage =>{return console.log(beverage.guid)})

/* STUDY
    getUserPreference()의 then() 메서드에 전달한 함수의 내부에서 getBeverage()을 호출해 반환 가능
    연결된 또 다른 then() 메서드에서 getBeverage()의 결과를 호출
    => 여러개의 .then() 메서드를 통해 데이터를 아래로 내려 줌

 */