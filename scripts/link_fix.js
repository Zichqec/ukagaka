//I feel this is a bit messy, since part of the linkHTML function also appends .html depending on if it's local or not. But eh... I'm not convinced it's worth tinkering with that. Technically this should be its own file, but like, why go to the effort of having to change the path on another link for each page??? idk man.
//Anyways, this just gets all the <a> tags, and if they're linking to another page on this site and it is NOT the local version, removes the .html from each one. Makes things a bit tidier.
function fixLocalLinks()
{
	if (!islocal_2)
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
}

//Web archive seems to dislike sharing islocal across files...
let islocal_2 = location.protocol == "https:" ? '' : '.html';

fixLocalLinks();