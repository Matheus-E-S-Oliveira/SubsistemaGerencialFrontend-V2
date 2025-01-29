import { FormControl } from "@angular/forms";
import { SituacaoContrato } from "../../../../shared/constants/situacao-contrato";

export class FormConsultaContrato{
   public nomeCliente: FormControl<string | null>;
   public nomeFazenda: FormControl<string | null>;
   public situacao: FormControl<any>;

   public constructor (){
    this.nomeCliente = new FormControl('');
    this.nomeFazenda = new FormControl('');
    this.situacao = new FormControl(SituacaoContrato.TODOS.valor);
   }
}