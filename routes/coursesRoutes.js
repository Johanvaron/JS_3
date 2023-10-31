const  express = require('express')
const Course=
      require('../models/coursesModel')
//definir ruteador de bootcamp

const router = express.Router()

//utilizar el ruteador
//para crear las rutas 

//uri para cuorses
//1. seleccionar todos los bootcamps
router.get(('/'),
         async (req , res) => {

            //traer los bootcamps en bd
            const courses = 
                await Course.find()

            return res.json({
                success: true,
                data: req.body
            })
        })


//2. seleccionar el curso cuyo id se pase por parametro
router.get('/:id' ,
         async(req , res) => {
             const courseId = req.params.id
            //consultar bootcamp por id
            const course = await Course.findById(courseId)
            return res.json(
                {
                    success : true,
                    data:course 
                }
            )
        })  
        
//3. crear bootcamp 
router.post('/' ,
     async   (req , res) => {
            //guardar el curso que viene en el body
            const newCourse = await Course.create(req.body)
            return res.json(
                {
                    success : true,
                    data: newCourse 
                }
            )
        })     
        
//4. actualzar bootcamp por id
router.put('/:id' ,
        async (req , res) => {
            courseId = req.params.id
            updCourse = await Course.findByIdAndUpdate(
                courseId,
                req.body,
                {
                    new: true,
                }
            )
            return res.json(
                {
                    success : true,
                    data: updCourse 
                }
            )
        })      
        
//5. borrar bootcamp por id
router.delete('/:id' ,
        async(req , res) => {
            courseId = req.params.id
            await Course.findByIdAndDelete(courseId)
            return res.json(
                {
                    success : true,
                    data: [] 
                }
            )
        })  
        
module.exports = router  