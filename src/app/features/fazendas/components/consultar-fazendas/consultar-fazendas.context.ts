import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormConsultarFazendas } from "./consultar-fazendas.viewmodel";

@Injectable()
export class ConsultaFazendaContext {
    public formConsulta: FormGroup<FormConsultarFazendas>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = this.formBuilder.group(new FormConsultarFazendas());
    }

    public InitForm(form: FormConsultarFazendas) {
        this.formConsulta = this.formBuilder.group(form);
    }
}