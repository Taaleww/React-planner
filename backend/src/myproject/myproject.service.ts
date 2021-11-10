import { Injectable } from '@nestjs/common';
import { CreateMyprojectInput } from './dto/create-myproject.input';
import { UpdateMyprojectInput } from './dto/update-myproject.input';

@Injectable()
export class MyprojectService {
  create(createMyprojectInput: CreateMyprojectInput) {
    return 'This action adds a new myproject';
  }

  findAll() {
    return `This action returns all myproject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} myproject`;
  }

  update(id: number, updateMyprojectInput: UpdateMyprojectInput) {
    return `This action updates a #${id} myproject`;
  }

  remove(id: number) {
    return `This action removes a #${id} myproject`;
  }
}
