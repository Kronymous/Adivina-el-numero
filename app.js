//Variables
let numerosAcierto = 1000;
let numeroSecreto = Math.floor(Math.random()*numerosAcierto)+1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 6;
console.log(numeroSecreto);
alert('Bienvenido al juego \n\n"Adivina el numero"')
alert(`Tienes ${maximoIntentos} intentos para ganar`)
while(numeroUsuario != numeroSecreto){
    numeroUsuario = prompt(`Introduce un numero entre 1 y ${numerosAcierto} para ganar:`);

    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        //acertamos, fue correcta la condicion
        alert(`Ganaste, con el numero: ${numeroUsuario} \n\nY acertaste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} \n\n!!Felicidades!!`);
    } else{
        if (numeroUsuario > numeroSecreto){
            alert(`El numero secreto es menor a ${numeroUsuario} \n\nTe quedan ${maximoIntentos - intentos} intentos para ganar`);
        }else {
            alert(`El numero secreto es mayor a ${numeroUsuario} \n\nTe quedan ${maximoIntentos - intentos} intentos para ganar`);
        }
        //incrementamos el contador cuando no acierta
        intentos++;

        if(intentos > maximoIntentos){
            alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
            break;
        }

    }
}
