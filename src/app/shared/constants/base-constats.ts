import { ComboItem } from "../models/combo-item.model";

export class ComboBase {
    public constructor() { }

    protected GetListItens(): ComboItem[]{
        return Object.getOwnPropertyNames(this).filter(key => ((this as any)[key])?.hasOwnProperty('valor')).map(key => {
            const ListItem = (this as any)[key];
            
            let comboItem: ComboItem = {
                valor: ListItem.valor,
                descricao: ListItem.descricao
            }

            return comboItem;
        });
    }
} 

export class ListItem{
    public constructor(
        public valor: any = null,
        public descricao: string = '') {
    }
}