const ADMIN_USER="Gremiis";
const ADMIN_PASS="Sintia1404+";

function loginAdmin(){
  const u=login.value,p=senha.value;
  if(u===ADMIN_USER && p===ADMIN_PASS){
    sessionStorage.setItem("admin","1");
    location.href="dashboard.html";
  }else msg.innerText="Acesso negado";
}

function checkAdmin(){
  if(!sessionStorage.getItem("admin")) location.href="index.html";
}

function logout(){
  sessionStorage.clear(); location.href="index.html";
}

function show(id){
  document.querySelectorAll(".painel").forEach(p=>p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function carregarUsuarios(){
  const usuarios=JSON.parse(localStorage.getItem("usuarios"))||[];
  const lista=document.getElementById("listaUsuarios");
  if(!lista) return;
  lista.innerHTML="";
  usuarios.forEach((u,i)=>{
    lista.innerHTML+=`
      <tr>
        <td>${u.nome}</td>
        <td>R$ ${u.saldo.toFixed(2)}</td>
        <td><button onclick="delUser(${i})">❌</button></td>
      </tr>`;
  });
  document.getElementById("qtdUsers").innerText=usuarios.length;
}

function criarUsuario(){
  const nome=u_nome.value;
  const saldo=parseFloat(u_saldo.value);
  if(!nome||isNaN(saldo))return;
  const usuarios=JSON.parse(localStorage.getItem("usuarios"))||[];
  usuarios.push({nome,saldo});
  localStorage.setItem("usuarios",JSON.stringify(usuarios));
  carregarUsuarios();
}

function delUser(i){
  const u=JSON.parse(localStorage.getItem("usuarios"))||[];
  u.splice(i,1);
  localStorage.setItem("usuarios",JSON.stringify(u));
  carregarUsuarios();
}
