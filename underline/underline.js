class Underline {
    static get isInline() {
        return true;
    }    

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
        this.button.classList.toggle(this.api.styles.inlineToolButtonActive, state);
    }

    constructor({
        api
    }) {
        this.api = api;
        this.button = null;
        this._state = false;

        this.tag = 'INS';
        this.class = '';
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = ' <?xml version="1.0" encoding="iso-8859-1"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <rect y="472" width="512" height="40"/> </g> </g> <g> <g> <path d="M382,0v258.5c0,69.201-56.523,125.5-126,125.5s-126-56.299-126-125.5V0H90v258.5C90,349.757,164.468,424,256,424 s166-74.243,166-165.5V0H382z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ';
        this.button.classList.add(this.api.styles.inlineToolButton);

        return this.button;
    }

    surround(range) {
        if (this.state) {
            this.unwrap(range);
            return;
        }

        this.wrap(range);
    }

    wrap(range) {
        const selectedText = range.extractContents();        
        const underline = document.createElement(this.tag);

        // underline.classList.add(this.class);
        underline.appendChild(selectedText);
        range.insertNode(underline);

        this.api.selection.expandToTag(underline);
    }

    unwrap(range) {
        const underline = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        underline.remove();

        range.insertNode(text);
    }


    checkState() {
        const underline = this.api.selection.findParentTag(this.tag);
        this.state = !!underline;
    }
}
