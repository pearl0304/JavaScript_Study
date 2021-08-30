/*
 Date : Friday August 30 2021
 Name : Kylie
 Content : exercise Call back function()
*/

plus = function (a,b,callback) {
    let result = a+b;
    callback(result);
}

plus(5,10,function (result) {
    console.log('result : ',result)
});

pm = function (a,b,callback) {
    callback(a+b, a-b);
}
pm(13,10,function (res1,res2) {
    console.log('res1 : ',res1);
    console.log('res2 : ',res2)
})