
const ADMIN={user:"Gremiis",pass:"Sintia1404+"};

function loginAdmin(){
 if(login.value===ADMIN.user&&senha.value===ADMIN.pass){
  localStorage.setItem("admin","1");
  init();
  location.href="dashboard.html";
 } else msg.innerText="Login inválido";
}

function checkAdmin(){
 if(localStorage.getItem("admin")!=="1") location.href="index.html";
}

function init(){
 if(!localStorage.getItem("usuarios")){
  localStorage.setItem("usuarios",JSON.stringify([
   {user:"joao",saldo:200},
   {user:"maria",saldo:350}
  ]));
  localStorage.setItem("apostas","[]");
  localStorage.setItem("saldoCasa","50000");
 }
}

function show(id){
 document.querySelectorAll(".painel").forEach(p=>p.classList.add("hidden"));
 document.getElementById(id).classList.remove("hidden");
 loadDashboard();
}

function loadDashboard(){
 let saldo=Number(localStorage.getItem("saldoCasa"));
 saldoCasa.innerText="Saldo da Casa: R$ "+saldo.toFixed(2);

 let apostas=JSON.parse(localStorage.getItem("apostas"));
 listaApostas.innerHTML="";
 apostas.forEach(a=>{
  let li=document.createElement("li");
  li.innerText=`${a.user} | R$${a.valor} | odd ${a.odd} | ${a.resultado}`;
  listaApostas.appendChild(li);
 });

 let usuarios=JSON.parse(localStorage.getItem("usuarios"));
 listaUsuarios.innerHTML="";
 usuarios.forEach(u=>{
  let li=document.createElement("li");
  li.innerText=`${u.user} - Saldo: R$ ${u.saldo}`;
  listaUsuarios.appendChild(li);
 });

 drawChart(apostas);
}

function novaAposta(){
 let apostas=JSON.parse(localStorage.getItem("apostas"));
 let usuarios=JSON.parse(localStorage.getItem("usuarios"));
 let saldoCasa=Number(localStorage.getItem("saldoCasa"));

 let v=Number(valor.value), o=Number(odd.value);
 let lucro=resultado.value==="ganhou"?-(v*o-v):v;
 saldoCasa+=lucro;

 apostas.push({user:user.value,valor:v,odd:o,resultado:resultado.value});
 localStorage.setItem("saldoCasa",saldoCasa);
 localStorage.setItem("apostas",JSON.stringify(apostas));
 loadDashboard();
}

function drawChart(apostas){
 let g=apostas.filter(a=>a.resultado==="perdeu").length;
 let p=apostas.filter(a=>a.resultado==="ganhou").length;
 new Chart(grafico,{type:"doughnut",
 data:{labels:["Casa Ganhou","Casa Perdeu"],datasets:[{data:[g,p]}]}});
}

function logout(){localStorage.clear();location.href="index.html";}
