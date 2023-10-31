const  express = require('express')
const Bootcamp=
      require('../models/bootcampsModel')

//definir ruteador de bootcamp

const router = express.Router()

//utilizar el ruteador
//para crear las rutas 

//uri de bootcamps

//1. seleccionar todos los bootcamps
router.get(('/'),
         async (req , res) => {

            //traer los bootcamps en bd
            const bootcamps = 
                await Bootcamp.find()

            return res.json({
                success: true,
                data: req.body
            })
        })


//2. seleccionar el bootcamp cuyo id se pase por parametro
router.get('/:id' ,
         async(req , res) => {
             const bootcampId = req.params.id
            //consultar bootcamp por id
            const bootcamp = await Bootcamp.findById(bootcampId)
            return res.json(
                {
                    success : true,
                    data:bootcamp 
                }
            )
        })  
        
//3. crear bootcamp 
router.post('/' ,
     async   (req , res) => {
            //guardar el bootcamp que viene en el body
            const newBootcamp = await Bootcamp.create(req.body)
            return res.json(
                {
                    success : true,
                    data: newBootcamp 
                }
            )
        })     
        
//4. actualzar bootcamp por id
router.put('/:id' ,
        async (req , res) => {
            bootcampId = req.params.id
            updBootcamp = await Bootcamp.findByIdAndUpdate(
                bootcampId,
                req.body,
                {
                    new: true,
                }
            )
            return res.json(
                {
                    success : true,
                    data: updBootcamp 
                }
            )
        })      
        
//5. borrar bootcamp por id
router.delete('/:id' ,
        async(req , res) => {
            bootcampId = req.params.id
            await Bootcamp.findByIdAndDelete(bootcampId)
            return res.json(
                {
                    success : true,
                    data: [] 
                }
            )
        })  
        
module.exports = router        