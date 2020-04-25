// localStorage.clear();
//For levels


let levflag=0;
let levs;
while(levflag==0)
{
	let levstat =prompt("Please enter difficult \neasy,medium,hard");
    levs=levstat;
    if(levstat=='easy' || levstat=='medium' || levstat=='hard')
    {
    	levflag=1;
    }
}


//For audio


let aud1=document.getElementById("aud1");
let aud2=document.getElementById("aud2");

// Localstorage init


 if(window.localStorage.getItem('count')==null)
 {
 	window.localStorage.setItem('count', '0');
 }
if(window.localStorage.getItem('count')=='0')
{
 	window.localStorage.setItem('best1easy', '1000.000');
 	window.localStorage.setItem('best2easy', '1000.000');
 	window.localStorage.setItem('best3easy', '1000.000');
 	window.localStorage.setItem('best4easy', '1000.000');
 	window.localStorage.setItem('best5easy', '1000.000');
 	window.localStorage.setItem('best1medium', '1000.000');
 	window.localStorage.setItem('best2medium', '1000.000');
 	window.localStorage.setItem('best3medium', '1000.000');
 	window.localStorage.setItem('best4medium', '1000.000');
 	window.localStorage.setItem('best5medium', '1000.000');
 	window.localStorage.setItem('best1hard', '1000.000');
 	window.localStorage.setItem('best2hard', '1000.000');
 	window.localStorage.setItem('best3hard', '1000.000');
 	window.localStorage.setItem('best4hard', '1000.000');
 	window.localStorage.setItem('best5hard', '1000.000');
}


let txt;
let r=[];
let gc=0;
let noofgrid;
let mytab=document.getElementById('mytab');
let rowall=[];

// Grid wrt levs

if(levs=='easy')
{
	noofgrid=20;
}
else if(levs=='medium')
{
	noofgrid=25;
	let newrow=mytab.insertRow(4);
	newrow.setAttribute("class","marqueel");
	for(i=0;i<10;i++)
	{
		let newta=newrow.insertCell(i);
		newta.setAttribute('onclick',"myfun(" + (40+i) + ");");
	}
}
else if(levs=='hard')
{
	noofgrid=30;
	let newrowd=mytab.insertRow(4);
	newrowd.setAttribute("class","marqueel");
	rowall=document.querySelectorAll("tr");
	for(i=0;i<10;i++)
	{
		let newtad=newrowd.insertCell(i);
		//newtad.setAttribute('onclick',"myfun(" + (noofgrid-5+i) + ");");
		
	}
	for(i=0;i<5;i++)
	{
		let lastd=rowall[i].insertCell(10);
		let lastdh=rowall[i].insertCell(11);
		//lastd.setAttribute('onclick',"myfun(" + ((6*(i+1))-1) + ");");
		
	}
}
let a = document.querySelectorAll('td');
if(levs=='hard')
{
	for(i=0;i<60;i++)
	{
		a[i].setAttribute('onclick',"myfun(" + i + ");");
	}
	let root=document.documentElement;
	root.style.setProperty("--myl",'-768px');
	root.style.setProperty("--myr",'768px');
}
btim1=document.getElementById("btime1");
btim2=document.getElementById("btime2");
btim3=document.getElementById("btime3");
btim4=document.getElementById("btime4");
btim5=document.getElementById("btime5");
gc = window.localStorage.getItem('count');

	if(Number(localStorage.getItem('best1'+levs))!=1000)
	{
		btim1.textContent=window.localStorage.getItem('best1'+levs);
	}
	else{btim1.textContent= ''; }
	if(Number(localStorage.getItem('best2'+levs))!=1000)
	{
		btim2.textContent=window.localStorage.getItem('best2'+levs);
	}
	else{btim2.textContent= ''; }
	if(Number(localStorage.getItem('best3'+levs))!=1000)
	{
		btim3.textContent=window.localStorage.getItem('best3'+levs);
	}	
	else{btim3.textContent= ''; }
	if(Number(localStorage.getItem('best4'+levs))!=1000)
	{
		btim4.textContent=window.localStorage.getItem('best4'+levs);
	}
	else{btim4.textContent= null; }
	if(Number(localStorage.getItem('best5'+levs))!=1000)
	{
		btim5.textContent=window.localStorage.getItem('best5'+levs);
	}
	else{btim5.textContent= null; }

	// Init of numbers for first half

let levdif=5;
if(levs=='hard')
{
	levdif=6;
}

