function addItemALista(nombreItem, nombreLista) {
  if (nombreItem && nombreItem != "") {
    //undefined evaluan false para booleano, 0 para aritmetica, "undefined" para texto, null para objeto
    var node = document.createElement("li");
    node.appendChild(document.createTextNode(nombreItem));
    document.getElementById(nombreLista).appendChild(node);
  }
}
