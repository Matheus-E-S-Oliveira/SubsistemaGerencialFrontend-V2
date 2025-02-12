import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormConsultarBoletosVencidos } from "./consulta-boletos-vencidos.viewmodel";

@Injectable()
export class ConsultaBoletosVencidosContext {
    public formConsulta: FormGroup<FormConsultarBoletosVencidos>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = this.formBuilder.group(new FormConsultarBoletosVencidos());
    }

    public InitForm(form: FormConsultarBoletosVencidos) {
        this.formConsulta = this.formBuilder.group(form);
    }
}