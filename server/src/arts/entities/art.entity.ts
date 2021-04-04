import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity()
export class Art {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  image: string;
}
