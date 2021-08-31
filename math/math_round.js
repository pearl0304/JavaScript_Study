/*
 Date : Friday August 31 2021
 Name : Kylie
 Content : exercise Math.round()

 Math.round() : 입력값을 반올림한 수와 가장 가까운 정수 값을 반환
 ※ caution : 음수일 때 생각 잘하기 0.5까지는 원래 정수값을 반환
*/

const round_v1 = Math.round(0.9);  // 1
const round_v2 = Math.round(5.95); // 6
const round_v3 = Math.round(5.5);  // 6
const round_v4 = Math.round(5.06); // 5

 //※ caution : 음수일 때 생각 잘하기
const round_v5 = Math.round(-0.9);  // -1
const round_v6 = Math.round(-5.95); // -6
const round_v7 = Math.round(-5.5);  // -5
const round_v8 = Math.round(-5.06); // -5


console.log('round_v1 : ', round_v1);
console.log('round_v2 : ', round_v2);
console.log('round_v3 : ', round_v3);
console.log('round_v4 : ', round_v4);
console.log('round_v5 : ', round_v5);
console.log('round_v6 : ', round_v6);
console.log('round_v7 : ', round_v7);
console.log('round_v8 : ', round_v8);


// do more exercise Examples
console.log(Math.round(20.49)); // 20
console.log(Math.round(20.5));  // 21
console.log(Math.round(42));    // 42
console.log(Math.round(-20.5)); // -20
console.log(Math.round(-20.51)) // -21


let number = 49071.58;
let round_number = Math.round(number * 100) % 100;
console.log('round_number : ', round_number);