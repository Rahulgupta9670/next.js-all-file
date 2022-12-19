import nextConnect from "next-connect";
import UserModels from "../../../models/UserModels";
const dataBase = require("../../../utils/connectDb");

dataBase();
const handler = nextConnect()
    //  response to GET
    .post(async (req, res) => {
        try {
            const users = await UserModels.findByIdAndDelete({ _id: req.query.id })
            res.send("user delete successful");
        } catch (error) {
            console.log(error);
        }

    })

    //  response to POST
    .put(async (req, res) => {

        try {
            const user = await UserModels.findOne({ _id: req.query.id })
            user.name = req.body.name
            user.email = req.body.email
            user.mobile = req.body.mobile
            await user.save()
            res.send("User updated profile")

        } catch (error) {
            console.log(error);
        }
        res.send("new user created");
    });

//  export using handler.export()
export default handler;
