import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Iview } from '../Interface/Iview';
import { Model } from 'mongoose';

export interface IResponse {
  statusText: string;
  httpCode: number;
}

export interface IError {
  textCode: string;
  httpCode: number;
}
interface Isearch {
  response?: any;
  exists: boolean;
}

@Injectable()
export class ViewsService {
  constructor(@InjectModel('View') private viewModel: Model<Iview>) {}

  async createView(body: Iview): Promise<IResponse | IError> {
    if (body.viewHtmlString !== '' && body.nombreView !== '') {
      try {
        await new this.viewModel(body).save();
        return {
          statusText: `Se ha guardado con exito! Creada vista HTML: ${body.nombreView}`,
          httpCode: HttpStatus.OK,
        };
      } catch (error) {
        return {
          statusText: `ha sucedido un error al guardar la vista`,
          httpCode: HttpStatus.BAD_REQUEST,
        };
      }
    }
  }

  async getView(name: string): Promise<Iview | IError> {
    try {
      return await this.viewModel.findOne({ nombreView: name });
    } catch (error) {
      return {
        textCode: 'vista no encontrada ',
        httpCode: HttpStatus.BAD_REQUEST,
      };
    }
  }

  async getViewIndex(): Promise<Isearch> {
    try {
      return {
        response: await this.viewModel.findOne({ nombreView: 'index' }),
        exists: true,
      };
    } catch (error) {
      return { exists: false };
    }
  }
}
