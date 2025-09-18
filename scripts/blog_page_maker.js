//To control the nav on the blog... title, date, forwards and backwards buttons at top and bottom. Probably also a back button to take you back to the blog index, I guess...? We'll see

//blognavtop
//blognavbottom
let prevbutton = ``;
let nextbutton = ``;

let index_details = item_details;
let page_details = null;
let prev_details = null;
let next_details = null;

let pagepath = location.pathname;
pagepath = pagepath.split("/");
let pagename = pagepath[pagepath.length - 1];
pagename = pagename.replace(".html","");

function makeTopNav()
{
	let output = ``;
	
	for (let i = 0; i < item_details.length; i++)
	{
		if (item_details[i].page.replace(".html","") == pagename)
		{
			page_details = item_details[i];
			
			//These are backwards because blog index is in backwards order!!
			if (i - 1 >= 0)
			{
				next_details = item_details[i - 1]
			}
			else
			{
				next_details = null;
			}
			
			if (item_details[i + 1] != null)
			{
				prev_details = item_details[i + 1]
			}
			else
			{
				prev_details = null;
			}
			
			break;
		}
	}
	
	if (prev_details == null)
	{
		prev_button = `<span class="disabletext">Previous</span>`;
	}
	else
	{
		prev_button = `<a href="../blog/${prev_details.page}">Previous</a>`;
	}
	
	if (next_details == null)
	{
		next_button = `<span class="disabletext">Next</span>`;
	}
	else
	{
		next_button = `<a href="../blog/${next_details.page}">Next</a>`;
	}
	
	let taglist = ``;
	if (page_details.tags != null)
	{
		taglist += `<p class="blogdate">Tags:`
		
		for (let i = 0; i < page_details.tags.length; i++)
		{
			if (i > 0)
			{
				taglist += ",";
			}
			taglist += ` ${page_details.tags[i]}`;
		}
		
		taglist += `</p>`
	}
	
	output += `
		<article>
			<div class="button_balancer"></div><div class="to_top"><a href="../feed.xml"><img src="../img/feed-icon-28x28.png" alt="RSS feed"></a></div>
			<h1 class="blogheader">${page_details.name}</h1>
			<p class="blogdate">${dateDisplay(page_details.release)}</p>
			${taglist}
			
			<div class="blognavbuttons">
			<span class="blognavleft">${prev_button}</span>
			<span class="blognavcenter"><a href="../blog/index.html">Index</a></span>
			<span class="blognavright">${next_button}</span>
			</div>
			
		</article>
	`;
	
	return output;
}

function makeBottomNav()
{
	let output = ``;
	
	output += `
		<article>
			<div class="blognavbuttons">
			<span class="blognavleft">${prev_button}</span>
			<span class="blognavcenter"><a href="../blog/index.html">Index</a></span>
			<span class="blognavright">${next_button}</span>
			</div>
		</article>
	`;
	
	return output;
}


document.getElementById('blognavtop').innerHTML = makeTopNav();
document.getElementById('blognavbottom').innerHTML = makeBottomNav();

//Word count... has to be manually added to the index tho
//This seems to have trouble with counting words in lists... I'd probably be better off just hand copying in the count from the page after rendering it. But enh.. idk that I can be bothered? Maybe I'll consider it in the future after I try the blog out for a while... I do think it could be cool for longer posts, just maybe not so much for the little bitty update ones... I also wonder if adding tags for word count would be nice
// let postcontent = document.getElementById("postcontent");
// let paragraphs = postcontent.getElementsByTagName("p");
// let wordcount = 0;
// for (let i = 0; i < paragraphs.length; i++)
// {
	// wordcount += paragraphs[i].innerText.split(" ").length;
// }

// console.log(`word count (approximate): ${wordcount}`);