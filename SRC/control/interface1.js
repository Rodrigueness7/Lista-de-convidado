
let resultado = document.getElementById("container")

let myList = JSON.parse(localStorage.getItem("meuArr"))

resultado.innerHTML = "<h1>Listas de Convidados</h1>" 
resultado.innerHTML += myList.join("<br>")

link.addEventListener("click", ()=>{
    location.replace("http://127.0.0.1:5500/SRC/view/index.html")
})