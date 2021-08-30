/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map() - Usign the Map object

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.
*/

const myMap = new Map();
const keyString = 'a string';
const keyObj = {};
const keyObj_inset_val = {name:'kylie'};
const keyFunction = function () {}

console.log('――――――――――――――――――――――――――――――')
console.log('keyObj : ',keyObj);
console.log('keyObj_inset_val : ', keyObj_inset_val);

//setting the values
myMap.set(keyString,"value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyObj_inset_val, 'hi');
myMap.set(keyFunction,"value associated with keyFunc");

console.log('――――――――――――――――――――――――――――――')
const mapSize = myMap.size;
console.log('mapSize : ',mapSize);

//getting the values
const get_keyStirng = myMap.get(keyString);
const get_keyObj = myMap.get(keyObj);
const get_keyObj_inset_val = myMap.get(keyObj_inset_val);
const get_keyFunciton = myMap.get(keyFunction);

console.log('――――――――――――――――――――――――――――――')
console.log('get_keyStirng : ', get_keyStirng);
console.log('get_keyObj : ',get_keyObj);
console.log('get_keyObj_inset_val : ', get_keyObj_inset_val);
console.log('get_keyFunciton : ',get_keyFunciton);
console.log('――――――――――――――――――――――――――――――')

const use_keyString_val= myMap.get('a string');
console.log('use_string_value :',use_keyString_val);
// keyString === 'a string'
console.log('――――――――――――――――――――――――――――――')

const use_keyObj_inset_val = myMap.get({name:'kylie'});
console.log('use_keyObj_inset_val : ', use_keyObj_inset_val);
// undefined, because  use_keyObj_inset_val !== {name:'kylie'}
console.log('――――――――――――――――――――――――――――――')