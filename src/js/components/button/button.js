import template from './button.html';
import './button.scss';

export default class Button {
    constructor(link) {
        this.link = link;
    }

    onClick(event) {
        event.preventDefault();
        alert(this.link);
    }

    render(selector) {
        const node = document.querySelector(selector);
        const text = node.innerText;

        // Render our button
        node.innerHTML = template
            .replace('{{link}}', this.link)
            .replace('{{text}}', text);

        // Attach listeners
        node.onclick = (e) => {
          this.onClick(e);
        };
    }
}