var texto = document.querySelector(".resultado-texto");
var info = document.querySelector(".resultado-info");
var resultado = document.querySelector(".resultado-conversion");

info.style.display = "table-cell";
resultado.style.display = "none";

function visibility() {
    if (info.style.display === "table-cell" && resultado.style.display === "none") {
        info.style.display = "none";
        resultado.style.display = "block";
    }
}

function en(){
    visibility();
    let encriptado = document.getElementById('conversion-text').value;
    const chars = {'a': 'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat'};
    encriptado = encriptado.replace(/[aeiou]/g, m => chars[m]);
    texto.innerHTML = encriptado;
}

function des(){
    visibility();
    let desencriptado = document.getElementById('conversion-text').value;
    const chars2 = {'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u'};
    desencriptado = desencriptado.replace(/(ai)|(enter)|(imes)|(ober)|(ufat)/g, m => chars2[m]);
    texto.innerHTML = desencriptado;
}

function copy() {
    navigator.clipboard.writeText(texto.innerHTML)
    .then(() => {
        console.log('Texto copiado al portapapeles');
        console.log(texto.innerHTML);
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles:', err);
    })
}

