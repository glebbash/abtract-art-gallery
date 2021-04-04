import { Module } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { ArtsController } from './arts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Art, ArtSchema } from './schema/art.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Art.name, schema: ArtSchema }])],
  controllers: [ArtsController],
  providers: [ArtsService],
  exports: [ArtsService],
})
export class ArtsModule {}
