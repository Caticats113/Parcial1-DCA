import planesTuristicos from "./data.js";
import * as component from "./components/export.js";

class appContainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : "open"})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        planesTuristicos.forEach(destino) => 
        this.shadowRoot.innerHTML = `
        <destinos-card></destinos-card>
        <reserva-button></reserva-button>
        `
    };
}

console.log(planesTuristicos)