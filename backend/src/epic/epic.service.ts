import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEpicInput } from './dto/create-epic.input';
import { UpdateEpicInput } from './dto/update-epic.input';
import { Epic } from './entities/epic.entity';

@Injectable()
export class EpicService {
  constructor(
    @InjectRepository(Epic)
    private epicRepository: Repository<Epic>,
  ) {}
  async create(createEpicInput: CreateEpicInput): Promise<Epic> {
    const task = await this.epicRepository.findOne({
      epicname: createEpicInput.epicname,
    });
    const newEpic = this.epicRepository.create(createEpicInput);
    return await this.epicRepository.save(newEpic);
  }

  async findAll(): Promise<Epic[]> {
    return await this.epicRepository.find();
  }

  async findOne(id: number): Promise<Epic> {
    return await this.epicRepository.findOneOrFail({
      where: { epicid: id },
    });
  }

  async update(id: number, updateEpicInput: UpdateEpicInput): Promise<Epic> {
    const epic = await this.epicRepository.findOne(id);
    const update = Object.assign(epic, updateEpicInput);
    return await this.epicRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.epicRepository.findOne(id);
    await this.epicRepository.delete(id)
    return 'Delete Success';
  }
}