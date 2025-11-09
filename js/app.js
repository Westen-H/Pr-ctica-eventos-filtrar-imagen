document.addEventListener('DOMContentLoaded', () => {
/*region para hacer:
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

/* =============================== */
/* ========== VARIABLES ========== */
/* =============================== */

    /*================== arrays: imagenes / botones ==================*/
  // crear la función con array de imagenes, y la función los botones de filtro y guardarlos en una costanta, bien de manera directa, o despues de haber creado la función.
const botonesDeFiltro = () => {
  const arrayBotones = [
    { id: 1, titulo: 'Mar', categoria: 'mar' },
    { id: 3, titulo: 'Señales', categoria: 'senales'},
    { id: 4, titulo: 'Edificio', categoria: 'edificio'},
    { id: 5, titulo: 'Arena', categoria: 'arena'},
    { id: 6, titulo: 'Cosa', categoria: 'cosa'},
    // { id: 2, titulo: 'Foto 2', categoria: 'mar'},
    // { id: 7, titulo: 'Foto 7', categoria: 'edificio'}
  ]
  return arrayBotones;
}

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
// 2º manera: guardar en una constante la función
const imagenes = obtenerImagenes();


/*================== portada: ==================*/

// porta que saldra en grande
const portadaInicial = { 
   titulo: imagenes[0].titulo,
   src: imagenes[0].src, 
   alt: imagenes[0].alt 
  };

  // comprobaciones: 
  console.log('Imagenes:', imagenes.length, imagenes);
  console.log('Portada:', portadaInicial);


/* =============================== */
/* ========== FUNCIONES ========== */
/* =============================== */

//#region: CREAR BOTONES:
const pintarBotones = () => {
  const arrayBotones = botonesDeFiltro(); // Obtenemos el array de objetos que representan las categorías
  //console.log(arrayBotones, "desde pintar botones")

  // vacias buttonsBox antes de nada.
  buttonsBox.innerHTML = "";

  arrayBotones.forEach((elemento) => {
    const boton = document.createElement('BUTTON');
    boton.textContent = elemento.titulo // asignar texto visible
    boton.dataset.cat = elemento.categoria; // guardar su categoría; con dataset más flexible que id
    boton.setAttribute('aria-pressed', 'false'); // estado inicial no activo
    boton.type = "button"; // tipo boton
    buttonsBox.appendChild(boton) // añadir a la caja
  })
}
//#endregion

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


// Filtrar imagen por categoria;
let categoriaActiva = null; // No hay categoría activa al inicio; se define al seleccionar una opción.
let portadaActual = portadaInicial; // portada actual comienza con la inicial ya creada 
let listaVisible = imagenes; // la lista que se esta mostrando  (por defecto)

function filtrarPorCategoria(categoria) {
  // Devuelve todas las imágenes cuya categoria coincide
  return imagenes.filter(imagen => imagen.categoria === categoria);
}
/* ========== EVENTOS: ========== */
        /* = delegaciónes = */
    // Escuchar todos los clics del documento:
    
document.addEventListener('click', (ev) => {
  console.log(ev.target);

  // Detectar que el clic sea en uno de los bottones de categoría
  const btn = ev.target.closest("#buttons button"); // Usar closset para mayor precisión

   if(btn) {
    // Desactivar votones y activar solo el clicado
    document.querySelectorAll('#buttons button').forEach(botn => {
      botn.classList.remove('active');
      botn.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    // Guardamos la categoría seleccionada
    categoriaActiva = btn.dataset.cat;
    console.log(btn.dataset.cat); // compobar la escucha

    // Filtrar las imágenes según la categoría
    const lista = filtrarPorCategoria(categoriaActiva); // Se crea array de imagenes de una categoria concreta
    if(!lista.length) return; // evitar que pinte si no hay fotos

    listaVisible = lista; // fijar la lista visible al filtro actual

    // La primera imagen filtrada se usa como portada.
    // Creamos un objeto independiente para no modificar el array original con .titulo / .src / .alt
    portadaActual = {
      titulo: lista[0].titulo,
      src: lista[0].src,
      alt: lista[0].alt
    };

    // Pintar portada en grande y las relacionadas de la categoria
    pintarPortada(portadaActual); // Ya esta hecha
    pintarCards(lista.slice(1)); // Imagenes relacionadas = el resto
    return;
  }

  // Hacer que una miniatura clicada pase a portada
    // detectar clic en miniatura -> sucar la imagen dentro de una .card
  const imagenMini = ev.target.closest('.card img');

  // Confirmar que hay categoria activa
  if (imagenMini) {
    ev.preventDefault() // Evitar el comportamiento por defecto del enlace a hacer clic
    // Obtener los datos de la imagen

    const fig = imagenMini.closest('.card');
    const tituloH4 = fig.querySelector('h4');
    
    const srcRelativo = imagenMini.getAttribute('src'); // SRC RELATIVO para que coincida con el array/estado

    // cambiar portada por medio de copia
    portadaActual = {
      titulo: tituloH4 ?tituloH4.textContent : "", // colocar titulo si existe
      src: srcRelativo,
      alt: imagenMini.alt
    };
     
    // reordenar lista visible sin cambiar qué se muestra: portada anterior → pasa a ser “resto” 
    const resto = listaVisible.filter(foto => foto.src !==portadaActual.src); // Quitar la nueva portada de la lista para evitar duplicado
    const listaFinal = [portadaActual, ...resto];  // Indicar nuevo ordern

    // Pintar otra vez portada + imagenes relacionadas
    pintarPortada(portadaActual) // Pintar todo de nuevo
    pintarCards(listaFinal.slice(1)) //el resto
    return;
  };


})


/* ========== INVOCACIÓNES ========== */
pintarBotones(botonesDeFiltro)
pintarPortada(portadaInicial);
pintarCards(imagenes);

/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
})

