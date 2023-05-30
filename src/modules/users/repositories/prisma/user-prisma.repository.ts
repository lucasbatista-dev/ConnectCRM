import { CreateUserDto } from '../../dto/create-user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsersRepository } from '../users.repository';;
import { plainToInstance } from 'class-transformer';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateUserDto): Promise<User> {
    const user = new User()
    Object.assign(user, {
      ...data
    })

    const newUser = await this.prisma.user.create({
      data: { ...user }
    })
    return plainToInstance(User, newUser)

  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    })
    return plainToInstance(User, user)
  }
  async findAll(): Promise<User[]> {
    const users = await this.prisma.user.findMany()
    return plainToInstance(User, users)
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    })
    return user
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const user = await this.prisma.user.update({
      where: { id },
      data: { ...data }
    })
    return plainToInstance(User, user)
  }
  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({
      where: { id },
    })
  }
}