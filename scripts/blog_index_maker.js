let currentpage = 0;
let pagination = true;
let itemsperpage = 25;
let index_details = item_details;
let index_tags = item_tags;

//————— Filter by tag on index pages —————
let FilterAdd = [];
let FilterRemove = [];
let IncludeSetting = "AND";
let ExcludeSetting = "OR";
let total_count = index_details.length;
let shown_count = index_details.length;

function makeFilterSortList()
{
	let output = ``;
	output += `
	<div id="filtersortbuttons" class="collapsiblecontent">
	Sort:
	<br>
	<button class="filtersortbtn sortbtnType" onclick="sortIndex('type','alphabetical')">Alphabetical</button>
	<button class="filtersortbtn sortbtnType SortActive" onclick="sortIndex('type','release_date')">Release date</button>
	<button class="filtersortbtn sortbtnType" onclick="sortIndex('type','last_updated')">Last updated</button>
	<br>
	<button class="filtersortbtn sortbtnDir" onclick="sortIndex('direction','ascending')">Ascending</button>
	<button class="filtersortbtn sortbtnDir SortActive" onclick="sortIndex('direction','descending')">Descending</button>

	<br>
	<br>

	Filter:
	<br>
	`;
	
	if (index_tags.length > 0)
	{
		for (let i = 0; i < index_tags.length; i++)
		{
			output += `<br>`;
			let tags = index_tags[i];
			//tags is a linear array of the tags for this row of the filter list
			for (let ii = 0; ii < tags.length; ii++)
			{
				let processed = tags[ii];
				//processed = processed.replace(/ /g,"_");
				processed = makeStandard(processed);
				//processed = processed.toLowerCase(); //Should be fine without... if I make this lowercase I also have to find other bits of code to make it lowercase in
				output += `<button class="filtersortbtn tagbtn" onclick="filterSelection('${processed}')">${tags[ii]}</button>
				`;
			}
		}
		output += `
		<br>
		<br>
		<button class="filtersortbtn tagbtnclear" onclick="filterSelection('clear')">Clear all filters</button>
		<br>
		<br>
		Included tags use logic:
		<button class="filtersortbtn tagSettingInclude FilterSettingActive" onclick="filterSelection('IncludeSetting','AND')">AND</button>
		<button class="filtersortbtn tagSettingInclude" onclick="filterSelection('IncludeSetting','OR')">OR</button>
		<br>
		Excluded tags use logic: 
		<button class="filtersortbtn tagSettingExclude" onclick="filterSelection('ExcludeSetting','AND')">AND</button>
		<button class="filtersortbtn tagSettingExclude FilterSettingActive" onclick="filterSelection('ExcludeSetting','OR')">OR</button>
		`;
	}
	else
	{
		output += `<i>No tags available.</i>`;
	}
	return output;
}

document.getElementById('filtersortbuttons').outerHTML = makeFilterSortList();

