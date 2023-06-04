import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/clients.repository';

@Injectable()
export class ClientsService {

  constructor(private clientsRepository: ClientsRepository) { }

  async create(createClientDto: CreateClientDto, userId: string) {
    const findClient = await this.clientsRepository.findByEmail(createClientDto.email)
    if (findClient) {
      throw new ConflictException('Email not available')
    }

    return await this.clientsRepository.create(createClientDto, userId);
  }

  async findAll(paramsId: string, tokenId: string) {
    if (paramsId !== tokenId) {
      throw new ForbiddenException();
    }
    return await this.clientsRepository.findAll(paramsId);
  }

  async findOne(id: string, userId: string) {
    const findClient = await this.clientsRepository.findOne(id)
    if (!findClient) {
      throw new NotFoundException('Client not found')
    }
    if (findClient.userId !== userId) {
      throw new ForbiddenException();
    }
    return this.clientsRepository.findOne(id);

  }

  async findByEmail(email: string) {

    const findClient = await this.clientsRepository.findByEmail(email);
    if (!findClient) {
      console.log(email)
      throw new NotFoundException('Client not found')
    }
    return findClient
  }


  async update(id: string, updateClientDto: UpdateClientDto, userId: string) {
    const findClient = await this.clientsRepository.findOne(id)
    if (!findClient) {
      throw new NotFoundException('Client not found')
    }
    if (findClient.userId !== userId) {
      throw new ForbiddenException();
    }
    return this.clientsRepository.update(id, updateClientDto);
  }

  async remove(id: string, userId: string) {
    const findClient = await this.clientsRepository.findOne(id)
    if (!findClient) {
      throw new NotFoundException('Client not found')
    }
    if (findClient.userId !== userId) {
      throw new ForbiddenException();
    }
    return this.clientsRepository.delete(id);
  }
}
