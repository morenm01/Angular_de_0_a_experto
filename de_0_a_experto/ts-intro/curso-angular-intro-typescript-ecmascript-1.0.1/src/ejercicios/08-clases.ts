/*
    ===== Código de TypeScript =====
*/

/*La direfencia entre clases e interfases:
en las clases se puede implementar métodos, en las interfaces solo se puede definir
*/

/*Visibilidad
public:  se acceder desde fuera de la clase, se aplica public por defecto
private: solo se puede acceder desde dentro de la clase
static:  se puede acceder a los métodos sin una instancia de la clase
*/

class PersonaNormal {

    constructor( 
        public nombre: string, 
        public direccion: string 
    )  {}

}


class Heroe extends PersonaNormal {

    /*No se suelen declarar las propiedades aquí sino como argumentos del constructor
        public alterEgo: string,
        public edad: number,
        public nombreReal: string*/


    constructor( 
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ) {
        //Toda clase que hereda debe llamar al constructor de la clase padre
        //no podemos usar this.nombreReal porque aún no hay ninguna instancia de esta clase, this no apunta a nada
        super( nombreReal, 'New York, USA' );
    }

}

const ironman = new Heroe('Ironman',45, 'Tony');

console.log(ironman);