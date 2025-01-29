import { ComboBase, ListItem } from "./base-constats";

export enum SituacaoContratoDefinicao {
    Todos = '',
    Indefinido = 0,
    Ativo = 1,
    Inativo = 2,
    Gratuito = 3,
    Teste = 4,
}
export const SituacaoContratoPipe: { [key: number | string]: string } = {
    [SituacaoContratoDefinicao.Todos]: 'Todos',
    [SituacaoContratoDefinicao.Indefinido]: 'Indefinido',
    [SituacaoContratoDefinicao.Ativo]: 'Ativo',
    [SituacaoContratoDefinicao.Inativo]: 'Inativo',
    [SituacaoContratoDefinicao.Gratuito]: 'Gratuito',
    [SituacaoContratoDefinicao.Teste]: 'Teste'
}

export class SituacaoContratos extends ComboBase {
    public readonly TODOS = new ListItem(SituacaoContratoDefinicao.Todos, 'Todos');
    public readonly INDEFINIDO = new ListItem(SituacaoContratoDefinicao.Indefinido, 'Indefinido');
    public readonly ATIVO = new ListItem(SituacaoContratoDefinicao.Ativo, 'Ativo');
    public readonly INATIVO = new ListItem(SituacaoContratoDefinicao.Inativo, 'Inativo');
    public readonly GRATUITO = new ListItem(SituacaoContratoDefinicao.Gratuito, 'Gratuito');
    public readonly TESTE = new ListItem(SituacaoContratoDefinicao.Teste, 'Teste');

    public readonly GetOptions = this.GetListItens();
}

export const SituacaoContrato = new SituacaoContratos();
