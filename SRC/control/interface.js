button.addEventListener("click", () =>{
    let valor = inputName.value

    if(localStorage.meuArr){
        array = JSON.parse(localStorage.getItem("meuArr"))
    }
    
    
    array.push(valor)
    localStorage.setItem("meuArr",JSON.stringify(array))
    result.innerHTML = array.join("<br>")


})