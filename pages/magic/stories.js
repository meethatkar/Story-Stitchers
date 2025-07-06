function getEasyStories(){
    let easyStories = [
    {
        "title": "The Flute of Whispers",
        "summary": "A struggling musician finds an ancient flute that plays melodies filled with magic, enchanting listeners and revealing hidden truths. He must master its power to restore harmony to his discordant city.",
        "hints": ["flute", "melodies", "magic", "musician", "power", "harmony", "city", "music", "truths", "energy", "quest", "hope"],
        "userSelection": [],
        "story": "In a city dimmed by silence, weary musician Leo discovered an antique flute in a dusty shop. Its wood hummed softly. The moment his lips touched its mouthpiece, a melody of pure magic flowed, not just through the air, but into the hearts of all who heard. The music soothed tensions, revealing unspoken truths. Leo soon realized the flute held ancient power, capable of restoring harmony. A discordant energy, born from the city's despair, sought to silence its song. He embarked on a quest to master the instrument, using its whispers to reawaken hope and heal the city's soul. The flute became a beacon, its magic echoing through every street."
    },
    {
        "title": "The Living Library",
        "summary": "A curious librarian stumbles upon a section of her ancient library where books come alive, sharing forgotten knowledge and leading her to a magical secret beneath the city.",
        "hints": ["librarian", "library", "books", "light", "knowledge", "visions", "Maya", "power", "quest", "entity", "secrets", "stories"],
        "userSelection": [],
        "story": "Young Maya, a quiet librarian, always felt drawn to her city's oldest library, a vast labyrinth of forgotten tales. One night, while shelving, she heard whispers from a secluded wing. There, books pulsed with soft light, their pages turning on their own. She touched an ancient tome; it unfolded visions of forgotten knowledge. Maya realized this was the Living Library, a magical entity safeguarding millennia of wisdom. A dark force, coveting this power, threatened to consume the knowledge. Maya embarked on a perilous quest, guided by the whispering books, to uncover a magical secret hidden deep beneath the library's foundations, protecting the world's most precious stories."
    },
    {
        "title": "The Garden of Shifting Blooms",
        "summary": "A lonely botanist discovers a hidden garden where plants possess magical properties, changing with emotions and revealing paths to ancient secrets, forcing her to confront her own inner turmoil.",
        "hints": ["garden", "plants", "magic", "light", "emotions", "secrets", "past", "despair", "journey", "spirit", "sanctuary", "blooms"],
        "userSelection": [],
        "story": "Isabella, a solitary botanist, stumbled upon a hidden garden tucked behind an ancient ruin. No ordinary place, its flowers pulsed with soft light, their colors shifting with her moods. A crimson bloom flared with her anger; a serene blue blossom unfurled with peace. She soon realized the garden was alive with ancient magic, responding to human emotion. Its roots stretched through time, revealing paths to forgotten secrets and even glimpses of the past. A creeping despair from the outside world threatened to wilt its vibrancy. Isabella embarked on a personal journey, confronting her inner turmoil, learning to cultivate not just plants, but her own spirit, to protect this mystical sanctuary."
    },
    {
        "title": "The Serpent's Whisper",
        "summary": "A young boy befriends a mystical serpent in the jungle who reveals an ancient magic. Together, they must protect their forest home from encroaching human threats and rebalance nature.",
        "hints": ["serpent", "Kian", "jungle", "magic", "voice", "energy", "guardian", "encroachment", "quest", "wisdom", "courage", "harmony"],
        "userSelection": [],
        "story": "In the heart of a dense Indian jungle, young Kian discovered a majestic, iridescent serpent. Its scales shimmered with an inner glow. To Kian's astonishment, the serpent spoke, its voice a soft whisper that echoed ancient magic. It revealed that the jungle itself was alive, a vast network of mystical energy, and that it, the serpent, was its guardian. Human encroachment, in the form of deforestation, threatened their forest home. Kian and the serpent formed an unlikely bond. Together, they embarked on a perilous quest, using the serpent's wisdom and Kian's courage to protect the trees, the animals, and rebalance nature's delicate harmony before it was too late."
    },
    {
        "title": "The Chronos Compass",
        "summary": "An antique dealer uncovers a peculiar compass that doesn't point north, but through time, pulling him into historical moments where magic influences pivotal events.",
        "hints": ["compass", "dealer", "Delhi", "needle", "shop", "India", "artifact", "time", "moments", "magic", "organization", "power"],
        "userSelection": [],
        "story": "Elias, an eccentric antique dealer in Old Delhi, acquired a peculiar brass compass. It had no cardinal directions; instead, its needle spun wildly before settling on shimmering dates. Unwittingly, he activated it, and the shop blurred into a vibrant scene from colonial India. The compass was a Chronos Compass, a magical artifact that traversed time, allowing Elias to witness pivotal historical moments where hidden magic subtly influenced events. A clandestine organization, the Chrono-Guardians, sought to reclaim it, fearing temporal paradoxes. Elias, pulled between eras, learned to master the compass's power, using his knowledge of history to navigate the past and ensure the timeline's integrity against those who sought to exploit time itself."
    },
    {
        "title": "The Elixir of Echoes",
        "summary": "A struggling alchemist brews a potion that allows him to hear echoes of the past, using it to solve an ancient mystery, but risking getting lost in history's whispers.",
        "hints": ["laboratory", "alchemist", "Vikram", "potion", "whispers", "echoes", "magic", "history", "mystery", "family", "legacy", "reality"],
        "userSelection": [],
        "story": "In a dimly lit Mumbai laboratory, struggling alchemist Vikram accidentally brewed a shimmering, iridescent potion. When he tasted it, the air filled with faint whispers – echoes of conversations, laughter, and cries from centuries past. This was the Elixir of Echoes, a powerful magic that granted him auditory glimpses into history. He realized it could solve an ancient mystery tied to his family's lost legacy. However, the whispers grew stronger, threatening to overwhelm his mind and trap him in history's grasp. Vikram raced against time, using the potion's unique power to uncover forgotten truths while battling the risk of losing his own reality amidst the echoes."
    },
    {
        "title": "The Academy Beneath the Ghats",
        "summary": "A street orphan in Varanasi discovers a hidden magical academy beneath the ancient ghats, where students learn to control elemental forces to protect the city from hidden threats.",
        "hints": ["Rani", "orphan", "Varanasi", "ghats", "passage", "Academy", "school", "students", "elements", "threats", "entity", "magic"],
        "userSelection": [],
        "story": "Young Rani, a street orphan in bustling Varanasi, always felt a strange pull towards the ancient ghats. One stormy night, seeking shelter, she stumbled upon a hidden passage leading deep beneath the stone steps. It opened into a grand, luminous hall – the Academy of Elemental Arts, a secret magical school. Here, students honed their control over fire, water, earth, and air, training to protect Varanasi from unseen, ancient threats. Rani, possessing an innate connection to the elements, joined their ranks. She discovered a looming shadow, a forgotten entity stirring beneath the city, aiming to corrupt its sacred rivers. Now, Rani and her fellow students must master their magic to defend their home."
    },
    {
        "title": "The Aroma Cafe",
        "summary": "A barista in a peculiar café discovers that each coffee blend she brews subtly influences the emotions and fortunes of her customers, drawing her into a hidden magical network.",
        "hints": ["Aisha", "barista", "Cafe", "blend", "customers", "moods", "spices", "beans", "magic", "emotions", "fortunes", "network"],
        "userSelection": [],
        "story": "In a quaint lane of Bangalore, Aisha, a new barista at 'The Aroma Cafe', noticed something peculiar. Each time she brewed a special blend, her customers' moods shifted dramatically. The 'Sunrise Serenity' brought peace; 'Midnight Muse' sparked creativity. She soon realized the cafe's spices and beans were imbued with subtle magic, influencing emotions and fortunes. The cafe was a hub in a secret network of \"Aroma Weavers\" who subtly mended the city's fabric. A rival corporation, seeking to industrialize magic, threatened their delicate craft. Aisha, now understanding her role, used her brewing skills to protect the cafe, its customers, and the magical balance of Bangalore, one cup at a time."
    },
    {
        "title": "The Reflection of Echoes",
        "summary": "A shy artist finds an antique mirror that reflects not her image, but glimpses of alternative realities and future possibilities, challenging her perception of self and destiny.",
        "hints": ["artist", "Priya", "studio", "mirror", "light", "reflection", "glimpses", "realities", "possibilities", "echoes", "magic", "power"],
        "userSelection": [],
        "story": "In her quiet Kolkata studio, shy artist Priya acquired an ornate antique mirror. It wasn't just old; its surface rippled with faint light. Instead of her own reflection, Priya saw fleeting glimpses of other lives – alternate realities, future possibilities, echoes of choices not made. This was the Reflection of Echoes, a magical conduit to parallel dimensions. The visions both fascinated and overwhelmed her, challenging her perception of self and destiny. A sinister entity from beyond the mirror sought to twist these realities. Priya had to learn to control the mirror's power, using its magic to safeguard the delicate balance of existence and protect her own sanity from the overwhelming influx of possibilities."
    },
    {
        "title": "The Whispering Sands Gateway",
        "summary": "A lone wanderer in the Thar Desert discovers a shifting sand dune that acts as a portal to ancient, mystical lands, leading him on a perilous journey through forgotten civilizations.",
        "hints": ["wanderer", "Kabir", "desert", "sand dune", "energy", "vortex", "land", "portal", "realms", "magic", "spirit", "gateway"],
        "userSelection": [],
        "story": "In the vast, silent expanse of the Thar Desert, lone wanderer Kabir stumbled upon a peculiar sand dune. It hummed with faint energy, its grains shifting in unnatural patterns. As he touched it, the dune shimmered, pulling him through a swirling vortex into an ancient, mystical land filled with forgotten wonders. This was the Whispering Sands Gateway, a magical portal to realms lost to time. Each realm held unique challenges and ancient magic. A guardian spirit, bound to the desert, warned him of dangers. Kabir, a reluctant explorer, navigated these perilous lands, encountering strange creatures and deciphering cryptic clues, seeking a way back home before the gateway closed forever."
    },
    {
        "title": "The Living Ink",
        "summary": "A young apprentice tattoo artist gets a magical tattoo that comes to life, guiding her through a secret underworld of enchanted artistry and ancient rivalries.",
        "hints": ["tattoo artist", "Nisha", "design", "ink", "light", "serpent", "tattoo", "visions", "control", "underworld", "artistry", "rivalries"],
        "userSelection": [],
        "story": "In the bustling alleys of Chennai, aspiring tattoo artist Nisha received a mysterious, ancient design from her eccentric mentor. As the needle etched the final line, the ink pulsed with soft light, coiling like a living serpent on her arm. This was the Living Ink, a magical tattoo that granted her visions and subtle control over shadows. It was a mark of a secret underworld of enchanted artistry and ancient rivalries. The tattoo guided her to hidden parlors and mystical gatherings, revealing a world she never imagined. A dark artist, seeking to harness the Ink's full power for malicious ends, pursued her. Nisha, now understanding her unique gift, had to master the tattoo's magic to protect this hidden realm."
    }
]
return easyStories;
}

