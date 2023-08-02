//Many thanks to andrews05 in the EV Nova Discord for helping me with the initial setup for this! I've made lots of changes at this point, but it really helped me get a grasp on this.
console.log("hello, world!");
let path = location.pathname
console.log(path);
let islocal = location.protocol == "https:" ? '' : '.html';
let ishomepage = 1;
if (!(location.pathname.endsWith("ukagaka/index.html") || location.pathname.endsWith("ukagaka/") || location.pathname == "/" || location.pathname == ""))
{
	ishomepage = 0;
}


let links = [
	{path: 'index', title: 'Home'},
	{path: 'about', title: 'About'},
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
		{path: 'resources', title: "Resources"},
		{path: 'blog/2021-12-12_advent_calendar_probabilities', title: "Advent Calendar 2021"},
		{path: 'blog/2022-12-19_advent_calendar_how_to_write_a_needle', title: "Advent Calendar 2022 (#00)"},
		{path: 'blog/2022-12-23_advent_calendar_wiki_release', title: "Advent Calendar 2022 (#01)"},
		{path: 'blog/2022-12-24_advent_calendar_yaya_fundamentals_release', title: "Advent Calendar 2022 (#02)"},
	]},
	{title: "Space Mode Toggle"}
];

let deepness = 0;

//There's probably a much better way to do this, but what can I say, I don't actually know JavaScript lol
//Get how many subfolders deep we are
function findDeepness()
{
	console.log("find deepness");
	console.log(location.pathname);
	let path = location.pathname;
	console.log(path);
	
	if (ishomepage)
	{
		deepness = 0;
	}
	else
	{
		if (islocal)
		{
			path = path.split("ukagaka/"); //this is bad and i should fix this at some point
			path = path[1];
		}
		else
		{
			
		}
		console.log(path);
		path = path.split("/");
		deepness = path.length - 1;
	}
	console.log(path);
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
			<button onclick="toggleSpaceMode()" class="space_mode_button"><img src="${imgpath}" class="space_mode_img"></button>
		</div>
		`;
	}
	else
	{
		return `<p class="navdivider">${link.title}</p>`;
	}
}

//I feel this is a bit messy, since part of the linkHTML function also appends .html depending on if it's local or not. But eh... I'm not convinced it's worth tinkering with that. Technically this should be its own file, but like, why go to the effort of having to change the path on another link for each page??? idk man.
//Anyways, this just gets all the <a> tags, and if they're linking to another page on this site and it is NOT the local version, removes the .html from each one. Makes things a bit tidier.
function fixLocalLinks()
{
	let a_links = document.getElementsByTagName("a");
	console.log(a_links);
	for (let a_link of a_links)
	{
		if (a_link.href.startsWith("https://ukagaka.zichqec.com/"))
		{
			a_link.href = a_link.href.replace(".html","");
		}
	}
}

findDeepness();
document.getElementById('navbar').innerHTML = links.map(linkHTML).join('');

if (!islocal)
{
	fixLocalLinks();
}


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
	} else
	{
		localStorage.setItem("theme", "space_mode");
	}

	//document.getElementById("theme").textContent = localStorage.getItem("theme");
}