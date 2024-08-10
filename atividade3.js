let a = parseFloat(prompt("Lado 1:"));
let b = parseFloat(prompt("Lado 2:"));
let c = parseFloat(prompt("Lado 3:"));

if (a + b > c && a + c > b && b + c > a) {
  if (a === b && b === c) {
    alert("Triângulo Equilátero");
  } else if (a === b || a === c || b === c) {
    alert("Triângulo Isósceles");
  } else {
    alert("Triângulo Escaleno");
  }
} else {
  alert("Não pode formar um triângulo");
}