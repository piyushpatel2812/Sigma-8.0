const express=require("express");
const app=express();

// app.use((req,res,next)=>{
//     // let {query}=req.query;
//     // console.log(query);
//     console.log("hii,I am 1st middleware");
//     // res.send("middleware finished")
//     next();
// });

// app.use((req,res,next)=>{
//   console.log("hii,I am 2nd middleware");
//     next();
// });

// app.get("/",(req,res)=>{
// res.send("hi ,I am root.");
// })

// app.get("/random",(req,res)=>{
//     res.send("this is a ramdom page")
// })


// creating utility middleware


app.get("/",(req,res)=>{
res.send("hi ,I am root.");
})

app.get("/random",(req,res)=>{
    res.send("this is a ramdom page")
})
// // logger
app.use((req,res,next)=>{
 req.time=new Date(Date.now()).toString();
 console.log(req.method,req.hostname,req.path,req.time);
    next();
});


app.listen(8080,()=>{
    console.log("server listening to port 8080");
});