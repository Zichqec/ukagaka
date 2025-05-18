//These are in REVERSE CHRONOLOGICAL ORDER, unlike everything else which is in alphabetical order
//Reason being that I think it will be easier over time to just keep adding entries to the top...

var item_tags = [
	["2021","2022","2023","2024","2025"],
	["January","February","March","April","May","June","July","August","September","October","November","December"],
	["New release","Update","Announcement","Dev musings"],
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
		name: "Advent Calendar 2024 - Summary of 2024 in the Ukagaka Dream Team",
		release: "2024-12-23",
		latest: null,
		page: "2024-12-23_advent_calendar_summary_of_2024.html",
		blurb: "A summary of events and other important happenings in the Ukagaka Dream Team during 2024.",
		tags: ["2024","December","Yearly summary","Advent calendar"],
	},
	{
		name: "Advent Calendar 2024 - Spectre: What, Why, and How",
		release: "2024-12-22",
		latest: null,
		page: "2024-12-22_advent_calendar_spectre.html",
		blurb: "An article describing the plugin <a href='../plugin/spectre.html'>Spectre</a>, and also exploring the development process and various considerations we had after making it.",
		tags: ["2024","December","Dev musings","Advent calendar"],
	},
	{
		name: "Needle Dog Mirror",
		release: "2024-11-11",
		latest: null,
		page: "2024-11-11_needle_dog_mirror.html",
		blurb: "A mirror download of the shell Needle Dog, created with permission from the original author since the original download went down.",
		tags: ["2024","November","Mirror"],
	},
	{
		name: "FLELE Mirror",
		release: "2024-10-13",
		latest: null,
		page: "2024-10-13_flele_mirror.html",
		blurb: "A mirror download of FLELE, created based on permissions given on FLELE's distribution site. It may be helpful for those who cannot access FLELE's page.",
		tags: ["2024","October","Mirror"],
	},
	{
		name: "Advent Calendar 2023 - Summary of 2023 in the Ukagaka Dream Team",
		release: "2023-12-23",
		latest: null,
		page: "2023-12-23_advent_calendar_summary_of_2023.html",
		blurb: "A summary of events and other important happenings in the Ukagaka Dream Team during 2023.",
		tags: ["2023","December","Yearly summary","Advent calendar"],
	},
	{
		name: "Advent Calendar 2023 - Ukadoc English Translation Completed",
		release: "2023-12-22",
		latest: null,
		page: "2023-12-22_advent_calendar_ukadoc_english_translation.html",
		blurb: "An announcement of the completion of the Ukadoc English translation project.",
		tags: ["2023","December","Announcement","Advent calendar"],
	},
	{
		name: "Advent Calendar 2022 - YAYA Fundamentals Guide Release",
		release: "2022-12-24",
		latest: null,
		page: "2022-12-24_advent_calendar_yaya_fundamentals_release.html",
		blurb: "A release of an extensive guide to YAYA in English, called YAYA Fundamentals.",
		tags: ["2022","December","New release","Advent calendar"],
	},
	{
		name: "Advent Calendar 2022 - Ukagaka Dream Team Wiki Release",
		release: "2022-12-23",
		latest: null,
		page: "2022-12-23_advent_calendar_wiki_release.html",
		blurb: "A release announcement for the Ukagaka Dream Team Wiki, which is now publicly available and with almost all the pages up to this point filled in.",
		tags: ["2022","December","Announcement","Advent calendar"],
	},
	{
		name: "Advent Calendar 2022 - How to Write a Needle",
		release: "2022-12-19",
		latest: null,
		page: "2022-12-19_advent_calendar_how_to_write_a_needle.html",
		blurb: "A recount of the process of writing <a href='../ghost/needle.html'>Needle</a> for Ghost Jam 2022, and how it changed the way I think about writing ghosts since then.",
		tags: ["2022","December","Dev musings","Advent calendar"],
	},
	{
		name: "Advent Calendar 2021 - I've Spent a Ridiculous Amount of Time Thinking About Probabilities: An Ukagaka Developer's Struggle for Probability Perfection",
		release: "2021-12-12",
		latest: null,
		page: "2021-12-12_advent_calendar_probabilities.html",
		blurb: "An exploration of probabilities in YAYA, and how I eventually managed to overcome various issues to attain a perfect result (with the help of developers who knew what they were doing much better than I did!)",
		tags: ["2021","December","Dev musings","Advent calendar"],
	},
]

/*
2024-12-23_advent_calendar_summary_of_2024.html
2024-12-22_advent_calendar_spectre.html
2024-11-11_needle_dog_mirror.html
2024-10-13_flele_mirror.html
2023-12-23_advent_calendar_summary_of_2023.html
2023-12-22_advent_calendar_ukadoc_english_translation.html
2022-12-24_advent_calendar_yaya_fundamentals_release.html
2022-12-23_advent_calendar_wiki_release.html
2022-12-19_advent_calendar_how_to_write_a_needle.html
2021-12-12_advent_calendar_probabilities.html
*/