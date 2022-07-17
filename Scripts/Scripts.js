function Converter(){
    NumeroBinario = document.getElementById("Conversao");
    ValorDecimal = 0;
    for(let i=0; i<NumeroBinario.length; i++){
        if(NumeroBinario[i] == 0){
            continue
        } else {
            ValorDecimal += Math.pow(2,i);
        }
    }
    return ValorDecimal;
}