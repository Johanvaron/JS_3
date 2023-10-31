const  express = require('express')

//definir ruteador de bootcamp

const router = express.Router()

//utilizar el ruteador
//para crear las rutas 


//1.Seleccionar todos los usuarios
app.get(('/users'),
        (req , res) => {
            return res.json({
                success: true,
                msg: "Seleccionar todas los usuarios"
            })
        })
//2.Seleccionar usuarios por id
app.get('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando usuario cuyo id es: ${userId}` 
                }
            )
        })  
//3.crear un usuario
app.post('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `seleccionando usuario cuyo id es: ${userId}` 
                }
            )
        })   
//4.actualizar usuario por id
app.put('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `actualizando usuario cuyo id es: ${userId}` 
                }
            )
        }) 
//5.Borrar usuarios por id
app.delete('/users/:id' ,
        (req , res) => {
            userId = req.params.id
            return res.json(
                {
                    success : true,
                    msg: `eliminando usuario cuyo id es: ${userId}` 
                }
            )
        })
        
module.exports = router         