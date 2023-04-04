import {Sujet} from "./sujet.model";
import {Argument} from "./arguments.model";

export interface Utilisateur{
  id:number;
  login:string;
  password:string;
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  sujets:Sujet[];
  arguments:Argument[];
}
