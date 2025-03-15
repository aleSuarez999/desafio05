
const verGatitos = () => {
    let cantidadDeGatos = 0; // agregado de prompt
    while (cantidadDeGatos < 1 || cantidadDeGatos > 99)
        cantidadDeGatos = prompt("Ingrese Cantidad de Gatos [1-99]: ");
    
    const gatos = ["😺", "😸", "😹"];

    arrayGatos = [];
    var iNuevo = 0;

    for (let i=0; i < cantidadDeGatos; i++)
    {
        // agrego nuevo gatito
        arrayGatos[arrayGatos.length] = gatos[iNuevo];
        iNuevo++; // contador de gatitos

        // si supero el maximo de emojis reseteo contador
        iNuevo = (iNuevo >= gatos.length) ? 0 : iNuevo;
    }
    
    for (var i=0; i < cantidadDeGatos; i++) // recorro array dinamico
        console.log(`Gato #${i+1}: `, arrayGatos[i]);
}
