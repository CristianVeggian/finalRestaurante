import React from 'react';

const Products = () => {
  // Obtenha os dados dos produtos

  const productsData = [
    // Exemplo fictício de dados
    { id: 1, name: 'Produto 1', price: 10 },
    { id: 2, name: 'Produto 2', price: 20 },
    { id: 3, name: 'Produto 3', price: 30 },
  ];

  return (
    <div>
      <h1>Produtos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {productsData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
