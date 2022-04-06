class Negociacao {

    constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime()); //Adicionando o _ para que as propriedades só podem ser acessadas pelos metodos da classe (De fora é impossível acessa-los, ou modificar seus valores)
        this._quantidade = quantidade;
        this._valor = valor;

        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    };

    get data() {
        return new Date(this._data.getTime());
    };

    get quantidade() {
        return this._quantidade;
    };

    get valor() {
        return this._valor;
    };

}