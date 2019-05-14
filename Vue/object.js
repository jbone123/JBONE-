// object变化侦测
function defineReacttive(data,key, val){
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable: true,
        get: function(){
            return val
        },
        set: function(newVal){
            if(newVal == val){
                return
            }
            val= newVal
        }
    })
}