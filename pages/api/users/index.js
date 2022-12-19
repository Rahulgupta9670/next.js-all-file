import nextConnect from "next-connect";
import UserModels from "../../../models/UserModels";
const dataBase = require("../../../utils/connectDb");
const jwt = require('jsonwebtoken');


dataBase();
const handler = nextConnect()

// app.use('/login', (req, res) => {

//   res.send({

//     token: 'test123'

//   });
// }

  //  response to GET
  .get(async (req, res) => {
    try {
      const users = await UserModels.find({});
      res.send(users);
    } catch (error) {
      console.log(error);
    }
    res.send("rahul; gupta");
  })
  //   try {
  //     let users
  //     if(req.query.id){
  //        users = await UserModels.find({_id:req.query.id});
  //     }else{
  //        users = await UserModels.find({});
  //     }

  //     res.send(users);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   res.send("rahul; gupta");
  // })

  //  response to POST
  .post(async (req, res) => {
    const { name, email, mobile } = req.body;
    const newIUser = new UserModels({ name, email, mobile });
    // const data = 
    console.log("newuserrrrr............",newIUser)
    const newIUsers = {
      name,
      email, 
      mobile
    }
   
    // const token = jwt.sign(data, "rahul", { "expiresIn": 600 });
    try {
      await newIUser.save();
      const token = jwt.sign(newIUsers, "rahul", { "expiresIn": 600 });
     
      res.json({ token })
      console.log("tokenrahul12............",token)

    } catch (error) {
      console.log(error);
    }
    res.send(newIUser, );
    // res.json({ token })
  });

//  export using handler.export()
export default handler;
