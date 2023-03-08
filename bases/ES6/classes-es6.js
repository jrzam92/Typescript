class Avenger{
    name;
    power;

    constructor(name='No name',power=0){
        this.name=name;
        this.power=power;
    }
}

class FlyingAvenger extends Avenger{
    flying;
    constructor(name,power){
        super(name,power);//es como el base para recargar que tiene en c#
        this.flying=true
    }
}

const hulk=new Avenger('Hulk',9000)
const falcon=new FlyingAvenger('Falcon',1500)

console.log(hulk);
console.log(falcon);