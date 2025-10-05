function solve() {
    const [nameInput, hallInput, ticketPriceInput] = document.querySelectorAll('#container input');
    const onScreenButton = document.querySelector('#container button');
    const moviesUl = document.querySelector('#movies ul');
    const archiveUl = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    onScreenButton.addEventListener('click', onAddMovie);
    clearButton.addEventListener('click', onClearArchive);

    function onAddMovie(e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const hall = hallInput.value.trim();
        const price = Number(ticketPriceInput.value.trim());

        if (name === '' || hall === '' || ticketPriceInput.value.trim() === '' || isNaN(price)) {
            return;
        }

        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = name;

        const strongHall = document.createElement('strong');
        strongHall.textContent = `Hall: ${hall}`;

        const div = document.createElement('div');
        const strongPrice = document.createElement('strong');
        strongPrice.textContent = price.toFixed(2);

        const inputTickets = document.createElement('input');
        inputTickets.placeholder = 'Tickets Sold';

        const archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';

        div.appendChild(strongPrice);
        div.appendChild(inputTickets);
        div.appendChild(archiveButton);

        li.appendChild(span);
        li.appendChild(strongHall);
        li.appendChild(div);

        moviesUl.appendChild(li);

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

        archiveButton.addEventListener('click', onArchive);

        function onArchive() {
            const soldTickets = Number(inputTickets.value.trim());
            if (inputTickets.value.trim() === '' || isNaN(soldTickets)) {
                return;
            }

            const totalAmount = price * soldTickets;

            const archiveLi = document.createElement('li');
            const movieSpan = document.createElement('span');
            movieSpan.textContent = name;

            const totalStrong = document.createElement('strong');
            totalStrong.textContent = `Total amount: ${totalAmount.toFixed(2)}`;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';

            archiveLi.appendChild(movieSpan);
            archiveLi.appendChild(totalStrong);
            archiveLi.appendChild(deleteBtn);

            archiveUl.appendChild(archiveLi);

            li.remove();

            deleteBtn.addEventListener('click', () => {
                archiveLi.remove();
            });
        }
    }

    function onClearArchive() {
        archiveUl.innerHTML = '';
    }
}
