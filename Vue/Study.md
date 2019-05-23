## {} []
- 操作数组的方法
## 数组的变异(能改变原数组) 
- (pop push unshift shift splice reverse sort ) indexOf lastIndexOf concat slice
## forEach filter(过滤) map(映射)  some every  reduce (find includes es6)
## node版本

## 框架和库
-框架vue  拥有完整的解决方案  我们写好人家调用我
-库 jquery underscore zepto animate.css
我们调用他

## 渐进式（渐进增强） 
-通过组合完成一个完整的框架
-vue全家桶 vuejs+ vue-router+ vuex+ axios

## mvc (backbone) 单向
-modal 数据
-view 视图
-controller 控制器 
## mvvm 双向
-modal 数据
-view 视图
-vm   视图模型

![](https://user-gold-cdn.xitu.io/2019/5/15/16ab9dc8b61d0be8?w=635&h=462&f=png&s=234346)
![](https://user-gold-cdn.xitu.io/2019/5/15/16ab9de4a3d97a91?w=766&h=422&f=png&s=92773)

## Object.defineProperty(es5)  定义属性  没有替代方案
- 不支持IE8以下版本   <= IE8
## 安装vue
- cdn  NPM(node package manager) 
```
npm init 初始化  -y

```
> 初始化会产生一个package.json的文件这个文件用来描述这个项目的依赖



## 2
-vm  => viewModal数据最终都会被vm所代理
-{{取值表达式}}  通过{{}}来进行取值
默认可以不写this： 表达式  赋值运算  计算  三元表达式
{{}}里面尽量少些逻辑(computed)
### 指令: 
- dom元素的行间属性，vue提供了内置指令，必须以v-开头后面都是变量
    - v-model 表单元素  忽律掉value checked selected，将数据绑定到视图上，视图修改后会影响数据的变化
    - v-text 取代 {{}} v-cloak解决闪烁(块)问题  后期都可以不采用 使用v-cloak要加 样式
    - v-once 绑定一次 数据在变化也不会导致视图刷新，写在不想刷新的标签上
    - v-html 将html字符串转化成html
    - v-for 循环(数组，对象，字符串，数字)
        ```
            <div v-for=" value in/of">数组</div>
            <div v-for=" value in/of">数组</div>
        ```
###  事件v-on(@)
- 绑定给dom元素，函数要定义在methods方法中，不能和data里面内容重名
- this指向实例，不能使用箭头函数，事件源对象如果不写（）可以自动传入，否则只能手动传入$event
    ```
        <div @事件名="fn"></div>
    ```

Json.Stringfy() 
将对象或者数组转成JSon字符串
json里面都是json字符串，key，value都要有"",




## VUEX
vue create vuex-imp   //和以前不一样

cd vuex-imp
yarn serve





