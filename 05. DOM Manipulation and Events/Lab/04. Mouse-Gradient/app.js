function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const output = document.getElementById("result");

    gradient.addEventListener("mousemove", function (event) {
        const percent = Math.floor((event.offsetX / gradient.clientWidth) * 100);
        output.textContent = percent + "%";
    });

    gradient.addEventListener("mouseout", function () {
        output.textContent = "";
    });
}