



             
//            
             
//              input1.addEventListener('change', (e) => {
//                  console.log(e.target.value);
//              })
             
//              input2.addEventListener('change', (e) => {
//                  console.log(e.target.value);
//              })


const productos = [{ id: 1,  nombre: "Knox", precio: 30 },
                  {  id: 2,  nombre: "Fideo", precio: 70 },
                  {  id: 3,  nombre: "Pan"  , precio: 50},
                  {  id: 4,  nombre: "Flan" , precio: 100}];


for (const producto of productos) {
    let div = document.createElement('div');

    div.innerHTML = `
        <div class="container">
            <h3> ID: ${producto.id}</h3>
            <p> Producto: ${producto.nombre}</p>
            <b>$ ${producto.precio}</b>
        </div>
    `;

    document.body.appendChild(div);
}

   
    













class Producto {
constructor (id, nombre, precio, stock){
    this.id= id;
    this.nombre= nombre;
    this.precio= Number(precio);
    this.stock= stock;
}
actualizarStock(cantidad){
    this.stock= this.stock - cantidad;
}
}

const arrayProductos = [];
arrayProductos.push(new Producto (1, 'Knox', 10, 200));
arrayProductos.push(new Producto (2, 'Oliver', 35, 100));
arrayProductos.push(new Producto (3, 'Duke', 120, 50));
arrayProductos.push(new Producto (3, 'Independence', 450, 25));

//Precio: Menor a MAyor
const ordenarMenorMayor = () => {
arrayProductos.sort((a,b)=> a.precio - b.precio);
mostrarListaOrdenada();
}

//Precio: Mayor a menor
const ordenarMayorMenor = () => {
arrayProductos.sort((a,b)=> b.precio - a.precio);
mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
let array = [];
arrayProductos.forEach(producto => array.push(producto.nombre+" $"+producto.precio + ' Bitcoin'));
alert("Lista de precios:"+"\n"+array.join("\n"))
}

const agregarProductos = () => {
let otroProducto;
let productoNombre = "";
let productoCantidad = 0;
let total = 0;

do {
    productoNombre = prompt ('Por el momento solo podemos ofrecer fragatas, ¿que desea solicitar?:\na)Knox\nb)Oliver \nc)Duke\nd)Independence');
    productoCantidad = parseInt(prompt('¿Cuántos solicitara?'));

    while (Number.isNaN(productoCantidad)) {
        productoCantidad = parseInt(prompt ('¿Cuántos solicitara?'));
    }

    const producto = arrayProductos.find(producto => producto.nombre === productoNombre);

    if (producto) {
        total += producto.precio * productoCantidad;
        sincronizarStock(producto.nombre, productoCantidad, producto.stock);
    } else {
        alert('El producto no se encuentra en el catálogo.')
    }

    otroProducto = confirm('Desea agregar otro buque?');
} while (otroProducto)

obtenerDescuento(total);

};

const obtenerDescuento = (total) => {
if (total>=5000){
    total = total*0.90;
    alert("Por rango se aplicara un 10% de descuento");
}
obtenerPrecioDeEnvio(total);
}

const obtenerPrecioDeEnvio = (total) => {
let confirmacion = confirm("¿Se solicita para una misión fuera de nuestro pais?");
if (confirmacion && total>=500){
    alert("La Industria manufacturera aplica envío gratis por su compra $"+total);
}else if (confirmacion && total<500 && total!=0){
    total=total+5;
    alert("El envío cuesta $700. El total de tu compra asciende a $"+total);
}else{
    alert("El total de tu compra es $"+total);
}
}

const sincronizarStock = (producto, cantidad, stock) => {
switch (producto) {
    case arrayProductos[0].nombre:
        if (cantidad <= stock && arrayProductos[0].stock > 0) {
            arrayProductos[0].actualizarStock(cantidad);
        } else {
            alert("No hay stock suficiente de este producto.")
        }
        break;
    case arrayProductos[1].nombre:
        if (cantidad <= stock && arrayProductos[1].stock > 0) {
            arrayProductos[1].actualizarStock(cantidad);
        } else {
            alert("No hay stock suficiente de este producto.")
        }
        break;
    case arrayProductos[2].nombre:
        if (cantidad <= stock && arrayProductos[2].stock > 0) {
            arrayProductos[2].actualizarStock(cantidad);
        } else {
            alert("No hay stock suficiente de este producto.")
        }
        break;
}
};


//   /*While if*/
//   function seleccionUnidad() {

//     let tipoBuque;

// do {
//     tipoBuque = (prompt("Bienvenido, ha ingresado a la base de datos de la armada, indiquenos que tipo de unidad militar necesita revisar:\n1)Fragata\n2)Submarinos\n3)Destructor"))
// } while(tipoBuque != 1 && tipoBuque != 2 && tipoBuque != 2)

//     if (tipoBuque == 1){
//        tipoFragata = (prompt("Fragatas disponibles:\n1)Knox\n2)Oliver Hazard\n3)Duke\n4)Independense"))
//             if (tipoFragata == 1){
//                 alert(JSON.stringify(knox, null, 4));  
//             } else if (tipoFragata == 2){
//                 alert(JSON.stringify(oliverHazard, null, 4)); 
//             } else if (tipoFragata == 3){
//                 alert(JSON.stringify(duke, null, 4)); 
//             } else if (tipoFragata == 4){
//                 alert(JSON.stringify(independence, null, 4)); 
//         }         
//     } else if (tipoBuque == 2){
//         tipoSubmarino = (prompt("Submarinos disponibles:\n1)Los Angeles\n2)Trafalgar\n3)Seawolf\n4)Typhoon"))
//             if (tipoSubmarino == 1){
//                 alert(JSON.stringify(losAngeles, null, 4));  
//             } else if (tipoSubmarino == 2){
//                 alert(JSON.stringify(trafalgar, null, 4)); 
//             } else if (tipoSubmarino == 3){
//                 alert(JSON.stringify(seawolf, null, 4)); 
//             } else if (tipoSubmarino == 4){
//                 alert(JSON.stringify(typhoon, null, 4)); 
//         }           
//     } else if (tipoBuque == 3){
//         tipoDestructor = (prompt("Destructores disponibles:\n1)Sovremenny\n2)Ticonderoga\n3)Arleigh Burke\n4)Daring"))
//             if (tipoDestructor == 1){
//                 alert(JSON.stringify(sovremenny, null, 4));  
//             } else if (tipoDestructor == 2){
//                 alert(JSON.stringify(ticonderoga, null, 4)); 
//             } else if (tipoDestructor == 3){
//                 alert(JSON.stringify(arleighBurke, null, 4)); 
//             } else if (tipoDestructor == 4){
//                 alert(JSON.stringify(daring, null, 4)); 
//         } 
// }










