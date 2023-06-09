import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}

  async getAllClientes(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async getClienteByCpf(cpf: string): Promise<Cliente> {
    return this.clienteRepository.findOneBy({cpf: cpf});
  }

  async createCliente(cliente: Cliente): Promise<Cliente> {
    return this.clienteRepository.save(cliente);
  }

  async updateCliente(cpf: string, cliente: Cliente): Promise<Cliente> {
    await this.clienteRepository.update(cpf, cliente);
    return this.clienteRepository.findOneBy({cpf: cpf});
  }

  async deleteCliente(cpf: string): Promise<void> {
    await this.clienteRepository.delete(cpf);
  }
}
