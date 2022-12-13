import { StringifyOptions } from "querystring";

export interface PokeServiceRes {
    count :number ; 
    next :string;
    previous :null;
    results :IPokemon[];
}

export interface IPokemon {
   name : string;
   url : String;
}
export class Pokemon {
    constructor(public id:string, public name:string, public url:string){
        
    }
}
