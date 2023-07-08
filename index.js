//console.log("welcome to node js")

//const os = require('os')
//console.log(os.hostname())
//console.log(os.uptime())

const http = require('http')
const fs = require('fs')

let exp = + new Date()

const server = http.createServer((req,res)=>{
  res.writeHead(200,{"Content-Type":"text/html"})
       fs.writeFile(`set/${exp}.txt`,
           `TIME -${new Date()}`,'utf-8',()=>{})
              fs.readFile(`set/${exp}.txt`,'utf-8',(error,data)=>{
       if(error)
      console.log(error)
     else
     res.end(data)
 })
})
server.listen(8000,()=>console.log("servers listening port 8000"))

// This will create a file name as of date-time displays

//another approach there are several types of how we require date-time to be displayed based on requirement and our desired type

// const http = require('http')
// const fs = require('fs')

// let exp = + new Date()

// const server = http.createServer((req,res)=>{
//   res.writeHead(200,{"Content-Type":"text/html"})
//        fs.writeFile(`set/${exp}.txt`,
//            `TIME -${new Date().toLocaleTimeString()}`,'utf-8',()=>{})
//               fs.readFile(`set/${exp}.txt`,'utf-8',(error,data)=>{
//        if(error)
//       console.log(error)
//      else
//      res.end(data)
//  })
// })
// server.listen(8000,()=>console.log("servers listening port 8000"))