import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Produto } from '../entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async getAllProdutos(): Promise<Produto[]> {
    return this.produtoRepository.find();
  }

  async getProdutoById(id: number): Promise<Produto> {
    return this.produtoRepository.findOneBy({id: id});
  }

  async createProduto(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async updateProduto(id: number, produto: Produto): Promise<Produto> {
    await this.produtoRepository.update(id, produto);
    return this.produtoRepository.findOneBy({id: id});
  }

  async deleteProduto(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
