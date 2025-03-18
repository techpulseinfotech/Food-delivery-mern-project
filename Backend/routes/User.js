const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();


router.post("/signUp", async (req, res) => {
  try {
    const { username, password, email, address } = req.body;

    if (username.length < 5) {
      return res.status(200).json({ Message: "Username length should be greater than 4" });
    }

    const existingUsername = await User.findOne({ username: username });
    if (existingUsername) {
      return res.status(200).json({ Message: "Username already exists!" });
    }

    // const existingEmail = await User.findOne({ email: email });
    // if (existingEmail) {
    //   return res.status(200).json({ Message: "Email already exists!" });
    // }

    if (password.length < 6) {
      return res
        .status(200)
        .json({ Message: "Password should be greater than 5 characters" });
    }

 
const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
      address: address,
    });

    await newUser.save();
    return res.status(200).json({ Message: "Sign-up successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server error ");
  }
});


router.post("/logIn", async (req, res) => {
  try {
    const { username, password} = req.body;

   

    const existingUser = await User.findOne({ username: username });
    if (!existingUser) {
      return res.status(200).json({ Message: "Invailid Username or Password" });
    }


    const isMatch = await bcrypt.compare(password,existingUser.password);

console.log(isMatch);
    if(!isMatch)
    {
      return res.status(200).json({ Message: "Invailid Username or Password" });
    }

    const payload={
      id:existingUser._id,
      role:existingUser.role
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET_KEY,{
      expiresIn:"30d"
    });
 

   
    return res.status(200).json({
      id:existingUser._id,
      role:existingUser.role,
      token:token
    });

  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server error ");
  }
});

module.exports = router;



