

/*Funcion contructora*/
function Buques (atqAntiaereo, atqAntiterrestre, atqBuques, probCriticos, dañoPortaviones, blindaje, durabilidad, velEvasion, precision, capArmamento, velNavegacion, compTactica, recAutomatica, capAlmacenamiento, velRecoleccion ) {
    this.atqAntiaereo       = atqAntiaereo;
    this.atqAntiterrestre   = atqAntiterrestre;
    this.atqBuques          = atqBuques;
    this.probCriticos       = probCriticos;
    this.dañoPortaviones    = dañoPortaviones;
    this.blindaje           = blindaje;
    this.durabilidad        = durabilidad;
    this.velEvasion         = velEvasion;
    this.precision          = precision;
    this.capArmamento       = capArmamento;
    this.velNavegacion      = velNavegacion;
    this.compTactica        = compTactica;
    this.recAutomatica      = recAutomatica;
    this.capAlmacenamiento  = capAlmacenamiento;
    this.velRecoleccion     = velRecoleccion;
}

/* Fragatas */
const knox = new Buques (891, 201, 292, 100, 120, 34, 648, 0, 2500, 187, 230, 4000, 3000, 4000, 1100,);

const oliverHazard = new Buques (1322, 410, 441, 650, 200, 64, 1106, 750, 2390, 187, 260, 4000, 3000, 8000, 3700,);

const duke = new Buques (1546, 1170, 778, 800, 280, 109, 2336, 800, 2405, 187, 290, 4000, 3000, 20000, 7700,);

const independence = new Buques (2625, 3308, 1355, 900, 360, 181, 3669, 1080, 3450, 187, 320, 4000, 3000, 40000, 12000,);

const fragatas = [knox, oliverHazard, duke, independence]

/* Submarinos */
const losAngeles = new Buques (0, 307, 327, 550, 80, 43, 772, 200, 2380, 117, 240, 2000, 3000, 5500, 1000,);

const trafalgar = new Buques (0, 684, 574, 700, 160, 77, 1376, 325, 2395, 117, 270, 2000, 3000, 11000, 3400,);

const seawolf = new Buques (0, 1634, 898, 850, 240, 127, 2750, 400, 2410, 117, 300, 2000, 3000, 27500, 9250,);

const typhoon = new Buques (0, 2960, 1409, 1000, 320, 144, 4128, 855, 2850, 117, 320, 2000, 3000, 42000, 13818,);

const submarinos = [losAngeles, trafalgar, seawolf, typhoon]

/* Destructores */
const sovremenny = new Buques (1120, 348, 376, 1500, 240, 52, 909, 500, 3578, 150, 250, 2000, 3000, 7200, 700,);

const ticonderoga = new Buques (1402, 826, 627, 1875, 320, 92, 1731, 625, 3600, 150, 280, 2000, 3000, 15600, 3300,);

const arleighBurke = new Buques (1661, 2414, 1069, 2250, 400, 147, 3440, 750, 3623, 150, 310, 2000, 3000, 37200, 10350,);

const daring = new Buques (2500, 4178, 1291, 2300, 480, 217, 5504, 765, 2700, 150, 320, 2000, 3000, 43000, 15040,);

const destructores = [sovremenny, ticonderoga, arleighBurke, daring]

const buques = [fragatas, destructores, submarinos] 

    /*Prompt alert confirm concatenacion ingreso*/
let confirmar = confirm('Esta ingresando en un area restringida, ¿es parte del personal autorizado?')
if (confirmar) {
     alert ('Has clickado OK, necesitamos confirmar su identidad:');
        let nombre = prompt('Nombres:')
        let apellido= prompt ('Apellidos:')
            alert (`Almirante ${nombre} ${apellido} se ha autorizado su ingreso`)

    /*While if*/
    function seleccionUnidad() {

        let tipoBuque;

    do {
        tipoBuque = (prompt("Bienvenido, ha ingresado a la base de datos de la armada, indiquenos que tipo de unidad militar necesita revisar:\n1)Fragata\n2)Submarinos\n3)Destructor"))
    } while(tipoBuque != 1 && tipoBuque != 2 && tipoBuque != 2)

        if (tipoBuque == 1){
           tipoFragata = (prompt("Fragatas disponibles:\n1)Knox\n2)Oliver Hazard\n3)Duke\n4)Independense"))
                if (tipoFragata == 1){
                    alert(JSON.stringify(knox, null, 4));  
                } else if (tipoFragata == 2){
                    alert(JSON.stringify(oliverHazard, null, 4)); 
                } else if (tipoFragata == 3){
                    alert(JSON.stringify(duke, null, 4)); 
                } else if (tipoFragata == 4){
                    alert(JSON.stringify(independence, null, 4)); 
            }         
        } else if (tipoBuque == 2){
            tipoSubmarino = (prompt("Submarinos disponibles:\n1)Los Angeles\n2)Trafalgar\n3)Seawolf\n4)Typhoon"))
                if (tipoSubmarino == 1){
                    alert(JSON.stringify(losAngeles, null, 4));  
                } else if (tipoSubmarino == 2){
                    alert(JSON.stringify(trafalgar, null, 4)); 
                } else if (tipoSubmarino == 3){
                    alert(JSON.stringify(seawolf, null, 4)); 
                } else if (tipoSubmarino == 4){
                    alert(JSON.stringify(typhoon, null, 4)); 
            }           
        } else if (tipoBuque == 3){
            tipoDestructor = (prompt("Destructores disponibles:\n1)Sovremenny\n2)Ticonderoga\n3)Arleigh Burke\n4)Daring"))
                if (tipoDestructor == 1){
                    alert(JSON.stringify(sovremenny, null, 4));  
                } else if (tipoDestructor == 2){
                    alert(JSON.stringify(ticonderoga, null, 4)); 
                } else if (tipoDestructor == 3){
                    alert(JSON.stringify(arleighBurke, null, 4)); 
                } else if (tipoDestructor == 4){
                    alert(JSON.stringify(daring, null, 4)); 
            } 
    }

//Metodos y operaciones

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

const comprar = () => {
    if (confirm("¿Desea revisar nuestra lista de buques disponibles en orden de valor?")){
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }
    agregarProductos();
}

comprar();




    /*iteracion*/  
    alert ('Se detecto una manipulación en nuestro registros, por favor presione tres veces aceptar para identificarse como humano');
  
    for (let i = 3; i > 0; i--) {
        alert (i);
    }
    }

   
    } else {
    alert ('Puede seguir revisando el resto de la página');
}

let seleccion = seleccionUnidad (); 

