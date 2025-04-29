"use strict";
//q14
const p1 = {
    nome: "Luis",
    idade: 22,
    profissao: "programador",
};
function descreverPessoa(p) {
    return "nome: " + p.nome + ", idade: " + p.idade + ", profissão: " + p.profissao;
}
console.log(descreverPessoa(p1));
