function solve() {
    const [generateButton, buyButton] = document.querySelectorAll('button');
    const [input, output] = document.querySelectorAll("textarea");
    const tableBodyRef = document.querySelector("table tbody");

    generateButton.addEventListener("click", onGenerate);
    buyButton.addEventListener('click', onOrder);

    function onGenerate(event) {
        const data = JSON.parse(input.value);

        for (let line of data) {
            const tr = createTableRow(line);
            tableBodyRef.appendChild(tr);
        }
    }

    function onOrder(event) {
        const selectItems = document.querySelectorAll("input[type='checkbox']:checked");
        const names = [];
        let price = 0;
        let sumDecF = 0;

        for (let item of selectItems) {
            const tr = item.parentElement.parentElement;
            const [imageTd, nameTd, priceTd, decFTd] = tr.children;

            const name = nameTd.children[0].textContent;
            const itemPrice = Number(priceTd.children[0].textContent);
            const decF = Number(decFTd.children[0].textContent);

            names.push(name);
            price += itemPrice;
            sumDecF += decF;
        }

        let buff = `Bought furniture: ${names.join(", ")}\n`;
        buff += `Total price: ${price.toFixed(2)}\n`;
        buff += `Average decoration factor: ${sumDecF / names.length}`;

        output.value = buff;
    }

    function createTableRow(object) {
        const tr = document.createElement("tr");

        const tdImg = document.createElement("td");
        const img = document.createElement("img");
        img.src = object.img;
        tdImg.appendChild(img);
        tr.appendChild(tdImg);

        const tdName = document.createElement("td");
        const pName = document.createElement("p");
        pName.textContent = object.name;
        tdName.appendChild(pName);
        tr.appendChild(tdName);

        const tdPrice = document.createElement("td");
        const pPrice = document.createElement("p");
        pPrice.textContent = object.price;
        tdPrice.appendChild(pPrice);
        tr.appendChild(tdPrice);

        const tdDecF = document.createElement("td");
        const pDecF = document.createElement("p");
        pDecF.textContent = object.decFactor;
        tdDecF.appendChild(pDecF);
        tr.appendChild(tdDecF);

        const tdCheck = document.createElement("td");
        const input = document.createElement("input");
        input.type = "checkbox";
        tdCheck.appendChild(input);
        tr.appendChild(tdCheck);

        return tr;
    }
}