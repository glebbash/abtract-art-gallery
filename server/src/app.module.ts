import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArtsModule } from './arts/arts.module';
import { Art } from './arts/entities/art.entity';

@Module({
  imports: [
    ArtsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      entities: [Art],
    }),
  ],
})
export class AppModule {}
