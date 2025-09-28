function attachEventsListeners() {
    const convertButton = document.getElementById("convert");

    const inputUnits = document.getElementById("inputUnits");
    const outputUnits = document.getElementById("outputUnits");

    const inputDistance = document.getElementById("inputDistance");
    const outputDistance = document.getElementById("outputDistance")

    convertButton.addEventListener("click", onConvert);

    function onConvert(event) {
        const inputUnit = inputUnits.value;
        const outputUnit = outputUnits.value

        if (isNaN(Number(inputDistance.value)) || inputDistance.value === '') { return };

        let convertedSum = convert(Number(inputDistance.value), inputUnit, outputUnit);
        outputDistance.value = convertedSum;
    }

    function convert(value, inp, out) {
        const units = {
            mm: 0.001,
            cm: 0.01,
            m: 1,
            km: 1000,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254
        };

        let inMeters = Number(value) * units[inp];
        return inMeters / units[out];
    }
}