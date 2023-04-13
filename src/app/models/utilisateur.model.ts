import {Sujet} from "./sujet.model";
import {Argument} from "./arguments.model";

export interface Utilisateur{
  id:number;
  role:string;
  firstName:string;
  lastName:string;
  email:string;
}
