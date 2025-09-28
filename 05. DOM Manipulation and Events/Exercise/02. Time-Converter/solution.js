function attachEventsListeners() {
    const buttons = document.querySelectorAll("input[type='button']");

    Array.from(buttons).forEach(b => b.addEventListener('click', onClick));

    function onClick(event) {
        const target = event.target;
        const parent = target.parentElement;
        const children = parent.children;
        const input = children[1];

        const currentValue = Number(input.value);
        const unit = input.id;

        switch (unit) {
            case 'days': propagateNewValue(currentValue); break;
            case 'hours': propagateNewValue(currentValue / 24); break;
            case 'minutes': propagateNewValue(currentValue / 24 / 60); break;
            case 'seconds': propagateNewValue(currentValue / 24 / 60 / 60); break;
        };
    }

    function propagateNewValue(days) {
        const inputs = document.querySelectorAll("input[type='text']");
        inputs[0].value = days;
        inputs[1].value = days * 24;
        inputs[2].value = days * 24 * 60;
        inputs[3].value = days * 24 * 60 * 60;
    }
}