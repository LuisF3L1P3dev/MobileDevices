"use strict";
//q15
class Alunos {
    constructor(nome, idade, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
}
const alunos1 = [
    new Alunos("Luis", 22, "2111"),
    new Alunos("Maria", 23, "2112"),
    new Alunos("João", 24, "2113"),
    new Alunos("Ana", 25, "2114"),
    new Alunos("Pedro", 26, "2115"),
    new Alunos("Lucas", 27, "2116"),
];
function listarAlunos(alunos) {
    // for (let i of alunos){
    //     console.log("Nome: "+i.nome+", idade: "+i.idade+", matricula: "+i.matricula);
    // }
    alunos1.forEach((i) => {
        console.log("Nome: " + i.nome + ", idade: " + i.idade + ", matricula: " + i.matricula);
    });
}
listarAlunos(alunos1);
