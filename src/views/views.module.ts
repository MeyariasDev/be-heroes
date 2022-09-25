import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { viewSchema } from 'src/Schemas/view.schema';
import { ViewsService } from 'src/Services/view.service';
import { ViewsController } from './views.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'View',
        schema: viewSchema,
      },
    ]),
  ],
  controllers: [ViewsController],
  providers: [ViewsService],
  exports: [ViewsService],
})
export class ViewsModule {}
