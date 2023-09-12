import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type DoctorDocument = HydratedDocument<Doctor>;

@Schema()
export class SlotTypeData {
  @Prop()
  user_id: string;

  @Prop()
  slot: Date;
}

const SlotTypeDataSchema = SchemaFactory.createForClass(SlotTypeData);

@Schema()
export class Doctor {
  @Prop({ require: true })
  id: string;

  @Prop({ require: true })
  name: string;

  @Prop({ require: true })
  spec: string;

  @Prop({ default: [], type: [SlotTypeDataSchema] })
  slots: SlotTypeData[];
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor);
