const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result")

let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if (toCelcius.checked) {
        result.textContent = ((Number(textBox.value) - 32) * (5/9)).toFixed(1) + "°C";
    }
    else {
        result.textContent = "You forgot to choose unit!"
    }
}