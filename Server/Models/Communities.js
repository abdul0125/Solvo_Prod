import mongoose from "mongoose";
const Schema = mongoose.Schema;

const communitySchema = new Schema(
  {
    name: String,
    members:{type:[String], default:[]},
  },
  {
    timestamps: true,
  }
);

const communityModel = mongoose.model("Communities", communitySchema);
export default communityModel;
