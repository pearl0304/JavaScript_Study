/*
 Date : Friday September 24 2021
 Name : Kylie
 Content : (...) 깊은 복사, 함수에서 활용 & map()
*/

function renderUser ({name, age, position}){
    console.log('name : ', name)
    console.log('age  : ', age)
    console.log('position', position)
}

const users = [
    {name: "jin", age: 30, position: "vocal"},
    {name: "suga", age:29, position: "rap"},
    {name: "hope", age: 28, position: "dance"}
];

// mapping
users.map((user)=>{
    renderUser(user)
})
