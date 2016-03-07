var fs = require('fs')  
var path = require('path')  
    
module.exports = function(dirname, ext, callback) {

    fs.readdir(dirname, function (err, list) {
        var data = []
        
        if (err) return callback(err)
        
        list.forEach(function (file) {  

                if (path.extname(file) === '.' + ext) {
                  data.push(file)
                }
        })
        callback(null, data)
    })
}

/* Official solution: 
 _/home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/learnyounode/exer  
  cises/make_it_modular/solution/solution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
    
*/