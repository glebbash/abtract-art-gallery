import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Art } from './entities/art.entity';

@Injectable()
export class ArtsService extends TypeOrmCrudService<Art> {
  constructor(@InjectRepository(Art) repo) {
    super(repo);
  }
}
