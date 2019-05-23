<template>
    <div>
        <h2>商品列表</h2>
        <ul>
            <li :key="item.name" v-for="item of list">
                <!-- {{item.name}} -->
                 <nuxt-link :to='"/detail/" +item.id'>{{item.name}}</nuxt-link> 
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data: ()=>{
        return {
            list:[
                {id:"001",name: 'iphone100', price: 2000},
                {id:"002",name: '华为100', price: 9000},
                {id:"003",name: '小米100', price: 1000},
            ]
        }
    }
}
</script>
