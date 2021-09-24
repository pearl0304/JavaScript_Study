/*
 Date : Friday August 30 2021
 Name : Kylie
 Content : exercise ... function()
 dot*3 : 속성만 복사, 원데이터에 영향을 미치지 않음
*/

let tempMovingItem;
const movingItem = {
    type : 'tree',
    direction : 0,
    top : 0,
    left : 0
};

console.log('before : ',movingItem);

function init() {
    tempMovingItem = {...movingItem};
    console.log('tempMovingItem_1 : ',tempMovingItem);

    tempMovingItem.type='★ ★ flower ★ ★'
    tempMovingItem.direction=200;
    tempMovingItem.top=400;
    tempMovingItem.left=100;
    console.log('tempMovingItem_2', tempMovingItem);
}

init();
console.log('after : ',movingItem);