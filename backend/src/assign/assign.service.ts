import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAssignInput } from './dto/create-assign.input';
import { UpdateAssignInput } from './dto/update-assign.input';
import { Assign } from './entities/assign.entity';

@Injectable()
export class AssignService {
  constructor(
    @InjectRepository(Assign)
    private assignRepository: Repository<Assign>,
  ){}
  // async create(createAssignInput: CreateAssignInput,
  //   ): Promise<Assign[]> {
  //     const newAssign = this.assignRepository.create(
  //       createAssignInput,
  //     );
  //     return await this.assignRepository.save(newAssign); 
  // }

  async findAll(): Promise<Assign[]> {
    return await this.assignRepository.find();
  }

  async findOne(id: number): Promise<Assign> {
    return await this.assignRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: number, updateAssignInput: UpdateAssignInput): Promise<Assign> {
    const project = await this.assignRepository.findOne(id);
    const update = Object.assign(project, updateAssignInput);
    return await this.assignRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const task = await this.assignRepository.findOne(id);
    await this.assignRepository.delete(id);
    return 'Delete Success';
  }
}
