"use strict";
class AlunoIF {
    constructor(nome, notas, frequencia) {
        this.nome = nome;
        this.notas = notas;
        this.frequencia = frequencia;
    }
}
let aluno2 = new AlunoIF("Luis", [7.78, 8, 9.1], 65);
let aluno3 = new AlunoIF("Ana", [5, 6, 7], 85);
function calcMedia(aluno) {
    const tam = aluno.notas.length;
    const soma = aluno.notas.reduce((ant, atual) => ant + atual, 0);
    return soma / tam;
}
function calcFrequencia(aluno) {
    if (aluno.frequencia < 75) {
        console.log("Aluno " + aluno.nome + " foi reprovado por falta");
        return "frequencia: " + aluno.frequencia + "%";
    }
    else {
        switch (true) {
            case calcMedia(aluno) >= 7:
                console.log("Aluno " + aluno.nome + " foi aprovado");
                return "frequencia: " + aluno.frequencia + "%";
            case calcMedia(aluno) < 5:
                console.log("Aluno " + aluno.nome + " foi reprovado por nota");
                return "frequencia: " + aluno.frequencia + "%";
            default:
                console.log("Aluno " + aluno.nome + " foi para recuperação");
                return "frequencia: " + aluno.frequencia + "%";
        }
    }
}
console.log(calcMedia(aluno3).toFixed(2));
console.log(calcFrequencia(aluno3));
console.log(calcMedia(aluno2).toFixed(2));
console.log(calcFrequencia(aluno2));