for( i=0 ; i<(noofgrid*2) ; i++)
{
	let f=0;
	let x = Math.floor((Math.random() * noofgrid) + 1);
    r[i]=x;
	
	for(j=0;j<i;j++)
    {
       if(r[j]==x)
       {
       	f=1;
       	r[i]=undefined;
       	i=i-1;
       	break;
       }
    }
	
	if(f==0)
    {
    	initco=((255/(noofgrid*2))*(x-1));
    	
		
		a[i].textContent=x;
		a[i].style.backgroundColor='rgb('+initco+','+initco+','+initco+')';
		a[i+levdif].textContent=x;
		a[i+levdif].style.backgroundColor='rgb('+initco+','+initco+','+initco+')';
		
	
	}

	if((i+1)%levdif==0 && f!=1	)
	{
		i+=levdif;
	}
}
tim=document.getElementById("time");
let s=0;
let ms=0;

function stop()
{
	window.clearInterval(inter);
	if(Number(window.localStorage.getItem('best5'+levs))==0)
	{
		window.localStorage.setItem('best5'+levs, s+'.'+ms);
		btim5.textContent=s+'.'+ms;
	}
	tim.textContent=s+'.'+ms;
	if(Number(window.localStorage.getItem('best5'+levs))>Number(s+'.'+ms))
	{
		window.localStorage.setItem('best5'+levs,s+'.'+ms);
		// btim5.textContent=s+'.'+ms;
	}
	for(i=5;i>1;i--)
	{
		if(Number(window.localStorage.getItem('best'+i+levs))<Number(window.localStorage.getItem('best'+(i-1)+levs)))
		{
			let a=window.localStorage.getItem('best'+(i-1)+levs);
			let b=window.localStorage.getItem('best'+i+levs);
			window.localStorage.setItem(('best'+i+levs),a);
			window.localStorage.setItem(('best'+(i-1)+levs),b);
		}
	}
	if(Number(localStorage.getItem('best1'+levs))!=1000)
	{
		btim1.textContent=window.localStorage.getItem('best1'+levs);
	}
	if(Number(localStorage.getItem('best2'+levs))!=1000)
	{
		btim2.textContent=window.localStorage.getItem('best2'+levs);
	}
	if(Number(localStorage.getItem('best3'+levs))!=1000)
	{
		btim3.textContent=window.localStorage.getItem('best3'+levs);
	}
	if(Number(localStorage.getItem('best4'+levs))!=1000)
	{
		btim4.textContent=window.localStorage.getItem('best4'+levs);
	}
	if(Number(localStorage.getItem('best5'+levs))!=1000)
	{
		btim5.textContent=window.localStorage.getItem('best5'+levs);
	}

	
}
function sw()
{
    function fu()
    {
    	ms=ms+1;
    	if(ms/100 == 1)
    	{
    		s=s+1;
    		ms=0;
    	}
    	tim.textContent=s+'.'+ms;
    }
    inter=window.setInterval(fu,10);
}
let t=noofgrid;
let c=1;
let colreq=[];
let colreqn=0;

// Function which works each time the grid elements are clicked

function myfun(q)
	{
		if(a[q].textContent==c)
		{
			aud1.play();
			if(a[q].textContent==1)
			{
				sw();
			}
			if(a[q].textContent==(2*noofgrid))
			{
				aud2.play();
				stop();
			}
			c=c+1;
			t++;
			let colornum =((255/(noofgrid*2))*(t));
			let colornuma =((255/(noofgrid*2))*(t-noofgrid));
			if(t<=(2*noofgrid))
			{
				a[q].textContent=t
				a[q].style.backgroundColor='rgb('+colornum+','+colornum+','+colornum+')';
				if((q%(levdif*2))<levdif)
				{
					a[q+levdif].textContent=t
					a[q+levdif].style.backgroundColor='rgb('+colornum+','+colornum+','+colornum+')';
				}
				else
				{
					a[q-levdif].textContent=t
					a[q-levdif].style.backgroundColor='rgb('+colornum+','+colornum+','+colornum+')';
				}
			}
			else
			{
				a[q].style.color='rgb('+colornuma+','+colornuma+','+colornuma+')';
				a[q].textContent='00';
				if((q%(levdif*2))<levdif)
				{
					a[q+levdif].style.color='rgb('+colornuma+','+colornuma+','+colornuma+')';
					a[q+levdif].textContent='00';
				}	
				else
				{
					a[q-levdif].style.color='rgb('+colornuma+','+colornuma+','+colornuma+')';
					a[q-levdif].textContent='00';
				}
			}
			/*for(j=0;j<20;j++)
			{
				a[j].style.backgroundColor='rgb('+colornum+','+colornum+','+colornum+')';
			}	*/
		}
	}
function newg()
	{
		if(localStorage.getItem('count')!=null)
		window.localStorage.setItem('count',String(Number(gc)+1)) ;
		location.reload();
	}
	// if(Number(gc)==5.0)
	// window.localStorage.clear();
