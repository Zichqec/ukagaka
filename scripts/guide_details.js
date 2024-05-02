let item_details = [
	{
		name: "Convert from AYA to YAYA",
		release: "August 3rd, 2022",
		latest: "February 12th, 2023",
		guidefor: "Devs",
		language: "AYA / YAYA",
		collaborators: null,
		externallink: null,
		blurb: "A walkthrough for the process of converting a ghost from AYA to YAYA! This is specifically aimed towards ghosts made on the GT Ghost Template with all its particular quirks, but it should work for any ghost."
	},
	{
		name: "Creating SAORI-Basic",
		release: "March 11th, 2021",
		latest: "March 23rd, 2021",
		guidefor: "Devs",
		language: "Python / other",
		collaborators: null,
		externallink: null,
		blurb: "A guide demonstrating how to create SAORI-basic, specifically in Python! May be useful to get the general idea of how SAORI-basic works, even in other languages."
	},
	{
		name: "Ghost Release Tips & Checklist",
		release: "June 18th, 2023",
		latest: "November 20th, 2023",
		guidefor: "Devs",
		language: null,
		collaborators: null,
		externallink: null,
		blurb: "A checklist for releasing a ghost, to serve both as a reminder for experienced developers trying to curb release-day jitters, and to give advice to developers releasing their first ghosts to try to steer them away from certain pitfalls.<br><br>Note that I originally wrote this guide on the Ukagaka Dream Team wiki, and have since moved it here."
	},
	{
		name: "Loops and Arrays",
		release: "March 26th, 2021",
		latest: "July 15th, 2023",
		guidefor: "Devs",
		language: "AYA / YAYA",
		collaborators: null,
		externallink: null,
		blurb: "A guide explaining loops and arrays in AYA/YAYA, showing examples of how they may be combined together to create things like dynamic menus! It's a bit old, if you want a more up to date guide you can try YAYA Fundamentals, which is linked below. But if YAYA Fundamentals doesn't click with you/seems overwhelming, maybe this one will be of help."
	},
	{
		name: "Negative Coordinates in Balloons",
		release: "January 4th 2022",
		latest: "February 25th, 2022",
		guidefor: "Devs",
		language: null,
		collaborators: null,
		externallink: null,
		blurb: "A quick explanation of the negative coordinates system used by balloons in order to greatly simplify balloon making. It will make your balloon-making life so much easier!"
	},
	{
		name: "Network updates with Github",
		release: "September 15th, 2020",
		latest: "August 25th, 2022",
		guidefor: "Devs",
		language: null,
		collaborators: null,
		externallink: null,
		blurb: "A walkthrough for setting up network updates for a ghost in GitHub. Note that this guide is fairly outdated, and I would change my recommendations if I were to rewrite it (in particular, I recommend having different repositories for each ghost). Even so, it will still work. One of these days I will rewrite it."
	},
	{
		name: "Notepad++ tips to improve your ghost dev experience",
		release: "October 8th, 2023",
		latest: "May 2nd, 2024",
		guidefor: "Devs",
		language: null,
		collaborators: null,
		externallink: null,
		blurb: "Learn all sorts of tips and tricks you can use to work more efficiently in Notepad++! I've picked this stuff up over years of making ghosts and learning how to use the various features of the program to suit my needs."
	},
	{
		name: "Old Definition vs. New Definition",
		release: "June 23rd, 2021",
		latest: "June 23rd, 2021",
		guidefor: "Devs",
		language: "SERIKO",
		collaborators: null,
		externallink: null,
		blurb: "An explanation of the differences between the old and new definitions of SERIKO, and the advantages of converting to the new definition. Comes with a handy tool to help you convert easily!"
	},
	{
		name: "Ping Pong Loops",
		release: "June 23rd, 2021",
		latest: "October 24th, 2021",
		guidefor: "Devs",
		language: "SERIKO",
		collaborators: null,
		externallink: null,
		blurb: "An explanation of a particular shell coding trick that I use to create animations which must always be visible, but that I want to switch between random options. If you need to do this one particular thing, maybe this will help!"
	},
	{
		name: "Run Envelopes Through Script Input",
		release: "August 3rd, 2022",
		latest: "January 5th, 2024",
		guidefor: "Devs",
		language: "YAYA",
		collaborators: null,
		externallink: null,
		blurb: "An explanation of how to create word groups in YAYA (\"envelopes\", though I try to avoid this term now), and the additional code needed to make them function in script input."
	},
	{
		name: "Setting up subfolders in your ghost list",
		release: "May 2nd, 2023",
		latest: "November 20th, 2023",
		guidefor: "Users",
		language: null,
		collaborators: null,
		externallink: null,
		blurb: "Did you know you can set up subfolders in your ghost list/balloon list/etc.? You can! And this guide will tell you all about it, with images and explanations for each step.<br><br>Note that I originally wrote this guide on the Ukagaka Dream Team wiki, and have since moved it here."
	},
	{
		name: "Upgrade Old Versions of YAYA",
		release: "August 3rd, 2022",
		latest: "May 16th, 2023",
		guidefor: "Devs",
		language: "YAYA",
		collaborators: null,
		externallink: null,
		blurb: "A walkthrough for updating ghosts from older versions of YAYA to newer ones! This is really important to get security updates, bug fixes, and the latest features to make development easier! Once you've done this a single time, the upgrade process should become easier in the future."
	},
	{
		name: "What is AUTO_DATA_CONVERT",
		release: "February 2nd, 2023",
		latest: "November 20th, 2023",
		guidefor: "Devs",
		language: "YAYA",
		collaborators: null,
		externallink: null,
		blurb: "A guide explaining YAYA's AUTO_DATA_CONVERT option, what it does, and why you should (almost always) turn it off. Please note that when I first wrote this guide, I had thought the option would cause a much more severe compatibility issue, but this turned out to be untrue and I have since corrected it.<br><br>Note that I originally wrote this guide on the Ukagaka Dream Team wiki, and have since moved it here."
	},
	{
		name: "YAYA Fundamentals",
		release: "December 24th, 2022",
		latest: "July 16th, 2023",
		guidefor: "Devs",
		language: "YAYA",
		collaborators: null,
		externallink:
		{
			hostedby: "Separate website",
			link: "https://zichqec.github.io/YAYA_Fundamentals/",
		},
		blurb: "A large guide teaching the YAYA programming language from the ground up, starting with the basics and exploring more complicated functions. Comes with a companion ghost that can be used to run example code, and serves as a sandbox to practice code in. My biggest and most comprehensive guide."
	}
]