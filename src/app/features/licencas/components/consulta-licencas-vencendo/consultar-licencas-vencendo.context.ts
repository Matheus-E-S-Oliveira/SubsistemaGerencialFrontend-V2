import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SituacaoContrato } from "../../../../shared/constants/situacao-contrato";
import { FormConsultaLicencaVencendo } from "./consultar-licencas-vencendo.viewmodel";

@Injectable()
export class ConsultaLicencasVencendoContext {
    public formConsulta: FormGroup<FormConsultaLicencaVencendo>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = formBuilder.group(new FormConsultaLicencaVencendo());
    }

    public InitForm(form: FormConsultaLicencaVencendo) {
        this.formConsulta = this.formBuilder.group(form);
    }
    public Combos = {
        SituacaoContratos: SituacaoContrato,
      }
}