export interface IHeroes {
  _id?: string;
  nombre: string;
  nombreHeroe: string;
  nombreActor: string;
  trabajo: string;
  bio: IBio;
  apariencia: IApariencia;
  colaboradores: string[];
  enemigo: string[];
  img: string[];
}

interface IBio {
  fechaPublicacion: Date;
  lugarNacimiento: string;
  primeraAparicion: string;
  editor: string;
  bando: string;
}

interface IApariencia {
  sexo: string;
  raza: string;
  altura: string;
  colorOjo: string;
  colorCabello: string;
}
