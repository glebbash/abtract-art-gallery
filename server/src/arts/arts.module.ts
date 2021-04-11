import { Module } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { ArtsController } from './arts.controller';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import { Art } from './schema/art.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Art.name, schema: SchemaFactory.createForClass(Art) },
    ]),
  ],
  controllers: [ArtsController],
  providers: [ArtsService],
  exports: [ArtsService],
})
export class ArtsModule {}