function filterSelection(tag, operation)
{
	let elements = document.getElementsByClassName("FilterSort")
	if (tag != null)
	{
		if (tag == "clear")
		{
			FilterAdd = [];
			FilterRemove = [];
		}
		else if (tag == "IncludeSetting")
		{
			IncludeSetting = operation;
		}
		else if (tag == "ExcludeSetting")
		{
			ExcludeSetting = operation;
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
	}
	
	let elementlist = "";
	for (let i = 0; i < elements.length; i++)
	{
		if (i > 0) elementlist += ", ";
		elementlist += elements[i].id;
	}
	
	index_details = [];
	shown_count = 0
	
	for (let i = 0; i < total_count; i++)
	{
		if (item_details[i] == null)
		{
			break
		}
		let item = item_details[i];
		let tagdiv = ``;
		if (item.tags != null)
		{
			for (let i = 0; i < item.tags.length; i++)
			{
				if (i > 0)
				{
					tagdiv += ` `;
				}
				tagdiv += `${makeStandard(item.tags[i])}`;
			}
		}
	
		
		let classes = tagdiv.split(" ");
		let to_show = 1;
		//Include
		if (FilterAdd.length > 0) //If there is no filter, just show it
		{
			if (IncludeSetting == "OR")
			{
				to_show = 0; //Hide unless we find at least 1 tag
				for (let ii = 0; ii < FilterAdd.length; ii++)
				{
					if (classes.indexOf(FilterAdd[ii]) != -1)
					{
						to_show = 1;
						break;
					}
				}
			}
			else //AND
			{
				//Show unless we find at least one tag not present
				for (let ii = 0; ii < FilterAdd.length; ii++)
				{
					if (classes.indexOf(FilterAdd[ii]) == -1)
					{
						to_show = 0;
						break;
					}
				}
			}
		}
		
		//Exclude
		if (FilterRemove.length > 0) //If no filters applied, skip
		{
			if (ExcludeSetting == "OR")
			{
				//If any tag in the exclusion list is found, skip
				for (let ii = 0; ii < FilterRemove.length; ii++)
				{
					if (classes.indexOf(FilterRemove[ii]) != -1)
					{
						to_show = 0;
						break;
					}
				}
			}
			else //AND
			{
				//If ALL tags in the exclusion list are found, hide it
				let tagsfound = 0;
				for (let ii = 0; ii < FilterRemove.length; ii++)
				{
					if (classes.indexOf(FilterRemove[ii]) != -1)
					{
						tagsfound++;
					}
				}
				if (tagsfound == FilterRemove.length)
				{
					to_show = 0;
				}
			}
			
		}
		
		if (to_show == 1)
		{
			shown_count++;
			index_details.push(item_details[i]);
		}
	}
	
	paginationChange("filter");
	sortIndex();
	document.getElementById('filtercount').innerHTML = `(${shown_count} of ${total_count} shown)`;
}
document.getElementById('filtercount').innerHTML = `(${shown_count} of ${total_count} shown)`;

//————— Sort on index pages —————
let SortType = "release_date";
let SortDirection = "descending";

//which: type or direction
//operation: alphabetical, ascending, etc
function sortIndex(which, adjustment)
{
	//Change the variables to the new setting
	if (which == "type") SortType = adjustment;
	else if (which == "direction") SortDirection = adjustment;
	
	//Sort the index arrays appropriately
	index_details.sort(sortCompare); //magical arguments, apparently
	
	
	//If it's descending order, just reverse it after... (note: for the BLOG ONLY, the array is written in descending order. However, the sorting above automatically makes it all ascending... so!)
	if (SortDirection == "descending") index_details.reverse();
	
	//Regenerate the index
	console.log(`makeIndex invoked by sortIndex`);
	document.getElementById('full_index').innerHTML = makeIndex();
}

function sortCompare(a, b)
{
	let aVal = a.name.toLowerCase();
	let bVal = b.name.toLowerCase();
	
	if (SortType == "release_date")
	{
		aVal = a.release;
		bVal = b.release;
	}
	else if (SortType == "last_updated")
	{
		aVal = a.latest;
		bVal = b.latest;
		//AHAHAHA i'm so happy with this. easy way to make it so that ones without updates are sorted by date instead but stay at the "earliest" spot on the list :) because I don't want them mixed in
		//Without this, the ones with null values just swap around randomly and it's annoying
		if (aVal == null) aVal = `0${a.release}`;
		if (bVal == null) bVal = `0${b.release}`;
	}
	
	//If same, sort by name
	if (aVal == bVal)
	{
		aVal = a.name.toLowerCase();
		bVal = b.name.toLowerCase();
	}
	
	if (aVal < bVal)
	{
		return -1;
	}
	if (aVal > bVal)
	{
		return 1;
	}
	return 0;
}

function makeIndex()
{
	console.log(`MAKE INDEX START`);
	console.log(index_details);
	console.log(` `);
	let startpoint = currentpage * itemsperpage;
	let endpoint = startpoint + itemsperpage;
	if (pagination == false)
	{
		startpoint = 0;
		endpoint = total_count;
	}
	
	let output = ``;
	
	for (let i = startpoint; i < endpoint; i++)
	{
		if (index_details[i] == null)
		{
			break
		}
		let item = index_details[i];
		//Make tags first cuz we'll need them for the div... //TODO i can probably simplify this with map + join...
		let taglist = ``;
		if (item.tags != null)
		{
			taglist += `<p class="tagdisplay">Tags:`
			
			for (let i = 0; i < item.tags.length; i++)
			{
				if (i > 0)
				{
					taglist += ",";
				}
				taglist += ` ${item.tags[i]}`;
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
	
	let fullpages = shown_count / itemsperpage;
	fullpages = Math.floor(fullpages);
	
	let partialpage = 0
	if (shown_count > itemsperpage && shown_count % itemsperpage != 0 || fullpages == 0)
	{
		partialpage = 1;
	}
	
	return fullpages + partialpage;
}

function makePaginationNav()
{
	for (let i = 0; i < 2; i++)
	{
		let output = ``;
		let which = "top";
		if (i == 1)
		{
			which = "bottom";
		}
		
		output += `<article><div class="paginationnav"><span>`;
		
		if (currentpage > 0 && pagination == true && shown_count > itemsperpage)
		{
			output += `<button class="paginationBtn" onclick="paginationChange('first','${which}')">&lt;&lt; First</button> `;
			output += `<button class="paginationBtn" onclick="paginationChange('previous','${which}')">&lt; Previous</button> `;
		}
		else
		{
			output += `<button class="paginationBtn paginationDisable">&lt;&lt; First</button> `;
			output += `<button class="paginationBtn paginationDisable">&lt; Previous</button> `;
		}
		
		let pagecount = TotalPages();
		
		if (pagination == true && shown_count > itemsperpage)
		{
			output += ` Page `;
			
			output += `<input type="number" id="jumptopage_${which}" min="1" max="${pagecount}" value="${currentpage + 1}" onchange="paginationChange('jump_${which}','${which}')">`;
			output += ` <label for="jumptopage_${which}">of ${pagecount}</label>  `;  //I don't know if this is the best label but I don't have a great way to do it, tbh... hmmm
		}
		else
		{
			output += ` <span class="paginationDisable">Page `;
			
			output += `<input type="number" id="jumptopage_${which}" min="1" max="${pagecount}" value="1" disable>`;
			output += ` <label for="jumptopage_${which}">of ${pagecount}</label></span>  `;  //I don't know if this is the best label but I don't have a great way to do it, tbh... hmmm
		}
		
		if ((currentpage < pagecount - 1) && pagination == true && shown_count > itemsperpage)
		{
			output += `<button class="paginationBtn" onclick="paginationChange('next','${which}')">Next &gt;</button> `;
			output += `<button class="paginationBtn" onclick="paginationChange('last','${which}')">Last &gt;&gt;</button> `;
		}
		else
		{
			output += `<button class="paginationBtn paginationDisable">Next &gt;</button> `;
			output += `<button class="paginationBtn paginationDisable">Last &gt;&gt;</button> `;
		}
		
		if (shown_count <= itemsperpage)
		{
			output += `<button class="paginationBtn paginationDisable paginationFixed">Display all</button>`;
		}
		else
		{
			if (pagination == true)
			{
				output += `<button class="paginationBtn paginationFixed" onclick="paginationChange('seeAll','${which}')">Display all</button>`;
			}
			else
			{
				output += `<button class="paginationBtn paginationFixed" onclick="paginationChange('paginate','${which}')">Paginate</button>`;
			}
		}
		
		if (i == 0) //Top only
		{
			//TODO there is the idea of showing here also how many are not displayed due to filtering... but i kinda can't be bothered at the moment, seems clunky. come back with a clearer head, perhaps
			if (pagination == true)
			{
				output += `<br><p align="center" class="paginationPerPageDisplay"><i>(${itemsperpage} per page / ${shown_count} total)</i></p>`;
			}
			else
			{
				output += `<br><p align="center" class="paginationPerPageDisplay"><i>(Showing all ${shown_count} entries)</i></p>`;
			}
		}
		output += `</span></div></article>`;
		
		if (i == 1) //Bottom
		{
			document.getElementById('pagination_nav_bottom').innerHTML = output;
		}
		else //Top
		{
			document.getElementById('pagination_nav_top').innerHTML = output;
		}
	}
}

function paginationChange(change, which)
{
	let totalpages = TotalPages() - 1; //Total COUNT of pages vs page NUMBER (0 indexed)
	
	let inputDisplayTop = document.getElementById("jumptopage_top");
	let inputDisplayBottom = document.getElementById("jumptopage_bottom");
	
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
	else if (change == "jump_top")
	{
		currentpage = inputDisplayTop.value - 1;
		if (currentpage < 0)
		{
			currentpage = 0
		}
		else if (currentpage > totalpages)
		{
			currentpage = totalpages;
		}
	}
	else if (change == "jump_bottom")
	{
		currentpage = inputDisplayBottom.value - 1;
		if (currentpage < 0)
		{
			currentpage = 0
		}
		else if (currentpage > totalpages)
		{
			currentpage = totalpages;
		}
	}
	else if (change == "filter")
	{
		if (currentpage > totalpages)
		{
			currentpage = totalpages;
		}
	}
	else //First page load or other case
	{
		//currentpage = 0;
		//pagination = true;
	}
	
	if (which == "bottom")
	{
		const element = document.getElementById("pagination_nav_top");
		element.scrollIntoView();
	}
	
	console.log(`makeIndex invoked by paginationChange`);
	document.getElementById('full_index').innerHTML = makeIndex();
	makePaginationNav();
}

paginationChange()





let buttoncontainer = document.getElementById("filtersortbuttons");

let sortbuttonsType = buttoncontainer.getElementsByClassName("sortbtnType");
for (let i = 0; i < sortbuttonsType.length; i++)
{
	sortbuttonsType[i].addEventListener("click", function() {
		for (let i = 0; i < sortbuttonsType.length; i++)
		{
			sortbuttonsType[i].className = sortbuttonsType[i].className.replace(" SortActive","");
		}
		this.className += " SortActive";
	});
}

let sortbuttonsDir = buttoncontainer.getElementsByClassName("sortbtnDir");
for (let i = 0; i < sortbuttonsDir.length; i++)
{
	sortbuttonsDir[i].addEventListener("click", function() {
		for (let i = 0; i < sortbuttonsDir.length; i++)
		{
			sortbuttonsDir[i].className = sortbuttonsDir[i].className.replace(" SortActive","");
		}
		this.className += " SortActive";
	});
}

let filterbuttons = buttoncontainer.getElementsByClassName("tagbtn");
for (let i = 0; i < filterbuttons.length; i++)
{
	filterbuttons[i].addEventListener("click", function() {
		if (this.className.indexOf("FilterRemove") != -1) this.className = this.className.replace(" FilterRemove","");
		else if (this.className.indexOf("FilterAdd") != -1) this.className = this.className.replace(" FilterAdd"," FilterRemove");
		else
		{
			this.className += " FilterAdd";
		}	
	});
}

let filterbuttonsInclude = buttoncontainer.getElementsByClassName("tagSettingInclude");
for (let i = 0; i < filterbuttonsInclude.length; i++)
{
	filterbuttonsInclude[i].addEventListener("click", function() {
		for (let i = 0; i < filterbuttonsInclude.length; i++)
		{
			filterbuttonsInclude[i].className = filterbuttonsInclude[i].className.replace(" FilterSettingActive","");
		}
		this.className += " FilterSettingActive";	
	});
}

let filterbuttonsExclude = buttoncontainer.getElementsByClassName("tagSettingExclude");
for (let i = 0; i < filterbuttonsExclude.length; i++)
{
	filterbuttonsExclude[i].addEventListener("click", function() {
		for (let i = 0; i < filterbuttonsExclude.length; i++)
		{
			filterbuttonsExclude[i].className = filterbuttonsExclude[i].className.replace(" FilterSettingActive","");
		}
		this.className += " FilterSettingActive";	
	});
}



let clearbutton = buttoncontainer.getElementsByClassName("tagbtnclear")[0];
if (clearbutton != null)
{
	clearbutton.addEventListener("click", function() {
		for (let i = 0; i < filterbuttons.length; i++)
		{
			filterbuttons[i].className = filterbuttons[i].className.replace(" FilterAdd","");
			filterbuttons[i].className = filterbuttons[i].className.replace(" FilterRemove","");
		}
	});
}