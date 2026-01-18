const ADMIN_USER = "Gremiis";
const ADMIN_PASS = "Sintia1404+";

/* LOGIN */
function loginAdmin() {
  const u = document.getElementById("login").value;
  const p = document.getElementById("senha").value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    sessionStorage.setItem("adminLogado", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Login inválido";
  }
}

function checkAdmin() {
  if (sessionStorage.getItem("adminLogado") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.removeItem("adminLogado");
  window.location.href = "index.html";
}

/* MENU */
function show(id) {
  document.querySelectorAll(".painel").forEach(p =>
    p.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}

/* USUÁRIOS */
function carregarUsuarios() {
  const lista = document.getElementById("listaUsuarios");
  if (!lista) return;

  lista.innerHTML = "";
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  usuarios.forEach((u, i) => {
    lista.innerHTML += `
      <tr>
        <td>${u.nome}</td>
        <td>R$ ${u.saldo.toFixed(2)}</td>
        <td>
          <button onclick="excluirUsuario(${i})">❌</button>
        </td>
      </tr>
    `;
  });
}

function criarUsuario() {
  const nome = document.getElementById("u_nome").value;
  const saldo = parseFloat(document.getElementById("u_saldo").value);

  if (!nome || isNaN(saldo)) {
    alert("Preencha todos os campos");
    return;
  }

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push({ nome, saldo });

  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  document.getElementById("u_nome").value = "";
  document.getElementById("u_saldo").value = "";

  carregarUsuarios();
}

function excluirUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  carregarUsuarios();
}
