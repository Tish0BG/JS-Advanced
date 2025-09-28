function addItem() {
    const input = document.getElementById('newItemText');

    if (!input.value) {
        return;
    }
    
    const item = document.createElement('li');
    item.textContent = input.value;

    const deleteButton = document.createElement('a');
    deleteButton.href = '#';
    deleteButton.textContent = '[Delete]';
    item.appendChild(deleteButton,);

    deleteButton.addEventListener('click', onDelete);

    function onDelete (event) {
        const row = event.target.parentElement;
        row.remove();
    }

    const list = document.getElementById('items');
    list.appendChild(item);

    input.value = '';
}