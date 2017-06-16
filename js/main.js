function affichmenudrop()
{
  var m= document.getElementById("meunudropdown");
  if(m.style.display==="none")
  {
  	m.style.display = "flex";
  } else
  {
  	m.style.display = "none";
  }
  
}
// img.onmouseover = function(){affichalt(this)};
// img.onmouseover = function(){cacheralt(this)};
function affichalt(x)
{

      
      var z = document.getElementsByClassName("alttexte");
      var c= document.getElementsByClassName("entet-card");
      for(i=0; i<c.length;i++)
      {
         c[i].style.position="relative";
      }
      for(i=0; i<z.length;i++)
      {
          z[i].innerHTML =x.alt;
         z[i].style.position="absolute";
      // z.style.border="1px solid red";
         z[i].style.textAlign="center";
         z[i].style.paddingTop="20px";
         z[i].style.color="#ffa552";
         z[i].style.width="200px";
         z[i].style.height="80px";
         z[i].style.backgroundColor="rgba(0,0,0,0.30)";
         z[i].style.top="30%";
         z[i].style.left="30%";  
      }   
     
    
}
// function cacheralt(x)
// {
//    document.getElementById("alttexte").style.display="none"; 
//  }