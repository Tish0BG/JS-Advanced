function validate() {
    const input = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

    input.addEventListener('change', (event) => {
        if (!pattern.test(input.value)) {
            event.target.className = 'error';
        } else {
            event.target.className = ''
        }
    })
}