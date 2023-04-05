import {Argument} from "./arguments.model";
import {Utilisateur} from "./utilisateur.model";

export interface Sujet{
  id:number;
  titre:string;
  dateCreation:Date;
  description:string;
  madeBy:Utilisateur;
  argumentations:Argument[];
}
