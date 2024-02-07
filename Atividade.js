// Declarar as variavéis
let nome;
let idade;
let NumeroDeVendas;
let SaldoDisponivel;

alert("Boas vindas ao nosso site!");

// Prompt
nome = prompt ("Digite Seu Nome");
idade = prompt ("Digite Sua Idade");

while (!nome || !idade) {
    alert ("Erro! Preencha os campos");
    if (!nome) {nome = prompt ("Digite Seu Nome");
}
 else if (!idade) {idade = prompt ("Digite Sua Idade");
}
}
 if (idade >= 18) {
        alert ("Você já pode tirar a Habilitação");
    }else {
            alert ("Você ainda não pode tirar a habilitação")
        }