import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ItensPedido } from './itens-pedido.entity';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  categoria: string;

  @Column()
  valor: number;

  @OneToMany(() => ItensPedido, itensPedido => itensPedido.produto)
  itensPedido: ItensPedido[];
}
