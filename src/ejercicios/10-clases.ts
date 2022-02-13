/*
    ===== Código de TypeScript =====
*/

class PersonaNormal {

    constructor(
        public nombre:string,
        public direccion?:string,    
    ) {}
}

class Hero extends PersonaNormal {
    // alterEgo:string;
    // edad:number;
    // nombreReal:number;

    // constructor(alterEgo:string){
    //     this.alterEgo=alterEgo;
    // }

    constructor(
        public alterEgo?:string, 
        public edad?:number,
        public nombreReal?:string,
    ){
        super(nombreReal, 'Trujillo, Peru');
    }
}

const ironman = new Hero('Ironman', 25, 'Tony');
// ironman.edad=25;

console.log('Ironman :', ironman);