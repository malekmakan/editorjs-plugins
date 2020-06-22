const leftTag = 'LEFT';
const centerTag = 'CENTER';
const rightTag = 'RIGHT';

const leftClass = 'left-align';
const centerClass = 'center-align';
const rightClass = 'right-align';

class LeftAlignment {
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

        this.tag = leftTag;
        this.class = leftClass;
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve"> <g> <g> <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/> </g> </g> <g> <g> <path d="M230,114.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h220c5.5,0,10-4.5,10-10S235.5,114.5,230,114.5z"/> </g> </g> <g> <g> <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/> </g> </g> <g> <g> <path d="M151,281.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S156.5,281.5,151,281.5z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
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

        this.unwrapOthers();
        const left = document.createElement(this.tag);

        left.classList.add(this.class);
        left.appendChild(selectedText);
        range.insertNode(left);

        this.api.selection.expandToTag(left);
    }

    unwrap(range) {
        const left = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        left.remove();

        range.insertNode(text);
    }


    checkState() {
        const left = this.api.selection.findParentTag(this.tag);

        this.state = !!left;
    }

    unwrapOthers() {
        const right = this.api.selection.findParentTag(rightTag, rightClass);
        const center = this.api.selection.findParentTag(centerTag, centerClass);

        if (right) {
            right.remove();
        }

        if (center) {
            center.remove();
        }
    }
}

class CenterAlignment {
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

        this.tag = 'CENTER';
        this.class = 'center-align';
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = ' <?xml version="1.0" encoding="iso-8859-1"?> <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 334.367 334.367" style="enable-background:new 0 0 334.367 334.367;" xml:space="preserve"> <g> <g> <g> <path d="M10.449,52.245h313.469c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H10.449 C4.678,31.347,0,36.025,0,41.796S4.678,52.245,10.449,52.245z"/> <path d="M57.469,114.939c-5.771,0-10.449,4.678-10.449,10.449c0,5.771,4.678,10.449,10.449,10.449h219.429 c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449H57.469z"/> <path d="M323.918,198.531H10.449C4.678,198.531,0,203.209,0,208.98s4.678,10.449,10.449,10.449h313.469 c5.771,0,10.449-4.678,10.449-10.449S329.689,198.531,323.918,198.531z"/> <path d="M237.714,282.122H96.653c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h141.061 c5.771,0,10.449-4.678,10.449-10.449S243.485,282.122,237.714,282.122z"/> </g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>';
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

        this.unwrapOthers();
        const center = document.createElement(this.tag);

        center.classList.add(this.class);
        center.appendChild(selectedText);
        range.insertNode(center);

        this.api.selection.expandToTag(center);
    }

    unwrap(range) {
        const center = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        center.remove();

        range.insertNode(text);
    }


    checkState() {
        const center = this.api.selection.findParentTag(this.tag);

        this.state = !!center;
    }

    unwrapOthers() {
        const left = this.api.selection.findParentTag(leftTag, leftClass);
        const right = this.api.selection.findParentTag(rightTag, rightClass);

        if (left) {
            left.remove();
        }

        if (right) {
            right.remove();
        }
    }
}

class RightAlignment {
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
        this.tag = rightTag;
        this.class = rightClass;
    }

    render() {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.innerHTML = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve"> <g> <g> <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/> </g> </g> <g> <g> <path d="M323,114.5H104c-5.5,0-10,4.5-10,10s4.5,10,10,10h219c5.5,0,10-4.5,10-10S328.5,114.5,323,114.5z"/> </g> </g> <g> <g> <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/> </g> </g> <g> <g> <path d="M323,281.5H182c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S328.5,281.5,323,281.5z"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ';
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

        this.unwrapOthers();
        const right = document.createElement(this.tag);

        right.classList.add(this.class);
        right.appendChild(selectedText);
        range.insertNode(right);

        this.api.selection.expandToTag(right);
    }

    unwrap(range) {
        const right = this.api.selection.findParentTag(this.tag, this.class);
        const text = range.extractContents();

        right.remove();

        range.insertNode(text);
    }


    checkState() {
        const right = this.api.selection.findParentTag(this.tag);

        this.state = !!right;
    }

    unwrapOthers() {
        const left = this.api.selection.findParentTag(leftTag, leftClass);
        const center = this.api.selection.findParentTag(centerTag, centerClass);

        if (left) {
            left.remove();
        }

        if (center) {
            center.remove();
        }
    }
}