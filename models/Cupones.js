import mongoose,{Schema} from 'mongoose';

const CuponesSchema = new Schema({
    code:{type: String, maxlength:50, required:true},
    type_discount:{type: Number, required:true, default:1}, //por moneda 1 o porcentaje 2
    discount:{type: Number, required:true},
    type_count:{type: Number, required:true, default:1}, //ilimitado 1 o limitado 2
    num_use:{type: Number, required:false},
    type_segment: {type: Number, required:false, default:1},// cupon por product 1 o 2 por categoria
    products: [{
        type:Number
    }],
    categories: [{
        type:Number
    }]
},{
    timestamps:true
})

const Cupone = mongoose.model("cupones", CuponesSchema);
export default Cupone;