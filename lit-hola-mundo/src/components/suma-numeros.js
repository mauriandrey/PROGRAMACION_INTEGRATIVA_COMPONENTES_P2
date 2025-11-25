import { LitElement,html,css } from "lit";  
export class SumarNumeros extends LitElement {
    static properties = {
        num1: {type: Number},
        num2: {type: Number},
        num3: {type: Number},
        suma: {type: Number},

    };
    constructor() {
        super();
        this.num1 = 0;
        this.num2 = 0;
        this.num3 = 0;
        this.suma = 0;
    }
    render() {
        return html
        `
        <h2>Suma de Tres Números</h2>
        <input type="number" .value="${this.num1}" @input="${e => this.num1 = Number(e.target.value)}" placeholder="Número 1">
        <input type="number" .value="${this.num2}" @input="${e => this.num2 = Number(e.target.value)}" placeholder="Número 2">
        <input type="number" .value="${this.num3}" @input="${e => this.num3 = Number(e.target.value)}" placeholder="Número 3">
        <button @click="${this.suma_numeros}">Calcular Suma</button>
        <p>Resultado: ${this.suma}</p>
        `;
    }
    suma_numeros() {
        this.suma = this.num1 + this.num2 + this.num3;
    }

}
customElements.define("suma-numeros", SumarNumeros);