import { Cats } from "./components/export";
import { dataCats } from "./services/dataCats";
import indexStyle from "./index.css"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

   async connectedCallback() { 
        await console.log(dataCats)
        this.render()
    }

    render() {
        const section = this.ownerDocument.createElement('section');
        section.className = 'section'
        const tittle = this.ownerDocument.createElement('div')
        tittle.textContent = 'Cats Facts';
        tittle.className='tittle'
        section.appendChild(tittle)
        const component = this.ownerDocument.createElement('cats-component')
        section.appendChild(component)
        
        this.shadowRoot?.appendChild(section);
    }
}

customElements.define('app-container', AppContainer)