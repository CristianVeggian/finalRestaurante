import React from 'react';
import './Navbar.css'; // Importe o arquivo CSS para estilização

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="/produtos" className="navbar__link">Produtos</a>
        </li>
        <li className="navbar__item">
          <a href="/clientes" className="navbar__link">Clientes</a>
        </li>
        <li className="navbar__item">
          <a href="/pedidos" className="navbar__link">Pedidos</a>
        </li>
        <li className="navbar__item">
          <a href="/relatorios" className="navbar__link">Relatórios</a>
        </li>
        <li className="navbar__item">
          <a href="/balanco" className="navbar__link">Balanço</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
