let item_details = [
	{
		name: "AI graph dialogue counter",
		release: "June 2nd, 2023",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "AI_graph_dialogue_counter.txt",
		blurb: "A simple setup to output the count of outputs in a function to SSP's AI graph. This is useful if you've got a lot of word lists (envelopes) or dialogue pools to count! There are many other things you can use the AI graph for as well, this is a pretty simple option."
	},
	{
		name: "Auto anchor",
		release: "November 23rd, 2021",
		latest: "August 6th, 2023",
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Auto_anchor.txt",
		blurb: "This is a setup to make very basic anchors simple! It's meant for if you have, say, a bunch of anchors that have basic character explanations, and such. You add your names to a list, create corresponding \"Anchor.\" events, and then when you write the names in dialogue, you can write with an @ when you want it to be an anchor, or write without an @ if you just want to display the name as plain text!"
	},
	{
		name: "AutoPause",
		release: "July 25th, 2022",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "AutoPause.txt",
		blurb: "This handy function can automatically apply pause tags (\\w tags) to your dialogues! It takes a bit of getting used to, but it can make your scripts much cleaner and much faster to write! Just follow the instructions carefully, and make sure you know how to plan so that it doesn't make your menus wonky."
	},
	{
		name: "Capitalize",
		release: "January 5th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Capitalize.txt",
		blurb: "Capitalizes the first letter of whatever input you give it! This is useful if you want to, say, capitalize the output of a function. It's not really useful if you feed it a plain string. You can write it like %(Capitalize(food)) in your dialogue!"
	},
	{
		name: "Check surfaces",
		release: "February 9th, 2022",
		latest: "August 6th, 2023",
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Check_surfaces.txt",
		blurb: "If you've got a ghost with multiple shells and can't guarantee they all have the same surfaces, this handy function will make it so that your ghost defaults to surface0 instead of disappearing! This is mainly intended for if someone else makes a shell for your ghost, but you continue to update it with new surfaces. There is also an SSP preferences setting to do this, but that relies on the user knowing about and setting that option, and if they're a developer they may not want to do that."
	},
	{
		name: "CreepyText",
		release: "November 4th, 2020",
		latest: "January 5th, 2021",
		version: null,
		forevent: null,
		language: "YAYA",
		download: "CreepyText.txt",
		blurb: "This text effect takes your text and splatters it all across the balloon, but slowly! And by that I mean, it types out the letters one at a time in random positions, with random pauses between them. Some of the parameters are adjustable."
	},
	{
		name: "Daily dialogues",
		release: "November 30th, 2021",
		latest: "August 5th, 2023",
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "Daily_dialogues.txt",
		blurb: "This function is just a setup for if you wanted to have a set of dialogues (or something else) that is unique every day! I did this once for a ghost and it was a ton of work with not all that much reward, so I don't super recommend it honestly, but if you want to challenge yourself here you go!"
	},
	{
		name: "Deflicker",
		release: "September 21st, 2022",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "Deflicker.txt",
		blurb: "Ever notice that ghost menus tend to flicker when you click on stuff? I do! So I crafted this convoluted setup to fix it, and then packaged that into an easy-to-add module for your ghost. All you'll have to do is add \\![deflicker] to your menu script, and your flicker woes will disappear! Provided it's a menu that's suitable. If your menu displays dialogue before the rest shows up, or something along those lines, this won't help you.<br><br>If you're using AYA, you'll need to incorporate this into OnTranslate itself. In YAYA, simply add the function to your ghost, and it will work automatically!"
	},
	{
		name: "DisplayReal",
		release: "September 4th, 2023",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "DisplayReal.txt",
		blurb: "Want to display a real number (float) without all those annoying trailing 0s? This function can help! Note that this is for display purposes only, the result it returns is a string and not a number."
	},
	{
		name: "ErrorLog",
		release: "June 4th, 2022",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "ErrorLog.txt",
		blurb: "A debugging function that you can use to output information to SSP's error log! This just makes the process a bit simpler. Very useful if you've got a stubborn issue somewhere that seems to crop up whenever Tama is closed! You can have this silently logging information to the error log and check on it later, if you want. Or you can have it flag issues up immediately, and alert you with a notification!"
	},
	{
		name: "FormatLinks",
		release: "November 20th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "FormatLinks.txt",
		blurb: "A function to simplify adding links to your right click menu, so that all you need to do is write an alternating list of labels and links. Makes things nice and tidy!"
	},
	{
		name: "Holding Obsidian",
		release: "November 4th, 2020",
		latest: "November 6th, 2020",
		version: "1.0.1",
		forevent: null,
		language: "YAYA",
		download: "https://www.mediafire.com/file/b9a2k87ikhwxdyr/How_To_Make_Your_Ghost_Hold_Obsidian_v1.0.1.zip/file",
		blurb: "A guide for getting your ghost to hold <a href='../ghost/dusty_and_obsidian.html'>Dusty's cat, Obsidian</a>! This is a rather old system and I've wanted to update it for years to use raiseother tags instead. I don't know that I'll ever do that at this point, unfortunately, but if you're looking to make a similar system, I highly recommend using raiseother and not using this method as an example! This way requires so much extra effort.<br><br>Please also note that you can add Obsidian as a dressup on your character, if you want to avoid having to add in checks for her everywhere. SmokyCinnamonroll did this with his ghost <a href='https://smokycinnamon.github.io/indifferentsorrel/tadora'>Tadora</a>!"
	},
	{
		name: "Interval Stacker",
		release: "November 4th, 2020",
		latest: "January 17th, 2021",
		version: "2.0.5",
		forevent: null,
		language: "YAYA",
		download: "https://www.mediafire.com/file/pv3n99i7v8ervov/IntervalStacker_v2.0.5.zip/file",
		blurb: "This is a tool I made that helps with shell setups that use a lot of animations called by \\i[] tags! Note that in this tool, such animations are referred to as \"intervals\" even though that's not actually the right term. Currently this is distributed as a .dic file that you can add to your ghosts individually. It uses a SERIKO parser by <a href='https://levidre.github.io/'>Levidre</a>, though at the moment it only supports the old definition of SERIKO."
	},
	{
		name: "IntToNumeral",
		release: "May 13th, 2022",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "IntToNumeral.txt",
		blurb: "A simple conversion from integer to roman numerals! I made this for <a href='../ghost/needle.html'>Needle</a> during Ghost Jam 2022, so that we could easily have it generate random roman numerals that are actually valid."
	},
	{
		name: "ISUPPER & ISLOWER",
		release: "June 22nd, 2022",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "ISUPPER_ISLOWER.txt",
		blurb: "A pair of functions to quickly check if a given string is all uppercase or all lowercase!"
	},
	{
		name: "leapyear",
		release: "November 26th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "leapyear.txt",
		blurb: "This function well help you determine if it's a leapyear or not! You can check the current year, or send it a specific year to check as an argument!"
	},
	{
		name: "LetterCount",
		release: "May 15th, 2023",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "LetterCount.txt",
		blurb: "Counts the number of letters in a given string. For example, if you input the string \"ukagaka\" and search for \"a\", it will return 3. Made for the ghost <a href='../ghost/please_arrive_15_minutes_before_your_scheduled_interview_time.html'>Please arrive 15 minutes before your scheduled interview time</a> during Ghost Jam 2023!"
	},
	{
		name: "LoopImage",
		release: "November 7th, 2022",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "LoopImage.txt",
		blurb: "A weird thing I wrote on a whim one time. If you want an animated image in your ghost's balloon, it may be able to help. It looks a little scary, but most of the options can be ignored if you don't need them!"
	},
	{
		name: "Markdown processor",
		release: "August 9th, 2022",
		latest: "August 26th, 2022",
		version: "1.0.2",
		forevent: null,
		language: "YAYA",
		download: "https://www.mediafire.com/file/lhvamfbysq2edo6/markdown_processor_v1.0.2.zip/file",
		blurb: "This is a .dic file that you can add to your ghost, which will allow you to use a rough markdown formatting for your dialogue! You can even set the tags to almost anything you want. It has a few quirks, like using | instead of \\ to escape tags, because of overlap with SakuraScript tags. But it can still be quite handy! Note that this makes use of my SakuraScooper function and comes bundled with it.<br><br>Changes for this file are available to see <a href='https://github.com/Zichqec/ukagaka/commits/main/function/markdown_processor.dic'>here</a>."
	},
	{
		name: "Mock",
		release: "January 5th, 2021",
		latest: "January 27th, 2021",
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Mock.txt",
		blurb: "This function will output text in MoCkCaSe! It can either do a strict alternating between upper and lowercase, or it can alternate randomly."
	},
	{
		name: "Music player",
		release: "January 5th, 2021",
		latest: "April 29th, 2022",
		version: "1.0.0",
		forevent: null,
		language: "YAYA",
		download: "https://www.mediafire.com/file/oy1fk4uskghy5ib/music_zi.dic_v1.0.0.zip/file",
		blurb: "This is an updated version of the music player in <a href='../ghost/flux.html'>FLUX</a>! This music player actually started all the way back in <a href='../ghost/lulo.html'>Lulo</a>, then got rewritten for FLUX, and then got overhauled again to be in its own .dic file to be added to other ghosts! Follow the instructions carefully, as there are some steps you need to take to integrate this with your ghost.<br><br>If you use this one, please put a credit in your ghost's readme stating such! I worked very hard on this music player, it's a big thing with a lot of little functions and polish.<br><br>Changes for this file are available to see <a href='https://github.com/Zichqec/ukagaka/commits/main/function/music_zi.dic'>here</a>."
	},
	{
		name: "OnRandomDressup",
		release: "July 13th, 2021",
		latest: "August 4th, 2021",
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "OnRandomDressup.txt",
		blurb: "If you have a lot of dressups, you might want a button to select some of them randomly. And that's just what this will do! This one actually does have an AYA version, if you're using AYA please check the comments in the code for instructions. This function will attempt to respect various options that dressups may have, like having a chance to pick multiple of a dressup category if the multiple option is specified."
	},
	{
		name: "OnWander",
		release: "November 4th, 2020",
		latest: "April 29th, 2022",
		version: null,
		forevent: null,
		language: "YAYA",
		download: "OnWander.txt",
		blurb: "This set of functions will let your ghost wander around the screen to random places! They will respect the screen boundaries and always stay on the screen that they're currently on. I've made better movement code in <a href='../ghost/gallery_512.html'>Gallery 512</a> now, but it's a little tangled up in the jam mess of that ghost. At some point I'll clean that up and replace this one, though! This is quite old."
	},
	{
		name: "Parallel",
		release: "January 5th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Parallel.txt",
		blurb: "This function lets multiple characters say different things at the same time. I made this bit of code because I couldn't get an old SAORI called parallel working. And then I finally figured out how to use SAORI-basic! But the output of that SAORI wasn't ideal to me because the more characters talked the more the text speed slowed down. So, I kept this, because this lets them all type at normal speed. The one downside is that this does not activate talk animations, but you can possibly mitigate that by adding in some \\i[] tags that call the talk animation."
	},
	{
		name: "Pool",
		release: "August 3rd, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Pool.txt", //TODO check link here
		blurb: "Boy have I got a story about this one. If you're on modern versions of YAYA, you have no need of this function. If you're on old versions of YAYA (sorry AYA, this won't work for you), then <a href='../blog/2021-12-12_advent_calendar_probabilities.html'>let me tell you about the probability problem and the lengths I went to to solve it</a>. I'm leaving this function up for anyone that can't or won't update their YAYA (but you <i>really should</i> unless you literally cannot), and for historical purposes. These days, you can simply use the pool or nonoverlap_pool modifiers on your dialogue pools to get the same effect way easier!"
	},
	{
		name: "RangeRand",
		release: "June 19th, 2023",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "RangeRand.txt",
		blurb: "A little function I wrote for <a href='../ghost/if_i_cant_have_shrimp_no_one_can.html'>If I can't have shrimp no one can</a>, during Idea Adoption Jam! Gets a pseudo random number within the specified range, and can even handle negative numbers! So for example, if you want to get a random number between 5 and 10, this makes that easy!"
	},
	{
		name: "SakuraScooper",
		release: "August 9th, 2022",
		latest: null,
		version: "1.0.0",
		forevent: null,
		language: "YAYA",
		download: "SakuraScooper.txt",
		blurb: "This function can be used to identify all the SakuraScript tags within a given string. What you do with that information is up to you! I made it for the purposes of being able to scrape SakuraScript tags out of strings, perform processing on the strings, and then put the SakuraScript tags back in intact. Note that it can run slowly if you give it strings with a lot of tags! (A lot meaning upwards of 100.)"
	},
	{
		name: "Shuffle",
		release: "January 18th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Shuffle.txt",
		blurb: "Do you need to shuffle the elements of an array, or the letters in a string? That's what this function will do! Simply feed it an array or a string, and if it's an array it'll spit it back out with the elements in a random order, and if it's a string, it'll spit it back out with the letters in a random order! Note that because of this, it only works with general purpose arrays, not simple arrays."
	},
	{
		name: "Simple Flags",
		release: "January 15th, 2021",
		latest: "February 2nd, 2021",
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Simple_Flags.txt",
		blurb: "This flag system is useful if you find yourself creating a lot of global variables for flags. The kinds of things that you only ever set to 1 or 0! Like if the user has discovered X secret about your ghost, or has played X minigame for the first time. This can cut down on the amount of global variables you have by simply storing them all in an array. And you can use any string as the name for a flag, to make it as descriptive as you like!"
	},
	{
		name: "StartsWith & EndsWith",
		release: "March 30th, 2022",
		latest: "August 6th, 2023",
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "StartsWith_EndsWith.txt",
		blurb: "A pair of functions for checking the start and end of a string! For example, you could check if a string begins with \"Mr.\" or \"https://\", or if it ends with \".txt\" or \"!\", etc."
	},
	{
		name: "Update progress bar",
		release: "December 2nd, 2021",
		latest: "August 6th, 2023",
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "Update_progress_bar.txt",
		blurb: "A progress bar for network updates. I don't recommend using this! Having these update events AT ALL aside from the error events will slow down your network updates DRASTICALLY. Like, 3x to 5x slow down, if I had to estimate. These events were made for a time when download speeds were much slower, but these days the time it takes to display the text (even if you use instant display!) makes it take a little extra time between each file, and it adds up quick unless your updates are small. But if you really want an update bar, this is a quick and clean setup!"
	},
	{
		name: "Wobble",
		release: "January 5th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Wobble.txt",
		blurb: "This is a text effect to create weird, wobbly text! It can make the text go up and down, grow or strink, and changes cases randomly if you like! The text will go off the side of the balloon if it extends far enough, but it's a pretty fun effect regardless."
	},
	{
		name: "yearweek",
		release: "November 26th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA / AYA",
		download: "yearweek.txt",
		blurb: "This function will tell you what week of the year it currently is! There is probably a smarter math way of doing this than what I've done here, but math isn't my strong suit and loops are! Maybe at some point I'll update this."
	}
]