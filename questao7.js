/*
Crie uma matriz 3x3 e escreva uma função para verificar se a matriz é
simétrica em relação à sua diagonal principal.
*/

function criarMatriz3x3() {
    let matriz = [];
    console.log("8");
    for (let i = 0; i < 3; i++) {
        matriz.push([]);
        for (let j = 0; j < 3; j++) {
            let elemento = ("")
            matriz[i].push(elemento);
        }
    }
    return matriz;
}

function imprimirMatriz(matriz) {
    console.log("7,8,9");
    for (let i = 0; i < 3; i++) {
        let linha = "";
        for (let j = 0; j < 3; j++) {
            linha += matriz[i][j] + " ";
        }
        console.log(linha);
    }
}

function verificarSimetriaDiagonalPrincipal(matriz) {
    for (let i = 0; i < 3; i++) {
        for (let j = i + 1; j < 3; j++) {
            if (matriz[i][j] !== matriz[j][i]) {
                return false;
            }
        }
    }
    return true;
}

let matriz = criarMatriz3x3();
imprimirMatriz(matriz);

if (verificarSimetriaDiagonalPrincipal(matriz)) {
    console.log("A matriz é simétrica em relação à sua diagonal principal.");
} else {
    console.log("A matriz não é simétrica em relação à sua diagonal principal.");
}