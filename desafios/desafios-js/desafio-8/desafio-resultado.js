var stored_cuotas = JSON.parse(localStorage.getItem('cuotasMes'));
var stored_info = JSON.parse(localStorage.getItem('info'));



//var newDiv = '<div class="cuotas-wrapper"><div class="cuota"></div><span class="cuota__numero"></span></div>';


//div.innerHTML = newDiv;


    for (let i=0; i < stored_cuotas.length; i++) {
        var div = document.createElement('div');
        div.className = 'cuotas-wrapper';
    
        var innerDiv = document.createElement('div');
        innerDiv.className = 'cuota';
        innerDiv.innerHTML = 'Cuota ' + (i + 1);
    
        var innerSpan = document.createElement('span');
        innerSpan.className = 'cuota__numero';
        innerSpan.innerHTML = stored_cuotas[i];
    
        div.appendChild(innerDiv);
        div.appendChild(innerSpan);
    
        document.getElementById('cuotas_id').appendChild(div)
    }

document.getElementById('monto-inicial').textContent = stored_info.valor_inicial;
document.getElementById('monto-final').textContent = stored_info.valorFinalinicial;
document.getElementById('valor_hoy').textContent = stored_info.valorHoy;
document.getElementById('recargo').textContent = ((stored_info.valorFinalinicial - stored_info.valor_inicial) / stored_info.valor_inicial) * 100 + '%';
document.getElementById('monto_cuota').textContent = Math.round(stored_info.cuotas_mes)

console.log(stored_info)

