function f(index) {
    for(let i = 1;i <= index;i++){
        if(i >= 2){
            document.write(" ")
        }
        document.write(index + "*" + i + "=" + index * i)
    }
}
for(let i = 1;i <= 9;i++){
    if(i > 1){
        document.write("<br>");
        f(i)
    }
}
