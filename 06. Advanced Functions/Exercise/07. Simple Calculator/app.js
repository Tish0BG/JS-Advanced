function calculator() {
    let selector1;
    let selector2;
    let resultSelector;

    return {
        init: (s1, s2, res) => {
            selector1 = document.querySelector(s1);
            selector2 = document.querySelector(s2);
            resultSelector = document.querySelector(res);
        },

        add: () => {
            const num1 = Number(selector1.value);
            const num2 = Number(selector2.value);
            resultSelector.value = num1 + num2;
        },

        subtract: () => {
            const num1 = Number(selector1.value);
            const num2 = Number(selector2.value);
            resultSelector.value = num1 - num2;
        }
    };
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');