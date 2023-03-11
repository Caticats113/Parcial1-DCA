class reservaButton extends HTMLElement{
    static get observedAttributes(){
        return["reserva"];
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.onButtClick = this.onButtClick.bind(this);
    }

    connectedCallback(){
        this.assamble();
    }

    attributeChangeValue(property, oldVal, newVal){
        this[property] = newVal;
        this.assamble();
    }

    assamble(){
        this.remder();
        this.addEventListeners();
    }

    addEventListeners(){
        this.shadowRoot.querySelector("button").addEventListener("click", this.onClick);
    }

    onClick(){
        const reservaValue = String(this.getAttribute("reserva")) || "Reservar";
        this.setAttribute("reserva", "Reservado")
    }

    render(){
        this.shadowRoot.innerHTML = `
        <button>${this.value}</button>
        `
    };
}

customElements.define("reserva-button", reservaButton);
export default reservaButton;