var button = document.getElementById('btn-calc');

var cuotasMes = [];

button.onclick = function start() {

    function isNumeric(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
      };



    
    
        class Cuotas {
            constructor (valor_inicial, valor_final, cantidad, inflacion, cuotas_mes) {
                this.valor_inicial = valor_inicial;
                this.valor_final = valor_final;
                this.cantidad = cantidad;
                this.inflacion = inflacion;
                this.cuotas_mes = cuotas_mes;
                this.valorFinalinicial = this.valorFinalinicial;
                this.valorHoy = this.valorHoy;

            }
        
            toInt() {
                this.valor_inicial = parseFloat(this.valor_inicial);
                this.valor_final = parseFloat(this.valor_final);
                this.cantidad = parseFloat(this.cantidad);
                this.inflacion = parseFloat(this.inflacion);
            }
    
        }
    
        function add_info() {
            let inicial = document.getElementById('monto_inicial').value;
            let final = document.getElementById('monto_final').value;
            let cuotas = document.getElementById('cantidad').value;
            let inflation = document.getElementById('inflacion').value / 100;
            let cuotas_m = final / cuotas;
    
            return new Cuotas(inicial, final, cuotas, inflation, cuotas_m);
        }
    
        let info = add_info();
        info.toInt();

        function allNumeric() {

            object_array = Object.values(info);
            for (let i = 0; i < object_array.length; i++) {
                return isNumeric(object_array[i])
            }
        };
    
        if (allNumeric() && info.cantidad <= 12 && info.cantidad > 1) {
            go = true;
            let valor_hoy = 0;

            /*
            for (let i = 0; i < info.cantidad; i++) {
                valor_hoy += Math.round( info.cuotas_mes - (info.cuotas_mes * info.inflacion));
                info.cuotas_mes -= info.cuotas_mes * info.inflacion;
            };

            */
            info.valor_final = info.valor_final / Math.pow((1 + info.inflacion), 1);

            for (let i = 0; i < info.cantidad; i++) {
                let formula = Math.round((info.valor_final / Math.pow((1 + info.inflacion), i)) / 3);
                valor_hoy += formula;
                cuotasMes.push(formula);
            }

            info.valorHoy = Math.round(valor_hoy);
            info.valorFinalinicial = document.getElementById('monto_final').value;


            localStorage.setItem('cuotasMes', JSON.stringify(cuotasMes));
            localStorage.setItem('info', JSON.stringify(info));
            
            
        }else {
            alert('Ingresa un valor valido');
            };

            
};
















