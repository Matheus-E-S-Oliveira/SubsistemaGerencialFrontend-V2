import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CpfFormatPipe } from "../pipes/cpf-format.pipe";
import { NullEmptyCheckPipe } from "../pipes/null-empty-check.pipe";
import { SituacaoClientePipe } from "../pipes/situacao-cliente.pipe";

@NgModule({
    declarations: [
        CpfFormatPipe,
        NullEmptyCheckPipe,
        SituacaoClientePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CpfFormatPipe,
        NullEmptyCheckPipe,
        SituacaoClientePipe
    ]
})
export class PipeModule { }