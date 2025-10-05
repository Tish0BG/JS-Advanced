function solve() {
    const table = document.querySelector("table");
    const checkDiv = document.getElementById("check");
    const checkParagraph = checkDiv.querySelector("p");
    const [quickCheckBtn, clearBtn] = document.querySelectorAll("tfoot button");
    const inputs = Array.from(document.querySelectorAll("tbody input"));

    quickCheckBtn.addEventListener("click", onCheck);
    clearBtn.addEventListener("click", onClear);

    function onCheck() {
        const rows = Array.from(document.querySelectorAll("tbody tr"))
            .map(row => Array.from(row.querySelectorAll("input")).map(x => Number(x.value)));

        const size = rows.length;
        let isValid = true;

        for (let row of rows) {
            if (!isValidSet(row, size)) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            for (let c = 0; c < size; c++) {
                const col = rows.map(r => r[c]);
                if (!isValidSet(col, size)) {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) {
            table.style.border = "2px solid green";
            checkParagraph.textContent = "You solve it! Congratulations!";
            checkParagraph.style.color = "green";
        } else {
            table.style.border = "2px solid red";
            checkParagraph.textContent = "NOP! You are not done yet...";
            checkParagraph.style.color = "red";
        }
    }

    function onClear() {
        inputs.forEach(i => i.value = "");
        table.style.border = "none";
        checkParagraph.textContent = "";
        checkParagraph.style.color = "";
    }

    function isValidSet(arr, size) {
        if (arr.some(x => x < 1 || x > size || Number.isNaN(x))) return false;
        return new Set(arr).size === size;
    }
}
