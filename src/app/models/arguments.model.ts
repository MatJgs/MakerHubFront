import {Utilisateur} from "./utilisateur.model";

export interface Argument{
  id:number;
  dateCreation:Date;
  argument:string;
  avis:boolean;
  argumentBy:Utilisateur;
}
