// Agrego en pagina de ´profesionales´ especialidades y doctores en formato json
const jsonDeEspecialidades = ` [
{
    "especialidad": "Neurología",
    "profesional": "Dra. Felinda López",
    "imagen": "../aspecto/imagenes/Foto-perfil-dra neurología.jpg"
},

{
    "especialidad": "Gastroenterología",
    "profesional": "Dra. Griselda Castro",
    "imagen": "../aspecto/imagenes/Foto-perfil-dra gastroenterología.jpg"
},

{
    "especialidad": "Cirugía General",
    "profesional": "Dra. Javiera Ramirez",
    "imagen": "../aspecto/imagenes/Foto-perfil-dra cirugia gral.jpg"
}

] `

// convierto json a js
let jsonConvertido = JSON.parse(jsonDeEspecialidades)
console.log(jsonConvertido);

//recorrer el array jsonConvertido 
for (let i = 0; i < jsonConvertido.length; i++){
    //crear un article ?
    let article = document.createElement("article")

    //crear h3
    let h3 = document.createElement("h3")
    h3.innerText = jsonConvertido[i].especialidad

    //crear h4
    let h4 = document.createElement("h4")
    h4.innerText = jsonConvertido[i].profesional

    //crear imagen
    let img = document.createElement("img")
    img.src = jsonConvertido[i].imagen

    //ensamblo el article
    article.appendChild(h3)
    article.appendChild(h4)
    article.appendChild(img)

    //enviar article al html 
    document.getElementById("otrasEspecialidades").appendChild(article)
}