import { ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';

@Injectable()
export class ContactsService {

  constructor(private contactsRepository: ContactsRepository) { }
  async create(createContactDto: CreateContactDto, contactId: string) {
    const findContact = await this.contactsRepository.findByEmail(createContactDto.email)
    if (findContact) {
      throw new ConflictException('Email not available')
    }

    return this.contactsRepository.create(createContactDto, contactId);
  }

  async findAll(clientId: string) {
    return this.contactsRepository.findAll(clientId);
  }

  async findOne(contactId: string) {
    const findContact = await this.contactsRepository.findOne(contactId)
    if (!findContact) {
      throw new NotFoundException('Client not found')
    }
    return this.contactsRepository.findOne(contactId);
  }

  async findByEmail(email: string) {

    const findClient = await this.contactsRepository.findByEmail(email);
    if (!findClient) {
      console.log(email)
      throw new NotFoundException('Client not found')
    }
    return findClient
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.contactsRepository.findOne(id)
    if (!findContact) {
      throw new NotFoundException('Client not found')
    }
    return this.contactsRepository.update(id, updateContactDto);
  }

  async delete(id: string) {
    const findContact = await this.contactsRepository.findOne(id)
    if (!findContact) {
      throw new NotFoundException('Client not found')
    }
    return this.contactsRepository.delete(id);
  }
}
