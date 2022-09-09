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
// app.post('/test_post',(request,response)=>{
// 	console.log('有人请求了post函数,携带请求体',request.body)
// 	response.send('hello,post!!!')
// })
app.post('/test_post2',(request,response)=>{
	console.log('有人请求了')
	const person ={name:'zhangsan',age:12}
	response.send(person)
})
// 请求超时错误
// app.get('/get_person',(request,response)=>{
// 	const person ={name:'zhangsan',age:'12'}
// 	setTimeout(()=>{response.send(JSON.stringify(person))},3000)
	
// })
app.get('/get_person',(request,response)=>{
	const person ={name:'zhangsan',age:'12'}
	response.send(JSON.stringify(person))
	
})
// 使用jsonp的方式解决跨域问题
app.get('/get_jsonp',(request,response)=>{
	const {callback} = request.query
	const person =[{name:'zhangsan',age:'12'},{name:'lisi',age:'5'}]
	response.send(`${callback}(${JSON.stringify(person)})`)
	
})
app.get('/get_person2',(request,response)=>{
	const person ={name:'zhangsan',age:'12'}
	setTimeout(()=>{response.send(JSON.stringify(person))},3000)
	
})
app.get('/get_jQuery',(request,response)=>{
	console.log('有人请求,query参数是',request.query)
	const person ={car:'奥迪',price:'12w'}
	response.send(JSON.stringify(person))
	
})
app.post('/get_jQuery_post',(request,response)=>{
	console.log('有人请求,请求体参数是',request.body)
	const person ={car:'奥迪',price:'12w'}
	response.send(JSON.stringify(person))
	
})
app.listen(8080,(err)=>{
	if(!err){
		console.log('服务器开启成功');
		console.log('http://127.0.0.1:8080/1_小试牛刀.html')
		console.log('http://127.0.0.1:8080/3_ajax_get.html')
		console.log('http://127.0.0.1:8080/4_ajax.post.html')
		console.log('http://127.0.0.1:8080/5_ajax.html')
		console.log('http://127.0.0.1:8080/7_ajax请求的异常.html')
		console.log('http://127.0.0.1:8080/10_jquery.html')
	}
})