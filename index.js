const express = require("express");

const app = express()

app.get('/',(req,res)=>{
    return res.json({messsage:"hello from api"})
})

const port = process.env.PORT || 3000;

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
  })