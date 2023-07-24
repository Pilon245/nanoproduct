import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ require: true })
  id: string;

  @Prop({ require: true })
  phone: string;

  @Prop({ require: true })
  name: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
