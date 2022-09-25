import {
  Controller,
  Post,
  Response,
  Body,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { IHeroes } from 'src/Interface/IHeroes';
import {
  HeroeService,
  IError,
  IHeroesResponse,
} from 'src/Services/heroe-service/heroe.service';

@Controller('heroes')
export class HeroesController {
  constructor(private heroeService: HeroeService) {}

  @Post()
  async createHeroe(@Response() response, @Body() body: IHeroes) {
    const HeroPost = await this.heroeService.createHeroes(body);
    return response.status(HeroPost.httpCode).send(HeroPost);
  }

  @Get()
  GetHeroes() {
    return this.heroeService.getHeroes();
  }

  @Get(':id')
  oneHeroe(@Param('id') id: string) {
    console.log(id, 'Aqui Controller');

    return this.heroeService.getHeroe(id);
  }

  @Put(':id')
  async updateHeroe(
    @Param('id') id: string,
    @Body() body,
  ): Promise<IHeroesResponse | IError> {
    return await this.heroeService.getUpdate(id, body);
  }
}
