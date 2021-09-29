/*
    Date : Monday September 29 2021
    Name : Kylie
    Content : async, await

*/

// CASE - reject
function getUserPreferences(callback){
    const preference = new Promise((resolve, reject)=>{
        resolve({them : 'apple'})
    });
    return preference;
}

function getMusic(them){
    if(them === 'apple'){
        return Promise.resolve({
            album : 'music for airports'
        })
    }
    return Promise.resolve({
            album : 'kind of blue'
    })
}

function getArtist(album){
    return Promise.resolve({
        artist : 'BTS'
    });
}

function failMusic(them){
    return Promise.reject({type : 'ERROR OF NETWORK'})
}

async function getArtistByPreference(){
    const {them} = await getUserPreferences();
    const {album} = await failMusic(them);
    const {artist} = await getArtist(album);

    return artist;
}

getArtistByPreference()
    .then(artist=>{
        console.log(artist)
    })
    .catch(e=>{
        console.error(e)
    });