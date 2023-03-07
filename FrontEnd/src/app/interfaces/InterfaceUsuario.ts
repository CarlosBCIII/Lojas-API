import { DatePipe, DecimalPipe } from "@angular/common";

export interface UsuarioInterface{

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

export interface FormadePagamentoInterface{

  id: number;
  nome:string;
  tipo:string;
  ativo:boolean;

};



