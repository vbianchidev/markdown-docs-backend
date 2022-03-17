import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Menu extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ default: null })
  parent: string | null;

  @Prop()
  pageId: string;

  @Prop()
  matIcon: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
