// ===== ADMIN =====
const ADMIN_USER = "Gremiis";
const ADMIN_PASS = "Sintia1404+";

// ===== USUÁRIOS DEMO =====
let usuarios = [
  { user: "joao", senha: "123", saldo: 100 },
  { user: "maria", senha: "123", saldo: 100 }
];

// ===== LOGIN ADMIN =====
function loginAdmin() {
  const u = document.getElementById("login").value.trim();
  const p = document.getElementById("senha").value.trim();
  if (u === ADMIN_USER && p === ADMIN_PASS) {
    sessionStorage.setItem("adminLogado", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Usuário ou senha incorretos";
  }
}

function checkAdmin() {
  if (sessionStorage.getItem("adminLogado") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.removeItem("adminLogado");
  sessionStorage.removeItem("userAtivo");
  window.location.href = "index.html";
}

function show(id) {
  document.querySelectorAll(".painel").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ===== LOGIN USUÁRIO =====
function loginUser() {
  const u = document.getElementById("userLogin").value.trim();
  const p = document.getElementById("userSenha").value.trim();
  const usuario = usuarios.find(x => x.user === u && x.senha === p);
  if (usuario) {
    sessionStorage.setItem("userAtivo", u);
    window.location.href = "painel-user.html";
  } else {
    document.getElementById("userMsg").innerText = "Usuário inválido";
  }
}

function checkUser() {
  if (!sessionStorage.getItem("userAtivo")) window.location.href = "user.html";
}

// ===== PAINEL USUÁRIO =====
function showUser(id) {
  document.querySelectorAll(".conteudo .painel").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ===== CASSINO DEMO =====
function jogarSlot(jogo) {
  const resultado = Math.random() > 0.5 ? "Ganhou!" : "Perdeu!";
  alert(`${jogo} - ${resultado}`);
}

// ===== BÔNUS & CASHBACK =====
function roletaBonus() {
  const premio = Math.floor(Math.random() * 50) + 1;
  document.getElementById("mensagemBonus").innerText =
    `Parabéns! Você ganhou R$${premio} de bônus!`;
}
