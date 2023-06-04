import { UpdateContactDto } from './../dto/update-contact.dto';

import { CreateContactDto } from "../dto/create-contact.dto";
import { Contact } from "../entities/contact.entity";

export abstract class ContactsRepository {
  abstract create(data: CreateContactDto, clientId: string): Promise<Contact>
  abstract findAll(clientId: string): Promise<Contact[]> | Contact[]
  abstract findOne(id: string): Promise<Contact | undefined> | Contact | undefined
  abstract findByEmail(email: string): Promise<Contact> | Contact
  abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact
  abstract delete(id: string): Promise<void> | void

}