
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

