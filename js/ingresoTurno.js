// storage + eventos en formulario 
localStorage.setItem("usuarioRegistrado", "pedro@mail.com")

window.onload = () => {
    let boton = document.querySelector("button");

    boton.onclick = (event) => {
    event.preventDefault()
    let inputUsuario = document.getElementById("MailUsuario").value;
    if (inputUsuario == localStorage.getItem("usuarioRegistrado")) {
        document.querySelector("#mensajeUsuario").innerText = "Ingreso con éxito " + inputUsuario
        sessionStorage.setItem("sesionIniciada", true)
        sessionStorage.setItem("MailUsuario", inputUsuario)
        console.log(sessionStorage);
        
    } else {
        document.querySelector("#mensajeUsuario").innerText = "Intente de nuevo"
    }      
    }

    let formulario = document.querySelector("form1");
    let inputPass =document.getElementById("pass");
    inputPass.addEventListener("keyup", () => {
        let mensaje;
        if (inputPass.value.length < 8) { 
            mensaje = "La contraseña debe tener más de 8 caracteres"
            document.getElementById("mensajePass").innerText = mensaje
        } else {
            document.getElementById("mensajePass").innerText = " "
        }
        })
}