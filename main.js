const valor1    = document.querySelector(".valor1")
const valor2    = document.querySelector(".valor2")
const somar     = document.querySelector(".somar")
const subtrair  = document.querySelector(".subtrair")
const multiplicar  = document.querySelector(".multiplicar")
const dividir  = document.querySelector(".dividir")
const result    = document.querySelector(".result")

somar.addEventListener("click", () => {
    let numb1 = parseInt(valor1.value)
    let numb2 = parseInt(valor2.value)              
    result.innerText = numb1 + numb2    
});

subtrair.addEventListener("click", () => {
    let numb1 = parseInt(valor1.value)
    let numb2 = parseInt(valor2.value)              
    result.innerText = numb1 - numb2    
});

multiplicar.addEventListener("click", () => {
    let numb1 = parseInt(valor1.value)
    let numb2 = parseInt(valor2.value)              
    result.innerText = numb1 * numb2    
});

dividir.addEventListener("click", () => {
    let numb1 = parseInt(valor1.value)
    let numb2 = parseInt(valor2.value)              
    result.innerText = numb1 / numb2            
});




