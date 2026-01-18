// ================= CONFIG =================
const ADMIN_USER = "Gremiis";
const ADMIN_PASS = "Sintia1404+";

// ================= LOGIN =================
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

// ================= VERIFICA =================
function checkAdmin() {
  if (sessionStorage.getItem("adminLogado") !== "true") {
    window.location.href = "index.html";
  }
}

// ================= SAIR =================
function logout() {
  sessionStorage.removeItem("adminLogado");
  window.location.href = "index.html";
}
