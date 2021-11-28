var szn;
var kp=0;
var gp=0;
function wyb(x)
{
	if (x==1) 
	{
		wyborgracza.innerHTML="<img src='kamien.png'>";
	}
	if (x==2) 
	{
		wyborgracza.innerHTML="<img src='nozyce.png'>";
	}
	if (x==3) 
	{
		wyborgracza.innerHTML="<img src='papier.png'>";
	}
	szn = Math.floor((Math.random()*3)+1);
	if (szn==1) 
	{
		los.innerHTML="<img src='kamienpc.png'>";
	}
	if (szn==2) 
	{
		los.innerHTML="<img src='nozycepc.png'>";
	}
	if (szn==3) 
	{
		los.innerHTML="<img src='papierpc.png'>";
	}
	if(szn==3 && x==1)  
	{
		kp++;
		kpkt.innerHTML=kp;
	}
	if(szn==1 && x==2)  
	{
		kp++;
		kpkt.innerHTML=kp;
	}
	if(szn==2 && x==3)  
	{
		kp++;
		kpkt.innerHTML=kp;
	}
	if(szn==1 && x==3)  
	{
		gp++;
		gpkt.innerHTML=gp;
	}
	if(szn==2 && x==1)  
	{
		gp++;
		gpkt.innerHTML=gp;		
	}
	if(szn==3 && x==2)  
	{
		gp++;
		gpkt.innerHTML=gp;
	}
	/*
	if(szn>x)
	{
		kp++;
		kpkt.innerHTML=kp;
	}
	if(szn>x)
	{
		gp++;
		gpkt.innerHTML=gp;
	}
	*/
}