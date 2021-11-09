alert('Bienvenido a la calculadora de cuotas a valor de hoy!');
let go = false;

function isNumeric(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  };

do {

    class Cuotas {
        constructor (valor_final, cantidad, inflacion, cuotas_mes) {
            this.valor_final = valor_final;
            this.cantidad = cantidad;
            this.inflacion = inflacion;
            this.cuotas_mes = cuotas_mes;
        }
    
        toInt() {
            this.valor_final = parseInt(this.valor_final);
            this.cantidad = parseInt(this.cantidad);
        }

    }

    function add_info() {
        let final = prompt('Ingresa el precio final...');
        let cuotas = prompt('Ingresa la cantidad de cuotas...');
        const inflation = 0.035;
        let cuotas_m = final / cuotas;

        return new Cuotas(final, cuotas, inflation, cuotas_m);
    }

    let info = add_info()
    info.toInt();


    if (isNumeric(info.valor_final) && isNumeric(info.cantidad)) {
        go = true;
        let valor_hoy = 0;
        for (let i = 0; i < info.cantidad; i++) {
            valor_hoy += Math.round(info.cuotas_mes - (info.cuotas_mes * info.inflacion));
            info.cuotas_mes -= info.cuotas_mes * info.inflacion;
        };
        alert('El valor final a precio de hoy es: ' + valor_hoy);
        break;
    }else {
        alert('Ingresa un valor valido');
        };
    

}while(!go);


