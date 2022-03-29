var gracz = 0;
var pi=0;
const gracz1 = [];
const gracz2 = [];
var ruchy = 0;
var pkt1 =0;
var pkt2 =0;
function gra(x)
{
	pi=x;
	if(gracz==0)
	{
		document.getElementById(pi).innerHTML='<div class="krzyzyk"></div><div class="krzyzyk2"></div>';
		document.getElementById(pi).setAttribute("onclick",";");
		document.getElementById(pi).style.cursor="default";
		gracz1.push(pi);

	}else if(gracz==1)
	{
		document.getElementById(pi).innerHTML="<div class='kolo'></div>";
		document.getElementById(pi).setAttribute("onclick",";");
		document.getElementById(pi).style.cursor="default";
		gracz2.push(pi);
	}
	if(gracz==0)
	{
		gracz=1;
	}else if(gracz==1)
	{
		gracz=0;
	}
	ruchy++;
	spr();
}
function spr()
{
	gracz1.sort();
	gracz2.sort();
	if(gracz1.includes("p1")==true && gracz1.includes("p2")==true && gracz1.includes("p3")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;

	}else if(gracz1.includes("p1")==true && gracz1.includes("p4")==true && gracz1.includes("p7")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz1.includes("p4")==true && gracz1.includes("p5")==true && gracz1.includes("p6")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz1.includes("p7")==true && gracz1.includes("p8")==true && gracz1.includes("p9")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz1.includes("p1")==true && gracz1.includes("p5")==true && gracz1.includes("p9")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz1.includes("p2")==true && gracz1.includes("p5")==true && gracz1.includes("p8")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz1.includes("p3")==true && gracz1.includes("p5")==true && gracz1.includes("p7")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz1.includes("p3")==true && gracz1.includes("p6")==true && gracz1.includes("p9")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Pierwszy! (X)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt1++;
		document.getElementById("punkty1").innerHTML=pkt1;

	}else if(gracz2.includes("p1")==true && gracz2.includes("p2")==true && gracz2.includes("p3")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;
	}else if(gracz2.includes("p1")==true && gracz2.includes("p4")==true && gracz2.includes("p7")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;

	}else if(gracz2.includes("p4")==true && gracz2.includes("p5")==true && gracz2.includes("p6")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;

	}else if(gracz2.includes("p7")==true && gracz2.includes("p8")==true && gracz2.includes("p9")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;

	}else if(gracz2.includes("p1")==true && gracz2.includes("p5")==true && gracz2.includes("p9")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;

	}else if(gracz2.includes("p2")==true && gracz2.includes("p5")==true && gracz2.includes("p8")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.removeAttr("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;

	}else if(gracz2.includes("p3")==true && gracz2.includes("p5")==true && gracz2.includes("p7")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.off("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;
		
	}else if(gracz2.includes("p3")==true && gracz2.includes("p6")==true && gracz2.includes("p9")==true)
	{
		document.getElementById("Wynik").innerHTML="Wygrał gracz Drugi! (O)";
		const div= $("div.miejsce");
		div.off("onclick");
		div.addClass("clicker");
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
		pkt2++;
		document.getElementById("punkty2").innerHTML=pkt2;
	}
		else if(ruchy==9)
	{
		document.getElementById("Wynik").innerHTML="REMIS!";
		gracz1.splice(0);
		gracz2.splice(0);
		ruchy=0;
	}
}

function reset()
{
	document.getElementById("Wynik").innerHTML="";
	const div= $("div.miejsce");
	div.html("");
	gracz1.splice(0);
	gracz2.splice(0);
	ruchy = 0;
	pi=0;
	div.on("onclick");
	for(var i=1;i<=9;i++)
	{
		var p="p"+i;
		document.getElementById(p).style.cursor="pointer";
		document.getElementById(p).setAttribute('onclick','gra("'+p+'") ');
	}

}