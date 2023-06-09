import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from '../entities/pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private pedidoRepository: Repository<Pedido>,
  ) {}

  async getAllPedidos(): Promise<Pedido[]> {
    return this.pedidoRepository.find();
  }

  async getPedidoById(id: number): Promise<Pedido> {
    return this.pedidoRepository.findOneBy({id: id});
  }  

  async createPedido(pedido: Pedido): Promise<Pedido> {
    return this.pedidoRepository.save(pedido);
  }

  async updatePedido(id: number, pedido: Pedido): Promise<Pedido> {
    await this.pedidoRepository.update(id, pedido);
    return this.pedidoRepository.findOneBy({id: id});
  }

  async deletePedido(id: number): Promise<void> {
    await this.pedidoRepository.delete(id);
  }
}
