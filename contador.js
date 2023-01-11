const contador = document.getElementById("Contador");
const incrementar = document.getElementById("incrementar");
const disminuir = document.getElementById("disminuir");
const reset = document.getElementById("reset");

incrementar.addEventListener("click", funcionIncrementar);

function funcionIncrementar(){
    var numero = parseInt(contador.innerHTML)+1;
    contador.textContent = numero;

    colorTexto(numero);
}

disminuir.addEventListener("click", () => {
    var numero = parseInt(contador.innerHTML)-1;
    contador.textContent = numero;

    colorTexto(numero);
});

reset.addEventListener("click", () => {
    numero = 0
    contador.textContent = numero;

    colorTexto(numero);
});

function colorTexto(elNumero){
    if(elNumero > 0){
        contador.style.color = "green"
    }else if (elNumero < 0){
        contador.style.color = "red"
    }else{
        contador.style.color = "black"
    }

}