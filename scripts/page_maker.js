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
		console.log(i);
		console.log(index_details[i]);
		console.log(index_details[i].name);
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

	if (currentpage.name.includes("ゴ"))
	{
		output += `<h1><span lang="ja">${currentpage.name}</span></h1>`;
	}
	else
	{
		output += `<h1>${currentpage.name}</h1>`;
	}
	
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
			<b>Initial release:</b> ${dateDisplay(currentpage.release)}
		`;

	if (currentpage.forevent != null)
	{
		if (currentpage.forevent.includes("ゴ"))
		{
			output += ` (for <span lang="ja">${currentpage.forevent}</span>)`;
		}
		else
		{
			output += ` (for ${currentpage.forevent})`;
		}
	}

	output += `<br>
	<b>Last update:</b> `;

	if (currentpage.latest != null)
	{
		output += `${dateDisplay(currentpage.latest)}`;
	}
	else
	{
		output += `None`;
	}

	//Guides aren't versioned - and there are exceptions like Ghost Yaminabe...
	if (!(pagetype == "guide" || currentpage.version == null))
	{
		output += ` / ${currentpage.version}`;
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

	if (pagetype == "ghost" || pagetype == "template")
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
				if (currentpage.translations[i].download == null)
				{
					output += `${currentpage.translations[i].spoken_language} (by <a href='${currentpage.translations[i].translator.creditlink}'>${currentpage.translations[i].translator.name}</a>)`;
				}
				else
				{
					output += `<a href='${currentpage.translations[i].download}'>${currentpage.translations[i].spoken_language}</a> (Separate release, by <a href='${currentpage.translations[i].translator.creditlink}'>${currentpage.translations[i].translator.name}</a>)`;
				}
				
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
			
			if (pagetype == "shell")
			{
				if (currentpage.goeswith[i].download_link == "mine")
				{
					output += `<a href="../ghost/${makeStandard(currentpage.goeswith[i].name)}.html">${currentpage.goeswith[i].name}</a>`
				}
				else
				{
					output += `<a href="${currentpage.goeswith[i].download_link}">${currentpage.goeswith[i].name}</a> (External link)`
				}
			}
			else
			{
				//TODO sorry future zi, if you make balloons for ghosts other than your own that is your problem and not mine
				//I'll have to do it at some point, but i don't want to declare objects for all of my ghosts, ugh... I'll figure something out eventually
				
				if (typeof currentpage.goeswith[i] === "string")
				{
					if (currentpage.goeswith[i] == "Spectre")
					{
						output += `<a href="../plugin/spectre.html">Spectre</a>`
					}
					else
					{
						output += `<a href="../ghost/${makeStandard(currentpage.goeswith[i])}.html">${currentpage.goeswith[i]}</a>`
					}
				}
				else
				{
					output += `<a href="${currentpage.goeswith[i].download}">${currentpage.goeswith[i].name}</a>`
				}
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
	
	//"Read more at" display
	if (currentpage.readmore != null)
	{
		output += `<br>
		<b>Read more at (external links):</b> `
		for (let i = 0; i < currentpage.readmore.length; i++)
		{
			if (i > 0)
			{
				output += `, `;
			}
			
			output += `<a href="${currentpage.readmore[i].url}" target="_blank">${currentpage.readmore[i].label}</a>`
		}
	}
	
	//Permissions link
	output += `<br>`;
	if (pagetype == "saori")
	{
		output += `<b><a href="../permissions.html#saori">Related permissions<a></b>`;
	}
	else
	{
		output += `<b><a href="../permissions.html#${pagetype}s">Related permissions<a></b>`;
	}
	
	output += `</p>`;

	return output;
}

function makeMyShellIndex(shells)
{
	let output = ``;
	output += `<article id="shells_by_me">`;
	output += `<p class="to_top"><a href='#'>Back to top</a></p>`;
	
	output += `
	<h2>Shells by me</h2>
	<p>These are external shells by me! These don't come bundled with the ghost (unless otherwise noted), if you want them you'll have to download them and install them separately.</p>
	`;
	
	if (shells.length > 3)
	{
		output += `<p>Quick index:</p>`;
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
			
		output += `<b>Initial release:</b> ${dateDisplay(item.release)}`;
		//Additional display if it was for an event
		if (item.forevent != null)
		{
			output += ` (for ${item.forevent})`;
		}
		output += `<br>
		<b>Last update:</b> `;
		
		if (item.latest != null)
		{
			output += `${dateDisplay(item.latest)}`;
		}
		else
		{
			output += `None`;
		}
		
			output += ` / ${item.version}`;
		
		
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
				if (item.collaborators[i].creditlink == null)
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
		
		
		if (item.content_warnings != null)
		{
			output += `<br><br>
			<b>Content warnings: </b> ${item.content_warnings}
			<br>`;
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
	output += `<p class="to_top"><a href='#'>Back to top</a></p>`;
	output += `
	<h2>Shells by others</h2>
	<p>These are external shells made by folks other than me. Check em out, and make sure you tell the creators of the shells if you enjoy them! You can also find shells listed on the <a href="https://ukagakadreamteam.com/wiki/ghost/${pagename}#shells">Ukagaka Dream Team Wiki</a>.</p>
	<p>If you've made a shell for one of my ghosts, please tell me about it and I will gladly list it here!</p>
	`;
	
	if (shells.length > 3)
	{
		output += `<p>Quick index:</p>`;
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
		
		output += `</p>
		<p><b>Initial release:</b> ${dateDisplay(item.release)}`;
		
		//Additional display if it was for an event
		if (item.forevent != null)
		{
			output += ` (for ${item.forevent})`;
		}
		
		if (item.content_warnings != null)
		{
			output += `</p>
			<p><b>Content warnings: </b> ${item.content_warnings}</p>`;
		}
		
		output += `<p><a href="${item.download}">Download</a></p>`;
		
		//<p>${item.blurb}</p>
		output += `
		
		
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

