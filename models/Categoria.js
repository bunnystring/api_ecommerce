import mongoose,{Schema} from 'mongoose';

const CategoriaSchema = new Schema({
    title:{type: String, maxlenght : 250, required: true},
    imagen:{type: String, maxlenght: 250, required: true},
    state:{type: Number, maxlenght:2, default:1},
},{
    timestamps: true
});

const  Categoria = mongoose.model("categoria", CategoriaSchema);

export default  Categoria;
