const { request, response } = require('express')
const express = require('express')
const app = express()
// 利用来解析请求体
app.use(express.urlencoded({extended:true}))
// 利用来解析json
app.use(express.json())
// 暴露静态资源
app.use(express.static(__dirname+'/src'))
// app.get('/test_get',(request,response)=>{
// 	console.log('有人请求了携带的query参数是',request.query)

// 	response.send('hello!!!')
// })
// app.get('/test_get2/:name/:age',(request,response)=>{
// 	console.log('有人请求了携带的params参数是',request.params)

// 	response.send('hello2!!!')
// })
// app.post('/test_post',(request,response)=>{
// 	console.log('有人请求了post函数',request.query)

// 	response.send('hello,post!!!')
// })
// app.post('/test_post/:name/:age',(request,response)=>{
// 	console.log('有人请求了post函数params参数',request.params)
	
// 	response.send('hello,post!!!')
// })
app.post('/test_post',(request,response)=>{
	console.log('有人请求了post函数,携带请求体',request.body)
	response.send('hello,post!!!')
})
app.listen(8080,(err)=>{
	if(!err){
		console.log('服务器开启成功');
		console.log('http://127.0.0.1:8080/1_小试牛刀.html')
		console.log('http://127.0.0.1:8080/3_ajax_get.html')
		console.log('http://127.0.0.1:8080/4_ajax.post.html')
	}
})