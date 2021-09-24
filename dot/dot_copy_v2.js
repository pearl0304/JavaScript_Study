/*
 Date : Friday September 24 2021
 Name : Kylie
 Content : dot copy Ver.2
*/

// Example 1 [array] copy
let arr = ['apple', 'banana','cake'];
let arr_first_copy = arr;
let [...arr_second_copy] = arr;
let arr_third_copy = [...arr];

arr[0] = 100000;

console.log('――――――――――――――――――――――――――――――――― ARRAY RESULT ――――――――――――――――――――――――――――――――')
console.log('arr : ', arr)
console.log('1st : ', arr_first_copy);
console.log('2nd : ',arr_second_copy);
console.log('3rd : ',arr_third_copy);
console.log('――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――')

/** result
 arr :  [ 100000, 'banana', 'cake' ]
 1st : [ 100000, 'banana', 'cake' ]
 2nd : [ 'apple', 'banana', 'cake' ]
 3rd : [ 'apple', 'banana', 'cake' ]
 */


// Example 2 {object} copy
let prevState = {
    name : "KYLIE",
    birth : "1994-03-04",
    age : 28,
    like : "LOVB BTS!"
};

let state = {
    ...prevState,
    like : "GYU YEON"
}

console.log('――――――――――――――――――――――――― OBJECT RESULT ――――――――――――――――――――――――――――――――――――')
console.log('prevState : ', prevState);
console.log('state : ', state);
console.log('――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――――')


/** result
 prevState :  { name: 'KYLIE', birth: '1994-03-04', age: 28, like: 'LOVB BTS!' }
 state :  { name: 'KYLIE', birth: '1994-03-04', age: 28, like: 'GYU YEON' }
 */