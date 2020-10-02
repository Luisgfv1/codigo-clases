/* Matrices */

let matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
];
for (let i = 0; i < matriz.length; i++) {/* Se considera la primera coordenada */
    for (let j = 0; j < matriz[i].length; j++) {/* se considera la segunda coordenada */
        console.log(matriz[i][j]);
    }
}
