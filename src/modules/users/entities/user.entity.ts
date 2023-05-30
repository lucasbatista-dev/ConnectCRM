import { Exclude } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';

export class User {
  readonly id: string
  name: string
  username: string
  email: string

  @Exclude()
  password: string

  companyName: string
  avatar?: string
  createdAt: Date
  updatedAt: Date
  deletedAt?: Date


  constructor() {
    this.id = uuidv4();
    this.createdAt = new Date();
    this.updatedAt = this.createdAt
    this.deletedAt = null
  }


}
