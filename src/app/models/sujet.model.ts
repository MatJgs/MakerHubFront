import {Argument} from "./arguments.model";

export interface Sujet{
  id:number;
  titre:string;
  dateCreation:Date;
  description:string;
  argumentations:Argument[];
}
