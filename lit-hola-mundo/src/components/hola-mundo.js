import { LitElement,html,css } from "lit";  
export class HolaMundo extends LitElement {
    static properties = {
        contador: {type: Number}
    };
    constructor() {
        super();
        this.contador = 0;
    }
    render() {
        return html
        `
        <h1>Hola Mundo con Lit</h1>
        <button @click="${this.incrementar}">Contador: ${this.contador}</button>
        `;
    }
    incrementar() {
        this.contador++;
    }

}
customElements.define("hola-mundo", HolaMundo);