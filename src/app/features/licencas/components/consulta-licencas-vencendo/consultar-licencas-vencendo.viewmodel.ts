import { FormControl } from "@angular/forms";

export class FormConsultaLicencaVencendo{
   public nomeCliente: FormControl<string | null>;
   public cpfCliente: FormControl<string | null>;

   public constructor (){
    this.nomeCliente = new FormControl('');
    this.cpfCliente = new FormControl('');
   }
}