import { Injectable } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { PrismaService } from "src/database/prisma.service";
import { CreateContactDto } from "../../dto/create-contact.dto";
import { UpdateContactDto } from "../../dto/update-contact.dto";
import { Contact } from "../../entities/contact.entity";

@Injectable()
export class ContactsPrismaRepository {
  constructor(private prisma: PrismaService) { }

  async create(data: CreateContactDto, clientId: string): Promise<Contact> {
    const contact = new Contact()
    Object.assign(contact, {
      ...data
    })
    await this.prisma.contact.create({
      data: {
        ...contact,
        clientId: clientId
      }
    })
    return plainToInstance(Contact, contact)
  }

  async findAll(clientId: string): Promise<Contact[]> {
    const contacts = await this.prisma.contact.findMany({
      where: {
        clientId: clientId
      }
    })
    return plainToInstance(Contact, contacts)
  }

  async findOne(id: string): Promise<Contact | undefined> {
    const contact = await this.prisma.contact.findUnique({
      where: { id },
    })
    return plainToInstance(Contact, contact)
  }


  async findByEmail(email: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { email },
    })
    return contact
  }

  async update(id: string, data: UpdateContactDto): Promise<Contact> {
    const contact = await this.prisma.contact.update({
      where: { id },
      data: { ...data }
    })
    return plainToInstance(Contact, contact)

  }

  async delete(id: string): Promise<void> {
    await this.prisma.contact.delete({
      where: { id },
    })
  }
}