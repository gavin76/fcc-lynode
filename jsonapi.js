var http = require('http')
var url = require('url')

var server = http.createServer(function(req, res) {
    
    var jdata = {}
    var uri = url.parse(req.url, true)

    if (uri.pathname === '/api/parsetime') {
        var date = new Date(uri.query.iso)
        jdata = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
    } else if (uri.pathname === '/api/unixtime') {
        var date = new Date(uri.query.iso)
        jdata = {
            "unixtime": date.getTime()
        }
    } else {
        console.log("Error")
        console.log(uri)
    }
    
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(jdata))
})

server.listen(Number(process.argv[2]))

/*
// Official solution

     var http = require('http')  
     var url = require('url')  
       
     function parsetime (time) {  
       return {  
         hour: time.getHours(),  
         minute: time.getMinutes(),  
         second: time.getSeconds()  
       }  
     }  
       
     function unixtime (time) {  
       return { unixtime : time.getTime() }  
     }  
       
     var server = http.createServer(function (req, res) {  
       var parsedUrl = url.parse(req.url, true)  
       var time = new Date(parsedUrl.query.iso)  
       var result  
       
       if (/^\/api\/parsetime/.test(req.url))  
         result = parsetime(time)  
       else if (/^\/api\/unixtime/.test(req.url))  
         result = unixtime(time)  
       
       if (result) {  
         res.writeHead(200, { 'Content-Type': 'application/json' })  
         res.end(JSON.stringify(result))  
       } else {  
         res.writeHead(404)  
         res.end()  
       }  
     })  
     server.listen(Number(process.argv[2]))  
   
*/