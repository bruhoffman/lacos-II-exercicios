const linguasMaisFaladas = [
    "Inglês ", "Chinês Mandarim", "Hindi", "Espanhol", "Francês"
]

let i = 1;
for (let idioma of linguasMaisFaladas) {
    console.log(`${i} - ${idioma}`);
    i++;
}