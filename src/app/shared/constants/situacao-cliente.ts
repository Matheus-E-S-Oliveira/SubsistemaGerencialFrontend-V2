export enum Situacao {
    Indefinido = 0,
    Ativo = 1,
    Inativo = 2,
  }
  
  export const SituacaoCliente: { [key: number]: string } = {
    [Situacao.Indefinido]: 'Indefinido',
    [Situacao.Ativo]: 'Ativo',
    [Situacao.Inativo]: 'Inativo',
  };