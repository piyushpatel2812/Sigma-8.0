// // intialize the databse
const mongoose = require("mongoose");
const Chat = require("./models/chats.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  console.log("connection successful");

  await Chat.insertMany([
    {
      from: "piyush",
      to: "udaay",
      msg: "hello bro",
      created_at: new Date()
    },
    {
      from: "deep",
      to: "tej",
      msg: "good morning",
      created_at: new Date()
    },
    {
      from: "piyu",
      to: "rupu",
      msg: "how r u",
      created_at: new Date()
    },
    {
      from: "neha",
      to: "priya",
      msg: "send me your exam sheets",
      created_at: new Date()
    }
  ]);

  console.log("Seed data inserted");
  mongoose.connection.close();
}

main().catch(err => console.log(err)); 