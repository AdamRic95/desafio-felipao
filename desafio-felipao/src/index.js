let nome = "Dos Paranauê";
let xp = 5500; // Altere a quantidade de xp conforme o desejado

//Estrutura de decisão de nível de herói com base no XP

let nivel;
if (xp < 1000) { nivel = "Ferro"; }
else if (xp >= 1001 && xp <= 2000) { nivel = "Bronze"; }
else if (xp >= 2001 && xp <= 5000) { nivel = "Prata"; }
else if (xp >= 5001 && xp <= 7000) { nivel = "Ouro"; }
else if (xp >= 7001 && xp <= 8000) { nivel = "Platina"; }
else if (xp >= 8001 && xp <= 9000) { nivel = "Ascendente"; }
else if (xp >= 9001 && xp <= 10000) { nivel = "Imortal"; }
else if (xp >= 10001) { nivel = "Radiante"; }

//Saída -  Exibir a mensagem final

console.log("O herói de nome " + nome + " está no nível de " + nivel)