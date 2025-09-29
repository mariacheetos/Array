var lista = ["Gervronilso", 12, "Estrada A", "Linha C", 18.5, 1800, true]
/**Exibir a lista */
alert(lista)

for (var i = 0; i < lista.length; i++) {
    document.write("<h2>" + lista[i] + "</h2>")
}
/**Adicionar elemento ao fim da lista */
lista.push("84500-000")
alert(lista)

/**Remover último elemento da lista */
lista.pop()
alert(lista)

/**Remover o primeiro elemento da lista */
lista.shift()
alert(lista)

/**Adicionar elemento na primeira posição da lista */
lista.unshift("Gervronildo")
alert(lista)