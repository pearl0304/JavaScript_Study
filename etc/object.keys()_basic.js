/*
 Date : Friday August 30 2021
 Name : Kylie
 Content : object.keys() #basic
*/

// 1. 간단한 배열
const array = ['apple','banana','grape'];
const obj_key_array = Object.keys(array);
console.log('obj_key_array : ', obj_key_array)
// console.log 결과 : ['0','1','2'] ――――――> 배열의 순서 반환

// 2. 배열과 같은 객체
const obj = {0 :'apple', 1:1, 6:'banana'};
const obj_key_obj = Object.keys(obj);
console.log('obj_key_obj : ', obj_key_obj);
// console.log 결과 : ['0','1','6'] ――――――> key 값 반환

// 3. 임의의 키 순서가 있는 배열 형 객체
const anObj = {130613 : 'BTS Hot Début', 970901 : 'JK BirthDay', 0:0}
const obj_key_anObj = Object.keys(anObj);
console.log('obj_key_anObj : ',obj_key_anObj);
// console.log 결과 : ['0','130613', '970901'] ――――――> key 값 순서대로 반환


