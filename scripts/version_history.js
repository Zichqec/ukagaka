function makeHistory(hist)
{
	hist = hist.reverse();
	console.log(hist);
	let output = ``;
	output += `
	<article id="version_history">
	<p class="to_top"><a href='#'>Back to top</a>
	</p><h2>Version history</h2>
`;

	for (let ver of hist)
	{
		output += `<h3>Version ${ver.version}</h3>`;
		
		ver.patches = ver.patches.reverse();
		
		for (let patch of ver.patches)
		{
			output += `<h4>v${patch.version} - ${patch.released}</h4>`;
			output += `<ul>`;
			for (let change of patch.changelog)
			{
				
				
				output += `<li>${change}</li>`;
				
				
			}
			output += `</ul>`;
		}
		output += `<br>`;
	}
	output += `</article>`;
	return output;
}

if (version_history != null)
{
	document.getElementById('history_list').innerHTML = makeHistory(version_history);
}