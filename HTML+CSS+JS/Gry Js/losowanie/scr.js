var x;
var pkt = 1000;
var lose = 0;
var win= 0;
var bid;
function wym()
{	
	bid = parseInt(money.value);
	if (bid>pkt || bid<0 || !Number.isInteger(bid))
	{
		alarm.innerHTML="Nie możesz postawić takiej kwoty!";
		setTimeout(del2,1500);
		return; 
	}
	play.removeAttribute("onclick");
	pkt=pkt-bid;
	wynik.innerHTML=pkt;
	kub1.style.transform="translateY(0px)";
	kub2.style.transform="translateY(0px)";
	kub3.style.transform="translateY(0px)";
	
	setTimeout(losuj,600);
	
}
function losuj()
{
	kub1.style.transform="translateX(320px)";
	kub3.style.transform="translateX(-320px)";
	kub2.style.transform="translateX(0px)";
	
	point.style.display = 'none';
	setTimeout(ball,800);
	
}
function ball()
{
	kub1.style.transform="translateX(0px)";
	kub3.style.transform="translateX(0px)";
	kub2.style.transform="translateX(0px)";
	x = Math.floor((Math.random()*3)+1);
	point.innerHTML='<div class="swap'+x+' id="point">.</div>';
	setTimeout(pokaz,400);
}

function pokaz(z)
{
	
	point.style.display = 'block';
	kub1.setAttribute("onclick","pod(1)");
	kub2.setAttribute("onclick","pod(2)");
	kub3.setAttribute("onclick","pod(3)");

}



function pod(z)
{
	kub1.removeAttribute("onclick");
	kub2.removeAttribute("onclick");
	kub3.removeAttribute("onclick");
		if (x==z) 
	{
		pkt=pkt+(bid*2);
		win++;
		lose=0;
		if (win==3) 
		{
			helper.style.color="yellow";
			helper.style.textShadow="1px 1px 10px #FFFF99";
			helper.innerHTML="Świetna passa!";
			setTimeout(del,3000);
		}
		if (win==6) 
		{
			helper.style.color="yellow";
			helper.style.textShadow="1px 1px 10px #FFFF99";
			helper.innerHTML="Dziś naprawdę jest twój dzień! :O";
			setTimeout(del,3000);
		}
	}else
	{
		lose++;
		win=0;
		if (lose==3) 
		{
			helper.style.color="red";
			helper.style.textShadow="1px 1px 10px #FF9999";
			helper.innerHTML="Nie masz dziś szczęścia... ;/";
			setTimeout(del,3000);
		}
		if (lose==6) 
		{
			helper.style.color="red";
			helper.style.textShadow="1px 1px 10px #FF9999";
			helper.innerHTML="Może daj sobie spokój?";
			setTimeout(del,3000);
		}
		if(pkt==0)
		{
			setTimeout(del,2000);
			wynik.innerHTML=0;
			buttonres.style.opacity="1";
			play.removeAttribute("onclick");
		}
				if(pkt>=5000)
		{
			wynik.innerHTML="Gratulacje!";
		}
	}
	if (z==1) 
	{
		kub1.style.transform="translateY(-100px)";
		setTimeout(k1,1200);
	}
	if (z==2) 
	{
		kub2.style.transform="translateY(-100px)";
		setTimeout(k2,1200);
	}
	if (z==3) 
	{
		kub3.style.transform="translateY(-100px)";

		setTimeout(k3,1200);
	}
}
function reset_game()
{
	location.reload();
}
function k1()
{
	kub2.style.transform="translateY(-100px)";
	kub3.style.transform="translateY(-100px)";
	wynik.innerHTML=pkt;
	if (pkt>0) 
	{
		play.setAttribute("onclick","wym()");
	}
}
function k2()
{
	kub1.style.transform="translateY(-100px)";
	kub3.style.transform="translateY(-100px)";
	wynik.innerHTML=pkt;
	if (pkt>0) 
	{
		play.setAttribute("onclick","wym()");
	}
}
function k3()
{
	kub1.style.transform="translateY(-100px)";
	kub2.style.transform="translateY(-100px)";
	wynik.innerHTML=pkt;
	if (pkt>0) 
	{
		play.setAttribute("onclick","wym()");
	}
}

function del()
{
	helper.innerHTML=" ";
}
function del2()
{
	alarm.innerHTML=" ";
}