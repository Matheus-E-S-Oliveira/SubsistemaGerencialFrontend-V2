import { FormControl } from "@angular/forms";

export class FormConsultarFazendas {
  public nome: FormControl<string | null>;
  public codigo: FormControl<string | null>;

  public constructor() {
    this.nome = new FormControl('');
    this.codigo = new FormControl('');
  }

}
