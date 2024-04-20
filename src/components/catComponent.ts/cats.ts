import { dataCats } from "../../services/dataCats";
import { dataFacts } from "../../services/dataText";
import catStyles from './Cats.css'

export enum AttributeCats{
    'url' = 'url',
    'text' = 'text' 
}

export class Cats extends HTMLElement{
    url?: string;
    text?: string;
    constructor() {
        super();
        this.attachShadow ({mode: "open"})
    }
    connectedCallback(){
        this.mount();
    }

    mount() {
        this.render()
    }

    static get observedAttributes() {
        const attrs: Record<AttributeCats, null> = {
            url: null,
            text: null,
        };
        return Object.keys(attrs);
    }
   
    attributeChangedCallback(propName: AttributeCats, oldValue: string | undefined, newValue: string | undefined) {
        switch (propName) {
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }
    render(){
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = '';
                if(this.shadowRoot){
                    this.shadowRoot.innerHTML = `
                        <style>
                        ${catStyles}
                        </style>`}
        const sectionCats = this.ownerDocument.createElement('section');
        sectionCats.className = 'sectionCats'

        const divImage = this.ownerDocument.createElement('img');
            divImage.src = this.url || '';
            divImage.alt = 'url Image';
            sectionCats.appendChild(divImage);

            const divText = this.ownerDocument.createElement('img');
            divImage.src = this.text || '';
            divImage.alt = 'text';
            sectionCats.appendChild(divText);
    }
}}

customElements.define('cats-component', Cats)