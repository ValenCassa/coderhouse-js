alert('Bienvenido a la calculadora de cuotas a valor de hoy!');
let go = false;

do {
    let final = parseInt(prompt('Ingresa el precio final...'));
    let cuotas = parseInt(prompt('Ingresa la cantidad de cuotas...'));
    const inflation = 0.035;
    let cuotas_mes = final / cuotas;

    if (!isNaN(final) && !isNaN(cuotas)) {
        go = true;
        let valor_hoy = 0;
        for (let i = 0; i < cuotas; i++) {
            valor_hoy += Math.round(cuotas_mes - (cuotas_mes * inflation));
            cuotas_mes -= cuotas_mes * inflation;
        };
        alert('El valor final a precio de hoy es: ' + valor_hoy);
        break;
    }else {
        alert('Ingresa un valor valido');
    };
}while(!go);