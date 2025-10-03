const enviar = document.querySelector("#formulario")
const mensajeFinal = document.querySelector("#mostrarMensaje")

const email=document.querySelector("#email")
const contraseña=document.querySelector("#password")

const camposImput=[email,contraseña]


camposImput.forEach(imput=>{
    imput.addEventListener("blur",(evento)=>{
        if (evento.target.value.trim()==="") {
            imput.classList.add("fallo")
            imput.nextElementSibling.classList.add("spam")
            imput.nextElementSibling.innerText= `Ingresa tu ${imput.name}`
            
        }else{
            imput.classList.remove("fallo")
            imput.nextElementSibling.classList.remove("spam")
            imput.nextElementSibling.innerText=""

        }
    })
})



enviar.addEventListener("submit",(event) =>{
    event.preventDefault()
    let validar = true;
    camposImput.forEach(imput=>{
        if (imput.value.trim()==="") {
            imput.classList.add("fallo")
            imput.nextElementSibling.classList.add("spam")
            imput.nextElementSibling.innerText= `Ingresa tu ${imput.name}`
        validar= false
        }
    })

    

    if(!validar){return 
    }
    mensajeFinal.style.display ="block"
    enviar.reset()
    setTimeout(()=>{
        mensajeFinal.style.display="none"
    },4000)

})