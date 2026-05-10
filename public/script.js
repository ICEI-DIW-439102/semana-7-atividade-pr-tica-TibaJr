const nome = prompt("Qual é o seu nome?");

let renda = prompt("Qual é a sua renda mensal?");
while (isNaN(renda) || renda === "" || renda === null) {
  renda = prompt("Digite um valor numérico válido para a renda mensal:");
}
renda = Number(renda);

let quantidadeDespesas = prompt("Quantas despesas você deseja informar? (1-5)");
while (isNaN(quantidadeDespesas) || quantidadeDespesas === "" || quantidadeDespesas === null) {
  quantidadeDespesas = prompt("Digite um número válido (1-5):");
}
quantidadeDespesas = Number(quantidadeDespesas);

if (quantidadeDespesas < 1) {
  quantidadeDespesas = 1;
} else if (quantidadeDespesas > 5) {
  quantidadeDespesas = 5;
}

let totalDespesas = 0;

for (let i = 1; i <= quantidadeDespesas; i++) {
  let despesa = prompt(`Digite o valor da Despesa ${i}:`);

  while (isNaN(despesa) || despesa === "" || despesa === null) {
    despesa = prompt(`Digite um valor numérico válido para Despesa ${i}:`);
  }

  despesa = Number(despesa);
  totalDespesas += despesa;
}

let mensagem = "";
let sobra = 0;

if (totalDespesas > renda) {
  mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
  sobra = renda - totalDespesas;
  const percentualSobra = (sobra / renda) * 100;

  if (percentualSobra >= 30) {
    mensagem = "✅ Ótimo: boa margem de sobra.";
  } else {
    mensagem = "🙂 Ok: dá para melhorar a sobra.";
  }
}

const resultado = `
=== RELATÓRIO DE ORÇAMENTO ===
Nome: ${nome}
Renda Mensal: R$ ${renda.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Status: ${mensagem}
=============================
`;

alert(resultado);
console.log(resultado);
