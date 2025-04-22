//Determine what type we're looking at

let pagetype = location.pathname
pagetype = pagetype.split("/")
let temp = pagetype[pagetype.length - 1]
if (temp == "index" || temp == "index.html")
{
	pagetype = pagetype[pagetype.length - 2]
}
else
{
	pagetype = temp
}

function makeTopIndex(item)
{
	let lowername = makeStandard(item.name);
	
	//Make tags first cuz we'll need them for the div...
	let tagdiv = ``;
	if (item.tags != null)
	{
		for (let i = 0; i < item.tags.length; i++)
		{
			if (i > 0) tagdiv += ` `;
			tagdiv += `${item.tags[i].replace(/ /g,"_")}`;
		}
	}
	
	return `<div class="index_link TagFilterQuickIndex ${tagdiv}"><a href="#${lowername}">${item.name}</a></div>`;
}

function makeIndex(item)
{
	let lowername = makeStandard(item.name);
	let output = ``;
	
	//Make tags first cuz we'll need them for the div...
	let taglist = ``;
	let tagdiv = ``;
	if (item.tags != null)
	{
		taglist += `<p class="tagdisplay">Tags:`
		
		for (let i = 0; i < item.tags.length; i++)
		{
			if (i > 0)
			{
				taglist += ",";
				tagdiv += ` `;
			}
			taglist += ` ${item.tags[i]}`;
			tagdiv += `${item.tags[i].replace(/ /g,"_")}`;
		}
		
		taglist += `</p>`
	}
	
	output += `
	<article id="${lowername}" class="TagFilter ${tagdiv}">
	`;
	
	//Guides don't have images
	if (pagetype != "guide")
	{
		output += `<div class="container_box">
			<div class="container_text">`;
	}
	
	output += `
		<h2>${item.name}</h2>
		<p>
		<b>Initial release:</b> ${item.release}`;
	
	//Additional display if it was for an event
	if (item.forevent != null)
	{
		output += ` (for ${item.forevent})`;
	}
	
	output += `
	<br>
	<b>Last update:</b> `;
	
	if (item.latest != null)
	{
		output += `${item.latest}`;
	}
	else
	{
		output += `None`;
	}
	
	//Guides aren't versioned
	if (pagetype != "guide")
	{
		//Sometimes functions and minigames are versioned, sometimes not
		//if ((pagetype == "function" || pagetype == "minigame") && item.version != null)
		if (item.version != null)
		{
			output += ` / ${item.version}`;
		}
	}
	
	if (pagetype == "ghost" || pagetype == "template")
	{
		if (item.translations != null)
		{
			output += `
			<br>
			<b>Translations available:</b> `;
			
			for (let i = 0; i < item.translations.length; i++)
			{
				if (i > 0)
				{
					output += `, `;
				}
				if (item.translations[i].download == null)
				{
					output += `${item.translations[i].spoken_language}`;
				}
				else
				{
					output += `<a href='${item.translations[i].download}'>${item.translations[i].spoken_language}</a> (Separate release)`;
				}
			}
		}
	}
	
	output += `</p>`;
	
	//Display collaborators if there are any - no display if none
	if (item.collaborators != null)
	{
		output += `<p><b>Collaborators:</b> `;
		
		for (let i = 0; i < item.collaborators.length; i++)
		{
			if (i > 0)
			{
				output += `, `;
			}
			if (item.collaborators[i].creditlink == null)
			{
				output += `${item.collaborators[i].name}`
			}
			else
			{
				output += `<a href="${item.collaborators[i].creditlink}">${item.collaborators[i].name}</a>`
			}
		}
		output += `</p>`;
	}
	
	if (item.content_warnings != null)
	{
		output += `<p><b>Content warnings: </b> ${item.content_warnings}</p>`;
	}
	
	//Unique sections for each type that needs one
	if (pagetype == "shell")
	{
		output += `<p><b>For:</b> `;
	
		for (let i = 0; i < item.goeswith.length; i++)
		{
			if (i > 0)
			{
				output += `, `;
			}
			
			if (item.goeswith[i].download_link == "mine")
			{
				output += `<a href="../ghost/${makeStandard(item.goeswith[i].name)}.html">${item.goeswith[i].name}</a>`
			}
			else
			{
				output += `<a href="${item.goeswith[i].download_link}">${item.goeswith[i].name}</a> (External link)`
			}
		}
	}
	else if (pagetype == "balloon" && item.goeswith != null)
	{
		//I may eventually change this if I make balloons for other people, to make it have external links too. Why am I not building that now? Uhhhh can't be bothered tbqh
		output += `<p><b>Originally made for:</b> `;
		for (let i = 0; i < item.goeswith.length; i++)
		{
			if (i > 0)
			{
				output += `, `;
			}
			if (typeof item.goeswith[i] === "string")
			{
				if (item.goeswith[i] == "Spectre")
				{
					output += `<a href="../plugin/spectre.html">Spectre</a>`
				}
				else
				{
					output += `<a href="../ghost/${makeStandard(item.goeswith[i])}.html">${item.goeswith[i]}</a>`
				}
			}
			else
			{
				output += `<a href="${item.goeswith[i].download}">${item.goeswith[i].name}</a>`
			}
		}
		output += `</p>`;
	}
	else if (pagetype == "template")
	{
		output += `<p><b>Type:</b> ${item.type}</p>`;
	}
	else if (pagetype == "saori")
	{
		output += `<p><b>Standard:</b> ${item.standard}</p>`;
	}
	else if (pagetype == "guide")
	{
		output += `<p>`;
		output += `<b>Guide for:</b> ${item.guidefor}`;
		if (item.language != null)
		{
			output += `<br>
			<b>Programming language:</b> ${item.language}`
		}
		output += `</p>`;
	}
	
	
	
	
	//Special cases for guides and balloons since they can have different "download" links
	if (pagetype == "guide")
	{
		output += `<p>`;
	
		if (item.externallink != null)
		{
			output += `<a href="${item.externallink.link}">Read</a> (${item.externallink.hostedby})</p>`;
		}
		else
		{
			output += `<a href="${lowername}.html">Read</a>`;
		}
		
		output += `</p>`;
	}
	else if (!(pagetype == "function" || pagetype == "minigame" || pagetype == "free_asset" || pagetype == "misc"))
	{
		output += `<p><a href="${lowername}.html">Read more</a> | `;
	}
	
	if (pagetype == "balloon" && item.download.length > 1)
	{
		output += `<a href="${item.download[0]}">Download (pack)</a> | <a href="${item.download[1]}">Download (individual balloons)</a></p>`;
	}
	else if (pagetype == "calendar_skin" && item.download.length > 1)
	{
		output += `<a href="${item.download[0]}">Download (pack)</a> | <a href="${item.download[1]}">Download (individual skins)</a></p>`;
	}
	else if (pagetype != "guide") //TODO | ??? idk what this TODO was for tbqh 23-7-28
	{
		if ((pagetype == "function" || pagetype == "minigame") && !item.download.startsWith("https://"))
		{
			output += `<a href="${item.download}" target="_blank">View code</a></p>`;
		}
		else
		{
			output += `<a href="${item.download}">Download</a></p>`;
		}
	}
	
	
	
	
	output += `
	<p>${item.blurb}</p>`;
	
	output += taglist;
	
	output += `<p class="back_to_top"><a href='#'>Back to top</a></p>
	</div>
	`;
	
	//Guides don't have images
	if (pagetype != "guide")
	{
		output += `
		<div class="indexbox">`;
		//Minigames and functions do not have pages with more images. Also, they should be gifs
		if (pagetype == "function" || pagetype == "minigame")
		{
			output += `<img src="${lowername}_demonstration.gif"`;
		}
		else
		{
			output += `<img src="${lowername}/preview.png"`;
		}
			
			output += ` alt="${item.name} `;
		
		if (pagetype == "function" || pagetype == "minigame")
		{
			output += `demonstration`;
		}
		else
		{
			output += `preview`;
		}
		output += `" class="indeximg">
			</div>
		</div>
		<div class="floatclear"></div>
		`;
	}
	
	output += `</article>`;
	
	return output;
}

