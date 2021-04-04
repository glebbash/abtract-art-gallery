import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepositoryService } from 'nestjs-mongo-crud-base';
import { Art, ArtDocument } from './schema/art.schema';

@Injectable()
export class ArtsService extends BaseRepositoryService<ArtDocument> {
  constructor(@InjectModel(Art.name) private artModel: Model<ArtDocument>) {
    super(artModel);
  }
}
