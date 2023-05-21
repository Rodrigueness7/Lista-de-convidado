

let resultado = document.getElementById("container")

let myList = JSON.parse(localStorage.getItem("meuArr"))

resultado.innerHTML = "<h1>Listas de Convidados</h1>" 
resultado.innerHTML += myList.join("<br>")

console.log(myList)