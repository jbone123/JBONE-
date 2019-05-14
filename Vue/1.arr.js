let arr=[1,2,3,4,5,6]
for(let i=0; i<arr.length; i++){  //编程式  我们自己来调用循环
    console.log(arr[i]);
}
// 1)forEach不支持return
let arr=[1,2,3,4,5,6]
arr.forEach(function(item){  //声明式不关心如何实现
    console.log(item);
})
// 2) 面试 forEach,   for in, for of, for区别？
// 
let arr=['a',2,3,4,5,6]
arr.b='100'
for (let key in arr) {   // 
    console.log(key);  // KEY会变成字符串类型，包括数组的私有属性
}
let arr=[1,2,3,4,5,6]
arr.b='100'
for (const val of arr) {
    console.log(val);   // 支持return 并且是值 of数组 不能遍历对象
}
let arr={a:'1',b:'2'}
// Object.keys 将对象的key作为新的数组
for (const val of Object.keys(arr)) {   //arr is not iterable
    console.log(arr[val]);

}

//2) filter 是否操作原数组：no  返回结果：过滤后的新数组  
//回调函数的返回结果： true  表示这一项放到新数组中  false 不放入
let arr=[1,2,3,4,5,6]
let newArr=arr.filter(item=>{
    return item>2&&item<5
})
console.log(newArr);
// 3)map 映射  将原有数组映射成新数组 [1,2,3]
// 不操作原数组 返回新数组  回调函数中返回什么这一项就是什么
let arr = [1,2,3].map(item=>{
    return `<div>${item}</div>`
})
console.log(arr.join(''));
//4) 返回的boolean
let arr3 = [1,2,3,4,55]
console.log(arr3.includes(5));  

// 5) 返回找到的那一项 不会改变原数组 回调函数返回true表示找到了 找到后停止循环
//找到具体的那一项就用find  找不到返回的是undefined
let arr3 = [1,2,3,4,55]
let result= arr3.find(function(item,index){
    return item.toString().indexOf(5) > -1
}) 
console.log(result)

// 6)some 找到true停止  返回true  找不到返回false
let arr3 = [1,2,3,4]
let result= arr3.some(function(item,index){
    return item.toString().indexOf(5) > -1
}) 
console.log(result)
// 7)every 找到false停止 返回false
let arr3 = [1,2,3,4,5]
let result= arr3.every(function(item,index){
    return item.toString().indexOf(5) > -1
}) 
console.log(result)

// 8) reduce 收敛 4个参数 返回的是叠加后的结果 回调函数结果：  原数组：不变， 回调函数返回的结果
// prev代表数组第一项 next第二项
// 第二次prev是undefined ,next是数组第三项
// 第三次prev是undefined ,next是数组第四项

let sum=[1,2,3,4,5].reduce(function(prev,next,index,item){
    console.log(arguments);
    // return 100; //本次返回值   会作为下一次的prev 
    return prev+next
})
console.log(sum);

let sum=[{price:30, count:2},{price:30, count:3},{price:30, count:4}].reduce
(function(prev,next){
    console.log(prev,next);
    return  prev+next.price*next.count
},0)
console.log(sum)

// 数组扁平化
//[[1,2,3],[4,5,6],[7,8,9]]
console.log([[1,2,3],[4,5,6],[7,8,9]].join(','))  // 不是数组类型
let flat=[[1,2,3],[4,5,6],[7,8,9]].reduce(function(prev,next){
    return prev.concat(next)
})
console.log(flat)
