import mongoose from "mongoose";

const SlotSchema = mongoose.Schema({
    userid: {type:String},
    days: {
        type: Array, default: [],
    },

});

export default mongoose.model('Slots',SlotSchema);