import { Controller } from '@nestjs/common';
import { BaseController } from 'nestjs-mongo-crud-base';
import { ArtsService } from './arts.service';
import { ArtDocument } from './schema/art.schema';

@Controller('arts')
export class ArtsController extends BaseController<ArtDocument> {
  constructor(private readonly artsService: ArtsService) {
    super(artsService);
  }
}
