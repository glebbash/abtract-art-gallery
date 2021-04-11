import { Controller } from '@nestjs/common';
import { BaseController } from 'nestjs-mongo-crud-base';
import { ArtsService } from './arts.service';
import { Art } from './schema/art.schema';

@Controller('arts')
export class ArtsController extends BaseController<Art> {
  constructor(artsService: ArtsService) {
    super(artsService);
  }
}
