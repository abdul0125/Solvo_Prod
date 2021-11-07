import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name: { type: String, required:  true },
    qualifications: { type: [String], required:  true },
    Country: {type: String},
    learning_skills: [String],
    communities:{type:[String], default:[]},
    email: { type: String, required:  true },
    password: { type: String, required:  true },
    thrust_area: { type: Array, default:[] },
    is_mentor: {type: Boolean, default:false},
    experience_year: {
        type: Number, default: 0,
    },
    experience: [{
        job_title: {type: String},
        company: {type:String},
        start: {type:String},
        end: {type:String}
     }],
    interest: { type: Array ,default:[]},
    question_answered: {
        type: Number, default: 0,
    },
    taught_hours: {
        type: Number, default: 0,
    },
    known_languages: { type: Array,default:[] },
    rating: {
        type: Number, default: 0,
    },
    rates:{
        type:String,default:""
    },
    mobile:{
        type:String, default:""
    },
        contacts:{
            type: Array,
            default:[
                {
                name:"Parvez",
                email:"parvez@gmail.com",
                messages:[]},
                {
                    name:"Naved",
                    email:"saadkhan@gmail.com",
                    messages:[]}
                ],
            
            contact:{
                name:{type: String,required:  true},
                email:{type: String,required:  true},
                messages:{
                    type:Array,
                    message:{type:Array},
                    default:[],
                    
                }
            }
                
            },
            Notifications:{
                type:Array,
                default:[],
            }
});

export default mongoose.model('User', UserSchema);
// console.log(SignUpSchema);