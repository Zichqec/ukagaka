var item_tags = [
	["2020","2021","2022","2023"],
	["Ghost","Shell","Balloon","Other"],
]

var item_details = [
	{
		name: "Hydrate Shell Template",
		type: "Shell",
		release: "2022-08-16",
		latest: "2023-08-15",
		version: "v1.0.1",
		forevent: null,
		collaborators: null,
		translations: null,
		download: "https://github.com/Zichqec/hydrate_shell_template/releases/latest",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/shell/hydrate/hydrate_shell_template"},
		],
		blurb: "A template for making shells for the ghost <a href='../ghost/hydrate.html'>Hydrate</a>! It's just a simple little thing I threw together to make life easier. You can use this to make other shells too, if you want a clean base to start from.",
		tags: ["2022","Shell"]
	},
	{
		name: "Minimum YAYA Template",
		type: "Ghost",
		release: "2022-04-18",
		latest: "2023-04-14",
		version: "v1.0.3",
		forevent: null,
		collaborators: null,
		translations: null,
		download: "https://github.com/Zichqec/minimum_yaya_template/releases/latest",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/ghost/minimum_yaya_template"},
		],
		blurb: "A template ghost for YAYA, with the bare basics and little else. It has the YAYA as SHIORI library, and the basic file structure, and that's pretty much it. You start with a blank main.dic file and a blank surfaces.txt file. It's meant as both an easy way to start with a clean slate, and also a way to show folks how little you actually need to have a ghost that runs.",
		tags: ["2022","Ghost"]
	},
	{
		name: "Simplicity Balloon",
		type: "Balloon",
		release: "2023-09-15",
		latest: "2023-10-09",
		version: "v1.0.2",
		forevent: null,
		collaborators: null,
		translations: null,
		download: "https://github.com/Zichqec/simplicity_balloon/releases",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/balloon/simplicity_balloon"},
		],
		blurb: "A simple balloon template! This is tidier than the X. Template Balloon, both in the look and in the files. It uses a lot of simple tricks to slim down on the amount of work required to have a functional balloon, but you can always add onto it if you'd like to.",
		tags: ["2023","Balloon"]
	},
	{
		name: "Simplicity Calendar",
		type: "Calendar skin",
		release: "2023-09-15",
		latest: "2023-10-09",
		version: "v1.0.2",
		forevent: null,
		collaborators: null,
		translations: null,
		download: "https://github.com/Zichqec/simplicity_calendar/releases",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/calendar_skin/simplicity_calendar"},
		],
		blurb: "A template/guide for calendar skins. At the time of making this, there is no calendar skin page on Ukadoc, so this has a separate file which explains what I know about them to help you in the process of making one yourself.",
		tags: ["2023","Other"]
	},
	{
		name: "Simplicity Plugin",
		type: "Plugin",
		release: "2023-09-15",
		latest: null,
		version: "v1.0.1",
		forevent: null,
		collaborators: null,
		translations: null,
		download: "https://github.com/Zichqec/simplicity_plugin/releases",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/plugin/simplicity_plugin"},
		],
		blurb: "A simple setup using the YAYA as PLUGIN library, but with the files in English. Also includes some events as demonstration. Note that I didn't write the library! What I've added here is honestly very minimal, but hopefully it's useful if you'd like to explore the possibilities of making plugins in YAYA.",
		tags: ["2023","Other"]
	},
	{
		name: "Simplicity Shell",
		type: "Shell",
		release: "2023-09-15",
		latest: null,
		version: "v1.0.1",
		forevent: null,
		collaborators: null,
		translations: null,
		download: "https://github.com/Zichqec/simplicity_shell/releases",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/template/simplicity_shell"},
		],
		blurb: "A shell template with a bit more structure to it than the Hydrate Shell Template. This one is ideal if you want to mainly overwrite images and don't want to create your own numbering scheme for the files. It includes all of the recommended expressions as listed on Ukadoc, blinking animations, a few talking animations, and even an extremely basic singing animation.",
		tags: ["2023","Shell"]
	},
	{
		name: "Simplicity Template",
		type: "Ghost",
		release: "2023-02-04",
		latest: "2025-03-07",
		version: "v1.0.9",
		forevent: null,
		collaborators: null,
		translations: [
			{
				spoken_language: "Русский",
				translator: {name: "SmokyCinnamonRoll", creditlink: "https://smokycinnamon.github.io/indifferentsorrel/"},
				download: "https://github.com/SmokyCinnamon/simplicity_template_ru/releases"
			},
		],
		download: "https://github.com/Zichqec/simplicity_template/releases",
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/ghost/simplicity_template"},
		],
		blurb: "A simple ghost template with the philosophy that content is what matters, and everything else is secondary. If you've ever felt like other templates are too big or overwhelming, then give this a shot! Seriously, the whole menu file fits into a single screenshot, it's <i>tiny</i>. Of all my ghost templates, this is the one I generally recommend the most!<br><br>This template also has a Russian translation by SmokyCinnamonroll! Check out the link in the translations list.",
		tags: ["2023","Ghost"]
	},
	{
		name: "X. Template Balloon",
		type: "Balloon",
		release: "2021-10-06",
		latest: "2022-02-08",
		version: "v1.0.2",
		forevent: null,
		collaborators: null,
		translations: null,
		download: ["https://www.mediafire.com/file/s9bbpku7o4zwrqc/x_template_balloon_v1.0.2.nar/file"],
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/balloon/x._template_balloon"},
		],
		blurb: "A balloon with a rough and sketchy feel. Is intended for use as a template, and therefore has a minimal setup inside, with no left/right facing balloons, only a sakura balloon, and use of negative coordinates to cut down on the number of files necessary.",
		tags: ["2021","Balloon"]
	},
	{
		name: "X. Template YAYA",
		type: "Ghost",
		release: "2020-10-21",
		latest: "2023-04-14",
		version: "v1.1.7",
		forevent: null,
		collaborators: null,
		translations: null,
		download: ["https://www.mediafire.com/file/7tedi165c68tetq/x_template_yaya_v1.1.7.nar/file"],
		readmore:
		[
			{label: "Ukagaka Dream Team Wiki", url: "https://ukagakadreamteam.com/wiki/ghost/x._template"},
		],
		blurb: "This is an old template that I think is terrible! I cannot recommend against using it enough. However, if you're curious, or if you want to reference utility code and such out of it, then have at it! It is very much deprecated though.",
		tags: ["2021","Ghost"]
	}
]