let currentpage = 0;
let pagination = true;
let itemsperpage = 3;
let index_details = item_details;
let totalitems = index_details.length;

function makeIndex()
{
	console.log(`currentpage: ${currentpage}`);
	console.log(`itemsperpage: ${itemsperpage}`);
	let startpoint = currentpage * itemsperpage;
	let endpoint = startpoint + itemsperpage;
	console.log(`startpoint: ${startpoint}`);
	console.log(`endpoint: ${endpoint}`);
	if (pagination == false)
	{
		endpoint = totalitems;
	}
	let output = ``;
	
	for (let i = startpoint; i < endpoint; i++)
	{
		if (index_details[i] == null)
		{
			break
		}
		let item = index_details[i];
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
	}
	
	return output;
}

function TotalPages()
{
	if (pagination == false)
	{
		return 1;
	}
	
	let fullpages = totalitems / itemsperpage; //this may need to be floored
	let partialpage = totalitems % itemsperpage;
	return Math.floor(fullpages) + partialpage;
}

function makePaginationNav()
{
	let output = ``;
	output += `<article>`;
	//TODO: if you click see all, you need to not see the pagination nav anymore... but I think I'll probably do this once I style it? hm
	if (currentpage > 0)
	{
		output += `<button class="paginationBtn" onclick="paginationChange('first')"><< First</button>`;
		output += `<button class="paginationBtn" onclick="paginationChange('previous')">< Previous</button>`;
	}
	else
	{
		output += `<button class="paginationBtn paginationDisable"><< First</button>`;
		output += `<button class="paginationBtn paginationDisable">< Previous</button>`;
	}
	
	//TODO the first one needs to say 1 if pagination is false
	output += ` Page ${currentpage + 1} of ${TotalPages()} `;
	
	if ((currentpage < TotalPages() - 1))
	{
		output += `<button class="paginationBtn" onclick="paginationChange('next')">Next ></button>`;
		output += `<button class="paginationBtn" onclick="paginationChange('last')">Last >></button>`;
	}
	else
	{
		output += `<button class="paginationBtn paginationDisable">Next ></button>`;
		output += `<button class="paginationBtn paginationDisable">Last >></button>`;
	}
	
	if (pagination == true)
	{
		output += `<button class="paginationBtn" onclick="paginationChange('seeAll')">See all</button>`;
	}
	else
	{
		output += `<button class="paginationBtn" onclick="paginationChange('paginate')">Paginate</button>`;
	}
	
	output += `</article>`;
	
	return output;
}

function paginationChange(change)
{
	console.log("button pressed!");
	let totalpages = TotalPages() - 1; //Total COUNT of pages vs page NUMBER (0 indexed)
	
	if (change == "first")
	{
		currentpage = 0;
	}
	else if (change == "previous")
	{
		currentpage--;
		if (currentpage < 0)
		{
			currentpage = 0
		}
	}
	else if (change == "next")
	{
		currentpage++;
		if (currentpage > totalpages)
		{
			currentpage = totalpages;
		}
	}
	else if (change == "last")
	{
		currentpage = totalpages;
	}
	else if (change == "seeAll")
	{
		pagination = false;
	}
	else if (change == "paginate")
	{
		pagination = true;
	}
	else //First page load or other case
	{
		//currentpage = 0;
		//pagination = true;
	}
	
	document.getElementById('pagination_nav').innerHTML = makePaginationNav();
	document.getElementById('full_index').innerHTML = makeIndex();
}

paginationChange()

