let valorSaque = parseInt(prompt("Digite o valor do saque: "));

if (valorSaque % 10 !== 0) {
  alert("O valor deve ser múltiplo de 10.");
} else {
  let notas100 = Math.floor(valorSaque / 100);
  let notas50 = Math.floor((valorSaque % 100) / 50);
  let notas10 = Math.floor((valorSaque % 50) / 10);

  alert(`Notas de 100: ${notas100}, Notas de 50: ${notas50}, Notas de 10: ${notas10}`);
}