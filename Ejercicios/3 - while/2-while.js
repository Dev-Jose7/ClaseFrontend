let i = 0;
let numero = 0;

while(i < 50){
    i++;
    if(i % 2 == 0){
        continue
    }else{
        numero = i;
    }

    document.write(numero + "<br>");
}