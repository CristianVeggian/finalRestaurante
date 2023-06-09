import React from 'react';
import SalesTable from '../salestable/SalesTable';
import SalesChart from '.,/saleschart/SalesChart';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard do Restaurante</h1>
      <SalesTable />
      <SalesChart />
    </div>
  );
};

export default Dashboard;
