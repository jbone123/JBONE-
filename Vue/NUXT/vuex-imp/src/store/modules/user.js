export default{
    namespaced: true, //这是一个独立的空间
    state:{
        userName:'姜波',
        num:0,
    },
    getters:{
        getNewUserName(state){
            return  '帅'+state.userName
        },

    },
    mutations:{
        change_num(state,payload){
            state.num = payload
        },
        add(state){
            state.num = state.num+1
        },
        del(state,n){
            state.num = state.num-n
        }
    },
    actions:{
        change_num({commit},payload){
            setTimeout(()=>{
                commit('change_num',payload)
            },1000)
        },
        // add({commit},payload){
        //     setTimeout(()=>{
        //         commit('add',payload)
        //     },1000)
        // },
        add(context){
            context.commit("add")
        },
        del(context,n){
            context.commit("del",n)
        }
        // 在action中可以多次触发mutation
        // change_num({commit},payload){
        //     setTimeout(()=>{
        //         commit('change_num','hello')
        //     },3000)
        // }
    },
   
    
    
}