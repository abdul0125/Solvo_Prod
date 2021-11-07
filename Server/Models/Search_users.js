import mongoose from "mongoose";


const search_user = mongoose.Schema({
    teacher_name: { type: String, required: true },
    email: { type: String, required: true },
    thrust_area: { type: Array, default: [] },
    is_mentor: { type: Boolean, default: false },
    subjects: { type: Array, default: [] },
    experience: {
        type: Number, default: 0,
    },
    language: { type: Array, default: [] },
    rating: {
        type: Number, default: 0,
    },
    rate: {
        type: String, default: ""
    },
    mobile: {
        type: String, default: ""
    },

});

export default mongoose.model('Search', search_user);
// console.log(SignUpSchema);