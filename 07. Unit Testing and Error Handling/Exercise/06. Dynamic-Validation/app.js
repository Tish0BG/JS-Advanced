function validate() {
    const inputField = document.getElementById("email");

    document.getElementById("email").addEventListener("change", (event) => {
            const value = inputField.value;
            const pattern = /^[a-z]+@[a-z]+.[a-z]+$/g

            if (pattern.test(value)) {
                inputField.classList.remove("error");
            } else {
                inputField.classList.add("error");
            }
    })
}