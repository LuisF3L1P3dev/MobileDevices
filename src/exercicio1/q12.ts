// q12

function tipo(p1: string | number): string{
    if (typeof p1 == "string"){
        return "string";
    }else if (typeof p1 == "number"){
        return "number";
    }else{
        return "outro tipo";
    }
}

console.log("Tipo da variavel: "+tipo(5));
console.log("Tipo da variavel: "+tipo("5"));