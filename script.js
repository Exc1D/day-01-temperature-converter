const input = document.getElementById("input");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
// const result = document.getElementById("result");

function convertTemp() {
  if (input < 0) {
    result.textContent = `Please enter a valid number!`;
  }

  let celsius;
  switch (fromUnit) {
    case "celsius":
      celsius = input;
      break;
    case "fahrenheit":
      celsius = ((input - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = input - 273.15;
      break;
  }

  let result;
  switch (toUnit) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9) / 5 + 32;
      break;
    case "kelvin":
      result = celsius + 273.15;
      break;
  }
  document.getElementById("result").textContent = `${input}° ${fromUnit.charAt(0).toUpperCase()}` 
  = `${result}° ${toUnit.charAt(0).toUpperCase()}`;
}
