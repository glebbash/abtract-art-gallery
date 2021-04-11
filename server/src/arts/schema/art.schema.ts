import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class Art {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  image: string;
}
