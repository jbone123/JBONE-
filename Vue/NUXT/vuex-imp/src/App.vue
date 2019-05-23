<template>
  <div id="app">
    {{ getname }}
    {{$store.getters.getNewName}}
    {{getNewName}}
    {{name}}{{age}}

    <!-- {{this.$store.state.user.userName}} -->
    {{userName}}<br />
    数据变化{{num}}
    <!-- {{u}} -->
    {{getNewUserName}}
    <button @click='change'>修改状态</button>
    <button @click='addd'>+</button>
    <button @click='reduce'>-</button>
    <!-- <button @click='del'>-</button> -->
  </div>
</template>

<script>
// 如果页面中注入了store，每个实例上都会存在一个属性$store
// 如果用的是子模块 你可以增加namespace属性 把它变成一个模块
//这种用的不多
// import {createNamespacedHelpers} from 'vuex'
// let {mapState} = createNamespacedHelpers('user')

import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'


export default {
  name: 'app',
  methods:{
    // ...mapMutations('user',['change_num']), //同步
    ...mapActions('user',['change_num','add','del']),   //异步
    change(){
      // this.$store.state.user.num ='hello word'  // 这个太暴力了一般不用

      // this['change_num']('1')
      // this.$store.commit('user/change_num','1')
      // this.$store.dispatch('user/change_num','3')
      this['change_num']('3')
    },
    addd(){
      this['add']()
      // this.$store.dispatch("add")
    },
    reduce(){
      var n = 10
      this['del'](n)
    }
  },
  computed:{
    getname(){
      return this.$store.state.name
    },
    ...mapState(['name','age']),
    ...mapState('user', ['userName','num']),
    // ...mapState('user', {u:s=>s.userName}),  // 如果要改名字 要通过对象传递参数{{u}}
    // ...mapState(['userName'])  //createNamespacedHelpers

    // 如果增加子模块没有增加namespace  只有状态通过模块.属性
    // 如果 开启了模块 就要通过模块取属性
    ...mapGetters(['getNewName']),
    ...mapGetters('user',['getNewUserName']),
    

  }
  //
  // 在vuex中如果想使用模块 最好是辅助方法 限制模块作用域
  // 如果直接修改状态 可以  commit  mapMutations
  // 如果修改状态异步  可以 dispatch mapActions

}
</script>

<style>

</style>
