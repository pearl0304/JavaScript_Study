/*
 Date : Friday August 31 2021
 Name : Kylie
 Content : exercise Math.trunc()

 Math.trunc() : 주어진 값의 소수 부분을 제거하고 숫자의 정수 부분을 반환
                주어진 값이 양수이건 음수이건 상관없이 소수점 이하를 버리
                함수인자는 암묵적으로 숫자로 변환되어 메서드에 전달
*/

const trunc_v1= Math.trunc(13.37); // 13
const trunc_v2= Math.trunc(42.84); // 42
const trunc_v3= Math.trunc(0.123); // 0
const trunc_v4= Math.trunc(-0.123); // -0
const trunc_v5= Math.trunc(NaN);        // NaN
const trunc_v6= Math.trunc('방탄소년단'); // NaN
const trunc_v7= Math.trunc();              // NaN

console.log('trunc_v1 : ', trunc_v1);
console.log('trunc_v2 : ', trunc_v2);
console.log('trunc_v3 : ', trunc_v3);
console.log('trunc_v4 : ', trunc_v4);
console.log('trunc_v5 : ', trunc_v5);
console.log('trunc_v6 : ', trunc_v6);
console.log('trunc_v7 : ', trunc_v7);