//TODO i could probably use getElementByTag to grab all articles and then grab the h2s in them to create this... and then i could add any headings i want per page?
//TODO working except a few things:
//1: version history is made page-side and so doesn't show here? maybe? check the console. it looks like it's getting it, but...???
//2: need to get rid of those divs and make the IDs be uniform on the articles - this might solve some other problems too
function makePageIndex()
{
	output = ``;
	
	// if (typeof gallery_images !== 'undefined')
	// {
		// if (gallery_images.length > 0)
		// {
			// output += `<a href="#gallery">Gallery</a><br>`;
		// }
	// }
	
	// if (pagetype == "ghost")
	// {
		// if (shell_list.length > 0)
		// {
			// output += `<a href="#shells_by_me">Shells by me</a><br>`;
		// }
		// if (shells_by_others.length > 0)
		// {
			// output += `<a href="#shells_by_others">Shells by others</a><br>`;
		// }
	// }
	
	// if (version_history != null)
	// {
		// output += `<a href="#version_history">Version history</a>`;
	// }
	
	let articles = document.getElementsByTagName("article")
	console.log(articles);
	console.log(articles.length);	
	for (let i = 1; i < articles.length; i++)
	{
		console.log(`i ${i}`);
		let heading = articles[i].getElementsByTagName("h2")[0];
		console.log(`heading: ${heading.innerText} ${heading.outerHTML}`);
		console.log(heading);
		if (output != "")
		{
			output += `<br>`;
		}
		output += `<a href="#${makeStandard(heading.innerText)}">${heading.innerText}</a>`;
	}
	
	if (output != ``)
	{
		output = `
		<h2>Index</h2>
		<p>
		` + output + `</p>`;
	}
	
	return output;
}

document.getElementById('item_info').innerHTML = ItemInfo();

