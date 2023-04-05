import {Utilisateur} from "./utilisateur.model";
import {Sujet} from "./sujet.model";

export interface Argument{
  id:number;
  dateCreation:Date;
  argument:string;
  avis:boolean;
  argumentBy:Utilisateur;
  sujet:Sujet;
}
