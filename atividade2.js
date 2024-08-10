let hora_franca = (parseFloat(prompt('Que hora é no Brasil?')) + 5) % 24;
alert(`O horário na França é: ${hora_franca.toFixed(2)}`);