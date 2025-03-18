const express = require('express');
const app = express();
const dotenv = require("dotenv");
require('./conn/conn');
const cors = require('cors');

app.use('/uploads',express.static('uploads'));

dotenv.config();

app.use(express.json());
app.use(cors());

const User = require("./routes/User");
const FoodItem = require("./routes/AddFoodItems")
app.use(User);
app.use(FoodItem);


app.get('/',async(req,res)=>{
    try {
        res.send("welcome");

    } catch (error) {
        res.send(error);
        
        
    }
    
});

const PORT = process.env.PORT ; 
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});