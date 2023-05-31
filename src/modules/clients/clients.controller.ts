import {
  Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors,
  ClassSerializerInterceptor,
  UseGuards,
  Request,
  UnauthorizedException,
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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  create(@Body() createClientDto: CreateClientDto, @Request() req) {
    return this.clientsService.create(createClientDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('user/:id')
  findAll(@Request() req, @Param('id') id: string) {
    return this.clientsService.findAll(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.clientsService.findOne(id, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto, @Request() req) {
    return this.clientsService.update(id, updateClientDto, req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.clientsService.remove(id, req.user.id);
  }
}
