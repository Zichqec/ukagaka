//Collabsibles for spoilers, etc. From https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++)
{
	coll[i].addEventListener("click", function()
	{
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block")
		{
			content.style.display = "none";
		}
		else
		{
			content.style.display = "block";
		}
	}
  );
}


//Why does this function exist? Because I don't want to have to write <img src="please_arrive_15_minutes_before_your_scheduled_interview_time/1.png"> for every image!!!!!!
//♫ I make all of my own problems ♫

function FixImgs()
{
	let pagename = location.pathname

	if (pagename.endsWith(".html"))
	{
		pagename = pagename.replace(".html","")
	}
	pagename = pagename.split("/")
	pagename = pagename[pagename.length - 1]



	let img_links = document.getElementsByTagName("img");

	for (let img of img_links)
	{
		if (img.src.indexOf("imgdir") != -1)
		{
			img.src = img.src.replace("imgdir",`${pagename}`);
		}
	}
}

FixImgs();


//Maybe I'll make this its own function at one point
function makeStandard(input)
{
	let output = input.toLowerCase();
	output = output.replace(" - ","_");
	output = output.replace(" & ","_");
	output = output.replace(/ /g,"_");
	output = output.replace("%","");
	output = output.replace("@","");
	output = output.replace("'","");
	output = output.replace(".","");
	output = output.replace("(","");
	output = output.replace(")","");
	
	return output
}