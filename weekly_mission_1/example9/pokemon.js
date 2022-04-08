
class pokemon {
    constructor(name){
      // Al crear este objeto se guardarán estos valores
      this.name = name
    }
  
    // Saluda con el nombre del constructor
    sayHello() {
      console.log('Mi pokemon ' + this.name + ' te saluda!!!')
    }
    // Imprime el mensaje ingresado
    sayMessage(message) {
      console.log('Mi pokemon ' + this.name + ' dice: ' + message)
    }
  }
  
  module.exports = pokemon // Instanciación del objeto y se exporta

  