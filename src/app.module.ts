import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HeroesModule } from './heroes/heroes.module';

import { MongooseModule } from '@nestjs/mongoose';
import { ViewsModule } from './views/views.module';

@Module({
  imports: [
    HeroesModule,
    MongooseModule.forRoot(
      'mongodb+srv://sa:mvae123@cluster0.i3zyg.mongodb.net/dbHeroes',
    ),
    ViewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
