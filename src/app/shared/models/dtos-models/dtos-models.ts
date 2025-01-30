export interface LabelPipeDto {
    label: string;
    pipes: string[];
}
export interface ItemDto {
    [key: string]: any;
}

export interface ComboDto{
    [key: string]: any;
    label: string[];
    pipes: string[];
}

export const labelPipeData: LabelPipeDto[] = [
    { label: 'UF do cliente', pipes: ['nullEmptyCheck'] },
    { label: 'Cidade do cliente', pipes: ['nullEmptyCheck'] },
    { label: 'CEP do cliente', pipes: ['nullEmptyCheck', 'formatarCep'] },
    { label: 'Rua do cliente', pipes: ['nullEmptyCheck'] },
    { label: 'Bairro do cliente', pipes: ['nullEmptyCheck'] },
    { label: 'Numero do cliente', pipes: ['nullEmptyCheck'] },
    { label: 'Complemento do cliente', pipes: ['nullEmptyCheck'] }
];

export const labelPipeDataFazenda: LabelPipeDto[] = [
    { label: 'Código da fazenda', pipes: ['nullEmptyCheck'] },
    { label: 'Nome da fazenda', pipes: ['nullEmptyCheck'] },
    { label: 'Data da criação da fazenda', pipes: ['nullEmptyCheck', 'date: \'dd/MM/yyyy\''] },
    { label: 'Quantidade de animais', pipes: ['nullEmptyCheck'] }
];