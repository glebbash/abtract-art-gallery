import { Module } from '@nestjs/common';
import { ArtsService } from './arts.service';
import { ArtsController } from './arts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Art } from './entities/art.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Art])],
  controllers: [ArtsController],
  providers: [ArtsService],
  exports: [ArtsService],
})
export class ArtsModule {}
