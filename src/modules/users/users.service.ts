import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {

  constructor(private usersRepository: UsersRepository) { }

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.usersRepository.findByEmail(createUserDto.email)
    if (findUser) {
      throw new ConflictException('Email not available')
    }
    const user = await this.usersRepository.create(createUserDto);

    return user
  }

  async findAll() {
    const users = await this.usersRepository.findAll();

    return users
  }
  async findByEmail(email: string) {
    const findUser = await this.usersRepository.findByEmail(email);
    if (!findUser) {
      throw new NotFoundException('User not found')
    }
    return findUser
  }

  async findOne(id: string) {
    const findUser = await this.usersRepository.findOne(id)
    if (!findUser) {
      throw new NotFoundException('User not found')
    }
    return await this.usersRepository.findOne(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const findUser = await this.usersRepository.findOne(id)
    if (!findUser) {
      throw new NotFoundException('User not found')
    }
    return await this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: string) {
    const findUser = await this.usersRepository.findOne(id)
    if (!findUser) {
      throw new NotFoundException('User not found')
    }
    return await this.usersRepository.delete(id);
  }
}
