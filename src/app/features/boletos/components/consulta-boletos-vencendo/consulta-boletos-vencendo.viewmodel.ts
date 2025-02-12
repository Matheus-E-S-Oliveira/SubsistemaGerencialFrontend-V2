import { FormControl } from "@angular/forms";

export class FormConsultarBoletosVencendo {
  public nome: FormControl<string | null>;
  public cpf: FormControl<string | null>;

  public constructor() {
    this.nome = new FormControl('');
    this.cpf = new FormControl('');
  }

}
