// http client

var http = require('http')
const bl = require('bl')

http.get(process.argv[2], function(resp) {
    resp.on("error", console.error)
    
    resp.pipe(bl(function(err, data) {
        if (err) return console.error("Error in pipe: " + err)
        
        console.log(data.length)
        console.log(data.toString())
    }))
})

/*
// Official solution:
    var http = require('http')  
     var bl = require('bl')  
       
     http.get(process.argv[2], function (response) {  
       response.pipe(bl(function (err, data) {  
         if (err)  
           return console.error(err)  
         data = data.toString()  
         console.log(data.length)  
         console.log(data)  
       }))    
     })  
*/