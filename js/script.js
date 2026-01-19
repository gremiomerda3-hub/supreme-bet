const ADMIN_USER = "Gremiis";
const ADMIN_PASS = "Sintia1404+";

let users = JSON.parse(localStorage.getItem("users")||"[]");
let current=null;

function loginAdmin(){
 const u=login.value.trim(); const p=senha.value.trim();
 if(u===ADMIN_USER && p===ADMIN_PASS){sessionStorage.setItem("adminLogado","true");location.href="dashboard.html"}
 else msg.innerText="Usuário ou senha incorretos";
}

function loginUser(){
 let u=users.find(x=>x.name===uuser.value);
 if(u){sessionStorage.setItem("userAtivo",u.name);location.href="painel-user.html"}
 else umsg.innerText="Usuário não existe";
}

function checkAdmin(){if(!sessionStorage.getItem("adminLogado")) location.href="index.html"}
function checkUser(){if(!sessionStorage.getItem("userAtivo")) location.href="user.html"}
function logout(){sessionStorage.clear();location.href="index.html"}

function show(id){document.querySelectorAll(".painel").forEach(p=>p.classList.add("hidden"));document.getElementById(id).classList.remove("hidden")}
function showUser(id){document.querySelectorAll(".conteudo .painel").forEach(p=>p.classList.add("hidden"));document.getElementById(id).classList.remove("hidden")}

function loadAdmin(){
 document.getElementById("a_users").innerText=users.length;
 let t=document.getElementById("admList");t.innerHTML="";
 users.forEach((u,i)=>t.innerHTML+=`<tr><td>${u.name}</td><td>${u.saldo}</td><td><button onclick="block(${i})">Bloq</button></td><td><button onclick="del(${i})">X</button></td></tr>`)
}

function createUser(){users.push({name:newUser.value,saldo:Number(newSaldo.value||0),cash:0});save();loadAdmin()}
function del(i){users.splice(i,1);save();loadAdmin()}
function block(i){alert(`Usuário ${users[i].name} bloqueado DEMO`)}

function loadUser(){current=users.find(x=>x.name===sessionStorage.getItem("userAtivo"));saldo.innerText=current.saldo;cash.innerText=current.cash}
function bet(v){let win=Math.random()>0.5?v:-v;current.saldo+=win;if(win<0)current.cash+=Math.abs(win)*0.1;save();loadUser()}
function slot(name){let r=Math.random()>0.5?"Ganhou":"Perdeu";slotres.innerText=`${name}: ${r}`;current.saldo+=r==="Ganhou"?10:-5;save();loadUser()}
function spinBonus(){let b=[5,10,20,0][Math.floor(Math.random()*4)];current.saldo+=b;bonusres.innerText=`Bônus ${b}`;save();loadUser()}
function deposit(v){current.saldo+=v;save();loadUser();wmsg.innerText="Depósito DEMO ok"}
function withdraw(v){if(current.saldo>=v){current.saldo-=v;wmsg.innerText="Saque DEMO ok"}else wmsg.innerText="Saldo insuficiente";save();loadUser()}
function save(){localStorage.setItem("users",JSON.stringify(users))}
