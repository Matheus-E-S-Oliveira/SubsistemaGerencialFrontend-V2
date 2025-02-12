import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { SituacaoContrato } from "../../../../shared/constants/situacao-contrato";
import { FormConsultaLicencasVencidas } from "./consulta-licencas-vencidas.viewmodel";

@Injectable()
export class ConsultaLicencasVencidasContext {
    public formConsulta: FormGroup<FormConsultaLicencasVencidas>;

    constructor(private formBuilder: FormBuilder) {
        this.formConsulta = formBuilder.group(new FormConsultaLicencasVencidas());
    }

    public InitForm(form: FormConsultaLicencasVencidas) {
        this.formConsulta = this.formBuilder.group(form);
    }
    public Combos = {
        SituacaoContratos: SituacaoContrato,
      }
}