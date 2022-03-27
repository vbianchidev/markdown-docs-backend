import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types, Document } from 'mongoose';
import { User } from 'src/modules/user/entities/user.entity';

@Schema({ timestamps: true })
export class Page extends Document {
  @Prop({ default: "book"})
  icon: string;

  @Prop({ default: "fffff"})
  cover: string;

  @Prop()
  title: string;

  @Prop()
  slug: string;

  @Prop()
  content: string;

  @Prop({ type: SchemaTypes.ObjectId, ref: Page.name })
  pages: Array<string> | Array<Types.ObjectId> | null;

  @Prop({ type: SchemaTypes.ObjectId, ref: User.name })
  author: string | Types.ObjectId;

  @Prop({ type: SchemaTypes.ObjectId, ref: Page.name })
  parentPage: string | Types.ObjectId | null;
}

export const PageSchema = SchemaFactory.createForClass(Page);
