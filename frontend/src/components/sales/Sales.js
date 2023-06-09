import React from 'react';
import SalesTable from '../salestable/SalesTable';
import SalesChart from '../saleschart/SalesChart';

const Sales = () => {
  // Obtenha os dados das vendas e passe para os componentes SalesTable e SalesChart

  const salesData = [
    // Exemplo fictício de dados
    { id: 1, date: '2022-01-01', product: 'Produto 1', quantity: 5, total: 50 },
    { id: 2, date: '2022-01-02', product: 'Produto 2', quantity: 3, total: 60 },
    { id: 3, date: '2022-01-03', product: 'Produto 3', quantity: 2, total: 40 },
  ];

  const salesByCategory = [
    // Exemplo fictício de dados 
    { category: 'Categoria 1', percentage: 40 },
    { category: 'Categoria 2', percentage: 30 },
    { category: 'Categoria 3', percentage: 20 },
  ];

  return (
    <div>
      <h1>Vendas</h1>
      <SalesTable salesData={salesData} />
      <SalesChart salesByCategory={salesByCategory} />
    </div>
  );
};

export default Sales;
