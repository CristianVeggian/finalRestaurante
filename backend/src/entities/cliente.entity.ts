import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Pedido } from './pedido.entity';

@Entity()
export class Cliente {
  @PrimaryColumn()
  cpf: string;

  @Column()
  nome: string;

  @OneToMany(() => Pedido, pedido => pedido.cliente)
  pedidos: Pedido[];
}
