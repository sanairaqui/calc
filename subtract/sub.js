function subtract(p,q){
    r=p-q
    return r;
}
function showResult(){
    a=document.getElementById("1")
    b=document.getElementById("2")
    c=subtract(Number(a.value),Number(b.value));
    alert (c);
}
