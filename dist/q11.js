"use strict";
// q11
var diaSemana;
(function (diaSemana) {
    diaSemana[diaSemana["domingo"] = 0] = "domingo";
    diaSemana[diaSemana["segunda"] = 1] = "segunda";
    diaSemana[diaSemana["terca"] = 2] = "terca";
    diaSemana[diaSemana["quarta"] = 3] = "quarta";
    diaSemana[diaSemana["quinta"] = 4] = "quinta";
    diaSemana[diaSemana["sexta"] = 5] = "sexta";
    diaSemana[diaSemana["sabado"] = 6] = "sabado";
})(diaSemana || (diaSemana = {}));
let dia = diaSemana.domingo;
let diaNome = diaSemana[0];
console.log(dia + 1 + "º dia da semana: " + diaNome);
