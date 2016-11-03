var num, factNum, i;
factNum=1;
function fac() {
num = prompt("Enter you Number","Number is Here");
    for( i = 1; i <=num; i++)
{
    factNum = i*factNum;
    
}
document.write(factNum);
}
fac();