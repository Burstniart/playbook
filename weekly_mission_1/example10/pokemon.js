// Crea un archivo pokemon.js, ahí crea la clase que necesitas para correr el archivo main.js. 
// Deberás exportarla usando ESM.
// Necesitarás usar export default.
// La clase tiene la misma implementación que el ejercicio anterior.
// Finalmente corre: node main.js

/*
  export default nos permite exportar esta clase e importara

  import MyLogger from './logger.js'
*/

export default class Logger {
    // 
    constructor(name){
        // Al crear este objeto se guardarán estos valores
        this.name = name
      }
    
      // Saluda con el nombre del constructor
      sayHello() {
        console.log('Mi pokemon ' + this.name + ' te saluda!!!')
      }
  }

