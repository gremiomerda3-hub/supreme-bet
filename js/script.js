const ADMIN_USER = "Gremiis";
const ADMIN_PASS = "Sintia1404+";

function loginAdmin() {
  const u = document.getElementById("login").value;
  const p = document.getElementById("senha").value;

  if (u === ADMIN_USER && p === ADMIN_PASS) {
    sessionStorage.setItem("adminLogado", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("msg").innerText =
      "Usuário ou senha incorretos";
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

function show(id) {
  document.querySelectorAll(".painel").forEach(p =>
    p.classList.add("hidden")
  );
  document.getElementById(id).classList.remove("hidden");
}
