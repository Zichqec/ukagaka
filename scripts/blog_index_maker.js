function makeIndex(item)
{
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
			tagdiv += `${makeStandard(item.tags[i])}`;
			//tagdiv += `${item.tags[i].replace(/ /g,"_")}`;
		}
		
		taglist += `</p>`
	}
	
	let pagename = item.page.replace(".html","");
	output += `
		<article id="${pagename}">
		<h2><a href="${item.page}">${item.name}</a></h2>
		<p>
			<i>${dateDisplay(item.release)}</i>`;
			
		if (item.latest != null)
		{
			output += `
			<br>
			<b>Revised:</b> ${dateDisplay(item.latest)}
			`;
		}
		
	output += `
		</p>
		<p>
			${item.blurb}
		</p>
		${taglist}
		</article>
	`;
	
	return output;
}

let index_details = item_details;

document.getElementById('full_index').innerHTML = index_details.map(makeIndex).join('');