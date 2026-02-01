const express=require("express");
const app = express();

const mongoose = require('mongoose');
//  // experes app setup
const path=require("path");
const chat=require("./models/chats.js");
const Chat = require("./models/chats.js");

const methodOverride=require("method-override");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use (express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// // mongoose connection
main().then(()=>{
  console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
// //  insert the data in DB
// let chat1= new chat({
//   from:"neha",
//   to:"priya",
//   msg:"send  me your exam sheets",
//   created_at:new Date()
// })
// // save the data in Db
// chat1.save().then((res)=>{// z= utc  in date formate
//   console.log(res);
// });


// // index route '
app.get("/chats",async (req,res)=>{
  let chats=await Chat.find();// is se pura data mil jayega
  // console.log(chats);
// res.send("working");
res.render("index.ejs",{chats});
})
// // New route
app.get("/chats/new",(req,res)=>{
  res.render("new.ejs");
})

// create route
app.post("/chats",(req,res)=>{
  let{from,to,msg}=req.body;
  let newChat=new Chat({
    from:from,
    to:to,
    msg:msg,
    created_at:new Date(),
  });
  // console.log(newChat);
  newChat.save()
  .then((res,req)=>{
    console.log("chat was saved");
  }).catch((err)=>{
    console.log(err);
  })
  res.redirect("/chats");
});

// // edit route
app.get("/chats/:id/edit",async(req,res)=>{
  let {id}=req.params;
  let chat=await Chat.findById(id);
  res.render("edit.ejs",{chat});
})
// // update route
app.put("/chats/:id",async(req,res)=>{
  let {id}=req.params;
  let {msg:newMsg}=req.body;
  console.log(newMsg);
let updatedChat=await Chat.findByIdAndUpdate(id,
  {msg:newMsg},
{runValidators:true,new:true}
);
console.log(updatedChat);
res.redirect("/chats");
});


// // destroy ya delete route
app.delete("/chats/:id",async(req,res)=>{
  let {id}=req.params;
  let deletedChat= await Chat.findByIdAndDelete(id);
  console.log(deletedChat);
  res.redirect("/chats");
})

app.get("/",(req,res)=>{//route
    res.send("root is working");
})

app.listen(8080,()=>{// server listening
    console.log("server is listening on port 8080");
});

