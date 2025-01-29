import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { FormConsultaContrato } from "./consultar-clientes.viewmodel";
import { SituacaoContrato } from "../../../../shared/constants/situacao-contrato";

@Injectable()
export class ConsultaClienteContratoContext {
    public formConsulta: FormGroup<FormConsultaContrato>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = formBuilder.group(new FormConsultaContrato());
    }

    public InitForm(form: FormConsultaContrato) {
        this.formConsulta = this.formBuilder.group(form);
    }
    public Combos = {
        SituacaoContratos: SituacaoContrato,
      }
}