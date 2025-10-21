window.addEventListener("load", solve);

function solve() {
    const addGemButton = document.getElementById("add-btn");

    const previewListRef = document.getElementById("preview-list");

    const collectionRef = document.getElementById("collection");

    const nameRef = document.getElementById("gem-name");
    const colorRef = document.getElementById("color");
    const caratsRef = document.getElementById("carats");
    const priceRef = document.getElementById("price");
    const typeRef = document.getElementById("type");

    addGemButton.addEventListener("click", onAdd);

    function onAdd() {
        const name = nameRef.value;
        const color = colorRef.value;
        const carats = caratsRef.value;
        const price = priceRef.value;
        const type = typeRef.value;

        if (!name || !color || !carats || !price || !type) {
            return;
        };

        const li = createListedItem(name, color, carats, price, type);
        previewListRef.appendChild(li); 

        nameRef.value = "";
        colorRef.value = "";
        caratsRef.value = "";
        priceRef.value = "";
        typeRef.value = "";

        disableButton();
    }

    function createListedItem(name, color, carats, price, type) {
        const li = document.createElement("li");
        li.classList.add("gem-info");
        const article = document.createElement("article");

            const h4 = document.createElement("h4");
            h4.textContent = `${name}`;

            const p1 = document.createElement("p");
            p1.textContent = `Color: ${color}`;

            const p2 = document.createElement("p");
            p2.textContent = `Carats: ${carats}`;

            const p3 = document.createElement("p");
            p3.textContent = `Price: ${price}$`;

            const p4 = document.createElement("p");
            p4.textContent = `Type: ${type}`;

        const saveButton = document.createElement("button");
        saveButton.classList.add("save-btn");
        saveButton.textContent = "Save to Collection";

        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        editButton.textContent = "Edit Information";

        const cancelButton = document.createElement("button");
        cancelButton.classList.add("cancel-btn");
        cancelButton.textContent = "Cancel";

        article.appendChild(h4);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);

        li.appendChild(article);
        li.appendChild(saveButton);
        li.appendChild(editButton);
        li.appendChild(cancelButton);

        saveButton.addEventListener("click", onSave);
        editButton.addEventListener("click", onEdit);
        cancelButton.addEventListener("click", onCancel);

        return li;
    }

    function onSave(event) {
        const li = event.target.parentElement;
        const data = getArticleData(li.children[0]);
        const newLi = document.createElement("li");

        const p = document.createElement("p");
        p.textContent = `${data.shift()} - ${data.join("/ ")}`;
        p.classList.add("collection-item");

        li.remove();

        newLi.appendChild(p);
        collectionRef.appendChild(newLi);
        enableButton();
    }

        function getArticleData(article) {
            const [nameR, colorR, caratsR, priceR, typeR] = article.children;
                const name = nameR.textContent;
                const color = colorR.textContent;
                const carats = caratsR.textContent;
                const price = priceR.textContent;
                const type = typeR.textContent;
            return [name, color, carats, price, type];
        }

    function onEdit(event) {
        const li = event.target.parentElement;
        const article = li.children[0];
        const [nameTc, colorTc, caratsTc, priceTc, typeTc] = article.children;
        
            const name = nameTc.textContent;
            const color = colorTc.textContent;
            const carats = caratsTc.textContent;
            const price = priceTc.textContent;
            const type = typeTc.textContent;

        propagateValues(name, color, carats, price, type);
        li.remove();
        enableButton();
    }

        function propagateValues(name, color, carats, price, type) {
            nameRef.value = name;
            colorRef.value = color.split(": ")[1];
            caratsRef.value = carats.split(": ")[1].trim();
            priceRef.value = price.split(": ")[1].slice(0, -1).trim();
            typeRef.value = type.split(": ")[1];
        }

    function onCancel(event) {
        event.target.parentElement.remove();
        enableButton();
    }

    function disableButton() {
        addGemButton.disabled = true
    }

    function enableButton() {
        addGemButton.disabled = false
    }
}