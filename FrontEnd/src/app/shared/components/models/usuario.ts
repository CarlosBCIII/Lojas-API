import { DatePipe, DecimalPipe } from "@angular/common";
import { UsuarioInterface } from "src/app/interfaces/InterfaceUsuario";

export class UsuarioClass implements UsuarioInterface{

  nome!:string;
  id!: number;
  salario!:DecimalPipe;
  inicioContrato!:DatePipe;
  finalContrato!:DatePipe;
  metaID!:number
  metaAtiva!:boolean;
  tipo!: string;
  ativo!:boolean;

};
