// credenciais (hash simples)
const USUARIO = "Gremiis";
const SENHA_HASH = btoa("Sintia1404+"); // base64 (simples, mas melhor que texto puro)

function entrar() {
  const u = document.getElementById("login").value;
  const s = document.getElementById("senha").value;

  if (u === USUARIO && btoa(s) === SENHA_HASH) {
    localStorage.setItem("logado", "admin");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText = "Login ou senha incorretos";
  }
}

function verificarLogin() {
  if (localStorage.getItem("logado") !== "admin") {
    window.location.href = "index.html";
  }
}

function sair() {
  localStorage.removeItem("logado");
  window.location.href = "index.html";
}

function mostrar(id) {
  document.querySelectorAll(".painel").forEach(p => p.classList.add("escondido"));
  document.getElementById(id).classList.remove("escondido");
}
