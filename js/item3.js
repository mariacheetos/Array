var a = [], i = 0

do {
    fruta = prompt("Digite o nome da fruta")
    if(fruta!==null){
    a[i]=fruta
    i++
    }
    document.write("<h2>" + a[i] + "</h2>")
} while (fruta !== null)