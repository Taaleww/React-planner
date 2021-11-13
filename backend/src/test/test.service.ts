import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { Test } from './entities/test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private testRepository: Repository<Test>,
  ) {}
  async create(createTestInput: CreateTestInput): Promise<Test> {
    const test = await this.testRepository.findOne({
      projectname: createTestInput.projectname,
    });
    const newTest = this.testRepository.create(createTestInput);
    return await this.testRepository.save(newTest);
  }

  async findAll(): Promise<Test[]> {
    return await this.testRepository.find();
  }

  async findOne(id: number): Promise<Test> {
    return await this.testRepository.findOneOrFail({
      where: { testid: id },
    });
  }

  async update(id: number, updateTestInput: UpdateTestInput): Promise<Test> {
    const test = await this.testRepository.findOne(id);
    const update = Object.assign(test, updateTestInput);
    return await this.testRepository.save(update);
  }

  async remove(id: number): Promise<string> {
    const test = await this.testRepository.findOne(id);
    await this.testRepository.delete(id)
    return 'Delete Success';
  }
}
