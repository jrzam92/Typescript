//Crear interfaces 
// Cree una interfaz para validar el auto (el valor enviado por paraametro)
interface Auto{
    encender:boolean;
    velocidadMaxima:number;
    acelerar():void;
}

const condicirBatimovil=(auto:Auto):void=>{

auto.encender=true;
auto.velocidadMaxima=100;
auto.acelerar();
}

const batiMovil:Auto={
    encender:false,
    velocidadMaxima:300,
    acelerar(){
        console.log(".....¡¡¡¡¡¡¡rrrrrruuuuuuuuuuuuhhhhmmm!!!!!");
    }
}


    //Cree una interfaz con que permita utiilizar el siguiente objeto 
    //utilizando propiedades opcionales 
    interface Guason{
        reir?:boolean;
        comer?:boolean;
        llorar?:boolean;

    }

    const guaseon:Guason={
        reir:true,
        comer:true,
        llorar:false

    }

    const reir=(guason:Guason):void=>{
        if(guaseon.reir){
            console.log("¡¡¡¡HAHAHAHAHA!!!!");
            
        }
    }

    //Cree una interfaz para la siguiente funcion 


    interface fnGothicCity{
        (citizen:string[]):number
    }
    const ciudadGotica:fnGothicCity=(citizen:string[]):number=>{
        return citizen.length;
    }

    //Cree una interfaz que oblique a crear una clase con las siguientes propiedades y metodos 
    interface IPersona{
        Nombre:string;
        Edad:number;
        Sexo:string;
        EstadoCivil:string;
        imprimirBio():void;
    }
    /**
     * Propiedades
     * Nombre
     * Edad
     * Sexo
     * Estado civil
     * ImprimirBio():void //en consola una breve descripcion
     */
    class Persona implements IPersona{
        Nombre: string;
        Edad: number;
        Sexo: string;
        EstadoCivil: string;
        imprimirBio(): void {
           console.log("Descripciom Personita!!!");
           
        }
}