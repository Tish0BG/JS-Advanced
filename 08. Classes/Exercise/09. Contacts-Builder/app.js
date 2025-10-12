class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.element = this.createElement();
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if (this.titleDiv) {
            if (this._online) {
                this.titleDiv.classList.add('online');
            } else {
                this.titleDiv.classList.remove('online');
            }
        }
    }

    createElement() {
        const article = document.createElement('article');

        this.titleDiv = document.createElement('div');
        this.titleDiv.classList.add('title');
        this.titleDiv.textContent = `${this.firstName} ${this.lastName}`;

        const button = document.createElement('button');
        button.innerHTML = '&#8505;'; // Unicode for Info symbol
        this.titleDiv.appendChild(button);

        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        infoDiv.style.display = 'none';

        const phoneSpan = document.createElement('span');
        phoneSpan.innerHTML = `&phone; ${this.phone}`; // Unicode for Phone symbol

        const emailSpan = document.createElement('span');
        emailSpan.innerHTML = `&#9993; ${this.email}`; // Unicode for Email symbol

        infoDiv.appendChild(phoneSpan);
        infoDiv.appendChild(emailSpan);

        article.appendChild(this.titleDiv);
        article.appendChild(infoDiv);

        button.addEventListener('click', () => {
            infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
        });

        return article;
    }

    render(id) {
        const container = document.getElementById(id);
        if (container) {
            container.appendChild(this.element);
        }
    }
}