/*
 Date : Friday August 30 2021
 Name : Kylie
 Content : object.keys()
*/

let target_pair =[
    '00:00:00', '00:00:30', '00:01:00', '00:01:30', '00:02:00',
    '00:02:30', '00:03:00', '00:03:30', '00:04:00', '00:04:30',
]
console.log('target_pair : ', target_pair);

let key_list = Object.keys(target_pair);
console.log('key_list : ', key_list);
//console.log 결과 : ['0','1','2','3','4','5','6','7','8','9']

key_list.forEach(function (key) {
    let round = key.split(':')[0]
    console.log('round : ', round);
})