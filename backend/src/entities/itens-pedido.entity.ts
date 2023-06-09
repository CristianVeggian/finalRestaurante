import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Produto } from './produto.entity';

@Entity()
export class ItensPedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, pedido => pedido.itensPedido)
  pedido: Pedido;

  @ManyToOne(() => Produto, produto => produto.itensPedido)
  produto: Produto;

  @Column()
  quantidade: number;
}
