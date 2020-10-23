console.log("我用CORS跨域访问")
const request = new XMLHttpRequest()
request.open("GET","http://localhost:8888/friend.json")
request.onreadystatechange=()=>{
    if(request.readyState===4&&request.status>=200&&request.status<300){
        console.log(request.response)
    }
}
request.send()