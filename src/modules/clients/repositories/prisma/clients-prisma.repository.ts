import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from "@nestjs/common";
import { ClientsRepository } from "../clients.repository";
import { Client } from '../../entities/client.entity';
import { plainToInstance } from 'class-transformer';
import { CreateClientDto } from '../../dto/create-client.dto';
import { UpdateClientDto } from '../../dto/update-client.dto';

@Injectable()
export class ClientsPrismaRepository implements ClientsRepository {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateClientDto, userId: string): Promise<Client> {
    const client = new Client()
    Object.assign(client, {
      ...data
    })
    await this.prisma.client.create({
      data: {
        ...client,
        userId: userId
      }
    })
    return plainToInstance(Client, client)

  }
  async findAll(userId: string): Promise<Client[]> {
    const clients = await this.prisma.client.findMany({
      where: {
        userId: userId
      }
    })
    return plainToInstance(Client, clients)

  }
  async findOne(id: string): Promise<Client> {
    const client = await this.prisma.client.findUnique({
      where: { id },
    })
    return plainToInstance(Client, client)
  }
  async update(id: string, data: UpdateClientDto): Promise<Client> {
    const client = await this.prisma.client.update({
      where: { id },
      data: { ...data }
    })
    return plainToInstance(Client, client)
  }
  async delete(id: string): Promise<void> {
    await this.prisma.client.delete({
      where: { id },
    })
  }
}