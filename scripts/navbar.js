//Many thanks to andrews05 in the EV Nova Discord for helping me with the initial setup for this! I've made lots of changes at this point, but it really helped me get a grasp on this.
let path = location.pathname
let islocal = location.protocol == "https:" ? '' : '.html';
let ishomepage = 1;
if (!(location.pathname.endsWith("ukagaka/index.html") || location.pathname.endsWith("ukagaka/") || location.pathname == "/" || location.pathname == ""))
{
	ishomepage = 0;
}


let links = [
	{path: 'index', title: 'Home'},
	{path: 'about', title: 'About'},
	{path: 'blog/index', title: 'Blog'},
	{path: 'ghost/index', title: 'Ghosts'},
	{path: 'shell/index', title: "Shells"},
	{path: 'freeshell/index', title: "Freeshells"},
	{path: 'balloon/index', title: 'Balloons'},
	{path: 'template/index', title: 'Templates'},
	{path: 'calendar_skin/index', title: "Calendar Skins"},
	{path: 'saori/index', title: 'SAORI'},
	{path: 'plugin/index', title: 'Plugins'},
	{path: 'tool/index', title: 'Tools'},
	{path: 'guide/index', title: 'Guides'},
	{title: 'Code', sublinks:[
		{path: 'function/index', title: 'Functions'},
		{path: 'minigame/index', title: 'Minigames'},
	]},
	{title: 'Other', sublinks:[
		{path: 'free_asset/index', title: "Free Assets"},
		{path: 'misc/index', title: "Misc"},
		{path: 'permissions', title: "Permissions"},
		{path: 'resources', title: "Resources"},
	]},
	{title: "Space Mode Toggle"}
];

//lol past zi the word you wanted was DEPTH...
let deepness = 0;

//There's probably a much better way to do this, but what can I say, I don't actually know JavaScript lol
//Get how many subfolders deep we are
function findDeepness()
{
	let path = location.pathname;
	if (ishomepage)
	{
		deepness = 0;
	}
	else
	{
		if (islocal)
		{
			path = path.split("ukagaka/"); //this is bad and i should fix this at some point - update 2025-07-18 this is for the FOLDER NAME not the SITE URL
			path = path[1];
		}
		
		path = path.split("/");
		deepness = path.length - 1;
	}
	console.log(`deepness ${deepness}`);
}

function linkHTML(link)
{	
	let path = '';
	for (let i = 0; i < deepness; i++)
	{
		path += "../";
	}
	
	
	//Special option for the home tab since we want it not to place an index.html at the end
	if (link.title == "Home")
	{
		let addindex = islocal == ".html" ? 'index' : '';
		console.log(`link.title: ${link.title}`);
		console.log(`path: ${path}`);
		console.log(`islocal: ${islocal}`);
		console.log(`addindex: ${addindex}`);


		return `<a href="${path}${addindex}${islocal}">${link.title}</a>`;
	}
	//If it's a normal link
	else if (link.path)
	{
		return `<a href="${path}${link.path}${islocal}">${link.title}</a>`;
	}
	//If it's a dropdown
	else if (link.sublinks) {
		return `
			<div class="dropdown">
				<button class="dropbtn">${link.title}
				</button>
				<div class="dropdown-content">
				${link.sublinks.map(linkHTML).join('')}
				</div>
			</div>`;
	}
	else if (link.title == "Space Mode Toggle")
	{
		let imgpath = "favicon.png"
		if (deepness > 0)
		{
			imgpath = "../favicon.png"
		}
		return `
		<div class="space_mode_toggle">
			<button onclick="toggleSpaceMode()" class="space_mode_button"><img src="${imgpath}" class="space_mode_img" alt="Two stars. Click to enable or disable a galaxy background image."></button>
		</div>
		`;
	}
	else
	{
		return `<p class="navdivider">${link.title}</p>`;
	}
}

findDeepness();
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');


//Space mode stuff, thank you https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_toggle_dark_mode and https://stackoverflow.com/questions/60037491/how-to-save-cookies-for-dark-light-mode-toggle !!!

// On page load set the theme.
(function() {
	let onpageLoad = localStorage.getItem("theme") || "purple";
	let element = document.body;
	element.classList.add(onpageLoad);
	//document.getElementById("theme").textContent =
	//localStorage.getItem("theme") || "purple";
})();

function toggleSpaceMode() {
	let element = document.body;
	element.classList.toggle("space_mode");

	let theme = localStorage.getItem("theme");
	if (theme && theme === "space_mode")
	{
		localStorage.setItem("theme", "purple");
	}
	else
	{
		localStorage.setItem("theme", "space_mode");
	}

	//document.getElementById("theme").textContent = localStorage.getItem("theme");
}