var haslo = "Bez pracy nie ma kołaczy";
haslo = haslo.toUpperCase();
window.onload =los;
var dlugosc = 0;
var haslox = "";
var pudlo =0;
var trafiona=0;
const litery= new Array();
litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ź";
litery[34] = "Ż";


const losy = new Array();
losy[0]="Ala ma kota";
losy[1]="Przybyłem zobaczyłem zwyciężyłem";
losy[2]="Gratulacje wygrałeś";
losy[3]="Wyrewolwerowany rewolwerowiec";
losy[4]="Gang Albanii";
losy[5]="Gra w wisielca";
losy[6]="Trudne hasło z literami";
losy[7]="województwo Warmińsko mazurskie";
losy[8]="Elbląg to piękne miasto";
losy[9]="Robie se kwit pik pik kartą wbita na stream siema siemanko";
losy[10]="No jeszcze pięć minut";

function los()
{
	document.getElementById("szubienica").innerHTML="<img src='img/s0.jpg'/>";
	pudlo=0;
	haslox="";
	var l = parseInt(Math.floor(Math.random()*10)+1);
	for(var i=0;i<=l;i++)
	{
		if(l==i)
		{
			haslo=losy[i];
			dlugosc = haslo.length;
		}
	}
	haslo = haslo.toUpperCase();
	los2();
}

function los2()
{
for(var i=0; i<dlugosc;i++)
{
	if (haslo.charAt(i)==" ") 
	{
		haslox=haslox+" ";
	}else
	{
		haslox=haslox+"_"
	}
}
start();
}


function wypisz()
{
	document.getElementById("plansza").innerHTML = haslox;
}

function start()
{
	
	
	var znak="";
	for(var j=0;j<=34;j++)
	{
		var nr= "lit"+j;
		znak= znak+"<div class='litera' id='"+nr+"' onclick='spr("+j+")'>"+litery[j]+"</div>";
		if((j+1)%7==0)
		{
			znak=znak+"<div style='clear:both;'></div>"
		}
	}
	document.getElementById("alfabet").innerHTML=znak;
	wypisz();
}
function spr(z)
{
	for(var i=0;i<dlugosc;i++)
	{

		if(haslo.charAt(i)==litery[z])
		{
			haslox=haslox.zamien(i,litery[z]);
			trafiona=true;
		}
	}
		if(trafiona==true)
		{
			var nr= "lit"+z;
			document.getElementById(nr).style.background="green";
			document.getElementById(nr).style.cursor="default";
			document.getElementById(nr).setAttribute("onclick",";");
			wypisz();
			trafiona=0;
		}else
		{
			var nr= "lit"+z;
			document.getElementById(nr).style.background="red";
			document.getElementById(nr).style.cursor="default";
			document.getElementById(nr).setAttribute("onclick",";");
			//nie trafione
			pudlo++;
			var obraz = "img/s"+pudlo+".jpg";
			document.getElementById("szubienica").innerHTML="<img src='"+obraz+"' alt='' />";
			
		}
		//won
		if(haslo==haslox)
		{
			document.getElementById("alfabet").innerHTML="GRATULACJE<BR>WYGRAŁEŚ"
		}else if(pudlo==9)
		{
			document.getElementById("alfabet").innerHTML="Niestety nie udało Ci się odgadnąć hasła<BR>Spróbuj jeszcze raz!"
		}
	}


String.prototype.zamien = function(miejsce,znak)
{
	if(miejsce>this.length-1) 
	{
		return this.toString();
	}
	else return this.substr(0,miejsce)+znak+this.substr(miejsce+1);
}


