let zoznamRokov = document.getElementById("zoznamRokov");

for (let i = 1990; i <= 2030; i++) {
 
    let rokJePrestupny = ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0);
    let rokKonciNula = ((i % 10 === 0 && i % 100 !== 0));

    let vypis = "";
    
    if (i === 2000) {
        vypis += "P: O: N:";
    } else if (rokJePrestupny && rokKonciNula) {
        vypis += "P: O: ";
    } else if (rokJePrestupny) {
        vypis += "P: ";
    } else if (rokKonciNula) {
        vypis += "O: ";
    }
    
    vypis += i;
    console.log(vypis);

    let vystupP = document.createElement("p");
      vystupP.textContent = vypis;
      zoznamRokov.appendChild(vystupP);
}