// class Avenger{
//     /**
//      *
//      */
//     constructor(public name:string,public realname:string) {
        
//         console.log("Constructor Avenger llamado"); 
        
//     }

//     public getFullname(){
//         return `${this.name} ${this.realname}`
//     }

//     get fullname(){
//         return `${this.name} ${this.realname}`
//     }
//     set fullname(name:string){
//         this.name=name;
//     }


// }
// class Xmen extends Avenger{
// /**
//  *
//  */
// constructor(name:string,realname:string,public isMutant:boolean) {
//     super(name,realname);
//     console.log("Constructor xmen llamado");
    
// }
 
// getFullnameXmen(){
    
//     console.log(super.getFullname());
    
// }
// }
// const wolverine=new Xmen("Wolverin","Logan",true)
// console.log(wolverine.getFullname());
// console.log(wolverine.fullname);
// wolverine.fullname="James"
// console.log(wolverine.fullname);
