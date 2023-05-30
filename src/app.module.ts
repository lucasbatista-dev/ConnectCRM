import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ClientsModule } from './modules/clients/clients.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, ClientsModule, AuthModule]
})
export class AppModule { }
