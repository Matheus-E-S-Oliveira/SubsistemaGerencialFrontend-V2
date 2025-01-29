export interface ClienteDto {
    id: string;
    nome: string;
    cpf: string;
    situacao: number;
    email: string;
    telefone: string;
}
export interface EnderecoClienteDto {
    enderecoId: string;
    uf: string;
    cidade: string;
    cep: string;
    rua: string;
    bairro: string;
    numero: string;
    complemento: string;
}

export interface ClienteComEnderecoDto {
    id: string;
    nome: string;
    cpf: string;
    situacao: number;
    email: string;
    telefone: string;
    enderecos: EnderecoClienteDto[];
    fazendas: FazendaDto[];
}

export interface FazendaDto {
    id: string;
    clienteId: string
    codigoFazenda: string;
    nome: string;
    dataCriacaoFazenda: Date;
    quantidadeAnimais: number;
}

export interface ClienteContratoDto {
    id: string;
    clienteId: string;
    fazendaId: string;
    nomeCliente: string;
    nomeFazenda: string;
    codigoContrato: string;
    dataInicopagamento: Date;
    dataFimTryal: Date;
    assinadoPeloPortal: boolean;
    situacao: number;
    codigoObjetoFazenda: string;
}