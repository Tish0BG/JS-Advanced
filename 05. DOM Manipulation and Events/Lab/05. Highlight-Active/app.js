/*
function focused() {
    const parent = document.querySelector('div');

    parent.addEventListener('focusin', onFocusIn);
    parent.addEventListener('focusout', onFocusOut);

    function onFocusIn(event) {
        event.target.parentElement.className = 'focused';
    }

    function onFocusOut(event) {
        event.target.parentElement.className = '';
    }
}
*/

function focused() {
    const inputFields = document.querySelectorAll('div input[type="text"]');

    Array.from(inputFields).forEach(field => {
        field.addEventListener('focus', (event) => {
            const parentDiv = event.target.parentElement;
            parentDiv.classList.add('focused');
        });

        field.addEventListener('blur', (event) => {
            const parentDiv = event.target.parentElement;
            parentDiv.classList.remove('focused');
        });
    });
}