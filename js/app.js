document.addEventListener('DOMContentLoaded', () => {
/*region
    // 1. Datos de ejemplo (variables: foto....)
    // 2. Filtrar por categoría seleccionada
    // 3. Pintar fotos (una principal y las relacionadas)
    // 4. Intercambiar imagen principal al hacer clic
    // intercambio de src
#endregion*/

/* ========== CAPTURAR ELEMENTOS DEL DOM ========== */
const headerMain = document.querySelector('.main-header');
const cardContainer = document.querySelector('.card-container');
const buttonsBox = document.querySelector('#buttons');
const main = document.querySelector('.main.content')

/* ========== VARIABLES ========== */
function obtenerImagenes() {
  return [
  { id: 1, titulo: 'Foto 1', categoria: 'mar', src: 'aseets/imagen/viajes-1.jpg', alt: 'Persona tumbada en hamaca junto al mar' },
    { id: 2, titulo: 'Foto 2', categoria: 'mar', src: 'aseets/imagen/viajes-2.jpg', alt: 'Pasarela sobre agua turquesa y cabañas' },
    { id: 3, titulo: 'Foto 3', categoria: 'senales', src: 'aseets/imagen/viajes-3.jpg', alt: 'Poste con señales de distintas ciudades' },
    { id: 4, titulo: 'Foto 4', categoria: 'edificio', src: 'aseets/imagen/viajes-4.jpg', alt: 'Detalle cerámico de la Plaza de España en Sevilla' },
    { id: 5, titulo: 'Foto 5', categoria: 'edificio', src: 'aseets/imagen/viajes-5.jpg', alt: 'Puente de la Plaza de España de Sevilla' },
    { id: 6, titulo: 'Foto 6', categoria: 'mar', src: 'aseets/imagen/viajes-6.jpg', alt: 'Camino costero con arco natural junto al mar' },
    { id: 7, titulo: 'Foto 7', categoria: 'edificio', src: 'aseets/imagen/viajes-7.jpg', alt: 'Castillo sobre colina y casas blancas al atardecer' }
  ]
}
// guardar en una constante la función
const imagenes = obtenerImagenes();

// porta que saldra en grande
const portadaInicial = { 
   titulo: imagenes[0].titulo,
   src: imagenes[0].src, 
   alt: imagenes[0].alt 
  };

  // comprobaciones: 
  console.log('Imagenes:', imagenes.length, imagenes);
  console.log('Portada:', portadaInicial);



/* ========== FUNCIONES ========== */
//#region: CREAR PORTADA 
function crearPortada(datos) {
  const { titulo, src, alt} = datos;
  // crear el div para la portada
  const divPortada = document.createElement("div");
  // creal su clase
  divPortada.classList.add("portada");

  // crear el titulo h3 y la img y le damos valores
  const portadaH3 = document.createElement("h3");
  portadaH3.textContent = titulo;

  const portadaImg = document.createElement("img");
  portadaImg.src = src;
  portadaImg.alt = alt;

  // incluir en el div el h3 y la img
  divPortada.append(portadaH3, portadaImg);
  return divPortada;
}

// Probar que funcione:
console.log(crearPortada(portadaInicial));

function pintarPortada(datos) {
  // hay que asegurarse si hay una portada en la pantalla y sino crearla
  const anteriorPortada = document.querySelector('.portada');
  if (anteriorPortada) anteriorPortada.remove();

  // crea la nueva portada
  const nuevaPorta = crearPortada(datos);

  // incluirla en el header
  headerMain.appendChild(nuevaPorta);
};

  // probar que funcione si funciona incluirlo en la invocación
  //pintarPortada(portadaInicial);
//#endregion 

//#region: CREAR LAS CARDS
function crearCard(imagen) {
  const {titulo, categoria, src, alt } = imagen;

    // Crear la etiqueta <figure>
  const figure = document.createElement('figure');
  figure.classList.add('card');

    // Crear la etiqueta <figcaption> con un p y un h4
  const figcaption = document.createElement('figcaption');
  const figP = document.createElement('p');
  figP.textContent = 'Título del'

  const figH4 = document.createElement('h4');
  figH4.textContent = titulo;

    // meter en el figcaption el p y el h4
  figcaption.append(figP, figH4);

  // Crear un enlace <a>  que contenga un <img>
  const enlace = document.createElement('a');
  enlace.href = '#'

  const img = document.createElement('img');
  img.src = src;
  img.alt = alt;

  // meter img dentro de a. Y a dentro de figure
  enlace.append(img);
  figure.append(figcaption, enlace);

  return figure // lo devolvemos
}
// probar que funcione
console.log(crearCard(imagenes[0]));

//#endregion

function pintarCards (lista) {
  // liar el contener por si acaso
  cardContainer.innerHTML = '';

  // crear y añadir cada card
  lista.forEach(element => {
    const card = crearCard(element);
    cardContainer.appendChild(card);
  });
}
// Comprovar que funcione: si funciona colocar en invocaciones
// pintarCards(imagenes);

/* ========== EVENTOS: ========== */
        /* = delegaciónes = */


/* ========== INVOCACIÓNES ========== */
pintarPortada(portadaInicial);
pintarCards(imagenes);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
})

