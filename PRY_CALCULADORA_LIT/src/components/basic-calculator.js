import { LitElement, html, css, unsafeCSS } from 'lit';

// Importar bootstrap local como texto usando ?inline
import bootstrapStyles from '../vendor/bootstrap/css/bootstrap.min.css?inline';

export class BasicCalculator extends LitElement {

    // Estilos del Shadow DOM
    static styles = [
        unsafeCSS(bootstrapStyles), // Bootstrap cargado dentro del shadow
        css`
      :host {
        display: block;
        max-width: 360px;
        margin: 0 auto;
      }

      .screen {
        height: 80px;
        font-size: 2rem;
      }
    `
    ];

    static properties = {
        display: { type: String },
        firstValue: { type: Number },
        operator: { type: String },
        resetNext: { type: Boolean }
    };

    constructor() {
        super();
        this.display = "0";
        this.firstValue = null;
        this.operator = null;
        this.resetNext = false;
    }

    // ---------------------------
    // MÉTODOS DE LA CALCULADORA
    // ---------------------------
    appendNumber(num) {
        if (this.resetNext) {
            this.display = num;
            this.resetNext = false;
            return;
        }

        if (num === "." && this.display.includes(".")) return;

        this.display = this.display === "0" ? num : this.display + num;
    }

    chooseOp(op) {
        this.firstValue = parseFloat(this.display);
        this.operator = op;
        this.resetNext = true;
    }

    clear() {
        this.display = "0";
        this.firstValue = null;
        this.operator = null;
        this.resetNext = false;
    }

    compute() {
        if (this.firstValue === null || !this.operator) return;

        const second = parseFloat(this.display);
        let result = 0;

        switch (this.operator) {
            case "+": result = this.firstValue + second; break;
            case "-": result = this.firstValue - second; break;
            case "*": result = this.firstValue * second; break;
            case "/":
                result = second === 0 ? "Error" : this.firstValue / second;
                break;
        }

        this.display = String(result);
        this.firstValue = null;
        this.operator = null;
        this.resetNext = true;
    }

    // ---------------------------
    // TEMPLATE
    // ---------------------------
    render() {
        return html`

      <div class="container p-3 bg-dark text-white rounded">

        <!-- Pantalla -->
        <div class="row mb-3">
          <div class="col">
            <input 
              class="form-control text-end fw-bold"
              readonly 
              .value=${this.display}
            >
          </div>
        </div>

        <!-- 7 - 8 - 9 - / -->
        <div class="row g-2 mb-2">
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("7")}>7</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("8")}>8</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("9")}>9</button>
          </div>
          <div class="col-3">
            <button class="btn btn-warning w-100 py-3" @click=${() => this.chooseOp("/")}>/</button>
          </div>
        </div>

        <!-- 4 - 5 - 6 - * -->
        <div class="row g-2 mb-2">
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("4")}>4</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("5")}>5</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("6")}>6</button>
          </div>
          <div class="col-3">
            <button class="btn btn-warning w-100 py-3" @click=${() => this.chooseOp("*")}>*</button>
          </div>
        </div>

        <!-- 1 - 2 - 3 - - -->
        <div class="row g-2 mb-2">
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("1")}>1</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("2")}>2</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("3")}>3</button>
          </div>
          <div class="col-3">
            <button class="btn btn-warning w-100 py-3" @click=${() => this.chooseOp("-")}>-</button>
          </div>
        </div>

        <!-- 0 - . - AC - + -->
        <div class="row g-2 mb-2">
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber("0")}>0</button>
          </div>
          <div class="col-3">
            <button class="btn btn-light w-100 py-3" @click=${() => this.appendNumber(".")}>.</button>
          </div>
          <div class="col-3">
            <button class="btn btn-danger w-100 py-3" @click=${() => this.clear()}>AC</button>
          </div>
          <div class="col-3">
            <button class="btn btn-warning w-100 py-3" @click=${() => this.chooseOp("+")}>+</button>
          </div>
        </div>

        <!-- = (full width) -->
        <div class="row g-2">
          <div class="col-12">
            <button class="btn btn-success w-100 py-3" @click=${() => this.compute()}>=</button>
          </div>
        </div>

      </div>
    `;
    }
}

customElements.define('basic-calculator', BasicCalculator);
