"use strict";
let idade2 = 15;
switch (true) {
    case (idade2 >= 16 && idade2 <= 17 || idade2 > 70):
        console.log("Voto facultativo");
        break;
    case (idade2 >= 18 && idade2 <= 70):
        console.log("Voto obrigatório");
        break;
    default:
        console.log("Não vota");
}
