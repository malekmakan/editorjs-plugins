class Strikethrough {
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

        this.tag = 'S';
        this.class = '';        
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = '<?xml version="1.0" encoding="iso-8859-1"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M274.851,236l-9.084-4.735C216.654,205.665,176,179.623,176,120c0-44.112,35.888-80,80-80s80,35.888,80,80v20h40v-20 C376,53.832,322.168,0,256,0S136,53.832,136,120c0,37.679,11.893,68.705,36.358,94.851c7.336,7.839,15.458,14.819,23.947,21.149H0 v40h512v-40H274.851z"/> </g> </g> <g> <g> <path d="M380.201,316h-46.259C345.914,332.251,353,352.312,353,374c0,54.038-43.962,98-98,98c-54.038,0-98-43.962-98-98v-20h-40 v20c0,76.093,61.907,138,138,138s138-61.907,138-138C393,353.294,388.407,333.644,380.201,316z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
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
        const strikethrough = document.createElement(this.tag);
        
        strikethrough.appendChild(selectedText);
        range.insertNode(strikethrough);

        this.api.selection.expandToTag(strikethrough);
    }

    unwrap(range) {
        const strikethrough = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        strikethrough.remove();
        range.insertNode(text);
    }


    checkState() {
        const strikethrough = this.api.selection.findParentTag(this.tag);
        this.state = !!strikethrough;
    }
}