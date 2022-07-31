let nome = document.querySelector('[data-nome]').value
console.log(nome)
let email = document.querySelector('[data-email]').value

let assunto = document.querySelector('[data-assunto]')
let button = document.querySelector('[data-btn]')


function validaEmail(event){

    event.preventDefault()

    let frase = document.querySelector('[data-span]')

    let fraseOk = document.querySelector('[data-span-msg]')

    if(nome.value || email.value || assunto.value == ""){
       frase.classList.remove('remove')

       setTimeout(function(){

        frase.classList.add("remove")
       },800)
    }else{
        fraseOk.classList.remove('remove')

        setTimeout(function(){
 
         fraseOk.classList.add("remove")
        },800)
    }

    return 
}

button.addEventListener("click", validaEmail)