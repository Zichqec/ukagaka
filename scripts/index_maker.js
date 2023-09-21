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
	
	return `<div class="index_link"><a href="#${lowername}">${item.name}</a></div>`;
}

function makeIndex(item)
{
	let lowername = makeStandard(item.name);
	let output = ``;
	
	output += `
	<article id="${lowername}">
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
			output += ` / v${item.version}`;
		}
	}
	
	if (pagetype == "ghost")
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
				output += `${item.translations[i].spoken_language}`;
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
			
			if (item.goeswith[i] == "FLELE")
			{
				output += `<a href="https://ukagakadreamteam.com/wiki/ghost/flele">${item.goeswith[i]}</a> (External link)`
				
			}
			else
			{
				output += `<a href="../ghost/${makeStandard(item.goeswith[i])}.html">${item.goeswith[i]}</a>`
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
			output += `<a href="../ghost/${makeStandard(item.goeswith[i])}.html">${item.goeswith[i]}</a>`
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
	else if (!(pagetype == "function" || pagetype == "minigame"))
	{
		output += `<p><a href="${lowername}.html">Read more</a> | `;
	}
	
	if (pagetype == "balloon" && item.download.length > 1)
	{
		output += `<a href="${item.download[0]}">Download (pack)</a> | <a href="${item.download[1]}">Download (individual balloons)</a></p>`
	}
	else if (pagetype != "guide") //TODO | ??? idk what this TODO was for tbqh 23-7-28
	{
		if ((pagetype == "function" || pagetype == "minigame") && !item.download.startsWith("https://"))
		{
			output += `<a href="${item.download}" target="_blank">View code</a></p>`
		}
		else
		{
			output += `<a href="${item.download}">Download</a></p>`
		}
	}
	
	
	
	
	output += `
	<p>${item.blurb}</p>
	
	<p class="back_to_top"><a href='#'>Back to top</a></p>
	</div>
	`;
	
	//Guides don't have images
	if (pagetype != "guide")
	{
		output += `
		<div class="indexbox">
			<img src="${lowername}/preview.png" alt="${item.name} `;
		
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