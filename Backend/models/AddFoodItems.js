const mongoose = require('mongoose');

const AddFoodItem = new mongoose.Schema({
    FoodName: {
        type: String,
        
    },
    FoodDesc: {
        type: String,
     
    },
    FoodPrice: {
        type: Number,
        
    },
    FoodCategory: {
        type: String,
      
    },
    FoodIngredients: {
        type: String,
      
    },
    FoodImage: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("FoodItems", AddFoodItem);
