function solve() {
    document.querySelector("form").addEventListener("submit", onSubmit);

    const titleRef = document.getElementById("task");
    const descRef = document.getElementById("description");
    const dateRef = document.getElementById("date");

    const [formSelectionRef, openSelectionRef, inProgressSelectionRef, completeSelectionRef] = document.querySelectorAll("section");
    const openRef = openSelectionRef.children[1];
    const inProgress = inProgressSelectionRef.children[1];
    const completeRef = completeSelectionRef.children[1];

    function onSubmit(event) {
        event.preventDefault();

        const title = titleRef.value;
        const desc = descRef.value;
        const date = dateRef.value;

        if (!title || !desc || !date) { return; }

        titleRef.value = "";
        descRef.value = "";
        dateRef.value = "";

        const article = createArticle(title, desc, date);
        openRef.appendChild(article);
    }

    function createArticle(title, desc, date) {
        const article = document.createElement("article");

        const h3 = document.createElement("h3");
        h3.textContent = title;

        const pDescription = document.createElement("p");
        pDescription.textContent = "Description: " + desc;

        const pDate = document.createElement("p");
        pDate.textContent = "Due Date: " + date;

        const container = document.createElement("div");
        container.classList.add("flex");

        const startButton = createButton("green", "Start", onStart);
        const deleteButton = createButton("red", "Delete", onDelete);

        container.appendChild(startButton);
        container.appendChild(deleteButton);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(container);

        return article;
    }

    function createButton(classList, text, handler) {
        const button = document.createElement("button");
        button.classList.add(classList);
        button.textContent = text;
        button.addEventListener("click", handler);
        return button;
    }

    function onDelete(event) {
        const container = event.target.parentElement;
        const article = container.parentElement;
        article.remove();
    }

    function onStart(event) {
        const container = event.target.parentElement;
        const article = container.parentElement;
        container.innerHTML = "";

        container.appendChild(createButton("red", "Delete", onDelete));
        container.appendChild(createButton("orange", "Finish", onFinish));

        inProgress.appendChild(article);
    }

    function onFinish(event) {
        const container = event.target.parentElement;
        const article = container.parentElement;
        container.remove();
        completeRef.appendChild(article);
    }
}