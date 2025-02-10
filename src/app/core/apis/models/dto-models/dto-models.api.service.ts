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
export interface EnderecoFazenda {
    id: string;
    fazendaId: string;
    comercialUf: string | null;
    comercialCidade: string | null;
    comercialCep: string | null;
    comercialRua: string | null;
    comercialBairro: string | null;
    comercialNumero: string | null;
    comercialComplemento: string | null;
    faturaUf: string | null;
    faturaCidade: string | null;
    faturaCep: string | null;
    faturaRua: string | null;
    faturaBairro: string | null;
    faturaNumero: string | null;
    faturaComplemento: string | null;
    fazenda: any | null;  // Se você tiver uma estrutura para a fazenda, substitua o 'any' por ela
    dataCriacao: string;
    dataAtualizacao: string;
}

export interface FazendaComEnderecoDto {
    id: string;
    clienteId: string;
    nome: string;
    nomeCliente: string;
    codigoFazenda: string;
    dataCriacaoFazenda: string;
    quantidadeAnimais: number;
    enderecoFazendas: EnderecoFazenda[];
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

export interface BoletoDto {
    id: string;
    pagamentoId: string;
    nome: string;
    cpf: string;
    nossoNumero: string;
    seuNumero: string;
    dataEntrada: Date;
    dataVencimento: Date;
    dataLimitePagamento: Date
    valorMora: number;
    valorDesconto: number;
    valorAcrescimos: number;
    valor: number;
    valorCobrado: number;
    statusPagamento: number;
}