/*
 Date : Monday September 29 2021
 Name : Kylie
 Content : promise
 */

// CASE 1
function goToSchool(){
    console.log('학교에 갑니다')
}

function arriveAtSchool(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log('학교에 도착했습니다');
            resolve();
        },1000);
    })
}

function study(){
    console.log('열심히 공부합니다');
}

// goToSchool()
// arriveAtSchool().then(()=>{study()})


// CASE 2
function arriveAtSchool_adv(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let status = Math.floor(Math.random()*2);
            console.log(status);
            if(status === 0) { resolve('학교에 무사히 도착했습니다');
            }else{
                reject(new Error('중간에 넘어져서 다쳤습니다'));
            }
        },1000);
    })
}

function cure(){
    console.log('양호실에 가서 약을 발랐습니다')
}

goToSchool()
arriveAtSchool_adv()
    .then(res=>{ console.log(res); study();})
    .catch(err=>{console.log(err); cure();});