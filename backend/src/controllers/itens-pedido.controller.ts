import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItensPedido } from '../entities/itens-pedido.entity';
import { ItensPedidoService } from '../services/itens-pedido.service';

@Controller('itens-pedido')
export class ItensPedidoController {
  constructor(private itensPedidoService: ItensPedidoService) {}

  @Get()
  async getAllItensPedido(): Promise<ItensPedido[]> {
    return this.itensPedidoService.getAllItensPedido();
  }

  @Get(':id')
  async getItensPedidoById(@Param('id') id: number): Promise<ItensPedido> {
    return this.itensPedidoService.getItensPedidoById(id);
  }

  @Post()
  async createItensPedido(@Body() itensPedido: ItensPedido): Promise<ItensPedido> {
    return this.itensPedidoService.createItensPedido(itensPedido);
  }

  @Put(':id')
  async updateItensPedido(@Param('id') id: number, @Body() itensPedido: ItensPedido): Promise<ItensPedido> {
    return this.itensPedidoService.updateItensPedido(id, itensPedido);
  }

  @Delete(':id')
  async deleteItensPedido(@Param('id') id: number): Promise<void> {
    return this.itensPedidoService.deleteItensPedido(id);
  }
}
