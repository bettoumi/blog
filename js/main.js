
  // =============Menu mobile============
  // ====================================
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

// =============Alt image============
// ==================================
function affichalt(img)
{
    
      
       var alttexte = document.createElement("div");
       img.parentNode.insertBefore(alttexte, img);
        alttexte.innerHTML = img.alt;
         img.parentNode.style.position="relative";
        alttexte.style.position="absolute";
         // alttexte.style.border="1px solid red";
          alttexte.style.textAlign="center";
         alttexte.style.paddingTop="20px";
       alttexte.style.color="#ffa552";
      alttexte.style.width="200px";
       alttexte.style.height="80px";
      alttexte.style.backgroundColor="rgba(0,0,0,0.30)";
       alttexte.style.top="30%";
      alttexte.style.left="30%"

}
 function cacheralt(img)
{
  var altexte= img.parentNode.firstChild;
  altexte.parentNode.removeChild(altexte);

}

// =============Display Date============
// ==================================
 var d= new Date();
 var  alldate=document.getElementsByClassName("affichdate");
  for(i=0; i<alldate.length;i++)
  {
    alldate[i].innerHTML = d.toUTCString();
  }
