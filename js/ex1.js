var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], total = 0

for (var i = 1; i < 11; i++) {
    valor = parseFloat(prompt("Digite o preço do produto" + i + ":"))
    a[i] = valor
    document.write("<h2>" + "valores: " + a[i] + "</h2>")
    total = valor + total
}
document.write("<h2>" + total + "</h2>")

var media = total / 10
document.write("<h2>" + media + "</h2>")