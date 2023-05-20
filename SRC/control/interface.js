button.addEventListener("click", () =>{
    let valor = inputName.value

    if(localStorage.meuArr){
        array = JSON.parse(localStorage.getItem("meuArr"))
    }
    
    
    array.push(valor)
    inputName.value = ""
    localStorage.setItem("meuArr",JSON.stringify(array))
    
   


})

result.style.display = "none"

button2.addEventListener("click", () =>{
    let username = "arodrigues"
    let password = 1937;
    let list = JSON.parse(localStorage.getItem("meuArr"))


    if(inputUsername.value == username && inputPassword.value == password){
        result.style.display = "block"
        result.innerHTML = "<h1>Lista de Convidados</h1>" 
        result.innerHTML += list.join("<br>")

    
    }else{
        result.style.display = "block"
        result.innerHTML = "Usuário ou Senha incorreto"
    }
})