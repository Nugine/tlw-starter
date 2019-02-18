import { customElement, html, LitElement } from 'lit-element'

@customElement('my-element')
class MyElement extends LitElement {
    public render() {
        return html`<span>${new Date()}</span>`
    }
}

console.debug('hello, world')
console.error(new Error('dlrow ,olleh'))
