import { DatePipe, DecimalPipe } from "@angular/common";

export interface UsuarioInterface{

  id?: number,
  nome:string,
  email:string,
  salario:number,
  inicioContrato:string,
  finalContrato?:string,
  metaID:string,
  metaAtiva:boolean,
  tipo: string,
  ativo:boolean

};

export interface FormadePagamentoInterface{

  id: number;
  nome:string;
  tipo:string;
  ativo:boolean;

};



