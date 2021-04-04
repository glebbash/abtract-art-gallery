import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ArtsService } from './arts.service';
import { Art } from './entities/art.entity';

@Crud({
  model: {
    type: Art,
  },
})
@Controller('arts')
export class ArtsController implements CrudController<Art> {
  constructor(public service: ArtsService) {}
}
