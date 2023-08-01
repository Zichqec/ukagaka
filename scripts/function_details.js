let item_details = [
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
		name: "Holding Obsidian",
		release: "November 4th, 2020",
		latest: "November 6th, 2020",
		version: "1.0.1",
		forevent: null,
		language: "YAYA",
		download: "http://www.mediafire.com/file/b9a2k87ikhwxdyr/How_To_Make_Your_Ghost_Hold_Obsidian_v1.0.1.zip/file",
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
		blurb: "This is a tool I made that helps with shell setups that use a lot of animations called by \i[] tags! Note that in this tool, such animations are referred to as \"intervals\" even though that's not actually the right term. Currently this is distributed as a .dic file that you can add to your ghosts individually. It uses a SERIKO parser by <a href='https://levidre.github.io/'>Levidre</a>, though at the moment it only supports the old definition of SERIKO."
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
		name: "music_zi.dic",
		release: "January 5th, 2021",
		latest: "April 29th, 2022",
		version: "1.0.0",
		forevent: null,
		language: "YAYA",
		download: "https://www.mediafire.com/file/oy1fk4uskghy5ib/music_zi.dic_v1.0.0.zip/file",
		blurb: "This is an updated version of the music player in <a href='../ghost/flux.html'>FLUX</a>! This music player actually started all the way back in <a href='../ghost/lulo.html'>Lulo</a>, then got rewritten for FLUX, and then got overhauled again to be in its own .dic file to be added to other ghosts! Follow the instructions carefully, as there are some steps you need to take to integrate this with your ghost.<br><br>If you use this one, please put a credit in your ghost's readme stating such! I worked very hard on this music player, it's a big thing with a lot of little functions and polish."
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
		blurb: "This function lets multiple characters say different things at the same time. I made this bit of code because I couldn't get an old SAORI called parallel working. And then I finally figured out how to use SAORI-basic! But the output of that SAORI wasn't ideal to me because the more characters talked the more the text speed slowed down. So, I kept this, because this lets them all type at normal speed. The one downside is that this does not activate talk animations, but you can possibly mitigate that by adding in some \i[] tags that call the talk animation."
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
		name: "Wobble",
		release: "January 5th, 2021",
		latest: null,
		version: null,
		forevent: null,
		language: "YAYA",
		download: "Wobble.txt",
		blurb: "This is a text effect to create weird, wobbly text! It can make the text go up and down, grow or strink, and changes cases randomly if you like! The text will go off the side of the balloon if it extends far enough, but it's a pretty fun effect regardless."
	}
]