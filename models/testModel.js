import mongoose, { Schema } from "mongoose";


const testSchema = Schema({
    name:String
})

export default mongoose.model("testModel", testSchema);