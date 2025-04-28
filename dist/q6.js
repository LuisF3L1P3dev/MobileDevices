"use strict";
//q6
let cores = ["azul", "verde", "vermelho"];
function imprmirCores(cores) {
    for (let i of cores) {
        console.log(i);
    }
}
// function imprmirCores(cores: Array<string>): string {
//     let result = "";
//     for (let i of cores) {
//         result += i + "\n";
//     }
//     return result;
// }
console.log(imprmirCores(cores));
