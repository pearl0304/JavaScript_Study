/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map() - NaN as Map keys

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.

 NaN can also be used as a key. Even though every NaN is not equal to itself (NaN !== NaN is true),
 the following example works because NaNs are indistinguishable from each other:
*/

const myMap = new Map();
myMap.set(NaN, 'not a number')
console.log(myMap.get(NaN))

const otherNaN = Number('foo')
console.log(myMap.get(otherNaN))


