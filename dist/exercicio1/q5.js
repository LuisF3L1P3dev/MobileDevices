"use strict";
// q5
let notas = [1, 2, 3, 4];
function media(notas) {
    const tam = notas.length;
    const soma = notas.reduce((a, b) => a + b, 0);
    return "media dos valores: " + soma / tam;
}
console.log(media(notas));
