
// q5
let notas: Array<number> = [1, 2, 3, 4];

function media(notas: Array<number>): string {
    const tam = notas.length
    const soma  = notas.reduce((a, b) => a + b, 0);
    return "media dos valores: "+ soma / tam;
}
console.log(media(notas))