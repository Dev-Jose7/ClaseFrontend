let i = 0;
let numero = 0;

do {
    if(i % 2 == 0){
        numero += i
        document.write(i + ": " + numero + "<br>");
    }
    i++;
} while (i <= 20);