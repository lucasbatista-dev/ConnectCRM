import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ClientsRepository } from './repositories/clients.repository';

@Injectable()
export class ClientsService {

  constructor(private clientsRepository: ClientsRepository) { }

  create(createClientDto: CreateClientDto) {
    return this.clientsRepository.create(createClientDto);
  }

  findAll() {
    return this.clientsRepository.findAll();
  }

  findOne(id: string) {
    const findClient = this.clientsRepository.findOne(id)
    if (!findClient) {
      throw new NotFoundException('Client not found')
    }
    return this.clientsRepository.findOne(id);

  }

  update(id: string, updateClientDto: UpdateClientDto) {
    const findClient = this.clientsRepository.findOne(id)
    if (!findClient) {
      throw new NotFoundException('Client not found')
    }
    return this.clientsRepository.update(id, updateClientDto);
  }

  remove(id: string) {
    const findClient = this.clientsRepository.findOne(id)
    if (!findClient) {
      throw new NotFoundException('Client not found')
    }
    return this.clientsRepository.delete(id);
  }
}
