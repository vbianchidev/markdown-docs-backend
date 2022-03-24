import { IsNotEmpty } from 'class-validator';
import { SchemaTypes, Types, Document } from 'mongoose';

export class CreatePageDto {
  icon: string | null;
  cover: string | null;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  content: string;

  pages: Array<string> | Array<Types.ObjectId> | null ;
  author:  string | Types.ObjectId;
  parentPage: string | Types.ObjectId | null;
}
