import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    public adicionar(negoaciacao: Negociacao){
        this.negociacoes.push(negoaciacao)
    }

    public lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}