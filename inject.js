var documentos = document.getElementsByTagName("link");
var documentoInspecionado;

for (var j = documentos.length; j >= 0; j--) {

    documentoInspecionado = documentos[j];

    if (documentoInspecionado && documentoInspecionado.getAttribute("href") != null && documentoInspecionado.getAttribute("href").indexOf("paywall") != -1)
        documentoInspecionado.parentNode.removeChild(documentoInspecionado)

}
