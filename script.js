const input = document.getElementById("input");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const resetBtn = document.getElementById("resetBtn");
const resultEl = document.getElementById("result");

function convertTemp() {
  const inputValue = parseFloat(input.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  if (isNaN(inputValue)) {
    resultEl.textContent = `Please enter a valid number!`;
    return;
  }
  if (!from || from === "select" || !to || to === "select") {
    resultEl.textContent = "Please select both units!";
    return;
  }
  if (from === to) {
    resultEl.textContent = `${inputValue}° ${
      from.charAt(0).toUpperCase() + from.slice(1)
    } is already ${inputValue}° ${
      to.charAt(0).toUpperCase() + to.slice(1)
    }! 😊`;
    return;
  }
  let celsius;

  switch (from) {
    case "celsius":
      celsius = inputValue;
      break;
    case "fahrenheit":
      celsius = ((inputValue - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = inputValue - 273.15;
      break;
    default:
      resultEl.textContent = `Invalid unit selected!`;
      return;
  }

  let result;

  switch (to) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9) / 5 + 32;
      break;
    case "kelvin":
      result = celsius + 273.15;
      break;
    default:
      resultEl.textContent = `Invalid unit selected!`;
      return;
  }

  if (celsius <= 18) {
    document.documentElement.style.setProperty(
      "--accent-color",
      "var(--cool-color)"
    );
    document.documentElement.style.setProperty(
      "--background-accent-color",
      "var(--cool-color)"
    );
  } else if (celsius >= 30 && celsius <= 39) {
    document.documentElement.style.setProperty(
      "--accent-color",
      "var(--warm-color)"
    );
    document.documentElement.style.setProperty(
      "--background-accent-color",
      "var(--warm-color)"
    );
  } else if (celsius >= 40) {
    document.documentElement.style.setProperty(
      "--accent-color",
      "var(--hot-color)"
    );
    document.documentElement.style.setProperty(
      "--background-accent-color",
      "var(--hot-color)"
    );
  } else {
    document.documentElement.style.setProperty(
      "--accent-color",
      "var(--neutral-color)"
    );
    document.documentElement.style.setProperty(
      "--background-accent-color",
      "var(--neutral-color)"
    );
  }

  resultEl.textContent = `${inputValue}° ${
    from.charAt(0).toUpperCase() + from.slice(1)
  } = ${result.toFixed(2)}° ${to.charAt(0).toUpperCase() + to.slice(1)}`;
}

resetBtn.addEventListener("click", () => {
  input.value = "";
  resultEl.textContent = "";

  fromUnit.value = "select";
  toUnit.value = "select";

  document.documentElement.style.setProperty(
    "--accent-color",
    "var(--neutral-color)"
  );
  document.documentElement.style.setProperty(
    "--background-accent-color",
    "#ffffff"
  );
});
