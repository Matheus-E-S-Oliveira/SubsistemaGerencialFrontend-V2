import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormConsultarBoletos } from "./consulta-boletos.viewmodel";


@Injectable()
export class ConsultaBoletosContext {
    public formConsulta: FormGroup<FormConsultarBoletos>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = this.formBuilder.group(new FormConsultarBoletos());
    }

    public InitForm(form: FormConsultarBoletos) {
        this.formConsulta = this.formBuilder.group(form);
    }
}