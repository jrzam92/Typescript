interface Client{
    name:string;
    age?:number;
    address:Adress;//Usando la interfaz de direccion
    getFullAddress(id:string):string//como tal es una interfaz que esta esperando al mandarlo en la clase 
}
//Interfaz de direccion 
interface Adress{
    id:number;
    zip:string;
    city:string;
}
const client:Client={
    name:'Raul',
    age:30,
    address:{
        id:125,
        zip:'036458',
        city:'Ottawa'
    },
    getFullAddress(id:string){
        return this.address.city;
    }
}
const client2:Client={
    name:'Jose',
    age:29,
    address:{
        id:126,
        zip:'456845',
        city:'Toronto'
    },
    getFullAddress(id:string){
        return this.address.city;
    }
}