function getMediumStories(){
    let mediumStories = [
    {
        "title": "The Flute of Whispers",
        "summary": "A struggling musician discovers an ancient, mystical flute that plays enchanting melodies filled with magic, captivating listeners and revealing profound, hidden truths. He must master its unique power to restore harmony and vibrant life to his once-discordant, silent city.",
        "hints": ["flute", "melodies", "magic", "musician", "power", "harmony", "city", "music", "truths", "energy", "quest", "hope", "shop", "wood", "secrets"],
        "userSelection": [],
        "story": "In a sprawling city dimmed by a pervasive silence, weary musician Leo stumbled upon an antique flute hidden deep within a dusty, forgotten shop. The aged wood hummed softly beneath his fingertips, promising ancient secrets. The moment his lips touched its mouthpiece, a melody of pure, ethereal magic flowed forth, not merely through the air, but directly into the hearts and minds of all who heard. The enchanting music had an extraordinary effect; it instantly soothed deep-seated tensions, subtly revealing unspoken truths and long-held secrets. Leo soon realized this remarkable flute held an immense, ancient power, capable of restoring profound harmony and vibrant life. A pervasive, discordant energy, born from the city's collective despair, actively sought to permanently silence its transformative song. He embarked on a perilous, arduous quest to truly master the intricate instrument, using its gentle whispers to reawaken deep-seated hope and finally heal the city's very soul. The flute swiftly became a radiant beacon of light and sound, its powerful magic resonating and echoing through every narrow street and grand avenue."
    },
    {
        "title": "The Living Library",
        "summary": "A curious and dedicated librarian, Maya, stumbles upon a deeply secluded section of her ancient city library where the very books come mysteriously alive, sharing forgotten knowledge and guiding her on a perilous quest to uncover a magical secret hidden deep beneath the bustling city.",
        "hints": ["librarian", "library", "books", "light", "knowledge", "visions", "Maya", "power", "quest", "entity", "secrets", "stories", "city", "tales", "mind"],
        "userSelection": [],
        "story": "Young Maya, an inherently quiet and observant librarian, always felt an undeniable, magnetic pull towards her vast city library, a sprawling, labyrinthine edifice filled with forgotten tales and hushed whispers. One particularly moonless night, while meticulously shelving ancient tomes in a deeply secluded wing, she distinctly heard faint, ethereal whispers emanating from the shelves. To her astonishment, several books began to pulse with a soft, inner light, their brittle pages turning on their own with an unseen force. She cautiously reached out and touched an ancient, leather-bound tome; it instantly unfolded vivid visions of forgotten knowledge, ancient civilizations, and untold histories directly within her mind. Maya quickly realized this was no ordinary collection; it was the Living Library, a magnificent, sentient entity safeguarding millennia of accumulated wisdom and untold stories. A pervasive, dark force, relentlessly coveting this immense power, ominously threatened to consume all the precious knowledge contained within. Maya bravely embarked on a perilous, transformative quest, guided solely by the enigmatic, whispering books, to uncover a profound magical secret hidden deep beneath the library's very foundations, ensuring the protection of the world's most precious and vulnerable stories from impending oblivion."
    },
    {
        "title": "The Garden of Shifting Blooms",
        "summary": "A lonely botanist discovers a hidden, mystical garden where rare, vibrant plants possess unique magical properties, constantly changing with human emotions and subtly revealing ancient secrets. She must confront her own inner turmoil to protect this magical sanctuary.",
        "hints": ["garden", "plants", "magic", "light", "emotions", "secrets", "past", "despair", "journey", "spirit", "sanctuary", "blooms", "colors", "ruin", "world"],
        "userSelection": [],
        "story": "Isabella, a solitary and often melancholic botanist, stumbled quite by accident upon a truly hidden, mystical garden tucked away behind an crumbling, ancient ruin. This was no ordinary place of foliage; its vibrant, rare flowers pulsed with an inner, soft light, their intricate colors subtly shifting and deepening with her every changing mood. A fiery crimson bloom would flare intensely with her anger; conversely, a serene blue blossom would gently unfurl with her newfound peace. She soon realized that this extraordinary garden was vibrantly alive with potent, ancient magic, directly responding to the nuances of human emotion. Its deep, gnarled roots stretched invisibly through time itself, revealing elusive paths to forgotten secrets and even offering vivid, momentary glimpses of the distant past. However, a creeping, insidious despair, emanating from the fragmented outside world, ominously threatened to wilt its inherent vibrancy and consume its delicate magic. Isabella bravely embarked on a profound personal journey, confronting her own inner turmoil and cultivating self-acceptance, learning not just to meticulously tend to these magical plants, but crucially, to nurture her own resilient spirit, all to protect this precious, mystical sanctuary from encroaching darkness."
    },
    {
        "title": "The Serpent's Whisper",
        "summary": "A young boy, Kian, forms an unusual bond with a majestic, mystical serpent deep in the Indian jungle. The serpent reveals an ancient, powerful magic, and together they embark on a crucial quest to protect their sacred forest home from destructive human threats, ultimately striving to rebalance nature's delicate, vital harmony.",
        "hints": ["serpent", "Kian", "jungle", "magic", "voice", "energy", "guardian", "encroachment", "quest", "wisdom", "courage", "harmony", "scales", "animals", "trees"],
        "userSelection": [],
        "story": "In the vibrant heart of a dense, ancient Indian jungle, young Kian, a curious and observant boy, discovered a truly majestic, iridescent serpent. Its magnificent scales shimmered with an ethereal inner glow, a living tapestry of colors. To Kian's profound astonishment, the serpent gracefully spoke, its voice a soft, resonant whisper that seemed to echo with the wisdom of ancient magic. It revealed that the jungle itself was not merely a collection of trees and animals, but a living, breathing entity, a vast, interconnected network of mystical energy, and that it, the mighty serpent, was its vigilant, age-old guardian. A relentless human encroachment, manifesting primarily in widespread deforestation, mercilessly threatened their sacred forest home and its intricate web of life. Kian and the serpent formed an unlikely, powerful bond, their destinies intertwined. Together, they bravely embarked on a perilous, time-sensitive quest, utilizing the serpent's ancient wisdom and Kian's unwavering courage to meticulously protect the towering trees, the diverse animals, and crucially, to rebalance nature's delicate, vital harmony before it was irreparably lost forever to the destructive march of progress."
    },
    {
        "title": "The Chronos Compass",
        "summary": "An eccentric antique dealer in Old Delhi unearths a peculiar brass compass that remarkably doesn't point north, but rather through time, inadvertently pulling him into pivotal historical moments where subtle, hidden magic profoundly influences unfolding events. He must master its power and outwit a clandestine organization.",
        "hints": ["compass", "dealer", "Delhi", "needle", "shop", "India", "artifact", "time", "moments", "magic", "organization", "power", "history", "eras", "paradoxes"],
        "userSelection": [],
        "story": "Elias, an eccentric and discerning antique dealer nestled in the labyrinthine alleys of Old Delhi, recently acquired a truly peculiar brass compass. Unlike any he had ever seen, it bore no cardinal directions; instead, its single, shimmering needle spun wildly, almost erratically, before mysteriously settling on specific, glowing dates. Unwittingly, he activated it with a curious touch, and the familiar shop abruptly blurred, dissolving into a vivid, bustling scene from colonial India, filled with horse-drawn carriages and vibrant marketplaces. This was no ordinary instrument; it was the Chronos Compass, a powerful, magical artifact that possessed the extraordinary ability to traverse time, allowing Elias to become an unwitting witness to pivotal historical moments where subtle, hidden magic profoundly influenced the unfolding of grand events. A clandestine and formidable organization, known only as the Chrono-Guardians, swiftly sought to reclaim it, gravely fearing irreversible temporal paradoxes that could unravel reality. Elias, constantly pulled between disparate eras and cultures, was compelled to learn and master the compass's volatile power, skillfully using his extensive knowledge of history to navigate the intricacies of the past and desperately ensure the timeline's integrity against those who cunningly sought to exploit time itself for their own nefarious ends."
    },
    {
        "title": "The Elixir of Echoes",
        "summary": "A struggling alchemist in Mumbai accidentally brews a shimmering potion that grants him the ability to hear faint echoes of the past. He uses this unique power to unravel an ancient family mystery, but risks getting irrevocably lost within history's overwhelming, insidious whispers, jeopardizing his own reality.",
        "hints": ["laboratory", "alchemist", "Vikram", "potion", "whispers", "echoes", "magic", "history", "mystery", "family", "legacy", "reality", "mind", "truths", "conversations"],
        "userSelection": [],
        "story": "In a dimly lit, cluttered Mumbai laboratory, struggling alchemist Vikram, amidst bubbling concoctions, accidentally brewed a truly shimmering, iridescent potion. Its surface swirled with miniature galaxies. When he cautiously tasted it, the very air around him filled with faint, ethereal whispers – distinct echoes of conversations, joyous laughter, and sorrowful cries from centuries past, as if time itself was speaking. This was the Elixir of Echoes, a powerful and unforeseen magic that miraculously granted him auditory glimpses directly into the tapestry of history. Vikram quickly realized it held the key to solving an ancient, buried mystery intricately tied to his own family's lost legacy and a forgotten secret. However, the whispers grew progressively stronger, more insistent, threatening to overwhelm his fragile mind and irrevocably trap him in history's relentless grasp. Vikram raced desperately against time, compelled to use the potion's unique power to uncover profound, forgotten truths while battling the ever-present risk of completely losing his own sense of reality amidst the chaotic, all-consuming echoes from yesteryear."
    },
    {
        "title": "The Academy Beneath the Ghats",
        "summary": "A resourceful street orphan in bustling Varanasi, Rani, inadvertently discovers a hidden magical academy situated deep beneath the city's ancient ghats. Here, dedicated students diligently learn to control powerful elemental forces, training to become guardians and protect the sacred city from unseen, looming magical threats and a forgotten entity seeking to corrupt its spiritual essence.",
        "hints": ["Rani", "orphan", "Varanasi", "ghats", "passage", "Academy", "school", "students", "elements", "threats", "entity", "magic", "hall", "city", "rivers"],
        "userSelection": [],
        "story": "Young Rani, a resourceful and independent street orphan navigating the bustling, labyrinthine alleys of Varanasi, always felt an inexplicable, magnetic pull towards the city's ancient, hallowed ghats. One particularly stormy night, seeking urgent shelter from a sudden deluge, she stumbled upon a cunningly hidden passage leading deep beneath the weathered, stone steps. To her utter amazement, it opened into a grand, luminous hall, pulsating with arcane energy – this was the Academy of Elemental Arts, a secret, formidable magical school. Here, dedicated students meticulously honed their control over powerful elemental forces: crackling fire, flowing water, solid earth, and swirling air, diligently training to become guardians and protect Varanasi from unseen, looming magical threats. Rani, possessing a raw, innate connection to the elements, quickly joined their ranks. She soon discovered a looming, shadowy presence, a forgotten entity stirring malevolently beneath the city's foundations, aiming to corrupt its sacred rivers and spiritual essence. Now, Rani and her newfound fellow students must swiftly master their burgeoning magic to defend their cherished home from this insidious darkness."
    },
    {
        "title": "The Aroma Cafe",
        "summary": "A new barista, Aisha, at a quaint Bangalore café discovers that each coffee blend she meticulously brews subtly influences the emotions and fortunes of her diverse customers. This draws her into a hidden magical network of \"Aroma Weavers\" who mend the city's fabric, forcing her to protect their delicate craft from industrial exploitation.",
        "hints": ["Aisha", "barista", "Cafe", "blend", "customers", "moods", "spices", "beans", "magic", "emotions", "fortunes", "network", "city", "craft", "corporation"],
        "userSelection": [],
        "story": "In a quaint, bustling lane of Bangalore, Aisha, a new and observant barista at 'The Aroma Cafe', began to notice something profoundly peculiar. Each time she meticulously brewed a special, unique blend, her diverse customers' moods and even their daily fortunes shifted dramatically and unexpectedly. The 'Sunrise Serenity' blend consistently brought a deep sense of peace; conversely, the 'Midnight Muse' blend magically sparked bursts of intense creativity. She soon realized that the cafe's meticulously sourced spices and rare coffee beans were intrinsically imbued with subtle, ancient magic, directly influencing the complex tapestry of human emotions and their unfolding fortunes. The cafe was not just a business; it was a vital hub in a secret, clandestine network of skilled \"Aroma Weavers\" who subtly mended the city's underlying energetic fabric through their enchanted concoctions. A powerful, ruthless rival corporation, driven by greed, sought to industrialize and exploit this delicate magic for mass profit, threatening their ancient, delicate craft. Aisha, now fully understanding her crucial role, used her exceptional brewing skills to bravely protect the beloved cafe, its loyal customers, and the precious, magical balance of Bangalore, one perfectly crafted cup at a time."
    },
    {
        "title": "The Reflection of Echoes",
        "summary": "A shy artist in Kolkata acquires an ornate antique mirror that astonishingly reflects not her physical image, but vivid glimpses of alternative realities and future possibilities. This profound discovery deeply challenges her perception of self and destiny, drawing her into a hidden conflict against a sinister entity seeking to manipulate these reflections.",
        "hints": ["artist", "Priya", "studio", "mirror", "light", "reflection", "glimpses", "realities", "possibilities", "echoes", "magic", "power", "dimensions", "entity", "sanity"],
        "userSelection": [],
        "story": "In her quiet, unassuming Kolkata studio, shy artist Priya acquired an exquisitely ornate antique mirror from a dusty old curio shop. It wasn't just old; its aged, silvered surface frequently rippled with faint, mysterious light, shifting like water. To her astonishment, instead of her own physical reflection, Priya began to see fleeting, vivid glimpses of other lives – alternate realities unfolding, distant future possibilities, and poignant echoes of choices she had never made. This remarkable artifact was the Reflection of Echoes, a powerful, magical conduit directly linked to parallel dimensions. The overwhelming visions both deeply fascinated and profoundly overwhelmed her, drastically challenging her fundamental perception of self, identity, and destiny. A sinister, manipulative entity from beyond the mirror's veil subtly sought to twist and corrupt these delicate realities for its own malevolent ends. Priya had to quickly learn to control the mirror's immense, unpredictable power, painstakingly using its inherent magic to safeguard the delicate balance of existence and bravely protect her own fragile sanity from the overwhelming, incessant influx of infinite possibilities that now threatened to consume her."
    },
    {
        "title": "The Whispering Sands Gateway",
        "summary": "A lone wanderer in the vast, silent Thar Desert uncovers a peculiar, shifting sand dune that mysteriously acts as a living portal to ancient, mystical lands. This remarkable discovery leads him on a perilous journey through forgotten civilizations and warns of dangers from a bound guardian spirit.",
        "hints": ["wanderer", "Kabir", "desert", "sand dune", "energy", "vortex", "land", "portal", "realms", "magic", "spirit", "gateway", "dune", "civilizations", "clues"],
        "userSelection": [],
        "story": "In the vast, silent expanse of the scorching Thar Desert, lone wanderer Kabir, known for his relentless pursuit of ancient legends, stumbled upon a truly peculiar sand dune. It hummed with a faint, resonant energy, its golden grains shifting and swirling in unnatural, hypnotic patterns, seemingly breathing. As he cautiously touched it, the dune suddenly shimmered intensely, then dissolved, pulling him irresistibly through a swirling vortex of light and sand into an ancient, mystical land, brimming with forgotten wonders and primeval forests. This was the Whispering Sands Gateway, a powerful magical portal to realms long lost to the annals of time. Each newly discovered realm presented unique challenges and was infused with its own distinct, ancient magic. A wise, formidable guardian spirit, intrinsically bound to the desert itself, appeared before him, gravely warning him of myriad dangers within these hidden worlds. Kabir, a reluctant yet determined explorer, bravely navigated these perilous lands, encountering strange, wondrous creatures and painstakingly deciphering cryptic clues, all while desperately seeking a way back home before the gateway irrevocably closed forever, trapping him in eternity."
    },
    {
        "title": "The Living Ink",
        "summary": "A young apprentice tattoo artist in Chennai, Nisha, receives a magical tattoo that astonishingly comes to life. This living ink guides her through a secret underworld of enchanted artistry, revealing ancient rivalries and forcing her to master her unique gift to protect this hidden realm from dark forces seeking its power.",
        "hints": ["tattoo artist", "Nisha", "design", "ink", "light", "serpent", "tattoo", "visions", "control", "underworld", "artistry", "rivalries", "mentor", "realm", "power"],
        "userSelection": [],
        "story": "In the bustling, vibrant alleys of Chennai, aspiring young tattoo artist Nisha received a mysterious, intricately detailed ancient design from her eccentric and enigmatic mentor. As the sharp needle meticulously etched the final, delicate line onto her arm, the ink pulsed with a soft, ethereal light, astonishingly coiling and uncoiling like a living serpent beneath her skin. This was the Living Ink, a powerful, magical tattoo that not only granted her vivid visions but also bestowed upon her subtle control over shadows and illusion. It was, she quickly learned, a profound mark of entry into a secret, hidden underworld of enchanted artistry and fiercely ancient rivalries, concealed from the mundane world. The sentient tattoo actively guided her through labyrinthine streets to hidden parlors and mystical, clandestine gatherings, slowly revealing a breathtaking world she never imagined existed. However, a dark, malevolent artist, obsessed with power, soon emerged, relentlessly seeking to harness the Ink's full, formidable power for his own malicious ends. Nisha, now understanding her unique, powerful gift, had to swiftly master the tattoo's complex magic to bravely protect this hidden realm and its delicate balance from impending corruption."
    }
    ]
    return mediumStories;
}


export {getEasyStories ,getMediumStories};