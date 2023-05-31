import { v4 as uuidv4 } from 'uuid';

export class Client {
  readonly id: string
  fullName: string
  email: string
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  userId?: string

  constructor() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = this.createdAt
    this.deletedAt = null
  }
}
