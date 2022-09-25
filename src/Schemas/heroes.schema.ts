import { Schema } from 'mongoose';

export const heroeSchema = new Schema({
  nombre: String,
  nombreHeroe: String,
  nombreActor: String,
  trabajo: String,
  bio: {
    fechaPublicacion: Date,
    lugarNacimiento: String,
    primeraAparicion: String,
    editor: String,
    bando: String,
  },
  apariencia: {
    sexo: String,
    raza: String,
    altura: String,
    colorOjo: String,
    colorCabello: String,
  },
  colaboradores: [String],
  enemigo: [String],
  img: [String],
});
