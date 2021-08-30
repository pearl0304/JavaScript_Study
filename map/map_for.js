/*
 Date : Friday August 27 2021
 Name : Kylie
 Content : exercise Map() - Iterating Map with for..of (for 반복문) & forEach()

 Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
       Any value (both objects and primitive values) may be used as either a key or a value.
*/

const myMap = new Map();
myMap.set(0,'zero');
myMap.set(1,'one');
myMap.set('JK','Jeon Jung Kook');

for (const [key,value] of myMap){
    console.log(key + ' = ' + value);
}
console.log('―――――――――――――――――――――――――――――――――――')
for (const key of myMap.keys()){
    console.log('myMap\'s key : ', key)
}
console.log('―――――――――――――――――――――――――――――――――――')

for(const value of myMap.values()){
    console.log('myMap\'s values : ', value)
}
console.log('―――――――――――――――――――――――――――――――――――')


// entries() return : A new Map iterator object.
for (const [key, value] of myMap.entries()){
    console.log(key + ' = ' + value);
}
console.log('―――――――――――――――――――――――――――――――――――')

// foreach()
myMap.forEach((key)=>{
    console.log('Using forEach() ~ myMap\'s key : ', key)
})

console.log('―――――――――――――――――――――――――――――――――――')
myMap.forEach((value)=>{
    console.log('Using forEach() ~ myMap\'s value : ', value)
})