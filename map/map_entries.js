/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map() - Iterating Map with for..of (for 반복문)

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.

 The entries() method returns a new Iterator object that contains the [key, value] pairs for each element in the Map object in insertion order.
 In this particular case, this iterator object is also an iterable, so the for-of loop can be used.
 When the protocol [Symbol.iterator] is used, it returns a function that, when invoked, returns this iterator itself.
*/

const entriesMap = new Map();
entriesMap.set(1230,'Tae Tae\'s Birth Day');
entriesMap.set('1', 'one');
entriesMap.set({},'AAA');

const entriesIter = entriesMap.entries();
console.log('entreisIter : ',entriesIter);
console.log('entreisIter.next() : ', entriesIter.next().value);
console.log('entreisIter.next() : ', entriesIter.next().value);
console.log('entreisIter.next() : ', entriesIter.next().value);
console.log('entreisIter.next() : ', entriesIter.next().value);

