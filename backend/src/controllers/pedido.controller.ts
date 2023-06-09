import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Pedido } from '../entities/pedido.entity';
import { PedidoService } from '../services/pedido.service';

@Controller('pedidos')
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Get()
  async getAllPedidos(): Promise<Pedido[]> {
    return this.pedidoService.getAllPedidos();
  }

  @Get(':id')
  async getPedidoById(@Param('id') id: number): Promise<Pedido> {
    return this.pedidoService.getPedidoById(id);
  }

  @Post()
  async createPedido(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.createPedido(pedido);
  }

  @Put(':id')
  async updatePedido(@Param('id') id: number, @Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.updatePedido(id, pedido);
  }

  @Delete(':id')
  async deletePedido(@Param('id') id: number): Promise<void> {
    return this.pedidoService.deletePedido(id);
  }
}
