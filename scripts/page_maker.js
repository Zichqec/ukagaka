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

for (let i = 0; i < index_details.length; i++)
{
	if (makeStandard(index_details[i].name) == pagename)
	{
		currentpage = index_details[i]
	}
}

let shell_list = []

//Make page
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
	<h1>${currentpage.name}</h1>`;
	
	if (pagename == "s_the_skeleton")
	{
		output += `
		<img src="s_the_skeleton/preview.png" class="invis-collapsible" alt="S the Skeleton preview">
		<div class="invis-content">
			<iframe width="314" height="321" scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=S&dob=1616139645&gender=m&element=Fire&pet=https%3A%2F%2Fzichqec.github.io%2Fs-the-skeleton%2Fimg%2FS_Bobbing.gif&map=tree.jpg&background=paper.jpg&tablecolor=%237d4bb9&textcolor=%237d4bb9" frameborder="0"></iframe>
		</div>`;
	}
	else
	{
		output += `<img src="${lowername}/appearance.png" class="centerimg" alt="${currentpage.name} preview" onError="this.onerror=null;this.src='${lowername}/preview.png';">`;
	}
	
	output += `<br>`;
	
	if (pagetype == "balloon" && currentpage.download.length > 1)
	{
		output += `<div id="download"><a href="${currentpage.download[0]}" class="dl_button">Download (pack)</a> <a href="${currentpage.download[1]}" class="dl_button">Download (individual balloons)</a></div>`;
	}
	else if (pagetype == "calendar_skin" && currentpage.download.length > 1)
	{
		output += `<div id="download"><a href="${currentpage.download[0]}" class="dl_button">Download (pack)</a> <a href="${currentpage.download[1]}" class="dl_button">Download (individual skins)</a></div>`;
	}
	else
	{
		output += `<div id="download"><a href="${currentpage.download}" class="dl_button">Download latest version</a></div>`;
	}
	
	output += `<h2>Details</h2>
		<p>
			<b>Initial release:</b> ${currentpage.release}
		`;

	if (currentpage.forevent != null)
	{
		output += ` (for ${currentpage.forevent})`;
	}

	output += `<br>
	<b>Last update:</b> `;

	if (currentpage.latest != null)
	{
		output += `${currentpage.latest}`;
	}
	else
	{
		output += `None`;
	}

	//Guides aren't versioned
	if (pagetype != "guide")
	{
		output += ` / v${currentpage.version}`;
	}

	if (currentpage.collaborators != null)
	{
		output += `<br>
		<b>Collaborators:</b> ` + collaborators;
	}
	
	if (currentpage.content_warnings != null)
	{
		output += `<br>
		<b>Content warnings: </b> ${currentpage.content_warnings}`;
	}

	if (pagetype == "ghost")
	{
		if (currentpage.translations != null)
		{
			output += `
			<br>
			<b>Translations available:</b> `;
			
			for (let i = 0; i < currentpage.translations.length; i++)
			{
				if (i > 0)
				{
					output += `, `;
				}
				output += `${currentpage.translations[i].spoken_language} (by <a href='${currentpage.translations[i].translator.creditlink}'>${currentpage.translations[i].translator.name}</a>)`;
			}
		}
	}
	
	if ((pagetype == "shell" || pagetype == "balloon") && currentpage.goeswith != null)
	{
		output += `<br>
		<b>Made for:</b> `;
	
		for (let i = 0; i < currentpage.goeswith.length; i++)
		{
			if (i > 0)
			{
				output += `, `;
			}
			
			if (currentpage.goeswith[i].download_link == "mine")
			{
				output += `<a href="../ghost/${makeStandard(currentpage.goeswith[i].name)}.html">${currentpage.goeswith[i].name}</a>`
				
			}
			else
			{
				output += `<a href="${currentpage.goeswith[i].download_link}.html">${currentpage.goeswith[i].name}</a> (External link)`
			}
		}
	}
	else if (pagetype == "template")
	{
		output += `<br>
		<b>Template for:</b> ${currentpage.type}s`;
	}
	else if (pagetype == "saori")
	{
		output += `<br>
		<b>Standard:</b> ${currentpage.standard}`;
	}
	else if (pagetype == "guide")
	{
		output += `<br>
		<b>Guide for:</b> ${currentpage.guidefor}
		<br>
		<b>Programming language:</b> ${currentpage.language}`;
	}
	
	output += `</p>`;

	return output;
}

function makeMyShellIndex(shells)
{
	let output = ``;
	output += `<article id="shells_by_me">`;
	output += `<p class="to_top"><a href='#'>Back to top</a>`;
	
	output += `
	<h2>Shells by me</h2>
	<p>These are external shells by me! These don't come bundled with the ghost (unless otherwise noted), if you want them you'll have to download them and install them separately.</p>
	`;
	
	if (shells.length > 3)
	{
		output += `<p>These links at the top of this section act as a quick index that will jump you to the different entries on this list.</p>`;
		output += `<div id="quick_index">`;
		
		for (let item of shells)
		{
			output += `<div class="index_link"><a href="#${makeStandard(item.name)}">${item.name}</a></div>`;
		}
		
		output += `<br></div>`;
	}
	
	
	for (let item of shells)
	{
		let lowername = makeStandard(item.name);
		output += `<div class="shell_box" id=${lowername}>`;
		output +=  `
		<div class="container_box">
			<div class="container_text">
			<h3>${item.name}</h3>
			`;
			
		output += `<b>Initial release:</b> ${item.release}`;
		//Additional display if it was for an event
		if (item.forevent != null)
		{
			output += ` (for ${item.forevent})`;
		}
		output += `<br>
		<b>Last update:</b> `;
		
		if (item.latest != null)
		{
			output += `${item.latest}`;
		}
		else
		{
			output += `None`;
		}
		
			output += ` / v${item.version}`;
		
		
		//Display collaborators if there are any
		if (item.collaborators != null)
		{
			output += `<p><b>Collaborators:</b> `;
			
			for (let i = 0; i < item.collaborators.length; i++)
			{
				if (i > 0)
				{
					output += `, `;
				}
				if (item.developers[i].creditlink == null)
				{
					output += `${item.collaborators[i].name}`
				}
				else
				{
					output += `<a href="${item.collaborators[i].creditlink}">${item.collaborators[i].name}</a>`
				}
			}
			output += `<br>`;
		}
		
		
		
		
		
		output += `<p><a href="../shell/${lowername}.html">Read more</a> | <a href="${item.download}">Download</a></p>`;
		
		output += `
		<p>${item.blurb}</p>
		
		<p class="back_to_top"><a href='#shells_by_me'>Back to shells</a></p>
		</div>`;
		
		output += `
		
		<div class="indexbox">
				<img src="../shell/${lowername}/preview.png" alt="${item.name} preview" class="indeximg">
		</div>
		</div>
		<div class="floatclear"></div>
		</div>
		`;
	}
	
	
	output += `</article>`;
	
	return output;
}

function makeOtherShellIndex(shells)
{
	let output = ``;
	output += `<article id="shells_by_others">`;
	output += `<p class="to_top"><a href='#'>Back to top</a>`;
	output += `
	<h2>Shells by others</h2>
	<p>These are external shells made by folks other than me. Check em out, and make sure you tell the creators of the shells if you enjoy them! You can also find shells listed on the <a href="https://ukagakadreamteam.com/wiki/ghost/${pagename}#shells">Ukagaka Dream Team Wiki</a>.</p>
	<p>If you've made a shell for one of my ghosts, please tell me about it and I will gladly list it here!</p>
	`;
	
	if (shells.length > 3)
	{
		output += `<p>These links at the top of this section act as a quick index that will jump you to the different entries on this list.</p>`;
		output += `<div id="quick_index">`;
		
		for (let item of shells)
		{
			output += `<div class="index_link"><a href="#${makeStandard(item.name)}">${item.name}</a></div>`;
		}
		
		output += `<br></div>`;
	}
	
	
	for (let item of shells)
	{
		let lowername = makeStandard(item.name);
		output += `<div class="shell_box" id=${lowername}>`;
		output +=  `
		<div class="container_box">
			<div class="container_text">
			<h3>${item.name}</h3>
			`;
			
		//Display developers
		output += `<p><b>Made by:</b> `;
		
		for (let i = 0; i < item.developers.length; i++)
		{
			if (i > 0)
			{
				output += `, `;
			}
			if (item.developers[i].creditlink == null)
			{
				output += `${item.developers[i].name}`
			}
			else
			{
				output += `<a href="${item.developers[i].creditlink}">${item.developers[i].name}</a>`
			}
		}
		
		output += `<br>
		<b>Initial release:</b> ${item.release}`;
		
		//Additional display if it was for an event
		if (item.forevent != null)
		{
			output += ` (for ${item.forevent})`;
		}
		
		output += `<p><a href="${item.download}">Download</a></p>`;
		
		output += `
		<p>${item.blurb}</p>
		
		<p class="back_to_top"><a href='#shells_by_others'>Back to shells</a></p>
		</div>`;
		
		output += `
		
		<div class="indexbox">
				<img src="${makeStandard(currentpage.name)}/shells/${lowername}.png" alt="${item.name} preview" class="indeximg">
		</div>
		</div>
		<div class="floatclear"></div>
		</div>
		`;
	}
	
	
	output += `</article>`;
	
	return output;
}

function makePageIndex()
{
	output = ``;
	output += `
	<h2>Index</h2>
	<p>
	`
	
	if (pagetype == "ghost")
	{
		if (shell_list.length > 0)
		{
			output += `<a href="#shells_by_me">Shells by me</a><br>`
		}
		if (shells_by_others.length > 0)
		{
			output += `<a href="#shells_by_others">Shells by others</a><br>`
		}
	}
	output += `<a href="#version_history">Version history</a>`;
	output += `</p>`;
	
	return output;
}

document.getElementById('item_info').innerHTML = ItemInfo();

if (pagetype == "ghost")
{
	if (shells_by_others.length > 0)
	{
		document.getElementById('shells_by_others_index').innerHTML = makeOtherShellIndex(shells_by_others);
	}

	function checkGhost(ghost)
	{
		let found = 0;
		for (let madefor of ghost.goeswith)
		{
			if (madefor.name == currentpage.name)
			{
				found = 1;
				break;
			}
		}
		return found;
	}

	shell_list = shell_details.filter(checkGhost);

	if (shell_list.length > 0)
	{
		document.getElementById('shells_by_me_index').innerHTML = makeMyShellIndex(shell_list);
	}
}

document.getElementById('page_index').innerHTML = makePageIndex();

document.getElementById('tempblurb').innerHTML = `<p>${currentpage.blurb}</p>`;