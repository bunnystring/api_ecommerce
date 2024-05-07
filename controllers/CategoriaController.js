import models from '../models';
import resources from '../resources';
import fs from 'fs';
import path from 'path';


export default {
    register: async(req, res)=> {
        try {
            if (req.files) {
                var img_path = req.files.portada.path;
                var name = img_path.split('\\');
                var portada_name = name[2];
              //console.log("portada_name", portada_name);
                req.body.imagen = portada_name;
            }
            const categoria = await models.Categoria.create(req.body);
            res.status(201).json(categoria);
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMAa'
            });
            console.log("error", error);
        }
    },
    update: async(req, res)=> {
        try {
            if (req.files && req.files.portada) {
                var img_path = req.files.portada.path;
                var name = img_path.split('\\');
                var portada_name = name[2];
             // console.log("portada_name", portada_name);
                req.body.imagen = portada_name;
                
            }
            await models.Categoria.findByIdAndUpdate({_id: req.body._id}, req.body);
           
            
            let CategoriaT = await models.Categoria.findOne({_id: req.body._id});
            res.status(200).json({
                message: "LA CATEGORIA SE HA MODIFICADO CORRECTAMENTE",
                categoria: resources.Categoria.categoria_list(CategoriaT),
            })
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }
    },
    list: async(req, res)=> {
        try {
            var search = req.query.search;
            let Categorias = await models.Categoria.find({
                $or:[
                    {"title": new RegExp(search, "i")},
                ]
            }).sort({'createdAt': -1});
            Categorias = Categorias.map((categoria) => {
                return resources.Categoria.categoria_list(categoria);
            })
            res.status(200).json({
                categories :Categorias
            });
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }
    },
    get_imagen: async(req,res)=>{
        try {
            var img = req.params['img'];


            fs.stat('./uploads/categoria/'+img, function(err){
                if(!err){
                    let path_img = './uploads/categoria/'+img;
                    res.status(200).sendFile(path.resolve(path_img));
                }else{
                    let path_img = './uploads/default.jpg';
                    res.status(200).sendFile(path.resolve(path_img));
                }
            })
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }
    },
    remove: async(req,res,)=>{
        try {
            await models.Categoria.findByIdAndDelete({_id: req.query._id});
            res.status(202).json({
                message: "LA CATEGORIA SE ELIMINO CORRECTAMENTE"
            });
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }
    }
}