* { box-sizing: border-box; }

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0b1f17;
  color: #fff;
}

.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-box {
  background: #123c2b;
  padding: 30px;
  border-radius: 8px;
  width: 300px;
}

.login-box input, button {
  width: 100%;
  padding: 10px;
  margin: 6px 0;
}

button {
  background: #ffc107;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.topo {
  height: 60px;
  background: #0f5132;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo span { color: #ffc107; }

.btn-sair {
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 14px;
}

.layout { display: flex; height: calc(100vh - 60px); }

.sidebar {
  width: 220px;
  background: #0a3622;
  padding: 20px;
}

.sidebar li {
  padding: 12px;
  cursor: pointer;
}

.sidebar li:hover { background: #146c43; }

.conteudo {
  flex: 1;
  padding: 20px;
}

.painel {
  background: #123c2b;
  padding: 20px;
  border-radius: 8px;
}

.hidden { display: none; }

.tabela {
  width: 100%;
  margin-top: 15px;
  border-collapse: collapse;
}

.tabela th, .tabela td {
  border-bottom: 1px solid #1e5c44;
  padding: 10px;
}
