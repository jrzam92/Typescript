//Para los nulos o los tipos undefined se tienen que validar en el tsconfig en 
//la propiedad de strictNullChecks
//strictNullChecks ==> false acepta los nulos 
//strictNullChecks ==> true se encuentra en los undefined

// //Inicializacion indefinida
// let isActive
// console.log(isActive);
// //Inicializacion definida como null
// isActive=null
// console.log(isActive);

//Dependiendo de esta propiedad "strictNullChecks" puede que occurra un error o no ...
// let vacio:null = undefined;
// console.log(vacio);