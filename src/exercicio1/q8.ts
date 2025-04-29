//q8

interface Aluno {
    nome: string,
    matricula: string,
    ativo: boolean,
}

const aluno1: Aluno={
    nome: "luis",
    matricula: "2111",
    ativo: true,
}

console.log(JSON.stringify(aluno1, null, 3));