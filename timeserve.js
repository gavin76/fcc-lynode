var net = require('net')


var pad2 = function(num) {
    var str
    
    if (num < 10) {
        str = "0" + num.toString()
    } else {
        str = num.toString()
    }
    return str
}

var padDate = function(date) {
    var dateStr = ""
    
    dateStr = dateStr + date.getFullYear() + "-" + pad2(date.getMonth()+1) + "-" + pad2(date.getDate()) + " "
    dateStr = dateStr + pad2(date.getHours()) + ":" + pad2(date.getMinutes()) + "\n"
    
    return dateStr
}

var server = net.createServer(function(socket) {
    // Write data
    
    var date = new Date()
    
    socket.end(padDate(date))
})

server.listen(process.argv[2])

/*
// Official solution

   
     var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
     
*/