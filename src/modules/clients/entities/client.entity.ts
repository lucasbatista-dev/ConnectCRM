import { v4 as uuidv4 } from 'uuid';

export class Client {
  readonly id: string
  fullname: string
  email: string
  phoneNumber: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date
  user_id?: string

  constructor() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = this.createdAt
    this.deletedAt = null
  }
}
