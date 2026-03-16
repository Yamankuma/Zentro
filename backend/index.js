const express = require('express');
const app = express();
require("dotenv").config();
const mongoose = require('mongoose');
const bodyParse = require("body-parser");
const cors = require("cors");

const HoldingModel = require("./model/HoldingModel")
const PositionModel = require("./model/PositionModel")
const OrderModel = require("./model/OrderModel")
const bcrypt = require("bcryptjs");
const User = require("./model/UserModel");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/auth");


let mongoUrl =process.env.MONGO_URL;

const main = async ()=>{
    await mongoose.connect(mongoUrl);
}

main().then(()=>{
    console.log("DB connecting succefully")
})

app.use(cors())
app.use(bodyParse.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/addHolding', async(req,res)=>{
//        let tempHolding =  [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempHolding.forEach((item)=>{
//     let newHolding = new PositionModel({
//        product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//     })
//     newHolding.save();
// });
// res.send("done...")

// })

app.get('/allHoldings', async(req,res)=>{
     let allHolding = await HoldingModel.find({});
     res.json(allHolding);
})

app.get('/allPosition', async(req,res)=>{
     let allPosition = await PositionModel.find({});
     res.json(allPosition);
})

app.post("/newOrder", async(req, res)=>{
     let newOrder = new OrderModel({
         name:req.body.name,
        qty: req.body.qty,
        price:req.body.price,
        mode: req.body.mode
     });

     newOrder.save();
     
     res.send("Order saved!");
})

app.get("/allOrder", async(req, res)=>{
     let allOrder = await OrderModel.find({});
     res.json(allOrder);
})

app.post("/register", async (req, res) => {

  const { email, username, password } = req.body;

  try {

    const user = await User.create({
      email,
      username,
      password : hashedPassword,
    });

    res.json({
      message: "User registered successfully",
      user,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});

app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
       process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      message: "Login successful",
      token: token,
      user: user
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }

});
app.get("/profile", verifyToken, async (req, res) => {

  const user = await User.findById(req.userId);

  res.json(user);

});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})
