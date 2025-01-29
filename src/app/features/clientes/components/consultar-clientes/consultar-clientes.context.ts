import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormConsultarClientes } from "./consultar-clientes.viewmodel";

@Injectable()
export class ConsultaClienteContext {
    public formConsulta: FormGroup<FormConsultarClientes>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = this.formBuilder.group(new FormConsultarClientes());
    }

    public InitForm(form: FormConsultarClientes) {
        this.formConsulta = this.formBuilder.group(form);
    }
}