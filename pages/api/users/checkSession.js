
// const server = express();
// server.use(express.json());
import nextConnect from "next-connect";
const dataBase = require("../../../utils/connectDb");
const jwt = require('jsonwebtoken');
import UserModels from "../../../models/UserModels";
var sessionStorage = require("sessionstorage")

const checkSession  = nextConnect()
.post((req,res) =>{
  let token=req.body.token;
  console.log("token received", token)
  if(token!=null && token!=''){
    const item = jwt.verify(token,"rahul");
    
    console.log("token,,,,,,,,,,,,,,,,,11", token , item,item.user)
    // res.json(data)
    // if the item doesn't exist, return null
    if (!item) {
      res.json({error:true,errorMessage:'No data found'})
    }
    return item.user;
    
  }
  else{
    console.log("in")
    res.json({error:true,errorMessage:'Invalid Token'})
  };
  
  
   
});
export default checkSession;

    

    //  const itemStr = sessionstorage.getItem("item_key")
     // if the item doesn't exist, return null
  //    if (!itemStr) {
  //      return null
  //    }
  //    const items= JSON.parse(itemStr)
  //    const nows = new Date()
  //    // compare the expiry time of the item with the current time
  //    if (nows.getTime() > items.expiry) {
  //      // If the item is expired, delete the item from storage
  //      // and return null
  //     const datas= sessionstorage.removeItem("item_key")
  //      console.log("timeeeeeeeeeeeeeeee",datas )
  //      return null
  //    }
  //    res.status(200).json( {itemStr} )
     
  //    return item.value
     
  // }

  // export default handler

// function setWithExpiry(key, value, ttl) {
//   const now = new Date()

//   // item is an object which contains the original value
//   // as well as the time when it's supposed to expire
//   const item = {
//     value: value,
//     expiry: now.getTime() + ttl,
//   }
//   localStorage.setItem(key, JSON.stringify(item))
// }

// function checkSession(key) {
//   const itemStr = localStorage.getItem(key)
//   // if the item doesn't exist, return null
//   if (!itemStr) {
//     return null
//   }
//   const item = JSON.parse(itemStr)
//   const now = new Date()
//   // compare the expiry time of the item with the current time
//   if (now.getTime() > item.expiry) {
//     // If the item is expired, delete the item from storage
//     // and return null
//     localStorage.removeItem(key)
//     return null
//   }
//   else{
//     return item.value
//   }
  
// }
    //  res.status(200).json( {data} )

  // function getWithExpiry(key) {
  //   const itemStr = localStorage.getItem(key)
  //   // if the item doesn't exist, return null
  //   if (!itemStr) {
  //     return null
  //   }
  //   const item = JSON.parse(itemStr)
  //   const now = new Date()
  //   // compare the expiry time of the item with the current time
  //   if (now.getTime() > item.expiry) {
  //     // If the item is expired, delete the item from storage
  //     // and return null
  //     localStorage.removeItem(key)
  //     return null
  //   }
  //   return item.value
  // }

   
//   }


