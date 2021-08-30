/*
 Date : Friday August 30 2021
 Name : Kylie
 Content : forEach(callback, thisArg)
*/

const array = [0,1,2,3,4,5,6,7,8,9];
array.forEach(ele=>{
    // console.log('ele : ',ele)
    /* console.log 결과 :
        ele :  0
        ele :  1
        ele :  2
        ele :  3
        ele :  4
        ele :  5
        ele :  6
        ele :  7
        ele :  8
        ele :  9
        */
})


const arr = [0,1,2,3,4,5,6,7,8,9];
const coin_data = '안녕하세요반갑습니다☆';
arr.forEach(ele=>{
    let target_ele = coin_data[ele];
    console.log('target_ele : ',target_ele)
    /* console.log 결과 :
    target_ele :  안
    target_ele :  녕
    target_ele :  하
    target_ele :  세
    target_ele :  요
    target_ele :  반
    target_ele :  갑
    target_ele :  습
    target_ele :  니
    target_ele :  다

    ★★★ arr의 길이만큼 coin_data를 반복함 ★★
    */
})