//Shells are :sparkles: special :sparkles:
let index_details = [];

if (pagetype == "shell")
{
	index_details = shell_details;
}
else
{
	index_details = item_details;
}

document.getElementById('quick_index').innerHTML = index_details.map(makeTopIndex).join('');
document.getElementById('full_index').innerHTML = index_details.map(makeIndex).join('');



//Filter by tag on index pages
let FilterAdd = [];
let FilterRemove = [];
let total_count = 0;
let shown_count = 0;


//EXCLUDED TAGS TAKE PRECEDENT OVER INCLUDED ONES
//Also, it uses AND and not OR
filterSelection("clear")
function filterSelection(tag, operation)
{
	let elements = document.getElementsByClassName("TagFilter")
	if (tag == "clear")
	{
		FilterAdd = [];
		FilterRemove = [];
	}
	else //Adjust if the filter is including the tag, excluding it, or off
	{
		let addpos = FilterAdd.indexOf(tag)
		let rempos = FilterRemove.indexOf(tag)
		if (rempos != -1)
		{
			FilterRemove.splice(rempos, 1)
		}
		else if (addpos != -1)
		{
			FilterAdd.splice(addpos, 1)
			FilterRemove.push(tag);
		}
		else
		{
			FilterAdd.push(tag);
		}
	}
	
	let elementlist = "";
	for (let i = 0; i < elements.length; i++)
	{
		if (i > 0) elementlist += ", ";
		elementlist += elements[i].id;
	}
	
	total_count = 0;
	shown_count = 0;
	
	//Refresh the display
	for (let i = 0; i < elements.length; i++)
	{
		classes = elements[i].className.split(" ");
		for (let ii = 0; ii < classes.length; ii++)
		{
			if (classes[ii] == "TFShow")
			{
				classes.splice(ii, 1);
				break;
			}
		}
		
		let to_show = 1;
		for (let ii = 0; ii < FilterAdd.length; ii++)
		{
			if (classes.indexOf(FilterAdd[ii]) == -1 && FilterAdd.length > 0)
			{
				to_show = 0;
				break;
			}
		}
		for (let ii = 0; ii < FilterRemove.length; ii++)
		{
			if (classes.indexOf(FilterRemove[ii]) != -1)
			{
				to_show = 0;
				break;
			}
		}
		
		if (to_show == 1)
		{
			classes.push("TFShow");
			shown_count++;
		}
		total_count++;
		elements[i].className = classes.join(" ");
	}
	
	/* Similar to the above but for the quick index. In this case, if the entry is not showing, gray out the link to it */
	let elementsquickindex = document.getElementsByClassName("TagFilterQuickIndex")
	for (let i = 0; i < elementsquickindex.length; i++)
	{
		classes = elementsquickindex[i].className.split(" ");
		for (let ii = 0; ii < classes.length; ii++)
		{
			if (classes[ii] == "TFQHide")
			{
				classes.splice(ii, 1);
				break;
			}
		}
		
		let to_hide = 0;
		for (let ii = 0; ii < FilterAdd.length; ii++)
		{
			if (classes.indexOf(FilterAdd[ii]) == -1 && FilterAdd.length > 0)
			{
				to_hide = 1;
				break;
			}
		}
		for (let ii = 0; ii < FilterRemove.length; ii++)
		{
			if (classes.indexOf(FilterRemove[ii]) != -1)
			{
				to_hide = 1;
				break;
			}
		}
		//NOTE: currently, despite being grayed out they are still clicky... oh well?
		if (to_hide == 1)
		{
			classes.push("TFQHide");
		}
		elementsquickindex[i].className = classes.join(" ");
	}
	
	document.getElementById('filtercount').innerHTML = `(${shown_count} of ${total_count} shown)`;
}

let buttoncontainer = document.getElementById("tagfilterbuttons");
let buttons = buttoncontainer.getElementsByClassName("tagbtn");

for (let i = 0; i < buttons.length; i++)
{
	buttons[i].addEventListener("click", function() {
		if (this.className.indexOf("FilterRemove") != -1) this.className = this.className.replace(" FilterRemove","");
		else if (this.className.indexOf("FilterAdd") != -1) this.className = this.className.replace(" FilterAdd"," FilterRemove");
		else
		{
			this.className += " FilterAdd";
		}	
	});
}

let clearbutton = buttoncontainer.getElementsByClassName("tagbtnclear")[0];

clearbutton.addEventListener("click", function() {
	for (let i = 0; i < buttons.length; i++)
	{
		console.log(`button ${i}`);
		buttons[i].className = buttons[i].className.replace(" FilterAdd","");
		buttons[i].className = buttons[i].className.replace(" FilterRemove","");
	}
});

document.getElementById('filtercount').innerHTML = `(${shown_count} of ${total_count} shown)`;