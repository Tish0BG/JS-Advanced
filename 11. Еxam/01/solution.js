window.addEventListener("load", solve);

function solve() {
    const publishButton = document.getElementById("publish");

    const locationRef = document.getElementById("location");
    const areaRef = document.getElementById("area");
    const builtYearRef = document.getElementById("year");
    const typeRef = document.getElementById("type");

    const pricePerMRef = document.getElementById("price-per-sqm");
    const expectedProfitRef = document.getElementById("expected-profit");

    const tableBodyRef = document.getElementById("table-body");
    const ulRef = document.getElementById("property-list");
    const profitMadeRef = document.getElementById("profit");

    let totalProfit = 0;

    publishButton.addEventListener("click", onPublish);

    function onPublish(event) {
        event.preventDefault();

        const location = locationRef.value;
        const area = Number(areaRef.value);
        const builtYear = Number(builtYearRef.value);
        const type = typeRef.value;
        const pricePerSqm = Number(pricePerMRef.value);
        const expectedProfit = Number(expectedProfitRef.value);

        if (!location || !area || !builtYear || !type || !pricePerSqm || !expectedProfit) {
            return;
        };

        if (area <= 0 || builtYear <= 0 || pricePerSqm <= 0 || expectedProfit <=0) {
            return;
        } 

        const tr = createTr(location, area, builtYear, type, pricePerSqm, expectedProfit);
        tableBodyRef.innerHTML += tr;

        locationRef.value = "";
        areaRef.value = "";
        builtYearRef.value = "";
        typeRef.value = "";
        pricePerMRef.value = "";
        expectedProfitRef.value = "";

        publishButton.disabled = true;

        const editButton = document.getElementsByClassName("action-btn edit")[0];
        const sellButton = document.getElementsByClassName("action-btn sell")[0];

        editButton.addEventListener("click", onEdit);
        sellButton.addEventListener("click", onSell);
    }

    function onEdit(event) {
        const tbody = event.target.parentElement.parentElement;
        const tbodyChildren = tbody.children;

        const editedData = editData(tbodyChildren);

        locationRef.value = editedData[0];
        areaRef.value = editedData[1];
        builtYearRef.value = editedData[2];
        typeRef.value = editedData[3];
        pricePerMRef.value = editedData[4];
        expectedProfitRef.value = editedData[5];

        publishButton.disabled = false;
        tbody.remove();
    }

        function editData(array) {
            const location = array[0].textContent;
            const area = Number(array[1].textContent);
            const builtYear = Number(array[2].textContent);
            const type = array[3].textContent;
            const price = Number(array[4].textContent);
            const newPrice = Number(array[5].textContent);

            const pricePerSqm = price / area;
            const difference = newPrice - price;
            const expectedProfit = (difference / price) * 100;

            return [location, area, builtYear, type, pricePerSqm, expectedProfit, difference];
        }

    function onSell(event) {
        const tbody = event.target.parentElement.parentElement;
        const tbodyChildren = tbody.children;

        const editedData = editData(tbodyChildren);

        const li = createLi(editedData[0], editedData[2], editedData[3], editedData[6]);
        ulRef.innerHTML += li;

        totalProfit += editedData[6];
        profitMadeRef.textContent = totalProfit.toFixed(2);
        publishButton.disabled = false;

        tbody.remove();
    }

    function createTr(location, area, builtYear, type, pricePerSqm, expectedProfit) {
        const price = area * pricePerSqm;
        const expectedPr = price + price * (expectedProfit / 100);
        const text = `
            <tr class="row">
                <td>${location}</td>
                <td>${area}</td>
                <td>${builtYear}</td>
                <td>${type}</td>
                <td>${price.toFixed(2)}</td>
                <td>${expectedPr.toFixed(2)}</td>
                <td>
                    <button class="action-btn edit">Edit</button>
                    <button class="action-btn sell">Sell</button>
                </td>
            </tr>`;

        return text;
    };

    function createLi(location, year, type, difference) {
        const text = `
            <li class="each-list">
                <span>${location} - ${type}</span>
                <span>${year}</span>
                <span>${difference.toFixed(2)}</span>
            </li>`;

        return text;
    }
}