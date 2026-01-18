/* =====================
   CONFIGURAÇÕES
===================== */
const ADMIN_USER = "Gremiis";

/* senha ofuscada (base para hash real depois)
   Sintia1404+  */
const ADMIN_PASS_HASH = btoa("Sintia1404+");

/* sessão expira em 30 minutos */
const SESSION_TIME = 30 * 60 * 1000;

/* =====================
   LOGIN
===================== */
function loginAdmin() {
  const u = document.getElementById("login").value;
  const p = document.getElementById("senha").value;

  if (u === ADMIN_USER && btoa(p) === ADMIN_PASS_HASH) {
    const now = new Date().getTime();
    sessionStorage.setItem("adminLogado", "true");
    sessionStorage.setItem("loginTime", now);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText =
      "Usuário ou senha inválidos";
  }
}

/* =====================
   PROTEÇÃO DE SESSÃO
===================== */
function checkAdmin() {
  const logado = sessionStorage.getItem("adminLogado");
  const loginTime = sessionStorage.getItem("loginTime");

  if (!logado || !loginTime) {
    window.location.href = "index.html";
    return;
  }

  const now = new Date().getTime();
  if (now - loginTime > SESSION_TIME) {
    logout();
  }
}

/* =====================
   LOGOUT
===================== */
function logout() {
  sessionStorage.clear();
  window.location.href = "index.html";
}

/* =====================
   MENU
===================== */
function show(id) {
  document.querySelectorAll(".painel").forEach(p =>
    p.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}

/* =====================
   USUÁRIOS (ADMIN)
===================== */
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
  carregarUsuarios();
}

function excluirUsuario(index) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  carregarUsuarios();
}

/* =====================
   BLOQUEIOS BÁSICOS
===================== */
document.addEventListener("contextmenu", e => e.preventDefault());
