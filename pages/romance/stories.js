function getEasyStories(){
    let easyStories = [
    {
        "title": "Cafe Rendezvous",
        "summary": "Two strangers meet in a Mumbai cafe, finding an unexpected connection over shared laughter and coffee, sparking a new beginning.",
        "hints": ["cafe", "strangers", "coffee", "laughter", "glance", "number", "spark"],
        "userSelection": [],
        "story": "The bustling Mumbai cafe was a symphony of chatter. Rohan, lost in his book, looked up as a stranger, Anya, spilled coffee near his table. Their eyes met, a shared laugh breaking the ice. They talked for hours, finding an unexpected connection amidst the aroma of coffee. As the cafe closed, he hesitated. She smiled, offering her number. A simple glance, a shared moment, had sparked a new beginning in the heart of the city, a quiet promise of future laughter."
    },
    {
        "title": "Mountain Heartbeats",
        "summary": "Two solo trekkers meet on a Himalayan trail, sharing challenges and stunning views, discovering a deep bond amidst the majestic mountains.",
        "hints": ["trek", "trail", "mountains", "view", "help", "bond", "stars"],
        "userSelection": [],
        "story": "The Himalayan trek was arduous but breathtaking. Liam, a solo adventurer, found himself walking beside Priya, another lone trekker. They shared snacks, navigated steep trails, and marveled at majestic mountain views. A sudden slip, and Liam's hand was there to help. Under a sky full of stars, huddled by a campfire, they spoke of dreams. A deep bond formed amidst the crisp mountain air. The journey was more than just peaks; it was the discovery of a shared heart, a silent promise under the vast, silent mountains."
    },
    {
        "title": "Beach Sunset Song",
        "summary": "A musician and an artist meet on a Goan beach at sunset. Their shared passion for beauty creates a romantic evening, ending with a serenade under the stars.",
        "hints": ["beach", "sunset", "artist", "music", "waves", "song", "stars"],
        "userSelection": [],
        "story": "The Goan beach glowed as the sun dipped below the horizon. Rohan, a street musician, played a soft melody. Anya, an artist sketching the vibrant sunset, looked up. Their eyes met, drawn by shared appreciation for beauty. They talked as waves whispered secrets. He played a song just for her, the notes mingling with the ocean breeze. Under a sky full of stars, their connection deepened. The beach, a canvas of colors, became the backdrop for a budding romance, a silent serenade of hearts."
    },
    {
        "title": "Backwater Whispers",
        "summary": "A quiet houseboat journey through Kerala's backwaters brings two strangers together. Amidst serene beauty, they find connection, sharing stories and dreams under the stars.",
        "hints": ["houseboat", "backwaters", "strangers", "peace", "stories", "dreams", "stars"],
        "userSelection": [],
        "story": "The houseboat glided peacefully through Kerala's emerald backwaters. Liam, seeking quiet, found Anya, a fellow traveler, on the deck. Amidst the serene beauty, they started talking, sharing quiet stories and laughter. The gentle whispers of the water surrounded them. As night fell, stars dotted the sky. They spoke of dreams, finding an unexpected connection in the tranquil silence. The journey became more than just scenery; it was a discovery of a shared soul, a quiet bliss under the moonlit backwaters."
    },
    {
        "title": "Palace of Hearts",
        "summary": "In a grand Rajasthani palace, a historian and a local guide uncover ancient secrets and an unexpected romance, intertwining their destinies amidst royal splendor.",
        "hints": ["palace", "historian", "guide", "secrets", "arches", "glance", "destiny"],
        "userSelection": [],
        "story": "Dr. Maya Sharma, a historian, explored a grand Rajasthani palace, seeking ancient secrets. Her guide, Vikram, a local with deep knowledge, pointed out hidden arches and forgotten courtyards. Their shared passion for history sparked an unexpected connection. A stolen glance, a shared smile, and the palace's grandeur became their romantic backdrop. They discovered a hidden chamber, revealing a forgotten royal love story. As dusk fell, their own destinies intertwined. The palace, once a relic of the past, became a witness to a new, unfolding romance, a timeless affair amidst its majestic walls."
    },
    {
        "title": "Campus Love Story",
        "summary": "Two university students in Delhi, initially rivals, find love amidst campus chaos. Shared study sessions and unexpected moments lead to a sweet, enduring romance.",
        "hints": ["campus", "students", "rivals", "library", "notes", "smile", "future"],
        "userSelection": [],
        "story": "The Delhi University campus buzzed with life. Rohan and Priya, initially academic rivals, often found themselves competing for the same library books. Their study sessions, initially tense, slowly softened with shared laughter and late-night coffee. A spilled cup, a shared joke, and a shy smile started it. They walked through tree-lined paths, discussing everything but studies. Unexpected moments, like catching each other's eye across a crowded lecture hall, solidified their bond. Soon, their rivalry blossomed into a sweet, enduring romance. The campus, their world, became the backdrop for their love story, a promise of a shared future."
    },
    {
        "title": "Kolkata's Artistic Soul",
        "summary": "An artist and a poet meet in old Kolkata's charming alleys. Their shared love for art and history sparks a deep connection, weaving a beautiful romance into the city's fabric.",
        "hints": ["artist", "poet", "alleys", "art", "history", "words", "connection"],
        "userSelection": [],
        "story": "The charming, winding alleys of old Kolkata held stories. Anya, a painter, set up her easel near a crumbling haveli. A poet, Liam, sat nearby, scribbling in a notebook. Their shared love for art and history drew them together. They talked for hours, discussing brushstrokes and verses. The city's old-world charm became their muse. He read her a poem inspired by her painting; she sketched his thoughtful profile. A deep connection formed, weaving a beautiful romance into the very fabric of Kolkata's artistic soul. The city, with its timeless beauty, witnessed their quiet, profound love story."
    },
    {
        "title": "Tech City Romance",
        "summary": "Two ambitious tech professionals in Bangalore's startup world find love amidst deadlines and innovation. Their shared passion for technology and unexpected moments ignite a modern romance.",
        "hints": ["tech", "startup", "code", "ideas", "coffee", "spark", "future"],
        "userSelection": [],
        "story": "The Bangalore startup scene buzzed with innovation. Rohan and Maya, both ambitious tech professionals, often clashed over coding solutions. Their late-night coffee breaks, fueled by endless ideas, slowly turned into shared laughter. A brilliant line of code, a shared breakthrough, and a knowing glance started it. They discussed algorithms and dreams, finding common ground beyond the office. Unexpected moments, like a shared pizza after a long deadline, ignited a modern romance. Their passion for technology intertwined with their growing affection. The tech city, their playground, became the backdrop for their love story, a promise of a shared future built on innovation and connection."
    },
    {
        "title": "Ghats' Sacred Love",
        "summary": "Two souls meet by Varanasi's ancient ghats. Amidst spiritual serenity, they find a deep, soulful connection, sharing moments of peace and understanding by the sacred river.",
        "hints": ["ghats", "souls", "river", "peace", "boats", "sunset", "connection"],
        "userSelection": [],
        "story": "The ancient ghats of Varanasi hummed with spiritual energy. Liam, seeking inner peace, sat watching the sunrise over the sacred Ganga river. He noticed Anya, a fellow traveler, meditating nearby. Amidst the profound serenity, their eyes met, sparking a quiet connection. They shared moments of silence, watching boats glide by and sunsets paint the sky. They spoke of life, dreams, and the river's timeless wisdom. A deep, soulful bond formed, transcending words. The ghats, witnesses to centuries of devotion, became the sacred backdrop for their unique love story, a profound understanding by the eternal river."
    },
    {
        "title": "Monsoon Rhapsody",
        "summary": "A chance encounter during Chennai's monsoon season brings two strangers together. Amidst the rain and city rhythm, they find a comforting connection, sharing warmth and laughter.",
        "hints": ["rain", "city", "strangers", "umbrella", "coffee", "warmth", "melody"],
        "userSelection": [],
        "story": "The Chennai monsoon arrived with a sudden downpour. Rohan, rushing for cover, bumped into Priya under a crowded bus stop. Their umbrellas tangled, leading to shared laughter. They found shelter in a small coffee shop, the rain beating a steady rhythm outside. Amidst the city's monsoon melody, they talked for hours, finding unexpected comfort and warmth. He offered her his umbrella when the rain finally eased. A simple encounter, a shared moment in the rain, had sparked a sweet connection. The monsoon, usually a time of dampness, became the backdrop for their budding romance, a gentle rhapsody of new beginnings."
    },
    {
        "title": "Taj's Eternal Love",
        "summary": "Two travelers meet under the Taj Mahal's moonlight. The monument's timeless beauty inspires a deep connection, as they share dreams and the magic of eternal love.",
        "hints": ["Taj", "moonlight", "travelers", "dome", "dreams", "magic", "love"],
        "userSelection": [],
        "story": "The majestic Taj Mahal gleamed under the soft moonlight, a symbol of eternal love. Liam and Anya, two travelers, found themselves standing side-by-side, awestruck by its beauty. The iconic dome seemed to whisper ancient stories. They spoke of their dreams, their voices hushed in the serene night. The monument's timeless magic enveloped them, drawing them closer. A shared glance, a hand brushing, and a profound connection formed. The Taj, a testament to enduring affection, became the backdrop for their budding romance, a silent promise under the vast, starlit sky."
    },
    {
        "title": "Biryani Date Delight",
        "summary": "A blind date in Hyderabad takes a hilarious turn over biryani. Unexpected quirks and shared laughter turn an awkward meeting into a delightful, memorable, and delicious romance.",
        "hints": ["date", "biryani", "restaurant", "awkward", "laughter", "spice", "charm"],
        "userSelection": [],
        "story": "The blind date in Hyderabad started awkwardly. Rohan, fidgeting, met Maya at a famous biryani restaurant. He accidentally ordered extra spicy, leading to a comical coughing fit. She burst into laughter, breaking the ice. They discovered shared quirks and a mutual love for food. Amidst the aroma of biryani and the clatter of spoons, their conversation flowed easily. His initial clumsiness turned into endearing charm. The date, initially tense, transformed into a delightful, memorable, and delicious romance. The biryani, a symbol of Hyderabad, became the unexpected catalyst for their sweet connection."
    }
]
return easyStories;
}

