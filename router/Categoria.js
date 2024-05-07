import routerx from "express-promise-router"
import categoriaController from "../controllers/CategoriaController"
import auth from "../middlewares/auth"
import multiparty from 'connect-multiparty'


var path = multiparty({uploadDir: './uploads/categoria'})

const router = new routerx();

//localhost:3000/api/users/register

router.post("/register", [auth.verifyAdmin,path], categoriaController.register);
router.put("/update", [auth.verifyAdmin,path], categoriaController.update);
router.get("/list",auth.verifyAdmin, categoriaController.list);
router.delete("/delete", auth.verifyAdmin, categoriaController.remove);
router.get("/uploads/categoria/:img", categoriaController.get_imagen);

export default router;
