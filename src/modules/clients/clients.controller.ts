import {
  Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Request,
  UnauthorizedException,
  HttpCode,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@ApiTags('clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) { }
  @UseInterceptors(ClassSerializerInterceptor)

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  create(@Body() createClientDto: CreateClientDto, @Request() req) {
    return this.clientsService.create(createClientDto, req.user.id);
  }


  @Get('user/:id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findAll(@Request() req, @Param('id') id: string) {
    return this.clientsService.findAll(id, req.user.id);
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string, @Request() req) {
    return this.clientsService.findOne(id, req.user.id);
  }

  @Get('/email/:email')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  findByEmail(@Param('email') email: string) {
    return this.clientsService.findByEmail(email);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto, @Request() req) {
    return this.clientsService.update(id, updateClientDto, req.user.id);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Request() req) {
    return this.clientsService.remove(id, req.user.id);
  }
}
