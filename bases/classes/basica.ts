// class Avenger{
//     ///Se comentan porque se usan directamente en el constructor
//     // private hero_name:string="";
//     // private hero_team:string="";
//     // public hero_real_name?:string="";

//     ///Variable statica inicial 
//     static avgAge:number=35;
//     static getAvgAge(){
//         return this;
//     }
//     /**
//      *
//      */
//     constructor(
//         private hero_name:string,
//         private hero_team:string,
//         public hero_real_name?:string,
//         avgAge:number=45
//         ) {
//             Avenger.avgAge=avgAge
//             ///Se comentan ya que se estan usando ya, como parametros
//         // this.hero_name=hero_name;
//         // this.hero_team=hero_team;
//         // this.hero_real_name=hero_real_name
//     }
//     public bio(){
//         return `${this.hero_name} equipo ${this.hero_team}`
//     }
    
// }
// console.log("Antes de ...");

// console.log(`Edad de Antman:${Avenger.avgAge}`);


// const antman:Avenger=new Avenger('Antman','Captain','Scott Lang');
// console.log(antman);
// console.log("Despues de ...");
// console.log(`Edad de Antman:${Avenger.avgAge}`);

// console.log(antman.bio);
// console.log(Avenger.getAvgAge());

