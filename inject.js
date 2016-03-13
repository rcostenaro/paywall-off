var documentos = document.getElementsByTagName("link");

for (var j = documentos.length; j >= 0; j--) {

    if (documentos[j] && documentos[j].getAttribute("href") != null && documentos[j].getAttribute("href").indexOf("paywall") != -1)
        documentos[j].parentNode.removeChild(documentos[j])

}
