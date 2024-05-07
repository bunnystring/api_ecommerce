import routerx from "express-promise-router"
import User from "./User"
import Categoria from "./Categoria"
import Product from "./Product";
import Slider from "./Slider";
import Cupone from "./Cupone";

const router =  routerx();
router.use('/users', User);
router.use('/categorias', Categoria);
router.use('/product', Product);
router.use('/sliders', Slider)
router.use('/cupones', Cupone)

export default router;