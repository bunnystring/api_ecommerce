import express from 'express'
import cors from 'cors'
import path from 'path'
import mongoose from 'mongoose'
import router from './router'


//Conexion a la base de tados

mongoose.Promise = global.Promise;
const dbUrl = "mongodb://localhost:27017/calym_db";
mongoose.connect(
    dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(mongoose => console.log("conectado a la bd en el puerto 27017"))
.catch(err => console.log("error", err))


const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/', router)

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log("EL SERVIDOR S EJEECUTO EN EL PUERTO 3000");
})