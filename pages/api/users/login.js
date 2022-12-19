
// const server = express();
// server.use(express.json());
import nextConnect from "next-connect";
const dataBase = require("../../../utils/connectDb");
const jwt = require('jsonwebtoken');
var sessionStorage = require("sessionstorage")
import UserModels from "../../../models/UserModels";

dataBase();
const login = nextConnect()
.post("api/users/login",(req,res) =>{
  
    const {email,mobile}= req.body;
    UserModels.findOne({email: req.body.email, mobile:req.body.mobile})
    .exec(async (error, user) => {
        console.log("hit----------------------------1",user)
        if(error) return res.status(400).json({ error })
        if(user){
            console.log("hit----------------------------2",user)
            if (req.body.mobile == user.mobile) {
                let data={
                    name: user.name,
                    email: user.email,
                    mobile: user.mobile,
                }
                console.log("data get", data)
                const token = jwt.sign(data, "rahul", { "expiresIn": 600 });
                console.log("hit2",token)
                // sessionStorage.setItem("token",token)
                // const datass= sessionStorage.getItem("token")
                // console.log("user----1222224564",datass)
            //   sessionStorage.setItem("jwt",token)
                // res.cookie("jwt",token,{
                //               expires: new Date(Date.now() + 3600000*24*24),
                //               httpOnly: true
                //               });
                res.json({ token })
                // res.send({ message:"password is  match" })
            }else{
                // res.send({ message:"password is not match" })
                res.json({ message:"password is not match" })
            }
        }
    })
});
// function logout() {
//     // remove user from local storage, publish null to user subscribers and redirect to login page
//     localStorage.removeItem('user');
//     userSubject.next(null);
//     Router.push('/account/login');
// }
export default login;