import {Validators} from "@angular/forms";

export interface SujetForm{
  titre:string;
  description:string;
  userLogin:string;
  argumentsId:number[];
}
export const SUJET_FORM={
  'titre':['',[Validators.maxLength(50),Validators.minLength(5)]],
  'description':['',[Validators.minLength(10),Validators.maxLength(300)]],
  'argumentsId':[],
  'userLogin':[]
}
