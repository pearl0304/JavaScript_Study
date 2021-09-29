/*
    Date : Monday September 29 2021
    Name : Kylie
    Content : 비동기 문제점과 callback 함수
*/

// CASE - getUserPreferences 실행할 때, callback 함수 실행하기

function getUserPreferences(callback){
    console.log(1);

    return setTimeout(()=>{
        callback({
            them : "dust"
        });
    },1000);
}
function log(value){
    return console.log(value);
}

log("-----▶ starting")

getUserPreferences(preferences =>{
    console.log(4);
    return log(preferences.them.toUpperCase())
})

log(2)

/* RESULT
    starting
    1
    2
    DUST
*/

// CASE - callback hell

function getMusic(them,callback){
    return setTimeout(()=>{
        if (them === 'dust'){
            return callback({
                album : 'music for airports'
            })
        }
        return callback({
            album: 'kind of blue'
        });
    },1000)
}

getUserPreferences(preferences=>{
    return getMusic(preferences.them, music=>{
        console.log(3);
        console.log(music.album);
    })
})

/* STUDY
    콜백지옥 : 너무 많은 콜백 함수가 중첩되는 경우
    getUserPreferences()의 callback 함수로 preferences 호출,
    preferences의 인사로 getMusic() 사용.
    getMusic()의 callback 함수로 music 사용
 */