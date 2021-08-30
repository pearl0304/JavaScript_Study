/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map() - Iterating Map with for..of (for 반복문)

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.
*/

const arr = [['jimin','cute'],['jung kook','sexy']];
console.log('arr ▶ ', arr);
console.log('arr[0] ▶ ', arr[0]);
console.log('arr[1] ▶ ', arr[1]);
console.log('―――――――――――――――――――――――――――――――――――')

const arrMap = new Map(arr);
console.log(arrMap.get('jimin')) //return : 'key's value'
console.log('―――――――――――――――――――――――――――――――――――')

console.log(Array.from(arrMap))
console.log([...arrMap])
console.log('―――――――――――――――――――――――――――――――――――')

console.log(Array.from(arrMap.keys()));
console.log(Array.from(arrMap.values()))