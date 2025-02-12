import { FormControl } from "@angular/forms";
import { SituacaoContrato } from "../../../../shared/constants/situacao-contrato";

export class FormConsultaLicencasVencidas{
   public nomeCliente: FormControl<string | null>;
   public cpfCliente: FormControl<string | null>;

   public constructor (){
    this.nomeCliente = new FormControl('');
    this.cpfCliente = new FormControl('');
   }
}