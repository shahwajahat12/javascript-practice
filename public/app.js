var num = prompt("Enter you Number","Number is Here");
function Table() {
    for(var i=1;i<21;i++)
{
    document.write(num +"  "+ " * " + "  " + "  "  + i + " " + " = " + num*i + "<br>");
}
}
Table();