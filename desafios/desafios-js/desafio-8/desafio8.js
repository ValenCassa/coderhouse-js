var cuotasMes = [];
let datainfla = 0

$.getJSON("https://apis.datos.gob.ar/series/api/series/?ids=173.1_INUCLEOLEO_DIC-_0_10&limit=5000&format=json", (data) => {
    datainfla = ((data.data.slice(-1)[0][1]) * 100).toFixed(1)
    

})
setTimeout(function(){
    
    document.getElementById('infla').textContent = datainfla + '%';
    document.getElementById('inflacion').setAttribute('placeholder', datainfla)
}, 100)



$('#href').click(function () {

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
            $('#href').click(window.location.href='/coderhouse-js/desafios/desafios-html/desafio-8/desafio-resultado.html');
            
            
        }else {
            alert('Ingresa un valor valido');
            };
});

function enter(parent) {
    $(parent).animate({marginLeft: '-8em'}), 2000, $(parent).animate({marginLeft:'-4em'}, 1500, function(){
        enter(parent);
    })
};

document.getElementById('href').addEventListener('mouseenter', enter('#arrow'))

















