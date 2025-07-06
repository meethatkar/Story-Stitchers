function getEasyStories(){
    let easyStories = [
    {
        "title": "Hampi's Hidden Gem",
        "summary": "An archaeologist uncovers a shimmering gem in Hampi's ruins. It reveals forgotten histories and secrets, leading her on a thrilling quest to piece together a lost civilization's magical legacy before rivals claim it.",
        "hints": ["gem", "archaeologist", "ruins", "histories", "secrets", "quest", "legacy", "Hampi", "power", "artifact", "collector", "temples"],
        "userSelection": [],
        "story": "Deep within Hampi's ancient ruins, Dr. Anya Sharma uncovered a legendary, shimmering gem. It pulsed with inner light, radiating ancient energy. This artifact revealed forgotten histories and secrets, playing visions in her mind. Her discovery ignited a thrilling quest to piece together a lost civilization's magical legacy. A ruthless collector pursued her. Anya navigated crumbling temples and hidden passages, deciphering cryptic inscriptions. The gem's light guided her, revealing Hampi's magical past. She raced against time to protect it from falling into wrong hands."
    },
    {
        "title": "Pushkar's Mystic Lake",
        "summary": "A skeptical traveler in Pushkar finds a mystic lake rumored to grant wishes and heal. Testing its powers, they are drawn into magical events that challenge beliefs and reveal the lake's ancient secrets, transforming their understanding.",
        "hints": ["lake", "traveler", "wishes", "powers", "events", "secrets", "Pushkar", "water", "belief", "healing", "magic", "hermit"],
        "userSelection": [],
        "story": "In vibrant Pushkar, skeptical Rohan stumbled upon a mystic lake. Locals whispered of its ancient powers: granting wishes and healing. He scoffed, but curiosity compelled him. Cautiously, he dipped his hand; a sudden warmth spread, and an ache vanished. Drawn by this, he tested its powers. Magical events unfolded: wilting flowers bloomed, melodies emanated from the surface. These challenged his beliefs, pulling him deeper into the lake's ancient secrets. An old hermit appeared, warning him. Rohan realized the lake was a living entity, transforming his understanding of the world and its magic."
    },
    {
        "title": "Rajasthan's Shadow Puppets",
        "summary": "A young puppeteer inherits ancient shadow puppets in Rajasthan. They come to life, guiding her through a fantastical adventure of folklore and spirits, revealing her magical heritage.",
        "hints": ["puppets", "puppeteer", "shadows", "folklore", "spirits", "adventure", "heritage", "Rajasthan", "magic", "strings", "stage", "grandmother"],
        "userSelection": [],
        "story": "In colorful Rajasthan, young Meera inherited dusty shadow puppets from her grandmother. They felt strangely alive. During her first performance, the puppets came to life, their shadows dancing independently. They communicated, guiding her through a fantastical adventure of ancient folklore and mischievous spirits. One puppet, a wise king, led a quest for a magical artifact. A trickster demon misled her with illusions. Meera navigated enchanted deserts, learning her magical heritage. The puppets revealed a world she never knew, a vibrant tapestry of magic. Her stage became a portal, her performances a bridge between worlds, embracing her destiny as a shadow weaver."
    },
    {
        "title": "Living Root Bridge's Secret",
        "summary": "A photographer in Meghalaya discovers a living root bridge's secret: ancient roots with a mystical connection to nature's spirits. This leads him on a profound journey into a hidden world of magic and harmony.",
        "hints": ["bridge", "roots", "photographer", "spirits", "journey", "magic", "Meghalaya", "forest", "harmony", "connection", "world", "wisdom"],
        "userSelection": [],
        "story": "Deep within Meghalaya's lush forests, photographer Arjun sought unique subjects. He stumbled upon an ancient, majestic living root bridge. As he photographed its roots, he felt an inexplicable energy. He discovered its hidden secret: the roots had a mystical connection to nature's spirits. The bridge pulsed with soft green light. This led him on a profound journey into a hidden world of ancient magic and ecological harmony. He met a tribe, guardians of the bridge, who taught him its wisdom. The forest whispered secrets, alive with unseen presences. Arjun realized the bridge was a living conduit, a gateway to deeper understanding. His adventure transformed his perception, showing him a world where magic and nature intertwined."
    },
    {
        "title": "Banaras' Cosmic Weaver",
        "summary": "In Banaras, a young weaver inherits a mysterious loom. Her fabrics possess cosmic magic, weaving dreams into reality and influencing fate, drawing her into a world of cosmic threads and ancient powers.",
        "hints": ["weaver", "loom", "fabrics", "magic", "dreams", "fate", "Banaras", "threads", "power", "stars", "destiny", "silk", "guild"],
        "userSelection": [],
        "story": "In ancient Banaras, young Anya inherited a mysterious, antique loom. It vibrated with faint energy. She discovered her fabrics possessed cosmic magic, shimmering with starlight. Her silk creations wove dreams into reality and influenced fate. One thread could mend a heart; another reveal truth. This power drew her into a world of cosmic threads. A shadowy guild pursued her, seeking control. Anya navigated bazaars and temples, understanding her destiny. The loom became her sanctuary, fabrics her shield. She embraced her role as a cosmic weaver, understanding every thread held cosmos's magic, shaping reality."
    },
    {
        "title": "Mumbai's Golem Awakens",
        "summary": "A struggling artist in Mumbai finds an ancient statue, unwittingly awakening the Golem, an ancient protector. He's drawn into a thrilling adventure to defend the city from a new magical threat.",
        "hints": ["golem", "artist", "statue", "protector", "city", "threat", "Mumbai", "warehouse", "magic", "clay", "battle", "sorcerer"],
        "userSelection": [],
        "story": "In chaotic Mumbai, artist Rohan found an ancient, forgotten statue in a derelict warehouse. Crafted from dark clay, its features stern. Unwittingly, he awakened the Golem, an ancient city protector. The statue's eyes glowed. This drew Rohan into a thrilling adventure to defend the city from a new magical threat: a shadowy sorcerer unleashing chaos. The Golem, silent but powerful, followed Rohan's commands. They navigated bustling streets, battling dark creatures and spells. Rohan, the reluctant hero, found himself at the heart of a magical battle for Mumbai's soul. The Golem stood firm, a testament to ancient magic, its awakening a new chapter."
    },
    {
        "title": "Spice Merchant's Charm",
        "summary": "A young spice merchant in Kerala inherits enchanted spices. Each has unique magical effects, leading her on a whimsical journey to master their powers and protect her family's legacy from rivals.",
        "hints": ["spices", "merchant", "charm", "effects", "journey", "legacy", "Kerala", "magic", "aroma", "recipes", "rivals", "family"],
        "userSelection": [],
        "story": "In Kerala's spice plantations, young Anya inherited enchanted spices from her grandmother. Each jar held unique magical effects. 'Moon-petal' spice induced dreams; 'sun-root' brought energy. This discovery led her on a whimsical journey to master their powers and protect her family's ancient magical legacy. Rival merchants sought to steal her secrets. Anya navigated markets and groves, experimenting with ancient recipes. The aroma filled the air, a blend of magic and tradition. She learned to brew potions and cast charms, using culinary skills for magic. Her family's legacy was weaving magic into everyday life, protecting her from threats."
    },
    {
        "title": "Ancient Tree's Whispers",
        "summary": "A seeker visits an ancient Banyan tree in India, rumored to grant wisdom. He discovers it's alive with magic, offering visions and guidance, leading him on a spiritual journey to heal his past and find purpose.",
        "hints": ["tree", "seeker", "wisdom", "magic", "visions", "guidance", "India", "roots", "whispers", "past", "purpose", "spiritual"],
        "userSelection": [],
        "story": "In a tranquil Indian village, troubled Liam visited an ancient Banyan tree, rumored to grant wisdom. Its massive roots spread. Sitting beneath its canopy, he felt energy. He discovered it was alive with ancient magic, leaves rustling with whispers. The tree offered vivid visions of his past, guiding him to understanding and healing. It revealed hidden truths about his purpose. Liam spent days meditating, listening to its silent guidance. The forest hummed with mystical light. He realized the tree was a living conduit to ancient knowledge. His spiritual journey transformed him, healing old wounds and revealing his true calling. The tree became his sanctuary, its whispers a source of wisdom."
    },
    {
        "title": "Lost City's Illusion",
        "summary": "An explorer seeks a lost city in the Himalayas, rumored to appear with magic. He navigates terrain and illusions, racing to uncover its secrets before it vanishes forever, trapping him.",
        "hints": ["city", "explorer", "illusion", "magic", "terrain", "secrets", "Himalayas", "mist", "portal", "realm", "truth", "vanishing"],
        "userSelection": [],
        "story": "Deep in the Himalayas, explorer Arjun sought a legendary lost city, rumored to appear with ancient magic. Its existence was an illusion. He navigated treacherous, icy terrain and baffling optical illusions. Mist often concealed its location. One day, a shimmering portal opened, revealing glimpses of architecture. He raced towards it, knowing secrets were near. The city's magic was powerful, protecting knowledge. He encountered ancient guardians. Arjun deciphered symbols, leading deeper into its mystical realm. He had to uncover its truth before it vanished forever, trapping him. His adventure was a desperate race, as the city's light pulsed, threatening to disappear."
    },
    {
        "title": "Konkan's Dancing Lights",
        "summary": "A marine biologist investigates strange bioluminescent lights off the Konkan coast. She discovers they are sentient, magical entities guiding lost souls, drawing her into a profound journey to protect their ancient purpose from exploitation.",
        "hints": ["lights", "biologist", "coast", "entities", "souls", "purpose", "Konkan", "ocean", "magic", "glow", "journey", "discovery"],
        "userSelection": [],
        "story": "Off the Konkan coast, marine biologist Dr. Rhea Sharma investigated strange bioluminescent lights dancing beneath the ocean's surface. They pulsed with ethereal glow. She discovered they were sentient, magical entities, ancient beings of the sea. These lights possessed an ancient purpose: guiding lost souls and protecting ocean magic. Her discovery drew her into a profound journey to protect them from exploitation by a ruthless corporation. Rhea navigated treacherous currents, communicating with lights through patterns. The ocean became a living, magical realm. She faced dangerous encounters, determined to keep the secret safe. Her adventure transformed her understanding of life, revealing a world where magic and science converged."
    },
    {
        "title": "Ancient Idol's Awakening",
        "summary": "In a South Indian temple, a custodian witnesses an ancient idol awakening. This event unleashes powerful magic and challenges his understanding, drawing him into a quest to understand its purpose and protect its power.",
        "hints": ["idol", "custodian", "awakening", "magic", "understanding", "quest", "purpose", "temple", "power", "light", "chants", "ancient"],
        "userSelection": [],
        "story": "In an ancient South Indian temple, dedicated custodian Arjun witnessed an extraordinary event: an ancient idol, long inert, slowly awakening. Its stone eyes glowed with inner light, radiating immense power. This awakening unleashed powerful magic, causing temple walls to hum, challenging his understanding. He heard faint chants from within the idol. This drew him into a profound quest to understand its true purpose and protect its ancient power. He consulted scriptures and meditated. The temple became a living entity, its secrets revealing themselves. Arjun realized the idol was a living conduit to ancient power, its awakening a new era of magic. His journey transformed him, deepening his understanding."
    }
]
return easyStories;
}

