CREATE TABLE Produto (
  id SERIAL PRIMARY KEY,
  nome TEXT,
  categoria TEXT,
  valor NUMERIC
);

CREATE TABLE Cliente (
  cpf TEXT PRIMARY KEY,
  nome TEXT
);

CREATE TABLE Pedido (
  id SERIAL PRIMARY KEY,
  cliente_cpf TEXT REFERENCES Cliente(cpf),
  observacao TEXT,
  valor_total NUMERIC
);

CREATE TABLE ItensPedido (
  id SERIAL PRIMARY KEY,
  pedido_id INTEGER REFERENCES Pedidos(id),
  produto_id INTEGER REFERENCES Produtos(id),
  quantidade NUMERIC
);

SELECT * FROM Cliente;
