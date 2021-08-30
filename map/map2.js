/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map()

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.
*/


const member = new Map();
// insert data to map
member.set('JK',{name : 'Jeon Jung Kook', job : 'singer', group:'BTS', company : 'HTBE', address : 'Busan'})
member.set('Jimin',{name : 'Park Ji Min', job : 'singer', group:'BTS', company : 'HTBE', address : 'Busan'})
member.set('Jin',{name : 'Kim Seok Jin', job : 'singer', group:'BTS', company : 'HTBE', address : 'Seoul'})
console.log(member)

/* has
 => Returns a boolean asserting whether a value has been associated to the key in the Map object or not.*/
let has = member.has('JK'); // result : true
console.log(has);

/* get
=> Returns the value associated to the key, or undefined if there is none.
 */
let get_value = member.get('Jimin');
console.log(get_value);

let check = member.get('V');
console.log(check);
