// open/close music
function displayMusic()
{
	if(document.getElementById("music").style.display!="none")
	{
		document.getElementById("music").style.display="none";
		document.getElementById("close-open").innerHTML="music";
	}
	else
	{
		document.getElementById("music").style.display="inline-block";
		document.getElementById("close-open").innerHTML="close";
	}

}
