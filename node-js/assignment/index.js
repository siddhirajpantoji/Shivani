const express = require('express')
let app = express()

app.get("/:name",(req,res,next)=>{

})
app.post("/",(req,res,next)=>{

})

app.listen(3000,(err)=>{
    if(err){
        console.log("Unable to listen on port 3000")
    }
    else{
        console.log("Program started ")
    }
})