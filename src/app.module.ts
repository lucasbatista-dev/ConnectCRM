import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AuthModule } from './modules/auth/auth.module';
import { ContactsModule } from './modules/contacts/contacts.module';

@Module({
  imports: [UsersModule, ClientsModule, AuthModule, ContactsModule]
})
export class AppModule { }
