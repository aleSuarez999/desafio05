
var gato = {
    imagen: "🐈",
    imagenPasos: "🐾",
    nCantGatos: 0,
    iPasos: "",
    
    setPasos: (nPasos) => {
        gato.iPasos = ""
        for (let i=0; i < nPasos; i++)
            gato.iPasos = gato.iPasos.concat('🐾');
    },
    setCantGatos: (nCantGatos) => {
        gato.nCantGatos = nCantGatos;    

    },
    getGatos: () => {
        for (let i=0; i < gato.nCantGatos; i++)
            console.log(`Gato #${i+1}: ${gato.imagen} ${gato.iPasos}`);
    },    
    getGatosDup: () => {
        for (let i=0; i < gato.nCantGatos; i++)
            console.log(`Gato #${i+1}: ${(i % 2 == 0)?gato.imagen:gato.imagen.concat(gato.imagen)} ${gato.iPasos}`);
    },    

}

console.log(gato) // verificar que cree el objeto

const configurarGato = (nCantGatos, nPasos ) => {
    // se configuran los valores en el boton VerPasos
    gato.setCantGatos(nCantGatos);
    gato.setPasos(nPasos);
    console.log(gato);
    // verificar que asigne los datos
}