
//Las interfaces si se pueden expandir(añadir mas elementos o propiedades)
//Uso en peticiones de http
interface Hero{
    name:string;
    age:number;
    power:string[];
    getName? : ()=>string;
}
// Se puede especificar el objeto 
// age?-> quiere decir que puede ser opcional 
let _flash:Hero={
    name:'Barry Allen',
    age:24,
    power:["super velocidad","viajar en el tiempo"]
};

let _superman:Hero={
    name:'Clark Kent',
    age:65,
    power:["super","volar"],
    getName() {
        return this.name;
    },
};