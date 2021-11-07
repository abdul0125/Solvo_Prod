import mongoose from "mongoose";
const Schema = mongoose.Schema;

const hintSchema = new Schema(
  {
    content: String,
    creater: String,
    profile_pic: String,
    likes: { type: [String], default: [] },
    dislikes: { type: [String], default: [] },
  },
  {
    timestamps: true,
  }
);

const hintModel = mongoose.model("Hint", hintSchema);
export default hintModel;
