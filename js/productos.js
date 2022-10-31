
/*inicio de Logica*/

const formulario = document.getElementById('form');
const nombre =document.getElementById('name');
const rango =document.getElementById('rangoForm');
const servicio =document.getElementById('serv');

localStorage.setItem ('parrafo','titulo');

let titulo = document.getElementById('parrafo1');

const boton = document.getElementById('boton');

boton.onclick = () => {
    titulo.innerText = 'Has clickado OK, necesitamos confirmar su identidad:';
    titulo.style.color="green";
    boton.remove();
    formulario.style.display='block';    
}

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(nombre.value);
    console.log(rango.value);
    console.log(servicio.value);
})









