import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItensPedido } from '../entities/itens-pedido.entity';

@Injectable()
export class ItensPedidoService {
  constructor(
    @InjectRepository(ItensPedido)
    private itensPedidoRepository: Repository<ItensPedido>,
  ) {}

  async getAllItensPedido(): Promise<ItensPedido[]> {
    return this.itensPedidoRepository.find();
  }

  async getItensPedidoById(id: number): Promise<ItensPedido> {
    return this.itensPedidoRepository.findOneBy({id: id});
  }

  async createItensPedido(itensPedido: ItensPedido): Promise<ItensPedido> {
    return this.itensPedidoRepository.save(itensPedido);
  }

  async updateItensPedido(id: number, itensPedido: ItensPedido): Promise<ItensPedido> {
    await this.itensPedidoRepository.update(id, itensPedido);
    return this.itensPedidoRepository.findOneBy({id: id});
  }

  async deleteItensPedido(id: number): Promise<void> {
    await this.itensPedidoRepository.delete(id);
  }
}
