function convertTemperature() {
    const inputTemperature = document.getElementById("inputTemperature").value;
    const unitFrom = document.getElementById("unitFrom").value;
    const unitTo = document.getElementById("unitTo").value;

    let result;

    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        result = (parseFloat(inputTemperature) * 9) / 5 + 32;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        result = ((parseFloat(inputTemperature) - 32) * 5) / 9;
    } else {
        result = inputTemperature;
    }

    document.getElementById("result").textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`;
}