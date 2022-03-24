import { Model } from 'mongoose';
import { IGenericRepository } from './imongo.generic.repository';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().exec();
  }

  getOne(id: string): Promise<T> {
    return this._repository.findById(id).exec();
  }

  create(createDTO: T): Promise<T> {
    return this._repository.create(createDTO);
  }

  update(id: string, updateDTO: Partial<T>) {
    return this._repository.findByIdAndUpdate(id, updateDTO);
  }

  remove(id: string) {
    return this._repository.findByIdAndDelete(id).exec();
  }
}
