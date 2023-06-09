import React from 'react';
import BarChart from '../barchart/BarChart';
import './SalesChart.css';

const SalesChart = ({ salesByCategory }) => {
  return (
    <div className="sales-chart">
      <h2 className="sales-chart-title">Vendas por Categoria</h2>
      <BarChart data={salesByCategory} />
    </div>
  );
};

export default SalesChart;
