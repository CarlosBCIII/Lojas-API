import { DatePipe, DecimalPipe } from "@angular/common";

export interface Usuarios{

  nome:string;
  id: number;
  salario:DecimalPipe;
  inicioContrato:DatePipe;
  finalContrato:DatePipe;
  metaID:number
  metaAtiva:boolean;
  tipo: string;
  ativo:boolean;

};

export interface FormadePagamento{

  id: number;
  nome:string;
  tipo:string;
  ativo:boolean;

};



