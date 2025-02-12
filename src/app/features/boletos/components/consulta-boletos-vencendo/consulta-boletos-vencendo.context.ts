import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormConsultarBoletosVencendo } from "./consulta-boletos-vencendo.viewmodel";


@Injectable()
export class ConsultaBoletosVencendoContext {
    public formConsulta: FormGroup<FormConsultarBoletosVencendo>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = this.formBuilder.group(new FormConsultarBoletosVencendo());
    }

    public InitForm(form: FormConsultarBoletosVencendo) {
        this.formConsulta = this.formBuilder.group(form);
    }
}