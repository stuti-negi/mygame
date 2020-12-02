debugger;
    var x= document.querySelectorAll("div.box");
    var count=0;
    var y=x.length;
    console.log(y);
    var chance=10;
    var high;
    if(document.cookie.length==0)
{ 
    document.cookie="HScore=0";
    high=0;
    document.getElementById("high_score").innerHTML=0;
}
else{
    var ca=document.cookie.indexOf('=');
    high=document.cookie.substring(ca+1);
    document.getElementById("high_score").innerHTML=high;
    console.log(high);
}
    function hi()
{
    document.getElementById("high_score").innerHTML=high;
    document.getElementById("high_score1").innerHTML=high;
    document.getElementById("start").style.display="none";
    document.getElementById("1").style.display="block";
     document.getElementById("2").style.display="block";
      document.getElementById("3").style.display="block";
}
    function show_img()
    {
          document.getElementById("c_chance").innerHTML=chance;
        var r=parseInt(Math.floor(Math.random()*(y)+1));
    console.log(r);
    for(var i=0;i<y;i++)
      {  
        if(i==r)
       {     console.log(i);
         x[i].innerHTML="<img src='carrot.gif' height='90%' width='90%' onclick='counter()'>";

          }
       else
         { console.log(i);
           x[i].innerHTML='';
         }
     }
 chance--;

}

function begin()
{
  
setInterval(show_img,1000);
setTimeout(stop,12000);
}
function stop()
{
    document.getElementById("1").style.display="none";
    document.getElementById("2").style.display="none";
     document.getElementById("3").style.display="none";
     document.getElementById("result").style.display="block";
     if(count>high)
     {
      document.cookie="HScore="+count;
     }
}

function counter()
{
  count++;
  document.getElementById("c_score").innerHTML=count;
  document.getElementById("c_score1").innerHTML=count;
  if( count>high)
  {
 document.getElementById("high_score").innerHTML=count;
  document.getElementById("high_score1").innerHTML=count;
    document.cookie="HScore="+count;

}
}
