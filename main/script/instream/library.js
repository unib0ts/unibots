let sourceArray = [
    {
        "sources": ["//player.vimeo.com/external/309448537.sd.mp4?s=48b017844b9c4f1758ac43b944e5d39ffd50bc2c&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//images.pexels.com/videos/1757800/pictures/preview-6.jpg"],
        "title": "Ocean video"
    },
    {
        "sources": ["//player.vimeo.com/external/224889044.sd.mp4?s=592944e98c732eb867d56e9b4940d9ed78bbe0ea&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//images.pexels.com/videos/856882/pictures/preview-10.jpg"],
        "title": "Jelly Fish in the Ocean"
    },
    {
        "sources": ["//player.vimeo.com/external/310303556.sd.mp4?s=53cd65f2c27c2d86bbfa26172efbff6122769899&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//https://images.pexels.com/videos/1776352/pictures/preview-1.jpg"],
        "title": "person-drinking-coffee-while-viewing-the-sea"
    },
    {
        "sources": ["//player.vimeo.com/external/330412624.sd.mp4?s=853ea7644708b7986c992689dd351b0413d7b3ca&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//https://images.pexels.com/videos/2169880/pictures/preview-3.jpg"],
        "title": "Ariel View of Resort"
    },
    {
        "sources": ["//player.vimeo.com/external/319226256.sd.mp4?s=15bd6bd5af266703564dcee166b1ae076659193a&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//images.pexels.com/videos/1943483/pictures/preview-8.jpg"],
        "title": "Multi Colored Vapour"
    },
    {
        "sources": ["//player.vimeo.com/external/327472845.sd.mp4?s=0e377c29d0f647f147ca3183a40bb73cf83cfd30&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//https://images.pexels.com/videos/2080389/pictures/preview-2.jpg"],
        "title": "Athletic and Sports"
    },
    {
        "sources": ["//player.vimeo.com/external/347584603.sd.mp4?s=c0d5cc4d28790bdb56bffcdccc9fbde0a4a8f926&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//images.pexels.com/videos/2646392/pictures/preview-9.jpg"],
        "title": "Night Sky full of stars"
    },
    {
        "sources": ["//player.vimeo.com/external/308153460.sd.mp4?s=ac433e9077e4ae50aaf5e237cbf99295d4cdce2d&profile_id=164&oauth2_token_id=57447761"],
        "thumb": ["//images.pexels.com/videos/1722697/pictures/preview-3.jpg"],
        "title": "Mountain at Sunset"
    }
];

function randomNoRepeats(array) {
	let copy = array.slice(0);
	return function () {
		if (copy.length < 1) {
			copy = array.slice(0);
		}
		let index = Math.floor(Math.random() * copy.length);
		let item = copy[index];
		copy.splice(index, 1);

		//let video = document.getElementById('content_video');
		let source = document.getElementById('video-source');
		let poster = document.getElementById('content_video');

		source.setAttribute("src", item.sources[0]);
		poster.setAttribute("poster", item.thumb[0]);

		return item;
	};
}

// Initialize the function, which when called, will change the source
let changeVideoSource = randomNoRepeats(sourceArray);

// Call as function to change the source of the video
changeVideoSource();
// Call will randomly select from sourceArray
changeVideoSource();
