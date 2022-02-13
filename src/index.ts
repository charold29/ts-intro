/*
    ===== Código de TypeScript =====
*/

class Hero {
    // alterEgo:string;
    // edad:number;
    // nombreReal:number;

    // constructor(alterEgo:string){
    //     this.alterEgo=alterEgo;
    // }
    
    constructor(
        public alterEgo?:string, 
        public edad?:number,
        public nombreReal?:string
    ){}
}

const ironman = new Hero('Ironman', 25, 'Tony');
// ironman.edad=25;

console.log('Ironman :', ironman);