function getMediumStories(){
    let mediumStories = [
            {
        "title": "Hampi's Hidden Gem",
        "summary": "An adventurous archaeologist uncovers a legendary, shimmering gem hidden within the ancient ruins of Hampi. This artifact possesses the power to reveal forgotten histories and ancient secrets, leading her on a thrilling quest to piece together a lost civilization's magical legacy before it falls into the wrong hands.",
        "hints": ["gem", "archaeologist", "ruins", "histories", "secrets", "quest", "legacy", "Hampi", "power", "artifact", "stone", "light", "truth", "collector", "temples", "inscriptions"],
        "userSelection": [],
        "story": "Deep within the sprawling, ancient ruins of Hampi, where colossal stone structures lay scattered like forgotten giants, an adventurous archaeologist named Dr. Anya Sharma uncovered a legendary, shimmering gem. It pulsed with an inner light, radiating an ancient energy. This extraordinary artifact possessed the incredible power to reveal forgotten histories and ancient secrets, playing visions in her mind like a celestial projector. Her discovery ignited a thrilling, dangerous quest to piece together a lost civilization's magical legacy, a tale of powerful sorcerers and hidden knowledge. A ruthless collector, obsessed with ancient power, was hot on her trail, determined to claim the gem. Anya navigated crumbling temples and hidden passages, deciphering cryptic inscriptions. The gem's light guided her, revealing the truth of Hampi's magical past. She raced against time, knowing the fate of this powerful legacy depended on her, determined to protect it from falling into the wrong hands and keep its secrets safe."
    },
    {
        "title": "Pushkar's Mystic Lake",
        "summary": "A skeptical traveler visiting Pushkar stumbles upon a mystic lake rumored to grant wishes and heal ailments. As they cautiously test its powers, they are drawn into a series of magical events that challenge their beliefs and reveal the lake's profound, ancient secrets, transforming their understanding of the world.",
        "hints": ["lake", "traveler", "wishes", "powers", "events", "secrets", "Pushkar", "water", "belief", "healing", "magic", "surface", "truth", "hermit", "phenomenon", "entity"],
        "userSelection": [],
        "story": "In the vibrant, spiritual town of Pushkar, a skeptical traveler named Rohan, known for his pragmatic views, stumbled upon a mystic lake, shimmering under the desert sun. Locals whispered of its ancient powers: granting wishes and healing ailments. He scoffed, but a strange curiosity compelled him. Cautiously, he dipped his hand into the cool water. A sudden warmth spread through him, and a long-standing ache vanished. Drawn by this inexplicable phenomenon, he began to test its powers. Small, magical events unfolded around him: wilting flowers bloomed, and distant melodies seemed to emanate from the lake's surface. These occurrences challenged his every belief, pulling him deeper into the lake's profound, ancient secrets. A guardian, an old hermit, appeared, warning him of the lake's true nature. Rohan realized the lake was not just a body of water, but a living entity, transforming his understanding of the world and its hidden magic."
    },
    {
        "title": "Rajasthan's Shadow Puppets",
        "summary": "A young puppeteer in Rajasthan inherits a collection of ancient shadow puppets. To her astonishment, these puppets come to life, guiding her through a fantastical adventure filled with ancient folklore and mischievous spirits, revealing a magical heritage she never knew she possessed.",
        "hints": ["puppets", "puppeteer", "shadows", "folklore", "spirits", "adventure", "heritage", "Rajasthan", "magic", "strings", "stage", "tale", "light", "grandmother", "artifact", "illusions"],
        "userSelection": [],
        "story": "In the colorful, sun-drenched villages of Rajasthan, a young, aspiring puppeteer named Meera inherited a dusty collection of ancient shadow puppets from her grandmother. These puppets, crafted from leather and intricately painted, felt strangely alive. To her astonishment, during her first performance, the puppets came to life, their shadows dancing independently on the screen. They didn't just move; they communicated, guiding her through a fantastical adventure filled with ancient folklore and mischievous spirits. One puppet, a wise old king, led her on a quest to find a forgotten magical artifact. Another, a trickster demon, constantly misled her with comical illusions. Meera navigated enchanted deserts and moonlit ruins, learning the secrets of her magical heritage. The puppets, her companions, revealed a world she never knew existed, a vibrant tapestry of magic woven into every tale. Her stage became a portal, her performances a bridge between worlds, as she embraced her destiny as a true shadow weaver."
    },
    {
        "title": "Living Root Bridge's Secret",
        "summary": "A nature photographer in Meghalaya discovers a hidden secret within a living root bridge. Its ancient roots possess a mystical connection to nature's spirits, leading him on a profound journey into a hidden world of ancient magic and ecological harmony.",
        "hints": ["bridge", "roots", "photographer", "spirits", "journey", "magic", "Meghalaya", "forest", "harmony", "connection", "world", "wisdom", "light", "energy", "tribe", "conduit"],
        "userSelection": [],
        "story": "Deep within the lush, rain-soaked forests of Meghalaya, a nature photographer named Arjun sought unique subjects. He stumbled upon a living root bridge, ancient and majestic, woven by generations. As he photographed its intricate roots, he felt an inexplicable energy. He soon discovered its hidden secret: the ancient roots possessed a mystical connection to nature's spirits. The bridge pulsed with a soft, green light. This revelation led him on a profound journey into a hidden world of ancient magic and ecological harmony. He met a tribe, guardians of the bridge, who taught him its wisdom. The forest itself seemed to whisper secrets, its trees alive with unseen presences. Arjun realized the bridge was a living conduit, a gateway to a deeper understanding of nature. His adventure transformed his perception, showing him a world where magic and nature intertwined, a testament to the bridge's ancient, living power."
    },
    {
        "title": "Banaras' Cosmic Weaver",
        "summary": "In the ancient city of Banaras, a young weaver inherits a mysterious loom. She discovers her fabrics possess cosmic magic, capable of weaving dreams into reality and influencing fate, drawing her into a world of cosmic threads and ancient powers.",
        "hints": ["weaver", "loom", "fabrics", "magic", "dreams", "fate", "Banaras", "threads", "power", "stars", "destiny", "silk", "reality", "starlight", "guild", "textiles"],
        "userSelection": [],
        "story": "In the ancient, spiritual city of Banaras, where traditions were woven into every street, a young weaver named Anya inherited a mysterious, antique loom from her grandmother. Its wooden frame felt impossibly old, yet vibrated with a faint energy. As she began to work, she discovered her fabrics possessed cosmic magic, shimmering with starlight. Her silk creations were capable of weaving dreams into reality and subtly influencing fate. One thread could mend a broken heart; another could reveal a hidden truth. This incredible power drew her into a world of cosmic threads and ancient powers. A shadowy guild of weavers, who sought to control all magical textiles, pursued her. Anya navigated bustling bazaars and quiet temples, trying to understand her destiny. The loom became her sanctuary, her fabrics her shield. She embraced her role as a cosmic weaver, understanding that every thread she wove held a piece of the cosmos's magic, shaping reality with every intricate pattern."
    },
    {
        "title": "Mumbai's Golem Awakens",
        "summary": "A struggling artist in Mumbai discovers an ancient, forgotten statue in a derelict warehouse. Unwittingly, he awakens the Golem, an ancient protector, drawing him into a thrilling adventure to defend the city from a newly emerged magical threat.",
        "hints": ["golem", "artist", "statue", "protector", "city", "threat", "Mumbai", "warehouse", "magic", "clay", "battle", "awakening", "defender", "sorcerer", "strength", "chaos"],
        "userSelection": [],
        "story": "In the sprawling, chaotic heart of Mumbai, a struggling artist named Rohan, searching for unique materials, discovered an ancient, forgotten statue in a derelict warehouse. It was crafted from dark, hardened clay, its features stern. Unwittingly, he awakened the Golem, an ancient protector of the city, long dormant. The statue's eyes glowed with an inner light. This awakening drew Rohan into a thrilling, unexpected adventure to defend the city from a newly emerged magical threat: a shadowy sorcerer seeking to unleash chaos. The Golem, silent but powerful, followed Rohan's commands, its immense strength a formidable weapon. They navigated bustling streets and hidden alleys, battling dark creatures and ancient spells. Rohan, the reluctant hero, found himself at the heart of a magical battle for Mumbai's soul. The Golem, his silent defender, stood firm, a testament to ancient magic in a modern city, its awakening a new chapter in Mumbai's history."
    },
    {
        "title": "Spice Merchant's Charm",
        "summary": "A young spice merchant in Kerala inherits a collection of enchanted spices. Each possesses unique magical effects, leading her on a whimsical journey to master their powers and protect her family's ancient magical legacy from rival merchants.",
        "hints": ["spices", "merchant", "charm", "effects", "journey", "legacy", "Kerala", "magic", "aroma", "recipes", "rivals", "family", "power", "grandmother", "potency", "potions"],
        "userSelection": [],
        "story": "In the lush, aromatic spice plantations of Kerala, a young spice merchant named Anya inherited a dusty collection of enchanted spices from her eccentric grandmother. Each jar held not just flavor, but unique magical effects. A pinch of 'moon-petal' spice could induce vivid dreams; a sprinkle of 'sun-root' could bring boundless energy. This incredible discovery led her on a whimsical journey to master their powers and protect her family's ancient magical legacy. Rival merchants, sensing the unusual potency of her wares, sought to steal her secrets. Anya navigated bustling markets and quiet, hidden groves, experimenting with ancient recipes. The aroma of her spices filled the air, a blend of magic and tradition. She learned to brew potions and cast subtle charms, using her culinary skills for magical purposes. Her family's legacy was not just about trade, but about weaving magic into everyday life, a powerful charm that protected her and her loved ones from all threats."
    },
    {
        "title": "Ancient Tree's Whispers",
        "summary": "A troubled seeker visits an ancient Banyan tree in rural India, rumored to grant wisdom. He discovers it's alive with ancient magic, offering visions and guidance, leading him on a spiritual journey to heal his past and find his true purpose.",
        "hints": ["tree", "seeker", "wisdom", "magic", "visions", "guidance", "India", "roots", "whispers", "past", "purpose", "spiritual", "light", "energy", "canopy", "oracle"],
        "userSelection": [],
        "story": "In a remote, tranquil village in rural India, a troubled seeker named Liam, burdened by his past, visited an ancient Banyan tree, rumored to grant profound wisdom. Its massive roots spread like ancient limbs, reaching deep into the earth. As he sat beneath its sprawling canopy, he felt an inexplicable energy. He soon discovered it was alive with ancient magic, its leaves rustling with soft whispers. The tree offered vivid visions of his past, guiding him towards understanding and healing. It revealed hidden truths about his purpose, illuminating his path forward. Liam spent days there, meditating and listening to the tree's silent guidance. The forest around it seemed to hum with a gentle, mystical light. He realized the tree was a living conduit to ancient knowledge, a powerful oracle. His spiritual journey transformed him, healing old wounds and revealing his true calling. The ancient tree became his sanctuary, its whispers a constant source of wisdom and profound magical insight."
    },
    {
        "title": "Lost City's Illusion",
        "summary": "An intrepid explorer seeks a legendary lost city in the Himalayas, rumored to appear and disappear with magic. He navigates treacherous terrain and illusions, racing to uncover its secrets before it vanishes forever, trapping him in its mystical realm.",
        "hints": ["city", "explorer", "illusion", "magic", "terrain", "secrets", "Himalayas", "mist", "portal", "realm", "truth", "vanishing", "light", "guardians", "symbols", "knowledge"],
        "userSelection": [],
        "story": "Deep in the remote, snow-capped Himalayas, an intrepid explorer named Arjun sought a legendary lost city, rumored to appear and disappear with ancient magic. Its existence was a mere illusion to most. He navigated treacherous, icy terrain and baffling optical illusions created by the mountains. A thick, swirling mist often concealed its location. One day, a shimmering portal briefly opened, revealing glimpses of intricate architecture. He raced towards it, knowing the city's secrets were within reach. The city's magic was powerful, designed to protect its hidden knowledge. He encountered ancient guardians, ethereal beings who tested his resolve. Arjun deciphered cryptic symbols, leading him deeper into its mystical realm. He knew he had to uncover its truth before it vanished forever, trapping him in its magical illusion. His adventure was a desperate race against time, as the city's light pulsed, threatening to disappear and take him with it."
    },
    {
        "title": "Konkan's Dancing Lights",
        "summary": "A marine biologist investigates strange bioluminescent lights off the Konkan coast. She discovers they are sentient, magical entities guiding lost souls, drawing her into a profound journey to protect their ancient purpose from exploitation.",
        "hints": ["lights", "biologist", "coast", "entities", "souls", "purpose", "Konkan", "ocean", "magic", "glow", "journey", "discovery", "exploit", "currents", "reefs", "corporation"],
        "userSelection": [],
        "story": "Off the serene Konkan coast, a marine biologist named Dr. Rhea Sharma investigated reports of strange bioluminescent lights dancing beneath the ocean's surface. They pulsed with an ethereal glow, unlike any known marine life. She soon discovered they were sentient, magical entities, ancient beings of the sea. These dancing lights possessed an ancient purpose: guiding lost souls and protecting the ocean's hidden magic. Her discovery drew her into a profound journey to protect their existence from exploitation by a ruthless corporation seeking to harness their energy. Rhea navigated treacherous currents and hidden reefs, communicating with the lights through patterns of light. The ocean became a living, magical realm. She faced dangerous encounters with corporate agents, determined to keep the lights' secret safe. Her adventure transformed her understanding of life, revealing a world where magic and science converged, a testament to the Konkan coast's profound, mystical beauty."
    },
    {
        "title": "Ancient Idol's Awakening",
        "summary": "In an ancient South Indian temple, a devoted custodian witnesses an ancient idol awakening. This extraordinary event unleashes powerful magic and challenges his understanding, drawing him into a profound quest to understand the idol's true purpose and protect its ancient power.",
        "hints": ["idol", "custodian", "awakening", "magic", "understanding", "quest", "purpose", "temple", "power", "light", "chants", "ancient", "energy", "scriptures", "conduit"],
        "userSelection": [],
        "story": "In an ancient, revered South Indian temple, where centuries of devotion permeated the air, a dedicated young temple custodian named Arjun witnessed an extraordinary event: an ancient idol, long thought inert, slowly awakening. Its stone eyes began to glow with an inner light, radiating immense power. This awakening unleashed powerful magic, causing the temple's walls to hum with energy and challenging his every understanding. He heard faint, ethereal chants echoing from within the idol itself. This drew him into a profound quest to understand the idol's true purpose and protect its ancient power from those who sought to control it. He consulted ancient scriptures and meditated for days, seeking guidance. The temple became a living entity, its secrets slowly revealing themselves. Arjun realized the idol was not just a symbol, but a living conduit to ancient power, its awakening a new era of magic. His journey transformed him, deepening his understanding and revealing a world where the ancient and magical intertwined, a testament to the idol's profound, ancient power."
    }
    ]
    return mediumStories;
}


export {getEasyStories ,getMediumStories};