// llamado a la inicialización de la ruta 
// inicializando firebase

import { initRouter } from './route.js';

const init = () => {
  initRouter();
}

window.addEventListener('load', init);