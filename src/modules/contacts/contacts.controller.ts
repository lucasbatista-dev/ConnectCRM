import { JwtAuthGuardContacts } from './../auth/jwt-auth.guard';
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';

@ApiTags('contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }


  @Post('/client/:id')
  @UseGuards(JwtAuthGuardContacts)
  @ApiBearerAuth()
  create(@Body() createContactDto: CreateContactDto, @Param('id') id: string) {
    return this.contactsService.create(createContactDto, id);
  }

  @UseGuards(JwtAuthGuardContacts)
  @ApiBearerAuth()
  @Get('client/:id')
  findAll(@Param('id') id) {
    return this.contactsService.findAll(id);
  }

  @UseGuards(JwtAuthGuardContacts)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(id);
  }

  @Get('/email/:email')
  findByEmail(@Param('email') email: string) {
    return this.contactsService.findByEmail(email);
  }

  @UseGuards(JwtAuthGuardContacts)
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @UseGuards(JwtAuthGuardContacts)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.delete(id);
  }
}
