export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negoaciacao) {
        this.negociacoes.push(negoaciacao);
    }
    lista() {
        return this.negociacoes;
    }
}
