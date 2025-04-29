//q6
let cores: Array<string> = ["azul", "verde", "vermelho"];
function imprmirCores(cores: Array<string>): void {
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
console.log(imprmirCores(cores))