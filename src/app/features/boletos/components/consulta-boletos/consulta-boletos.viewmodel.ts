import { FormControl } from "@angular/forms";
import moment, { Moment } from "moment";

export class FormConsultarBoletos {
  public nome: FormControl<string | null>;
  public cpf: FormControl<string | null>;
  public data: FormControl<Moment | null>;

  public constructor() {
    this.nome = new FormControl('');
    this.cpf = new FormControl('');
    this.data = new FormControl(moment());
  }

}
