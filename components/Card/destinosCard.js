class destinosCard extends HTMLElement{
    static get observedAttributes(){
        return[destino, duracion, costo, descripción, actividades]
    };

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    };

    connectecCallback(){
        this.render();
    }

    attributeChangeValue(property, oldVal, newVal){
        this[property] = newVal;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
            <div class=card>
                <h3>${destino}</h3>
                <p><b>Duración: </b>${duracion}</p>
                <p><b>Costo: </b>${costo}</p>
                <p><b>Descripción: </b>${descripción}</p>
                <p><b>Actividades: </b>${actividades} </p>
                <reserva-button></reserva-button>
            </div>`
    }
}

customElements.define("destinos-card", destinosCard);
export default destinosCard;