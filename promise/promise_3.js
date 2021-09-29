/*
 Date : Monday September 29 2021
 Name : Kylie
 Content : promise
 */

/* STUDY
    프로미스를 연결하는 경우에 catch() 메서드를 개별적으로 연결할 필요없음
    catch() 메서드 하나만 정의해서 프라미스가 거절되는 모든 경우 처리 가능
*/

function getUserPreferences(callback){
    const preference = new Promise((resolve, reject) => {
        resolve({
            them : "apple"
        })
    })
    return preference;
}

function getMusic(them){
    if(them === "apple"){
        return Promise.resolve({
            album : 'music for airports'
        })
    }
    return Promise.resolve({
        album : "kind of blue"
    })
}

function getArtist(album){
    return Promise.resolve({
        artist : 'BTS'
    })
}
function failMusic(them){
    return Promise.reject({
        type: '네트워크 오류'
    });
}

getUserPreferences()
    .then(preference=>{failMusic(preference.them)})
    .then(music=>{getArtist(music.album)})
    .catch(e=>{console.log('ERROR!!!',e)})
