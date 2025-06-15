function convert() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unit").value;
  let result = "";

  if (unit === "c") {
    let f = (input * 9) / 5 + 32;
    result = `${f.toFixed(2)} °F`;
  } else {
    let c = ((input - 32) * 5) / 9;
    result = `${c.toFixed(2)} °C`;
  }

  document.getElementById("result").textContent = "Converted: " + result;
}