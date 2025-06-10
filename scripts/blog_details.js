//These are in REVERSE CHRONOLOGICAL ORDER, unlike everything else which is in alphabetical order
//Reason being that I think it will be easier over time to just keep adding entries to the top...

var item_tags = [
	["2021","2022","2023","2024","2025"],
	["January","February","March","April","May","June","July","August","September","October","November","December"],
	["New release","Update","Announcement","Website update","Dev musings"],
	//Announcement: things like the wiki opening, translation projects finishing, etc...
	//Maybe should make event announcements a separate tag too...? or just an event tag? hm
	["Yearly summary","Advent calendar"],
	["Mirror"],
	//I think it would be cool to have tags for like... "deconstructing my own work", but I'd need to come up with a more succinct tag, and also I should at least make one post like that before I add a tag lol
	//Should I word count...? hm
]

//Note to self: the "latest" is for if something gets a MAJOR REVISION, not just typos and such
//Things like an error catastrophagus
var item_details = [
	
	// {
		// name: "",
		// release: "",
		// latest: null,
		// page: "",
		// blurb: "",
		// tags: [],
	// },
	{
		name: "Weather Station v1.0.5",
		release: "2025-06-10",
		latest: null,
		page: "2025-06-10_weather_station_v1.0.5.html",
		blurb: "A small patch for Weather Station to fix some issues while offline.",
		tags: ["2025","June","Update"],
	},
	{
		name: "Blog grand opening",
		release: "2025-05-22",
		dupeindex: "01",
		latest: null,
		page: "2025-05-22_blog_grand_opening.html",
		blurb: "The grand opening of this blog in its full and proper form. Everything before this point was created as a blog post without a home.",
		tags: ["2025","May","Announcement","Website update"],
	},
	{
		name: "My ghost development history",
		release: "2025-05-22",
		dupeindex: "00",
		latest: null,
		page: "2025-05-22_my_ghost_development_history.html",
		blurb: "My history as a ghost developer, cataloguing as many releases and updates as I could find from before the launch of this blog.",
		tags: ["2025","May","Dev musings"],
	},
	{
		name: "Summary of 2024 in the Ukagaka Dream Team (Advent calendar 2024)",
		release: "2024-12-23",
		dupeindex: "00",
		latest: null,
		page: "2024-12-23_advent_calendar_summary_of_2024.html",
		blurb: "A summary of events and other important happenings in the Ukagaka Dream Team during 2024.",
		tags: ["2024","December","Yearly summary","Advent calendar"],
	},
	{
		name: "Spectre: What, why, and how (Advent calendar 2024)",
		release: "2024-12-22",
		dupeindex: "00",
		latest: null,
		page: "2024-12-22_advent_calendar_spectre.html",
		blurb: "An article describing the plugin <a href='../plugin/spectre.html'>Spectre</a>, and also exploring the development process and various considerations we had after making it.",
		tags: ["2024","December","Dev musings","Advent calendar"],
	},
	{
		name: "Needle Dog mirror",
		release: "2024-11-11",
		dupeindex: "00",
		latest: null,
		page: "2024-11-11_needle_dog_mirror.html",
		blurb: "A mirror download of the shell Needle Dog, created with permission from its author since the original download went down.",
		tags: ["2024","November","Mirror"],
	},
	{
		name: "FLELE mirror",
		release: "2024-10-13",
		dupeindex: "00",
		latest: null,
		page: "2024-10-13_flele_mirror.html",
		blurb: "A mirror download of FLELE, created based on permissions given on FLELE's distribution site. It may be helpful for those who cannot access FLELE's page.",
		tags: ["2024","October","Mirror"],
	},
	{
		name: "Summary of 2023 in the Ukagaka Dream Team (Advent calendar 2023)",
		release: "2023-12-23",
		dupeindex: "00",
		latest: null,
		page: "2023-12-23_advent_calendar_summary_of_2023.html",
		blurb: "A summary of events and other important happenings in the Ukagaka Dream Team during 2023.",
		tags: ["2023","December","Yearly summary","Advent calendar"],
	},
	{
		name: "Ukadoc English translation completed (Advent calendar 2023)",
		release: "2023-12-22",
		dupeindex: "00",
		latest: null,
		page: "2023-12-22_advent_calendar_ukadoc_english_translation.html",
		blurb: "An announcement of the completion of the Ukadoc English translation project.",
		tags: ["2023","December","Announcement","Advent calendar"],
	},
	{
		name: "YAYA Fundamentals guide release (Advent calendar 2022)",
		release: "2022-12-24",
		dupeindex: "00",
		latest: null,
		page: "2022-12-24_advent_calendar_yaya_fundamentals_release.html",
		blurb: "The release of an extensive guide to YAYA in English, called YAYA Fundamentals.",
		tags: ["2022","December","New release","Advent calendar"],
	},
	{
		name: "Ukagaka Dream Team Wiki release (Advent calendar 2022)",
		release: "2022-12-23",
		dupeindex: "00",
		latest: null,
		page: "2022-12-23_advent_calendar_wiki_release.html",
		blurb: "A release announcement for the Ukagaka Dream Team Wiki, which is now publicly available with almost all the pages up to this point filled in.",
		tags: ["2022","December","Announcement","Advent calendar"],
	},
	{
		name: "How to write a Needle (Advent calendar 2022)",
		release: "2022-12-19",
		dupeindex: "00",
		latest: null,
		page: "2022-12-19_advent_calendar_how_to_write_a_needle.html",
		blurb: "A recounting of the process of writing <a href='../ghost/needle.html'>Needle</a> for Ghost Jam 2022, and how it changed the way I think about writing ghosts since then.",
		tags: ["2022","December","Dev musings","Advent calendar"],
	},
	{
		name: "I've spent a ridiculous amount of time thinking about probabilities: An ukagaka developer's struggle for probability perfection (Advent calendar 2021)",
		release: "2021-12-12",
		dupeindex: "00",
		latest: null,
		page: "2021-12-12_advent_calendar_probabilities.html",
		blurb: "An exploration of probabilities in YAYA, and how I eventually managed to overcome various issues to attain a perfect result (with the help of developers who knew what they were doing much better than I did!)",
		tags: ["2021","December","Dev musings","Advent calendar"],
	},
]