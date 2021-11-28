var nr = Math.floor(Math.random()*5)+1;
var timer1;
var timer2;
function swap2()
{
	$("#swap").fadeOut(500);
}

function swap()
{
	nr++;
	if (nr>5) 
	{
		nr=1;
	}
	if (nr<1)
	{
		nr=5;
	}
	var plik ="<img src=\"grafiki/obraz"+nr+".png\"/>";
	document.getElementById("swap").innerHTML=plik;
	$("#swap").fadeIn(500);
	timer1=setTimeout("swap()",5000);
	timer2= setTimeout("swap2()",4500);
}
function swapwlewo()
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	$("#swap").fadeOut(500);
	nr=nr-2;
	setTimeout("swap()",500);
}
function swapwprawo()
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	$("#swap").fadeOut(500);
	setTimeout("swap()",500);
}