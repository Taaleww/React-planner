import { Injectable } from '@nestjs/common';
import { CreateEpicInput } from './dto/create-epic.input';
import { UpdateEpicInput } from './dto/update-epic.input';

@Injectable()
export class EpicService {
  create(createEpicInput: CreateEpicInput) {
    return 'This action adds a new epic';
  }

  findAll() {
    return `This action returns all epic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} epic`;
  }

  update(id: number, updateEpicInput: UpdateEpicInput) {
    return `This action updates a #${id} epic`;
  }

  remove(id: number) {
    return `This action removes a #${id} epic`;
  }
}
