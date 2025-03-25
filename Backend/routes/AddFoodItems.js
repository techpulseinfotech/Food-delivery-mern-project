const router = require('express').Router();
const FoodItem = require('../models/AddFoodItems');
const multer = require('multer');



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); 
    },
    filename: (req, file, cb) => {
         
        cb(null, Date.now()+"-"+file.originalname); 
    }
});

const upload = multer({ storage: storage });




router.post('/add-food-item', upload.single('FoodImage'), async (req, res) => {
    try {
        const { FoodName, FoodDesc, FoodPrice, FoodCategory, FoodIngredients } = req.body;
        
      

        const newFoodItem = new FoodItem({
            FoodName,
            FoodDesc,
            FoodPrice,
            FoodCategory,
            FoodIngredients,
            FoodImage:req.file.filename
        });
        
        await newFoodItem.save();
        return res.status(200).json({ Message: "Food Item Added Successfully" });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ Message: "Internal Server Error!" });
    }
});

router.get('/get-food-item', async (req, res) => {
    try {
        
        const data = await FoodItem.find();
        return res.status(200).json({ data });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ Message: "Internal Server Error!" });
    }
});


router.get('/get-food-item-details/:id', async (req, res) => {
    try {
        const {id}= req.params;

console.log(id);


        const data = await FoodItem.findById(id);
        

        console.log(data);
        
        return res.status(200).json({ data:data });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ Message: "Internal Server Error!" });
    }
});












module.exports = router;
