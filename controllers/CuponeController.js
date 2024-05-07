import models from "../models"


export default {

    register: async(req,res) => {
        try {
          let data = req.body;
          let exists_cupone =  await models.Cupone.findOne({code: data.code});

          if (exists_cupone) {
            res.status(200).json({
                code: 403,
                message_text: "El codigo del cupón ya existe"
            });
            return;
          }
          let cupone = await models.Cupone.create(data);

          res.status(200).json({
            code:200,
            message: "El cupón se registró correctamente",
            cupone:cupone
          })
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }

    },
    update: async(req,res) => {
        try {
            let data = req.body;
            let exists_cupone =  await models.Cupone.findOne({code: data.code,_id: {$ne: data._id}});
  
            if (exists_cupone) {
              res.status(200).json({
                  code: 403,
                  message_text: "El codigo del cupón ya existe"
              });
              return;
            }
            let cupone = await models.Cupone.findByIdAndUpdate({_id: data._id}, data);
            let cuponeT = await models.Cupone.findById({_id: data._id});
            res.status(200).json({
              code:200,
              message: "El cupón se registró correctamente",
              cupone: cuponeT
            })  
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }

    },
    delete: async(req,res) => {

        let _id = req.query._id;
        await models.Cupone.findByIdAndDelete({_id: _id});
        res.status(200).json({
          code:200,
          message: "El cupón se eliminó correctamente",
        })  

        try {
            
        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }
    },
    list: async(req,res) => {
        try {
            var search = req.query.search;
            let cupones = await models.Cupone.find({
                $or:[
                    {"code": new RegExp(search, "i")},
                ]
            }).sort({'createdAt': -1});
    

            res.status(200).json({
                code:200,
                cupones :cupones
            });

        } catch (error) {
            res.status(500).send({
                message: 'OCURRIO UN PROBLEMA'
            });
            console.log("error", error);
        }

    },

}




