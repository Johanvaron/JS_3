const mongoose = require('mongoose')

const CoursesSchema = mongoose.Schema({
    title: {
        type: String,
        required:  [ true, 
            "el titulo es requerido"],
         maxlength: [ 30, "titulo de  no mayor a 30 caracteres"],
         minlength: [10, "titulo minimo de 10 caracteres"],
    },
    description: {
        type: String,
        required: [true,
            "la descripcion es requerida"],
        minlength: [ 10, "descipcion de courses minimo de 10 caracteres"],
    },
    weeks: {
        type: Number,
        required: [true,
            "la week es requerida"],
        maxlength: [ 100, "direccion de bootcamp no mayor a 100 caracteres"],
    },
    enroll_cost: {
        type: Number,
        required: [true,
            "la enroll_cost es requerida"]
    },
    minimum_skill: {
        type:[ String ],
        require: [ true ,"No has agregado los temas"],
        enum:["Beginner","Intermediate","Advanced","Expert"]
    },
    averageRating: Number,
    createAt: Date
})
module. exports = mongoose.model('Course' , CoursesSchema)