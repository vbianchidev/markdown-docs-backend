import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Page extends Document {
  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop()
  markdown: string;
}

export const PageSchema = SchemaFactory.createForClass(Page);
