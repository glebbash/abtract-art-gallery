import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArtsModule } from './arts/arts.module';

@Module({
  imports: [ArtsModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule {}
