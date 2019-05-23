//做饭===》 买菜
let a =''
function buy(callback){
    setTimeout(()=>{
        let a = '菜'
        callback(a)
    },2000)
}
buy(function cookie(val){
    console.log(val);
})

let p = new Promise((res,rej)=>{
    setTimeout(()=>{
        let a = '菜'
        res(a)
    },2000)
}).then(res=>{
    console.log(res,'res');
}) 