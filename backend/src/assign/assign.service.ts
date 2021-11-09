import { Injectable } from '@nestjs/common';
import { CreateAssignInput } from './dto/create-assign.input';
import { UpdateAssignInput } from './dto/update-assign.input';

@Injectable()
export class AssignService {
  create(createAssignInput: CreateAssignInput) {
    return 'This action adds a new assign';
  }

  findAll() {
    return `This action returns all assign`;
  }

  findOne(id: number) {
    return `This action returns a #${id} assign`;
  }

  update(id: number, updateAssignInput: UpdateAssignInput) {
    return `This action updates a #${id} assign`;
  }

  remove(id: number) {
    return `This action removes a #${id} assign`;
  }
}
