import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Art {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  image: string;
}

export type ArtDocument = Art & Document;

export const ArtSchema = SchemaFactory.createForClass(Art);