function getMediumStories(){
    let mediumStories = [
            {
        "title": "Cafe Rendezvous",
        "summary": "Two complete strangers, Rohan and Anya, meet by chance in a bustling Mumbai cafe. They discover an unexpected and profound connection over shared laughter, warm coffee, and quiet conversation, sparking the beautiful beginning of a new, promising relationship amidst the city's vibrant energy.",
        "hints": ["cafe", "strangers", "coffee", "laughter", "glance", "number", "spark", "Mumbai", "book", "table", "connection"],
        "userSelection": [],
        "story": "The bustling Mumbai cafe was a vibrant symphony of chatter, clinking cups, and soft background music. Rohan, deeply lost in the pages of his book, looked up as a complete stranger, Anya, accidentally spilled her coffee near his table. Their eyes met across the small space, and a shared, genuine laugh instantly broke the ice. They began to talk, finding an unexpected and profound connection amidst the comforting aroma of freshly brewed coffee and the gentle hum of the city. Hours melted away as they discussed dreams, passions, and shared quirks. As the cafe slowly closed for the night, he hesitated, unsure how to prolong the moment. She smiled warmly, offering her number, a silent invitation. A simple glance, a shared moment of accidental chaos, had sparked a beautiful new beginning in the heart of the city, a quiet promise of future laughter and deeper conversations."
    },
    {
        "title": "Mountain Heartbeats",
        "summary": "Two solo trekkers, Liam and Priya, meet serendipitously on a challenging Himalayan trail. As they navigate shared difficulties and marvel at breathtaking panoramic views, they discover a deep, unspoken bond forming amidst the majestic, silent mountains, a connection as vast and enduring as the peaks themselves.",
        "hints": ["trek", "trail", "mountains", "view", "help", "bond", "stars", "Himalayan", "snacks", "campfire", "dreams", "air"],
        "userSelection": [],
        "story": "The challenging Himalayan trek was arduous but breathtakingly beautiful, each step a test of endurance. Liam, a solo adventurer seeking peace, found himself walking serendipitously beside Priya, another lone trekker with a determined spirit. They shared their meager snacks, navigated steep, winding trails, and marveled together at the majestic, panoramic mountain views that unfolded before them. A sudden slip on a loose rock, and Liam's hand was instinctively there to help, a silent gesture of support. Under a vast, inky sky full of glittering stars, huddled intimately by a crackling campfire, they spoke openly of their deepest dreams and aspirations. A deep, unspoken bond formed amidst the crisp, cold mountain air. The journey became more than just conquering peaks; it was the profound discovery of a shared heart, a silent promise of enduring connection under the vast, silent, and ancient mountains."
    },
    {
        "title": "Beach Sunset Song",
        "summary": "A soulful musician and a passionate artist, Rohan and Anya, meet by chance on a vibrant Goan beach as the sun dips below the horizon. Their shared appreciation for beauty and creativity sparks a deeply romantic evening, culminating in a heartfelt serenade under the shimmering canopy of a star-filled sky, weaving their connection into the very essence of the coastal magic.",
        "hints": ["beach", "sunset", "artist", "music", "waves", "song", "stars", "Goan", "melody", "ocean", "romance", "canvas", "connection"],
        "userSelection": [],
        "story": "The vibrant Goan beach glowed with fiery hues as the sun dipped majestically below the horizon, painting the sky in shades of orange and purple. Rohan, a soulful street musician, played a soft, melancholic melody on his guitar. Anya, a passionate artist sketching the vibrant sunset, looked up from her canvas, drawn by the haunting notes. Their eyes met, an instant connection sparked by a shared appreciation for beauty and creativity. They talked for hours, as the waves whispered ancient secrets onto the shore. He played a new song, composed just for her, the tender notes mingling perfectly with the gentle ocean breeze. Under a sky full of shimmering stars, their connection deepened with every shared glance and quiet word. The beach, a living canvas of colors and sounds, became the magical backdrop for a budding romance, a silent serenade of two hearts finding their rhythm together amidst the coastal magic."
    },
    {
        "title": "Backwater Whispers",
        "summary": "A quiet, serene houseboat journey through Kerala's emerald backwaters unexpectedly brings two strangers, Liam and Anya, together. Amidst the tranquil beauty of the waterways, they discover a profound, comforting connection, sharing intimate stories, quiet laughter, and unspoken dreams under the vast, star-studded tropical night sky.",
        "hints": ["houseboat", "backwaters", "strangers", "peace", "stories", "dreams", "stars", "Kerala", "deck", "water", "laughter", "connection"],
        "userSelection": [],
        "story": "The polished wooden houseboat glided peacefully and silently through Kerala's emerald backwaters, a picture of serene, almost ethereal beauty. Liam, seeking quiet solitude and reflection, found Anya, a fellow traveler with a thoughtful gaze, sitting alone on the deck. Amidst the tranquil beauty of the winding waterways, they slowly started talking, sharing quiet stories, gentle laughter, and unspoken dreams. The soft, gentle whispers of the water against the hull surrounded them, creating an intimate atmosphere. As night gracefully fell, countless stars dotted the vast tropical sky, illuminating their faces. They spoke of their deepest aspirations, finding an unexpected and profound connection in the tranquil silence. The journey became more than just breathtaking scenery; it was the profound discovery of a shared soul, a quiet bliss and deep understanding under the moonlit backwaters, promising a future of shared serenity."
    },
    {
        "title": "Palace of Hearts",
        "summary": "Within the opulent walls of a grand Rajasthani palace, a dedicated historian, Dr. Maya Sharma, and a charismatic local guide, Vikram, embark on a quest to uncover ancient, forgotten secrets. Their shared passion for history and discovery unexpectedly sparks a deep, intertwining romance, forever linking their destinies amidst the royal splendor and timeless grandeur of the majestic fort.",
        "hints": ["palace", "historian", "guide", "secrets", "arches", "glance", "destiny", "Rajasthani", "knowledge", "chamber", "romance", "walls", "grandeur"],
        "userSelection": [],
        "story": "Dr. Maya Sharma, a meticulous historian, explored the opulent, grand Rajasthani palace, her mind set on uncovering its ancient, forgotten secrets. Her charismatic guide, Vikram, a local with deep, inherited knowledge of the fort's every hidden corner, pointed out intricate arches and forgotten courtyards. Their shared passion for history and discovery unexpectedly sparked a profound connection between them. A stolen glance across a sun-drenched courtyard, a shared smile over a deciphered inscription, and the palace's timeless grandeur became the majestic backdrop for their budding romance. They ventured deeper, discovering a hidden chamber adorned with faded frescoes, revealing a forgotten royal love story of epic proportions. As dusk gracefully fell, painting the sky in hues of orange and purple, their own destinies intertwined irrevocably. The palace, once merely a relic of the past, became a living witness to a new, unfolding romance, a timeless affair amidst its majestic, ancient walls and enduring splendor."
    },
    {
        "title": "Campus Love Story",
        "summary": "Two brilliant university students in bustling Delhi, initially fierce academic rivals, find an unexpected and sweet love amidst the chaos and vibrant energy of campus life. Their shared study sessions, late-night coffee talks, and a series of unexpected, charming moments lead to a deep, enduring romance that promises a bright future together.",
        "hints": ["campus", "students", "rivals", "library", "notes", "smile", "future", "Delhi", "chaos", "coffee", "bond", "romance", "path"],
        "userSelection": [],
        "story": "The sprawling Delhi University campus buzzed with life, a vibrant microcosm of ambition and intellect. Rohan and Priya, two brilliant students, were initially fierce academic rivals, often finding themselves competing intensely for the same rare library books and top grades. Their study sessions, initially tense and competitive, slowly softened with shared laughter, late-night coffee talks, and a growing mutual respect. A spilled coffee cup, a spontaneous shared joke during a stressful exam, and a shy, lingering smile started it all. They began walking through the tree-lined paths, discussing everything but academics, discovering shared passions. Unexpected moments, like catching each other's eye across a crowded lecture hall or cheering for the same cricket team, solidified their undeniable bond. Soon, their intense rivalry blossomed beautifully into a sweet, enduring romance. The campus, their entire world for those formative years, became the cherished backdrop for their unfolding love story, a quiet promise of a shared future built on connection and understanding."
    },
    {
        "title": "Kolkata's Artistic Soul",
        "summary": "A passionate artist, Anya, and a soulful poet, Liam, meet serendipitously in old Kolkata's charming, winding alleys. Their profound shared love for art, history, and the city's unique essence sparks a deep, creative connection, weaving a beautiful and timeless romance into the very fabric of Kolkata's rich, artistic soul and enduring heritage.",
        "hints": ["artist", "poet", "alleys", "art", "history", "words", "connection", "Kolkata", "easel", "haveli", "muse", "romance", "fabric"],
        "userSelection": [],
        "story": "The charming, winding alleys of old Kolkata held countless stories, whispered by ancient brick and crumbling facades. Anya, a passionate painter, set up her easel near a crumbling haveli, capturing the city's fading grandeur. A soulful poet, Liam, sat nearby, quietly scribbling verses in a worn notebook, observing the same scene. Their profound shared love for art, history, and the city's unique essence drew them together. They talked for hours, discussing the nuances of brushstrokes and the rhythm of verses, finding common ground in their creative souls. The city's old-world charm, its vibrant chaos and quiet corners, became their shared muse. He read her a poignant poem inspired by her painting; she, in turn, sketched his thoughtful profile, capturing his essence. A deep, unspoken connection formed, weaving a beautiful and timeless romance into the very fabric of Kolkata's rich, artistic soul and enduring heritage. The city, with its timeless beauty, witnessed their quiet, profound love story unfold."
    },
    {
        "title": "Tech City Romance",
        "summary": "Two ambitious tech professionals, Rohan and Maya, navigate Bangalore's competitive startup world. Amidst demanding deadlines and relentless innovation, their shared passion for technology and a series of unexpected, genuine moments ignite a modern, fast-paced romance that promises a future built on both code and connection.",
        "hints": ["tech", "startup", "code", "ideas", "coffee", "spark", "future", "Bangalore", "clashed", "pizza", "affection", "innovation", "playground"],
        "userSelection": [],
        "story": "The Bangalore startup scene buzzed with relentless innovation and fierce competition. Rohan and Maya, both ambitious tech professionals, often found themselves clashing over coding solutions and project strategies. Their late-night coffee breaks, initially fueled by endless ideas and tight deadlines, slowly but surely turned into shared laughter and comfortable silences. A brilliant line of code they collaborated on, a shared breakthrough on a complex problem, and a knowing glance across a crowded meeting room sparked an undeniable connection. They discussed intricate algorithms and shared their wildest dreams, finding common ground far beyond the confines of the office. Unexpected moments, like a shared pizza after a particularly long deadline or a spontaneous late-night drive, ignited a modern, fast-paced romance. Their passion for technology intertwined seamlessly with their growing affection. The tech city, their vibrant playground of innovation, became the dynamic backdrop for their unfolding love story, a promise of a shared future built on both groundbreaking code and profound connection."
    },
    {
        "title": "Ghats' Sacred Love",
        "summary": "Two kindred souls, Liam and Anya, meet by chance at Varanasi's ancient, spiritual ghats. Amidst the profound serenity and timeless rituals of the sacred city, they discover a deep, soulful connection, sharing moments of quiet peace, unspoken understanding, and shared dreams by the revered Ganga river, a bond blessed by ancient traditions.",
        "hints": ["ghats", "souls", "river", "peace", "boats", "sunset", "connection", "Varanasi", "sunrise", "traveler", "wisdom", "bond", "sacred"],
        "userSelection": [],
        "story": "The ancient ghats of Varanasi hummed with a profound, spiritual energy, a timeless rhythm of life and devotion. Liam, a traveler seeking inner peace and spiritual solace, sat quietly watching the breathtaking sunrise over the sacred Ganga river, its waters gleaming. He noticed Anya, a fellow traveler with a serene demeanor, meditating peacefully nearby. Amidst the profound serenity and timeless rituals, their eyes met, sparking a quiet, undeniable connection. They shared moments of profound silence, watching colorful boats glide by and vibrant sunsets paint the sky in hues of devotion. They spoke softly of life's deeper meanings, their individual dreams, and the river's timeless wisdom. A deep, soulful bond formed between them, transcending mere words, a connection blessed by the ancient traditions of the city. The ghats, silent witnesses to centuries of devotion and human experience, became the sacred backdrop for their unique love story, a profound understanding blossoming by the eternal, revered river."
    },
    {
        "title": "Monsoon Rhapsody",
        "summary": "A chance, charming encounter during Chennai's vibrant monsoon season brings two complete strangers, Rohan and Priya, together. Amidst the rhythmic sound of the rain and the bustling city's unique energy, they find an unexpected, comforting connection, sharing warmth, laughter, and the quiet joy of new beginnings, painting their romance with the colors of the season.",
        "hints": ["rain", "city", "strangers", "umbrella", "coffee", "warmth", "melody", "Chennai", "downpour", "laughter", "connection", "rhythm", "romance"],
        "userSelection": [],
        "story": "The Chennai monsoon arrived with a sudden, dramatic downpour, transforming the bustling streets into shimmering rivers. Rohan, rushing frantically for cover, accidentally bumped into Priya under a crowded bus stop. Their umbrellas tangled comically, leading to an immediate, shared burst of laughter that broke the tension. They found refuge in a small, cozy coffee shop, the relentless rain beating a steady, soothing rhythm against the windows outside. Amidst the city's unique monsoon melody, they talked for hours, finding unexpected comfort and genuine warmth in each other's company. He chivalrously offered her his umbrella when the rain finally eased to a gentle drizzle. A simple, charming encounter, a shared moment in the rain, had sparked a sweet, undeniable connection. The monsoon, usually a time of dampness and inconvenience, became the unexpected backdrop for their budding romance, a gentle rhapsody of new beginnings, painting their love story with the vibrant colors of the season."
    },
    {
        "title": "Taj's Eternal Love",
        "summary": "Two kindred travelers, Liam and Anya, meet by chance under the soft, ethereal moonlight illuminating the majestic Taj Mahal. The monument's timeless beauty and profound symbolism of eternal love inspires a deep, spiritual connection between them, as they share their innermost dreams, quiet whispers, and the undeniable magic of a love destined to transcend time, mirroring the very essence of the Taj itself.",
        "hints": ["Taj", "moonlight", "travelers", "dome", "dreams", "magic", "love", "monument", "beauty", "connection", "Agra", "promise", "sky"],
        "userSelection": [],
        "story": "The majestic Taj Mahal gleamed with an ethereal glow under the soft, silver moonlight, a breathtaking symbol of eternal love and architectural perfection. Liam and Anya, two kindred travelers from different corners of the world, found themselves standing side-by-side, utterly awestruck by its profound beauty and serene grandeur. The iconic dome seemed to whisper ancient stories of devotion and sacrifice. They spoke softly of their innermost dreams, their voices hushed in the serene, sacred night, feeling an inexplicable pull towards each other. The monument's timeless magic enveloped them, drawing them closer with an irresistible force. A shared glance, a hand brushing gently, and a profound, undeniable connection formed between their souls. The Taj Mahal, a magnificent testament to enduring affection and unwavering commitment, became the sacred backdrop for their budding romance, a silent promise exchanged under the vast, starlit sky, mirroring the very essence of eternal love that the monument itself embodies."
    },
    {
        "title": "Biryani Date Delight",
        "summary": "A blind date in bustling Hyderabad takes an unexpectedly hilarious and utterly charming turn over a plate of delicious biryani. Unexpected quirks, comical mishaps, and shared, genuine laughter transform an initially awkward meeting into a delightful, memorable, and deliciously unique romance, proving that sometimes, the best connections are spiced with humor and good food.",
        "hints": ["date", "biryani", "restaurant", "awkward", "laughter", "spice", "charm", "Hyderabad", "quirks", "food", "catalyst", "connection", "delicious"],
        "userSelection": [],
        "story": "The blind date in bustling Hyderabad started, as many do, with an undeniable awkwardness. Rohan, fidgeting nervously with his napkin, met Maya at a famous, aromatic biryani restaurant. He, in a moment of misguided bravado, accidentally ordered extra spicy biryani, leading to a comical, uncontrollable coughing fit that drew curious glances. She, instead of being put off, burst into genuine, infectious laughter, instantly breaking the ice and melting away his nervousness. They quickly discovered shared quirks, a mutual, profound love for good food, and a surprisingly easy rapport. Amidst the intoxicating aroma of biryani and the gentle clatter of spoons, their conversation flowed effortlessly, spiced with humor and unexpected insights. His initial clumsiness and nervous energy transformed into an endearing charm that captivated her. The date, initially tense and full of silent expectations, transformed into a delightful, truly memorable, and deliciously unique romance. The biryani, a quintessential symbol of Hyderabad, became the unexpected catalyst for their sweet, spicy, and utterly charming connection, proving that love can indeed be found in the most delicious of places."
    }
    ]
    return mediumStories;
}


export {getEasyStories ,getMediumStories};