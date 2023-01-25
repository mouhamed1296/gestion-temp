import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClimatDocument = HydratedDocument<Climat>;

@Schema({ collection: 'climat' })
export class Climat {
  @Prop()
  temperature: number;

  @Prop()
  humidity: number;

  @Prop()
  date: string;

  @Prop()
  heure: string;

  @Prop(raw({ temperature: Number, humidity: Number }))
  moyenne: {
    temperature: number;
    humidity: number;
  };
}

export const ClimatSchema = SchemaFactory.createForClass(Climat);
