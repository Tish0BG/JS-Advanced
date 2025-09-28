function lockedProfile() {
    const buttons = document.querySelectorAll('button');

    Array.from(buttons).forEach(b => b.addEventListener('click', onClick));

    function onClick(event) {
        const button = event.target;
        const card = button.parentElement;
        const radioButton = Array.from(card.querySelectorAll("input[type='radio']")).filter(e => e.checked)[0];
        const profileState = radioButton.value;
        const moreDivInformation = card.querySelector('div');

        if (profileState === 'lock') {
            return;
        }

        if (button.textContent === 'Show more') {
            moreDivInformation.style.display = 'block';
            button.textContent = 'Hide it';
        } else {
            moreDivInformation.style.display = 'none';
            button.textContent = 'Show more';
        }
    }
}