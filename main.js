let content_bloc = document.getElementById("bouton3");
let boutonStart = document.getElementById("bouton2");

boutonStart.onclick = function ()
{
	content_bloc.style.display = 'block';
	boutonStart.style.display = 'none';
}


function RedirectionJavascript(){
	var maRecherche = document.getElementById('rech').value;
  	document.location.href="https://www.google.fr/#q=" + maRecherche;
  }