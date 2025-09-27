function colorize() {
    const rows = Array.from(document.querySelector('table').querySelectorAll('tr'));

    for (let i = 1; i < rows.length; i++) {
        if (i % 2 === 1) {
            rows[i].style.backgroundColor = 'teal';
        }
    }
}