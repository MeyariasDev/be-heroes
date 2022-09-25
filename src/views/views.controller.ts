import { Iview } from '../Interface/Iview';
import { Controller, Post, Response, Body, Get, Param } from '@nestjs/common';
import { ViewsService } from 'src/Services/view.service';

@Controller('views')
export class ViewsController {
  constructor(private viewService: ViewsService) {}

  @Post()
  async createHeroe(@Response() response, @Body() body: Iview) {
    const HeroPost = await this.viewService.createView(body);
    return response.status(HeroPost.httpCode).send(HeroPost);
  }

  @Get(':name')
  GetHeroes(@Param('name') name: string) {
    return this.viewService.getView(name);
  }
}