function makeGallery(gallery_images)
{
	let fullview = ``;
	let thumbview = ``;
	for (let i = 0; i < gallery_images.length; i++)
	{
		let path = gallery_images[i].path
		let name = path.split(".")[0]
		let alt = gallery_images[i].alt
		let caption = gallery_images[i].caption
		
		fullview += `
		<div class="gallery-full" id="${name}-full">
			<img src="${makeStandard(currentpage.name)}/gallery/${path}" alt="${alt}">
			<span class="gallery-caption">${caption}</span>
		</div>
		`;
		if (gallery_images[i].spoiler != null)
		{
			thumbview += `
			<span class="gallery-slot" id="${name}">
				<span class="spoilerimg">
					<img src="${makeStandard(currentpage.name)}/gallery/${path}" onclick="openGalleryImage('${name}')" alt="Spoiler: ${alt}"><span class="spoilerimgwarning">${gallery_images[i].spoiler}</span>
				</span>
				
			</span>
			`;
		}
		else
		{
			thumbview += `
			<span class="gallery-slot" id="${name}">
				<img src="${makeStandard(currentpage.name)}/gallery/${path}" onclick="openGalleryImage('${name}')" alt="${alt}">
			</span>
			`;
		}
		
	}
	
	let output = ``;
	output += `
<article id="gallery">
	<p class="to_top"><a href='#'>Back to top</a></p>

	<h2>Gallery</h2>



	<div class="gallery-backdrop" id="gallery-modal" onclick="closeGalleryImage()">
	<div class="gallery-noscroll" id="gallery-scrollblock" onclick="closeGalleryImage()"></div>
		<div class="gallery-modal-content">
	`;
	
	output += fullview;
	
	output += `
		</div>
	</div>
	<div id="gallery_display" class="gallery-row">
	`;
	
	output += thumbview;
	
	output += `
	</div>
</article>`;

	return output;
}

if (typeof gallery_images !== 'undefined')
{
	if (gallery_images.length > 0)
	{
		document.getElementById('gallery_placeholder').outerHTML = makeGallery(gallery_images);
	}
}

//From https://www.reddit.com/r/Carrd/comments/1bopfvx/spoiler_tag_on_image/
// document.querySelectorAll('.spoiler').forEach(function(spoiler)
// {
    // spoiler.addEventListener('click', function()
	// {
        // spoiler.classList.toggle('revealed');
    // }
	// );
// }
// );

let gallerycontainer = document.getElementById("gallery_display");
if (gallerycontainer != null)
{
	let spoileredImages = gallerycontainer.getElementsByClassName("spoilerimg");
	for (let i = 0; i < spoileredImages.length; i++)
	{
		spoileredImages[i].addEventListener("click", function() {
			//this.classList.toggle('revealed');
			if (this.className.indexOf("revealed") == -1)
			{
				this.className += " revealed";
			}
			
			//Add "revealed" to the warning text to clear it too
			let warningMessage = spoileredImages[i].getElementsByClassName("spoilerimgwarning");
			warningMessage[0].className += " revealed";
		});
	}
}

function openGalleryImage(image)
{
	document.getElementById("gallery-modal").style.display = "block";
	document.getElementById("gallery-scrollblock").style.display = "block";
	document.getElementById(`${image}-full`).style.display = "inline-block";
}

function closeGalleryImage()
{
	document.getElementById("gallery-modal").style.display = "none";
	document.getElementById("gallery-scrollblock").style.display = "none";
	let GalleryImages = document.getElementsByClassName("gallery-full");
	for (let i = 0; i < GalleryImages.length; i++)
	{
		GalleryImages[i].style.display = "none";
	}
}

if (pagetype == "ghost")
{
	if (shells_by_others.length > 0)
	{
		document.getElementById('shells_by_others_index').outerHTML = makeOtherShellIndex(shells_by_others);
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
		document.getElementById('shells_by_me_index').outerHTML = makeMyShellIndex(shell_list);
	}
}

document.getElementById('page_index').innerHTML = makePageIndex();

document.getElementById('indexblurb').innerHTML = `<p>${currentpage.blurb}</p>`;