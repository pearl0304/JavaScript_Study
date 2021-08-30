/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map()

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.
*/

const test_map = new Map();

test_map.set('a',1);
test_map.set('b',2);
test_map.set('c',3)

console.log(test_map)
console.log(test_map.get('a'));

test_map.set('a',950113);
console.log(test_map.get('a'));

console.log(test_map.size)

test_map.delete('b');
console.log(test_map)