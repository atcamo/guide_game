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









