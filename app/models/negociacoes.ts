import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adicionar(negoaciacao: Negociacao){
        this.negociacoes.push(negoaciacao)
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }
}