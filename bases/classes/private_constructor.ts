class Apocalipsis{
    static intance: Apocalipsis;

    private constructor(public name:string) {  
    }
    static callApocalipsis():Apocalipsis{

        if(!Apocalipsis.intance){
            Apocalipsis.intance=new Apocalipsis("Soy apocalipsis el único ....xD")
        }
        return Apocalipsis.intance;
    }
}


const apocalipsis1=Apocalipsis.callApocalipsis();
const apocalipsis2=Apocalipsis.callApocalipsis();
const apocalipsis3=Apocalipsis.callApocalipsis();

console.log(apocalipsis1,apocalipsis2,apocalipsis3);
