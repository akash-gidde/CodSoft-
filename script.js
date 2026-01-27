function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  let exp = document.getElementById("result").value;
  document.getElementById("result").value = eval(exp);
}
