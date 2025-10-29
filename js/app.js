document.addEventListener('DOMContentLoaded', () => {
/*region
    // 1. Datos de ejemplo (variables: foto....)
    // 2. Filtrar por categoría seleccionada
    // 3. Pintar fotos (una principal y las relacionadas)
    // 4. Intercambiar imagen principal al hacer clic
    // intercambio de src
#endregion*/

/* ========== CAPTURAR ELEMENTOSDEL DOM ========== */


/* ========== VARIABLES ========== */


/* ========== FUNCIONES ========== */


/* ========== EVENTOS: ========== */
        /* = delegaciónes = */


/* ========== INVOCACIÓNES ========== */


/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */
})

document.addEventListener('DOMContentLoaded', () => {
  /* ========== 1. CAPTURAR ELEMENTOS DEL DOM ========== */
  const btn = document.querySelector('#btn');
  const output = document.querySelector('#output');

  /* ========== 2. VARIABLES Y ESTADO ========== */
  let counter = 0;

  /* ========== 3. FUNCIONES ========== */
  const updateOutput = () => output.textContent = counter;
  const handleClick = () => {
    counter++;
    updateOutput();
  };

  /* ========== 4. EVENTOS Y DELEGACIONES ========== */
  btn.addEventListener('click', handleClick);

  /* ========== 5. INVOCACIONES INICIALES ========== */
  updateOutput();
});





