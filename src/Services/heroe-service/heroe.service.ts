import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IHeroes } from 'src/Interface/IHeroes';
import { HttpStatus } from '@nestjs/common';
import { extractionError } from 'src/Utilidades/ExtractionError';

export interface IHeroesResponse {
  statusText: string;
  httpCode: number;
}

export interface IError {
  textCode: string;
  httpCode: number;
}

interface IsearchId {
  response?: any;
  exists: boolean;
}

@Injectable()
export class HeroeService {
  constructor(@InjectModel('Heroes') private heroesModel: Model<IHeroes>) {}

  async createHeroes(body: IHeroes): Promise<IHeroesResponse | IError> {
      try {
        await new this.heroesModel(body).save();
        return {
          statusText: `Se ha guardado con exito! Creado heroes: ${body.nombreHeroe}`,
          httpCode: HttpStatus.OK,
        };
      } catch (e) {
        return {
          statusText: extractionError(e),
          httpCode: HttpStatus.BAD_REQUEST,
        };
      }
  }

  async getHeroes(): Promise<IHeroes[] | IError> {
    try {
      return await this.heroesModel.find();
    } catch (error) {
      return {
        textCode: 'Sucedio un Error al consultar los Heroes',
        httpCode: HttpStatus.BAD_REQUEST,
      };
    }
  }

  async getHeroe(id: string): Promise<IHeroes | IError> {
    try {
      return await this.heroesModel.findById(id);
    } catch (error) {
      return {
        textCode: 'Heroe no encontrado ',
        httpCode: HttpStatus.BAD_REQUEST,
      };
    }
  }

  async getUpdate(
    id: string,
    dataHeroe: IHeroes,
  ): Promise<IHeroesResponse | IError> {
    const { _id, ...newData } = dataHeroe;
    const { exists } = await this.getOneHeroe(id);
    if (exists) {
      try {
        await this.heroesModel.updateOne(
          { _id: id },
          {
            ...newData,
          },
        );
        return {
          statusText: `se actualizo el heroe: ${newData.nombreHeroe}`,
          httpCode: HttpStatus.OK,
        };
      } catch (error) {
        return {
          textCode: 'Sucedio Un Error',
          httpCode: HttpStatus.BAD_REQUEST,
        };
      }
    }
    return {
      textCode: `el heroe con el id: ${id} no existe`,
      httpCode: HttpStatus.NOT_FOUND,
    };
  }

  async getOneHeroe(id: string): Promise<IsearchId> {
    try {
      const result = await this.heroesModel.findById({ _id: id });
      return {
        response: result,
        exists: true,
      };
    } catch (error) {
      return { exists: false };
    }
  }

  async getNameHeroe(name: string): Promise<IsearchId> {
    try {
      return  {response: await this.heroesModel.find({  nombreHeroe: name }), exists:true}
    } catch (error) {
      return {
       exists:false
      }
    }
  }

}
