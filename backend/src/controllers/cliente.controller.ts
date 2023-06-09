import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { ClienteService } from '../services/cliente.service';

@Controller('clientes')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Get()
  async getAllClientes(): Promise<Cliente[]> {
    return this.clienteService.getAllClientes();
  }

  @Get(':cpf')
  async getClienteByCpf(@Param('cpf') cpf: string): Promise<Cliente> {
    return this.clienteService.getClienteByCpf(cpf);
  }

  @Post()
  async createCliente(@Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.createCliente(cliente);
  }

  @Put(':cpf')
  async updateCliente(@Param('cpf') cpf: string, @Body() cliente: Cliente): Promise<Cliente> {
    return this.clienteService.updateCliente(cpf, cliente);
  }

  @Delete(':cpf')
  async deleteCliente(@Param('cpf') cpf: string): Promise<void> {
    return this.clienteService.deleteCliente(cpf);
  }
}
