import mongoose,{Schema} from 'mongoose';

const UserSchema = new Schema({
    rol: {type: String,maxlenght:30, requered:true},
    name: {type: String,maxlenght:255, requered:true},
    surname: {type: String,maxlenght:255, requered:false},
    email: {type: String,maxlenght:255, requered:true,unique:true},
    password: {type: String,maxlenght:255, requered:true},
    avatar: {type: String,maxlenght:255, requered:false},
    state: {type: Number,default:1}, //1:Active - 2:Disable
    phone: {type: String,maxlenght:20, requered:false},
    birthday: {type: String,maxlenght:30, requered:true},
},{
    timestamps: true
});

const User = mongoose.model("user", UserSchema);

export default User;
