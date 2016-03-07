// http client

var http = require('http')
const bl = require('bl')

var data1, data2, data3
var cbcount = 0

http.get(process.argv[2], function(resp) {
    resp.on("error", console.error)
    
    resp.pipe(bl(function(err, data) {
        if (err) return console.error("Error in pipe1: " + err)
        
        data1 = data.toString()
        
        callback()
    }))
})

http.get(process.argv[3], function(resp) {
    resp.on("error", console.error)
    
    resp.pipe(bl(function(err, data) {
        if (err) return console.error("Error in pipe2: " + err)
        
        data2 = data.toString()
        
        callback()
    }))
})

http.get(process.argv[4], function(resp) {
    resp.on("error", console.error)
    
    resp.pipe(bl(function(err, data) {
        if (err) return console.error("Error in pipe3: " + err)
        
        data3 = data.toString()
        
        callback()
    }))
})

function callback() {
    cbcount++
    if (cbcount === 3) {
        console.log(data1)
        console.log(data2)
        console.log(data3)
    }
}

/*
// Official solution:
   
     var http = require('http')  
     var bl = require('bl')  
     var results = []  
     var count = 0  
       
     function printResults () {  
       for (var i = 0; i < 3; i++)  
         console.log(results[i])  
     }  
       
     function httpGet (index) {  
       http.get(process.argv[2 + index], function (response) {  
         response.pipe(bl(function (err, data) {  
           if (err)  
             return console.error(err)  
       
           results[index] = data.toString()  
           count++  
       
           if (count == 3)  
             printResults()  
         }))  
       })  
     }  
       
     for (var i = 0; i < 3; i++)  
       httpGet(i)  
*/