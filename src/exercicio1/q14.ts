//q14

interface Pessoa{
    nome: string
    idade: number;
    profissao: string;
}

const p1: Pessoa = {
    nome: "Luis",
    idade: 22,
    profissao: "programador",
}

function descreverPessoa(p: Pessoa): string{
    return "nome: "+p.nome+", idade: "+p.idade+", profissão: "+p.profissao;
}

console.log(descreverPessoa(p1))