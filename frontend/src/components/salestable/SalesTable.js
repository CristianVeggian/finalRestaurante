import React from 'react';
import './SalesTable.css';

const SalesTable = ({ salesData }) => {
  return (
    <div>
      <h2 className="sales-table-title">Vendas Recentes</h2>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Data</th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((sale) => (
            <tr key={sale.id}>
              <td>{sale.date}</td>
              <td>{sale.product}</td>
              <td>{sale.quantity}</td>
              <td>{sale.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SalesTable;
