//Get what page and type we're on
let currentpage = "";
let pagename = location.pathname
	
if (pagename.endsWith(".html"))
{
	pagename = pagename.replace(".html","")
}
pagename = pagename.split("/")
let pagetype = pagename[pagename.length - 2]
pagename = pagename[pagename.length - 1]

//To maintain compatibility with other page types in which shells are :sparkles: special :sparkles:
index_details = item_details;
for (let i = 0; i < index_details.length; i++)
{
	if (makeStandard(index_details[i].name) == pagename)
	{
		currentpage = index_details[i]
	}
}

//Make head info
function ItemInfo()
{
	let output = ``;

	//Make collaborator listing
	let collaborators = ``;
	if (currentpage.collaborators != null)
	{
		for (let i = 0; i < currentpage.collaborators.length; i++)
		{
			if (i > 0)
			{
				collaborators += `, `;
			}
			if (currentpage.collaborators[i].creditlink == null)
			{
				collaborators += `${currentpage.collaborators[i].name}`
			}
			else
			{
				collaborators += `<a href="${currentpage.collaborators[i].creditlink}">${currentpage.collaborators[i].name}</a>`
			}
		}
	}

	let lowername = makeStandard(currentpage.name);
	
	output += `
	<h1>${currentpage.name}</h1>
	<h2>Details</h2>
	<p>
		<b>Initial release:</b> ${currentpage.release}
	`;
	
	if (currentpage.forevent != null)
	{
		output += ` (for ${currentpage.forevent})`;
	}
	
	output += `
	<br>
	<b>Last update:</b> `;
	
	if (currentpage.latest != null)
	{
		output += `${currentpage.latest}`;
	}
	else
	{
		output += `None`;
	}
	
	if (currentpage.collaborators != null)
	{
		output += `<br>
		<b>Collaborators:</b> ` + collaborators;
	}
	
	output += `<br>
	<b>Guide for:</b> ${currentpage.guidefor}`;
	if (currentpage.language != null)
	{
		output += `<br>
		<b>Programming language:</b> ${currentpage.language}`
	}
	output += `</p>`;
	output += `<p>${currentpage.blurb}</p>`;
	
	return output;
}

document.getElementById('item_info').innerHTML = ItemInfo();