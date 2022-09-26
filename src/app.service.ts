import { Injectable } from '@nestjs/common';
import { ViewsService } from './Services/view.service';

@Injectable()
export class AppService {
  constructor(private viewService: ViewsService) {}
  async getHello(): Promise<string> {
    // se devuelve un index en strin convertido por la pagina
    // https://jsonformatter.org/json-stringify-online
    // si desea modificar el codigo vaya a view/index.html
    // modifiquelo y copie todo el codigo en https://jsonformatter.org/json-stringify-online
    // y use el resultado convertido a string en el endpoint view
    const { response, exists } = await this.viewService.getViewIndex();

    if (exists) {
      return response.viewHtmlString;
    }
    return '';
  }
}
