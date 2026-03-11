function transporMatriz(a) {
    console.log("Matriz:")
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
    }

    let transp = [];
    for (let i = 0; i < a[0].length; i++) {
        transp[i] = [];

        for (let j = 0; j < a.length; j++) {
            transp[i][j] = a[j][i];
        }
        
    }

    console.log("\nMatriz Transposta:")
    for (let i = 0; i < transp.length; i++) {
        console.log(transp[i]);
    }
}

let matriz = [
    [1, 2],
    [3, 4],
    [5, 6]
];

transporMatriz(matriz);


