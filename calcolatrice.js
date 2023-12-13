document.addEventListener("DOMContentLoaded", () => {
    const val1 = document.getElementById("val1");
    const val2 = document.getElementById("val2");
    const tf = document.getElementById("p");
    const form = document.getElementById("calculatorForm");
    const selection = document.getElementById("selection");

    form.onsubmit = function (e) {
        e.preventDefault();
        if (selection.value === "somma") {
            let somma = parseFloat(val1.value) + parseFloat(val2.value);
            tf.innerHTML = `Risultato: ${somma}`;
            div.appendChild(result);
        }
        if (selection.value === "differenza") {
            let somma = parseFloat(val1.value) - parseFloat(val2.value);
            tf.innerHTML = `Risultato: ${somma}`;
            div.appendChild(result);
        }
        if (selection.value === "prodotto") {
            let somma = parseFloat(val1.value) * parseFloat(val2.value);
            tf.innerHTML = `Risultato: ${somma}`;
            div.appendChild(result);
        }
        if (selection.value === "quoziente") {
            let somma = parseFloat(val1.value) / parseFloat(val2.value);
            tf.innerHTML = `Risultato: ${somma}`;
            div.appendChild(result);
        }
    }
});