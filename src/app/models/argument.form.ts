import {Validators} from "@angular/forms";

export interface ArgumentForm{
  argument:string;
  avis:boolean;
  userLogin:string;
  sujetId:number;
}
export const ARGUMENT_FORM={
  'argument':['',[Validators.minLength(10),Validators.maxLength(300)]],
  'avis':[],
  'userLogin':[],
  'sujetId':[]
}
