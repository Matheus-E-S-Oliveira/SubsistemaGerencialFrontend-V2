import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CpfFormatPipe } from "../pipes/cpf-format.pipe";
import { NullEmptyCheckPipe } from "../pipes/null-empty-check.pipe";
import { SituacaoClientePipe } from "../pipes/situacao-cliente.pipe";
import { AssinadoPeloPortalPipe } from "../pipes/assinado-pelo-portal.pipe";
import { SituacaoContratoPipes } from "../pipes/situacao-contrato.pipe";
import { FormatacaoCepPipe } from "../pipes/formatar-cep.pipe";
import { DynamicPipe } from "../pipes/dynamic.pipe";
import { CurrencyNumberPipe } from "../pipes/currency-number.pipe";
import { StatusPagamento } from "../constants/status-pagamento";
import { StatusPagamentoPipe } from "../pipes/status-pagamento.pipe";

@NgModule({
    declarations: [
        CpfFormatPipe,
        NullEmptyCheckPipe,
        SituacaoClientePipe,
        AssinadoPeloPortalPipe,
        SituacaoContratoPipes,
        FormatacaoCepPipe,
        DynamicPipe,
        CurrencyNumberPipe,
        StatusPagamentoPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CpfFormatPipe,
        NullEmptyCheckPipe,
        SituacaoClientePipe,
        AssinadoPeloPortalPipe,
        SituacaoContratoPipes,
        FormatacaoCepPipe,
        DynamicPipe,
        CurrencyNumberPipe,
        StatusPagamentoPipe
        
    ]
})
export class PipeModule { }