const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: { 
    type: String,
    required: true,
   
  },
  email: { 
    type: String,
    required: true,
 
  },
  password: { 
    type: String,
    required: true,
  },
  address: { 
    type: String,
    required: true,
  },
  avatar: { 
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
  },
  role: { 
    type: String,
    default: "user",
    enum: ["user","admin"]  
  },
 
  cart: [
    {
      type: mongoose.Types.ObjectId,
     
    }
  ],
  orders: [
    {
      type: mongoose.Types.ObjectId,
    
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("user", user);
