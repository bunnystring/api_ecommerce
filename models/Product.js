import mongoose, {Schema} from "mongoose";


const ProductSchema = new Schema({
    title:{type:String, require:true, maxlength:250},
    slug:{type: String, maxlenght : 1000, required: true},
    sku:{type: String, required: true},
    categorie:{type: Schema.ObjectId,ref: 'categoria', required: true},
    price_cop:{type: Number, required: true},
    price_usd:{type: Number, required: true},
    portada:{type: String, required: true},
    galerias:[{type: Object, required: false}],
    state:{type: Number, default:1}, //1 es en prueba o desarrollo, 2 va ser publico y 3 va ser anulado
    stock:{type: Number, default:0},
    descripcion:{type: String, required: true},
    resumen:{type: String, required: true},
    tags:{type: String, required: true},
    type_inventario:{type: Number, default:1}
},{
    timestamps:true,
});

const Product = mongoose.model('product',ProductSchema);
export default Product;