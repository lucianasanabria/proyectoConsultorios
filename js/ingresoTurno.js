// 4ta preentrega
// -Almacenar en Storage la información ingresada por el usuario 
// en la entrega anterior. Puede ser un texto, números, o 
// combinación.
// -Mostrar al usuario dicha información (ya guardada en nuestra 
// base de datos).
// -Crear estructura de datos en formato JSON, puede ser de 
// productos, servicios o usuarios.
// -Leerla desde un archivo JS y crear una función que nos deje 
// agregar un nuevo elemento a la base de datos, siguiendo la 
// estructura de los elementos anteriores, a través de un 
// formulario.

// local Storage 
let UsuarioRegistrado = localStorage.setItem("mailRegistrado", "jorge@mail.com")
console.log(UsuarioRegistrado);

window.onload = () => {
    let boton = document.querySelector("button");

    boton.onclick = () => {
        let inputUsuario = document.getElementById("MailUsuario").value;
    }
}