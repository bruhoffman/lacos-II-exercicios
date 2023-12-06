const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]

/* for (let i in array) {
    i = Number(i);
    console.log(`Jogador ${i + 1}: ${array[i]}`);
} */

for (let i in array) {
    i = Number(i);
    console.log(`Jogador ${i + 1}`);

    let k = 0;
    for (let j of array[i]) {
        k = k + 1;
        console.log(`   Temporada ${k}: ${j} gols.`);
    }
}