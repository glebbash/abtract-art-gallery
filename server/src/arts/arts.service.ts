import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { BaseRepositoryService } from 'nestjs-mongo-crud-base';
import { Art } from './schema/art.schema';

export type ArtDocument = Art & Document;

@Injectable()
export class ArtsService extends BaseRepositoryService<ArtDocument> {
  constructor(@InjectModel(Art.name) artModel: Model<ArtDocument>) {
    super(artModel);
  }
}
