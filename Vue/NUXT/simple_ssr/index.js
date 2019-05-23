const  Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer();
const server = require('express')()

server.get('*', (req, res)=>{
    renderer.renderToString(app, (err, html)=>{
        if(err){
            console.log(err);
            return
        }
        console.log(html);
        res.end(`<html><body>${html}</body></html>`)
    })
})
server.listen(8889)
const app = new Vue({
    template: '<div>hello word!! {{name}}</div>',
    data: function(){
        return {
            name: 'jbone'
        }
    }
})

