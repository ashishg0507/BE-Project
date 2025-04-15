const games = [
    {
        title: "EA SPORTS FC 24",
        image: "https://i.gadgets360cdn.com/large/fc_24_ea_1697186790866.png",
        genre: "Sports",
        modes: "Single Player, Multiplayer",
        rating: "9.1/10",
        review: "For football fans and FIFA followers all around the world it is an exhilarating experience from start to finish! It might have a new name, but EA Sports FC 24 is just about the same, frustrating sometimes but continuous to deliver relentless gameplay and amazing graphics. Though a bit laggy sometimes but keeping all other aspects of the game in mind, it's the best out there"
    },
    {
        title: "Black Myth:Wukong",
        image: "https://cdn.wccftech.com/wp-content/uploads/2024/06/Black-Myth_-Wukong_Key-Art-scaled.jpeg",
        genre: "Action, RPG",
        modes: "Single Player",
        rating: "9.5/10",
        review: "Black Myth: Wukong's story is based on the classic Chinese novel Journey to the West. Originally published in the 16th century during the Ming dynasty. You play as a mute monkey, known as the Destined One, who shares more than a few similarities with the titular Sun Wukong-a legendary simian commonly known as the Monkey King. A latest piece of art that has come into everyone's attention with its great graphics."
    },
    {
        title: "Elden Ring",
        image: "https://i.ytimg.com/vi/JldMvQMO_5U/maxresdefault.jpg",
        genre: "Fantasy, Action, RPG",
        modes: "Single Player, Multiplayer",
        rating: "9/10",
        review: "It's constantly exciting, rewarding, and full of moments that will make you go \"OMG\". You will also have more freedom in how you approach combat than any previous FromSoft game. You can craft items on the fly using materials found in the world so you can be ready for whatever a situation calls for; you can summon a large variety of creatures to fight for you, each with their own unique abilities and situational advantages and many more."
    },
    {
        title: "Resident Evil 4",
        image: "https://wp-uploads.qualbert.com/2023/03/Resident-Evil-4-Remake-Wallpaper-1170x720.jpg",
        genre: "Survival-Horror",
        modes: "Single Player",
        rating: "9/10",
        review: "Its improvements over the original are too numerous to list, from simple quality of life changes to completely overhauled boss fight mechanics. Both graphics and story are excellent. Easily one of the best games of all time."
    },
    {
        title: "BGMI",
        image: "https://beebom.com/wp-content/uploads/2023/05/Untitled-design-4-5.jpg?w=750&quality=75",
        genre: "Action, Battle Royale",
        modes: "Multiplayer",
        rating: "8.8/10",
        review: "Battlegrounds Mobile India, previously known as PUBG Mobile India, is a version of PUBG Mobile that is now available in India. It is an online multiplayer battle royale game in which players land on part of a given map and loot areas to find weapons, medications, vehicles and other stuff to eliminate others and surviving to be the the last man/team alive"
    },
    {
        title: "Ghost of Tsushima",
        image: "https://assetsio.gnwcdn.com/Ghost-of-Tsushima-on-PC.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
        genre: "Action, Adventure, RPG",
        modes: "Single Player",
        rating: "8.9/10",
        review: "Ghost of Tsushima is an excellent action game and its open world is one of the most gorgeous yet. It is an enormous and densely packed samurai adventure that often left me completely awestruck with both its visual spectacle and excellent combat. By steadily introducing new abilities instead of stat upgrades, its swordplay manages to stay challenging, rewarding, and fun throughout the entire game."
    },
    {
        title: "Genshin Impact",
        image: "https://assetsio.gnwcdn.com/Genshin-Impact-beginner%E2%80%99s-guide-for-2023%2C-tips-and-tricks-cover.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
        genre: "Adventure, RPG",
        modes: "Single Player, Multiplayer",
        rating: "8.7/10",
        review: "Genshin Impact is an amazing open-world adventure that draws heavily on both its Breath of the Wild and anime inspirations to create something truly special. You shall explore this wondrous world freely, make friends along the way, and look for \"The Seven\" -- Archons of the seven elements."
    },
    {
        title: "God Of War:Ragnarok",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/6zhGBKQpPrlLNI2a7EfALNs1.png",
        genre: "Action, Adventure, RPG",
        modes: "Single Player",
        rating: "8.6/10",
        review: "The expectations and the bar for GoW Ragnarok was so high and almost impossible to reach because God Of War (2018) ended up being one of the greatest game of all time and sequels of projects historically ends up being a bit toned down. But its safe to say that they knocked the ball out of the park and gave this series a new height with this one. They did it so well."
    },
    {
        title: "Red Dead Redemption 2",
        image: "https://i.ytimg.com/vi/Dw_oH5oiUSE/maxresdefault.jpg",
        genre: "Action, RPG",
        modes: "Single Player",
        rating: "8.4/10",
        review: "Red Dead Redemption 2, the magnum opus from Rockstar Games, isn't just a video game; it's a sprawling, living canvas that transports players to the dying days of the American frontier. From the majestic landscapes to the intricate details of its characters, this open-world western masterpiece sets an unparalleled standard for immersive storytelling, exploration, and gameplay."
    },
    {
        title: "Grand Theft Auto V",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSHPC8qRnZflt0CryYFrYx7QN8HPNZeht56g&s",
        genre: "Action, FPS",
        modes: "Single Player, Multiplayer",
        rating: "8.2/10",
        review: "\"GTA V: A Timeless Classic\" Grand Theft Auto V (GTA V) stands as an enduring testament to the pinnacle of gaming excellence. Rockstar Games has outdone itself, creating a virtual masterpiece that continues to captivate and entertain players years after its release.The sprawling city of Los Santos is a living, breathing entity, teeming with life, diversity, and countless activities. The attention to detail is staggering"
    },
    {
        title: "Cyberpunk 2077",
        image: "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
        genre: "Action, RPG",
        modes: "Multiplayer",
        rating: "8/10",
        review: "Cyberpunk 2077 is one of the most disturbing and mind-blowing RPGs in history, where every decision has a deep impact on our trail.Combat is fun and varied. The main story is really cool and unique. The side quests are very memorable. It was a big flop at it's release but it turned into an improbable hit."
    },
    {
        title: "Valorant",
        image: "https://brutalgamer.com/wp-content/uploads/2020/07/valorant-sensitivity_feature.jpg",
        genre: "FPS, Action",
        modes: "Multiplayer",
        rating: "8.3/10",
        review: "Valorant is a free-to-play first-person tactical hero shooter game. Valorant's dynamics are enough to sustain it as a competitive shooter worth investing time into because winning itself is an intrinsic reward built on the merits of strong gameplay. But outside of the standard demolition-style mode and the modified Spike Rush, it's quite barebones."
    },
    {
        title: "NBA 2K24",
        image: "https://www.escapistmagazine.com/wp-content/uploads/2023/09/NBA-2k24-Header.jpg",
        genre: "Sports, RPG",
        modes: "Single Player, Multiplayer",
        rating: "7/10",
        review: "NBA 2K24 is like a frustratingly talented superstar who falls short of delivering championships, season after season. The excellent on-court gameplay bolsters significant depth with its dedication to looking, sounding, and feeling like a genuine NBA experience, but it's sidelined by small transactions that plague many of the most popular game modes."
    },
    {
        title: "COD:Black Ops 6",
        image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blackops6/home/game-modes/game-modes-zombies-FG.webp",
        genre: "Action, Shooting",
        modes: "Single Player, Multiplayer",
        rating: "8.1/10",
        review: "This Year's 'Call Of Duty' Is An Absolute Blast. The game is polished despite being months from launch, and the myriad changes to the formula made by Treyarch and its partner studios really shine through. There will also be 4 \"Strike\" maps at launch, built for 6v6 Faceoff and 2v2 Gunfight."
    },
    {
        title: "Tekken 8",
        image: "https://i.ytimg.com/vi/_zzq7hmHawM/maxresdefault.jpg",
        genre: "Fighting, Action",
        modes: "Single Player, Multiplayer",
        rating: "8/10",
        review: "Challenging points that keep you coming back. Tekken 8 offers a short and crisp story while keeping you thoroughly engaged. Characters are great, graphics fantastic, sound in music are awesome. Tons of customization and coins for upgrading are easy to come by."
    }
];

module.exports = games; 