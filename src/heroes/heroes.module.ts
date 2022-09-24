import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { heroeSchema } from 'src/Schemas/heroes.schema';
import { HeroeService } from 'src/Services/heroe-service/heroe.service';
import { HeroesController } from './heroes.controller';


@Module({
    imports: [MongooseModule.forFeature([{
        name: 'Heroes',
        schema: heroeSchema
    }])],
    controllers: [HeroesController],
    providers: [HeroeService],
})
export class HeroesModule {

}
