import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String},
        document: {type: Number},
        company: {type: String},
        salary: {type: Number},
        adress: {type: String}
    }
);

const users = mongoose.model("users", userSchema)

export default users;