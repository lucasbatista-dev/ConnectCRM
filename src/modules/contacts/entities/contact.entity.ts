import { v4 as uuidv4 } from 'uuid';

export class Contact {
  readonly id: string
  fullName: string
  email: string
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  clientId?: string

  constructor() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = this.createdAt
    this.deletedAt = null
  }
}
