function solve() {

    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('result');
    const selectMenuTo = document.getElementById('selectMenuTo');
    const convertButton = document.querySelector('button');

    const binaryOption = document.createElement('option');
    binaryOption.value = 'binary';
    binaryOption.textContent = 'Binary';
    selectMenuTo.appendChild(binaryOption);

    const hexadecimalOption = document.createElement('option');
    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.textContent = 'Hexadecimal';
    selectMenuTo.appendChild(hexadecimalOption);

    convertButton.addEventListener('click', () => {
 
        const inputValue = Number(inputElement.value);
        const selectedConversion = selectMenuTo.value;

        let result = '';

        if (selectedConversion === 'binary') {
            result = inputValue.toString(2);
        } else if (selectedConversion === 'hexadecimal') {
            result = inputValue.toString(16).toUpperCase();
        }

        outputElement.value = result;
    });
}