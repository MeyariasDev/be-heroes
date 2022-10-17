import { Schema } from 'mongoose';

export const heroeSchema = new Schema({
    nombre: { 
        type: String,
         required: [true, 'El campo "nombre" es requerido'],
     },
    nombreHeroe: { 
        type: String,
         required: [true, 'El campo "nombreHeroe" es requerido'],
     },
    nombreActor: { 
        type: String,
         required: [true, 'El campo "nombreActor" es requerido'],
     },
    trabajo: { 
        type: String,
         required: [true, 'El campo "trabajo" es requerido'],
     },

    bio: {
        fechaPublicacion: Date,
        lugarNacimiento: { 
        type: String,
         required: [true,
         'El campo "lugarNacimiento" es requerido']
     },
        primeraAparicion: { 
        type: String,
         required: [true,'El campo "primeraAparicion" es requerido']
     },
        editor: { 
        type: String,
         required: [true,'El campo "editor" es requerido']
     },
        bando: { 
        type: String,
         required: [true,'El campo "bando" es requerido']
     },
    },
    apariencia: {
        sexo: { 
        type: String,
         required: [true,'El campo "sexo" es requerido']
     },
        raza: { 
        type: String,
         required: [true,'El campo "raza" es requerido']
     },
        altura: { 
        type: String,
         required: [true,'El campo "altura" es requerido']
     },
        colorOjo: { 
        type: String,
         required: [true,'El campo "colorOjo" es requerido']
     },
        colorCabello: { 
        type: String,
         required: [true,'El campo "colorCabello" es requerido']
     },
    },
    colaboradores: {type:[String] },
    enemigo:  {type:[String] },
    superPoder:  {type:[String] },
    img: [String]
})
