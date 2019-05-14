// arrow fn不具备this，argments
// 自己家没有this就往上找上一级this
//如何更改this指向  
// 1.call apply bind
// 2.var that = this
// 3. =>
//如何看shis是谁？ 看谁调用的 .前面是谁this就是谁


//去掉function关键字 
//参数有一个可以省略小括号 小括号和大括号之间有一个箭头
// 如果没有大括号则直接返回值 有大括号必须写return
let a= b=> b+1;
a()

function a(b){
    return function (c){
        return b+c ;
    }
}
a(1)(2);
let a =b=>c=>b+c   //高阶函数（>=2个箭头的）
console.log(a(1)(2));
// let a=b=>{
//     return  c=>{
//         return b+c ;
//     }
// }
// a(1)(2);

// 闭包： 函数执行的一瞬间叫闭包，（不销毁的作用域）
// 当执行后返回的数据必须是引用数据类型，被外界变量接受，这个函数不会被销毁（模块化）
let a =function (b){
    return function (c){
        return b+c ;
    }
}()

