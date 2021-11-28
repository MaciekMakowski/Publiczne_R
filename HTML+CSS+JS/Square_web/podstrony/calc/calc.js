function dodawanie()
{
var w=0;
var d1=parseInt(document.getElementById('l1').value);
var d2=parseInt(document.getElementById('l2').value);
w=d1+d2;
document.getElementById("wynik").innerHTML=w;
}
function odejmowanie()
{
var w=0;
var d1=parseInt(document.getElementById('l1').value);
var d2=parseInt(document.getElementById('l2').value);
w=d1-d2;
document.getElementById("wynik").innerHTML=w;
}
function mnozenie()
{
var w=0;
var d1=parseInt(document.getElementById('l1').value);
var d2=parseInt(document.getElementById('l2').value);
w=d1*d2;
document.getElementById("wynik").innerHTML=w;
}
function dzielenie()
{
var w=0;
var d1=parseInt(document.getElementById('l1').value);
var d2=parseInt(document.getElementById('l2').value);
w=d1/d2;
document.getElementById("wynik").innerHTML=w;
}
function potega()
{
var w=1;
var d1=parseInt(document.getElementById('l1').value);
var d2=parseInt(document.getElementById('l2').value);
for(i=0;i<d2;i++)
{
	w=w*d1;
}
document.getElementById("wynik").innerHTML=w;
}

