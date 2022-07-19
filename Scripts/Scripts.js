function Converter(){
    NumeroBinario = document.getElementById("NumeroBinario").value;
    ValorDecimal = 0;
    if(NumeroBinario.length > 8){
        document.getElementById('resultado').innerHTML = 'Valor inserido invalido.'
        return;
    }
    for(let i=0; i<NumeroBinario.length; i++){
        if(NumeroBinario[i] == 0){
            continue
        } else if(NumeroBinario[i] == 1){
            ValorDecimal += Math.pow(2,i);
        } else {
            document.getElementById('resultado').innerHTML = 'Valor inserido invalido.'
            return;
        }
    }
    document.getElementById('resultado').innerHTML = 'Valor Decimal: ' + ValorDecimal;
}