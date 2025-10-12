class Textbox {
    constructor(selector, invalidRegex) {
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = invalidRegex;
        this._value = '';

        this._elements.forEach(el => {
            el.addEventListener('input', () => {
                this.value = el.value;
            });
        });
    }

    get value() {
        return this._value;
    }

    set value(v) {
        this._value = v;
        this._elements.forEach(el => el.value = v);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return Array.from(this._elements)
            .every(el => !this._invalidSymbols.test(el.value));
    }
}



let textbox = new Textbox("textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox')
textbox.value = "Joro";
