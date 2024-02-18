const posicaoInicial = parseInt(gets()); // Posição inicial do herói
const totalPassos = parseInt(gets()); // Número total de passos

// Função para calcular a posição final do herói
function calcularPosicaoFinal(posicaoInicial, totalPassos) {
  let posicaoFinal = posicaoInicial;

  // Simular os passos do herói
  for (let i = 0; i < totalPassos; i++) {
    // Se o herói avançaria para uma posição ímpar (pegajosa), ele recua uma posição
    if ((posicaoInicial + i + 1) % 2 === 1) {
      posicaoFinal--;
    }
  }

  // Ajustar a posição final de acordo com a tabela
  if (posicaoFinal <= 3) {
    posicaoFinal = 5;
  } else if (posicaoFinal <= 15) {
    posicaoFinal = 18;
  } else {
    posicaoFinal = 16;
  }

  return posicaoFinal;
}

// Calcular e exibir a posição final
const posicaoFinal = calcularPosicaoFinal(posicaoInicial, totalPassos);
console.log("Posicao final do heroi:", posicaoFinal);

// Exemplo de uso
const posicaoInicial = 10;
const totalPassos = 6;

// Calcular e exibir a posição final
const posicaoFinal = calcularPosicaoFinal(posicaoInicial, totalPassos);
console.log("Posicao final do heroi:", posicaoFinal);
