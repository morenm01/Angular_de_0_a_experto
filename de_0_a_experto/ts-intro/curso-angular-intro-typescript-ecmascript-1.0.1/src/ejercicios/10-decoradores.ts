



function classDecorator<T extends { new (...args: any[]): {} }>

(constructor: T) 
{
    return class extends constructor {
      newProperty = 'new Property';
      hello = 'override';
    };
  }

//para que no de error para usar decoradores es necesario ctrl/ para activar esta propiedad del fichero tsconfig
//"experimentalDecorators": true, 
/*Un decorador es esto que usamos para extender las clases*/
@classDecorator
  class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);