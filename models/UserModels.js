const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
    name:{
        type:String,
       
    },
    email:{
        type:String,
       
    },
     mobile:{
        type:Number,
       
    }
    
})
// export default mongoose.models.User || mongoose.model("user",userSchema);
export default mongoose.models.User || mongoose.model("User", UserSchema);