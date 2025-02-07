export interface ClienteDto {
    id: string;
    nome: string;
    cpf: string;
    situacao: number;
    email: string;
    telefone: string;
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


export interface DadosGerais {
    valoresAReceberPorMes: Record<string, number>;
    licencasCompradasPorMes: Record<string, Record<number, number>>;
    receitaPorMes: Record<string, number>;
    valoresAReceberAcumulado: Record<string, number>;
    receitaAcumulada: Record<string, number>;
}

export interface LicencasStatus {
    totalLicencaIndefinido: number
    totalLicencaAtiva: number;
    totalLicencaExpirado: number;
    totalLicencaSuspenco: number;
    licencaIndefinido: number;
    licencaAtiva: number;
    licencaExpirado: number;
    licencaSuspenco: number;
}

export interface DistribuicaoPorPlanos {
    planoIndefinido: number,
    planoMensal: number,
    planoAnual: number,
    planoGratuito: number,
    planoTeste: number
    totalPlanoIndefinido: number;
    totalPlanoMensal: number;
    totalPlanoAnual: number;
    totalPlanoGratuito: number;
    totalPlanoTeste: number;
}

export interface DistrbuicaoDePlanosAnual {
    licencasPorAno: Record<string, Record<number, number>>;
}

export interface DistribuicaoClinetesPorFormaPagamento {
    formaPagamentoIndefinido: number;
    formaPagamentoDinheiro: number;
    formaPagamentoCartaoCredito: number;
    formaPagamentoPix: number;
    formaPagamentoBoleto: number;
    totalFormaPagamentoIndefinido: number;
    totalFormaPagamentoDinheiro: number;
    totalFormaPagamentoCartaoCredito: number;
    totalFormaPagamentoPix: number;
    totalFormaPagamentoBoleto: number;
}

export interface DadosDiversos {
    boletosEmitidosEsteMes: number;
    faturaPertoDoVencimento: number;
    faturaVencidas: number;
    licencaVencida: number;
    licencaPertoDeVencer: number;
}

export interface Clientes {
    clienteAtivos: number;
    clienteInativos: number;
    clienteInderteminados: number;
}

export interface Contrato {
    assindo: number;
    nAssinado: number;
    indefinido: number;
    ativo: number;
    inativo: number;
    gratuito: number;
    teste: number;
}