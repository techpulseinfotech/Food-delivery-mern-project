const mongoose = require('mongoose');
require('dotenv').config();

const conn = async ()=>{
    try {
        await mongoose.connect(`${process.env.dbUrl}`);
            console.log("Connect to Database");
    } catch (error) {
        console.log(` Server error ${error}`);
        
    }
}

conn();


