//Collabsibles for spoilers, etc. From https://www.w3schools.com/howto/howto_js_collapsible.asp
var coll = document.getElementsByClassName("collapsible");
var collapsiblecheck;

for (collapsiblecheck = 0; collapsiblecheck < coll.length; collapsiblecheck++)
{
	coll[collapsiblecheck].addEventListener("click", function()
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

// function FixImgs()
// {
	// let pagename = location.pathname

	// if (pagename.endsWith(".html"))
	// {
		// pagename = pagename.replace(".html","")
	// }
	// pagename = pagename.split("/")
	// pagename = pagename[pagename.length - 1]



	// let img_links = document.getElementsByTagName("img");

	// for (let img of img_links)
	// {
		// if (img.src.indexOf("imgdir") != -1)
		// {
			// img.src = img.src.replace("imgdir",`${pagename}`);
		// }
	// }
// }

// FixImgs();

//Why does this function no longer exist? Because sometimes, depending on the order stuff loads in, it would throw a 404 in the console and that feels bad even though the image still appeared just fine!!!
//♫ I make all of my own problems ♫


//Maybe I'll make this its own function at one point
function makeStandard(input)
{
	let output = input.toLowerCase();
	output = output.replace(" - ","_");
	output = output.replace(" & ","_");
	output = output.replace(":","_");
	output = output.replace(/ /g,"_");
	output = output.replace("__","_");
	output = output.replace("%","");
	output = output.replace("@","");
	output = output.replace("?","");
	output = output.replace(/!/g,""); //who! would ever!! write more than one exclamation mark in a ghost name!!!
	output = output.replace("'","");
	output = output.replace(".","");
	output = output.replace("(","");
	output = output.replace(")","");
	output = output.replace("+","");
	output = output.replace("+",""); //I'll um... fix this later, I'm in a rush
	output = output.replace("é","e"); //"Accented characters are fun", I said...
	output = output.replace("ゴースト闇鍋-おかわり","ghost_yaminabe_okawari"); //Uh oh!!!
	output = output.replace("ゴースト闇鍋","ghost_yaminabe"); //How many ghosts with names in jp could I possibly have!
	
	return output
}

function dateDisplay(input)
{
	let output = "";
	input = input.split("-");
	let year = input[0]
	let month = input[1];
	let day = input[2]
	
	if (month == "01") month = "January"
	else if (month == "02") month = "February"
	else if (month == "03") month = "March"
	else if (month == "04") month = "April"
	else if (month == "05") month = "May"
	else if (month == "06") month = "June"
	else if (month == "07") month = "July"
	else if (month == "08") month = "August"
	else if (month == "09") month = "September"
	else if (month == "10") month = "October"
	else if (month == "11") month = "November"
	else if (month == "12") month = "December"
	
	if (day >= 11 && day <= 13) //Handle teen numbers - only less than 100, as a note
	{
		day += "th";
	}
	else
	{
		let onesColumn = day.substring(1)
		if (onesColumn == 1) day += "st";
		else if (onesColumn == 2) day += "nd";
		else if (onesColumn == 3) day += "rd";
		else day += "th";
	}
	if (day.substring(0,1) == "0") day = day.substring(1); //no days like 05th lol
	
	return `${month} ${day}, ${year}`;
}