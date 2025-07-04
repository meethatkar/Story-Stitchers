function getEasyStories(){
    let easyStories = [
     {
        "title": "Rishikesh: Rafting's Wild Ride",
        "summary": "A group of friends tackles Rishikesh's challenging rapids. Their white water rafting adventure turns intense as they face unexpected twists and turns, testing their courage and teamwork against the powerful river.",
        "hints": ["rapids", "raft", "friends", "river", "paddle", "wave", "current", "rock", "thrill", "team", "adventure"],
        "userSelection": [],
        "story": "The roaring Ganga rapids in Rishikesh beckoned. Six friends, strapped into their raft, gripped their paddles, ready for the white water rafting adventure. The guide shouted commands over the river's roar. The first wave hit, drenching them. The current pulled them into a swirling vortex, narrowly missing a jagged rock. Teamwork was crucial as they navigated treacherous sections. A sudden drop sent them plummeting, eliciting screams and laughter. The river tested their courage and unity. They emerged downstream, soaked but exhilarated, having conquered the wild ride. The thrill of the adventure lingered, a testament to their daring spirit and the untamed power of the river."
    },
    {
        "title": "Manali: Paragliding's Sky Rush",
        "summary": "A solo traveler takes to the skies over Manali for a paragliding experience. High above the valley, an unexpected wind shift turns the serene flight into a thrilling test of skill and nerve, pushing them to their limits.",
        "hints": ["sky", "traveler", "paraglider", "valley", "wind", "flight", "mountains", "control", "rush", "descent", "adventure"],
        "userSelection": [],
        "story": "The crisp Manali air filled the paraglider's canopy. Anya, a solo traveler, ran off the mountain slope, soaring into the vast sky above the valley. Below, the Beas River snaked through lush greenery. Her serene flight turned thrilling as an unexpected wind shift caught her. The paraglider dipped and swerved, testing her control and nerve. The instructor's voice crackled in her ear, guiding her through the turbulent air. She saw the snow-capped mountains loom closer, then recede. The rush of the wind in her face was exhilarating. After a controlled descent, she landed safely, heart pounding. The sky rush was an unforgettable adventure, a testament to her courage and the beauty of the Himalayas."
    },
    {
        "title": "Leh-Ladakh: Chadar's Frozen Path",
        "summary": "A trekker embarks on the legendary Chadar Trek in Leh-Ladakh, walking on a frozen river. The high-altitude journey presents extreme cold and thin ice, demanding resilience to navigate the treacherous, yet breathtaking, frozen path.",
        "hints": ["river", "trekker", "ice", "path", "cold", "mountains", "cave", "challenge", "journey", "survival", "adventure"],
        "userSelection": [],
        "story": "The Zanskar River in Leh-Ladakh lay frozen, a shimmering path for the legendary Chadar Trek. Rahul, a determined trekker, began his high-altitude journey, each step cautious on the thin ice. The extreme cold bit at his exposed skin, and the thin air made breathing a challenge. Towering, snow-covered mountains loomed on either side. He navigated slippery sections, sometimes crawling through icy caves. The frozen river presented a unique challenge, demanding constant vigilance. He encountered fellow adventurers, sharing stories of survival. The journey was arduous but breathtaking, a test of endurance against nature's raw power. Reaching the end, he felt a profound sense of accomplishment, having conquered the frozen path."
    },
    {
        "title": "Goa: Ocean's Deep Secret",
        "summary": "A diver explores Goa's vibrant underwater world, seeking a rumored hidden cave. Her scuba diving adventure leads to dazzling marine life and unexpected challenges, as she uncovers a secret beneath the ocean's surface.",
        "hints": ["ocean", "diver", "cave", "marine", "coral", "current", "light", "secret", "discovery", "adventure", "water"],
        "userSelection": [],
        "story": "The warm, clear waters off Goa's coast beckoned. Maya, a passionate diver, descended into the ocean's depths, seeking a rumored hidden cave. Dazzling marine life, vibrant coral reefs, and schools of colorful fish surrounded her. Her scuba diving adventure was serene until a strong current pulled her unexpectedly. She navigated through narrow passages, her dive light revealing intricate formations. The cave entrance, almost invisible, was finally found. Inside, the water was still, revealing ancient, untouched coral. She uncovered a small, metallic box, holding a long-lost secret. Her air supply was dwindling. Surfacing, she knew the ocean held more than just beauty; it held mysteries waiting for discovery, making her dive an unforgettable adventure."
    },
    {
        "title": "Andaman: Sea Walker's Depths",
        "summary": "A sea walker explores the vibrant coral gardens of the Andaman Islands. Their underwater journey offers breathtaking views and close encounters with marine life, revealing the serene beauty of the ocean floor.",
        "hints": ["sea", "walker", "coral", "fish", "helmet", "depths", "garden", "beauty", "adventure", "world", "ocean"],
        "userSelection": [],
        "story": "The crystal-clear waters of the Andaman Islands invited exploration. Rohan, a curious sea walker, descended onto the ocean floor, a heavy helmet allowing him to breathe. He walked among vibrant coral gardens, surrounded by schools of colorful fish. His underwater journey offered breathtaking views of the marine world. He saw clownfish darting through anemones and sea turtles gliding gracefully. The silence of the depths was profound, broken only by the sound of his own breathing. He reached out, almost touching a shimmering blue tang. The experience was surreal, a close encounter with nature's serene beauty. Surfacing, he felt a profound connection to the ocean, his sea walk an unforgettable adventure into another world."
    },
    {
        "title": "Sikkim: Teesta's Wild Rapids",
        "summary": "A team embarks on a white water rafting expedition on Sikkim's Teesta River. They face challenging rapids and strong currents, navigating the wild river through stunning landscapes, testing their teamwork and endurance.",
        "hints": ["river", "raft", "team", "rapids", "current", "mountains", "paddle", "challenge", "endurance", "adventure", "water"],
        "userSelection": [],
        "story": "The mighty Teesta River in Sikkim roared, its white waters promising an exhilarating adventure. A team of six, strapped into their raft, prepared for the rafting expedition. The guide barked commands over the river's thunder. They plunged into challenging rapids, the strong current pulling them relentlessly. Towering mountains, covered in lush greenery, lined the riverbanks. Every paddle stroke was crucial, demanding teamwork and endurance. A sudden drop sent them plunging, water engulfing the raft. They fought against the river's power, navigating through swirling eddies and hidden rocks. Exhausted but triumphant, they reached calmer waters. The wild ride was an unforgettable test of their limits, a true adventure in the heart of Sikkim's rugged landscape."
    },
    {
        "title": "Spiti Valley: Motorbike's High Roads",
        "summary": "A solo adventurer embarks on a motorbiking expedition through Spiti Valley's high-altitude roads. He navigates treacherous terrain and remote passes, facing extreme conditions to conquer the challenging, breathtaking journey.",
        "hints": ["bike", "roads", "valley", "pass", "mountains", "cold", "journey", "challenge", "adventure", "terrain", "freedom"],
        "userSelection": [],
        "story": "The rugged, high-altitude roads of Spiti Valley beckoned. Rahul, a solo adventurer, revved his motorbike, beginning his challenging expedition. The thin air and biting cold were immediate tests. He navigated treacherous terrain, sharp turns, and remote mountain passes, each one a breathtaking challenge. The vast, barren mountains stretched endlessly, a stark beauty. His bike roared, a symbol of freedom against the silent landscape. He faced sudden snow patches and slippery gravel. The journey was arduous, pushing his limits of endurance. He reached a remote monastery, offering a moment of peace. The high roads were a true adventure, a testament to his spirit and the raw, untamed beauty of Spiti Valley."
    },
    {
        "title": "Gulmarg: Snow's Thrilling Descent",
        "summary": "A snowboarder experiences the thrill of Gulmarg's slopes. Their adventure involves navigating deep powder and challenging runs, pushing their skills to the limit amidst stunning snow-covered landscapes.",
        "hints": ["snow", "boarder", "slopes", "powder", "run", "mountains", "speed", "thrill", "skill", "descent", "adventure"],
        "userSelection": [],
        "story": "The pristine snow of Gulmarg's slopes glistened under the winter sun. Anya, an avid snowboarder, strapped into her board, ready for the thrilling descent. She carved through deep powder, sending plumes of snow into the air. The challenging runs tested her skill and balance. The majestic, snow-covered mountains surrounded her, a breathtaking panorama. She picked up speed, feeling the exhilarating rush of the wind in her face. A sudden patch of ice forced a quick maneuver. She navigated through a cluster of trees, her movements precise. The thrill of the descent was unmatched. After a long run, she reached the bottom, breathless but exhilarated. Gulmarg offered an unforgettable adventure, a perfect blend of challenge and beauty."
    },
    {
        "title": "Auli: Skiing's Alpine Dream",
        "summary": "A skier glides down Auli's pristine slopes. Their alpine adventure offers breathtaking views and exhilarating descents, mastering the snow-covered terrain and experiencing the pure joy of skiing.",
        "hints": ["skier", "slopes", "alpine", "snow", "mountains", "view", "descent", "joy", "skill", "adventure", "terrain"],
        "userSelection": [],
        "story": "The pristine, snow-covered slopes of Auli stretched invitingly. Liam, an enthusiastic skier, clicked into his bindings, ready to glide down. The crisp alpine air filled his lungs as he pushed off. Breathtaking views of the Nanda Devi peak unfolded before him, a majestic panorama. He executed graceful turns, feeling the pure joy of skiing. The exhilarating descent was a blur of speed and control. He navigated through gentle moguls and steeper sections, mastering the snow-covered terrain. A sudden patch of fresh powder offered a thrilling challenge. After a long, satisfying run, he reached the base, feeling a profound sense of accomplishment. Auli offered an unforgettable alpine adventure, a perfect dream for any skier."
    },
    {
        "title": "Bir Billing: Paragliding's Blue Expanse",
        "summary": "An adventurer launches into the vast blue expanse of Bir Billing for paragliding. Their flight offers unparalleled views and a sense of freedom, pushing their limits high above the scenic valley.",
        "hints": ["sky", "adventurer", "paraglider", "expanse", "valley", "wind", "freedom", "flight", "view", "limits", "adventure"],
        "userSelection": [],
        "story": "The vast blue expanse of Bir Billing, a paragliding paradise, stretched invitingly. Rohan, a seasoned adventurer, launched his paraglider from the takeoff point, soaring into the sky. The wind caught his canopy, lifting him effortlessly high above the scenic valley. Below, tiny villages looked like specks, and lush green fields unfolded. The sense of freedom was exhilarating, an unparalleled view of the world. He rode the thermals, gaining altitude, pushing his limits. The silence of the air was profound, broken only by the gentle rustle of the fabric. He performed graceful turns, feeling completely in control. After a long, serene flight, he executed a perfect landing. Bir Billing offered an unforgettable adventure, a true communion with the sky."
    },
    {
        "title": "Dandeli: Kali River's Roar",
        "summary": "A thrill-seeker braves the white water rafting on Karnataka's Kali River. The adventure involves navigating challenging rapids and strong currents, testing their courage and teamwork against the powerful river's roar.",
        "hints": ["river", "raft", "thrill-seeker", "rapids", "current", "jungle", "paddle", "courage", "teamwork", "adventure", "roar"],
        "userSelection": [],
        "story": "The mighty Kali River in Dandeli roared, its white waters promising an intense adventure. Liam, a thrill-seeker, gripped his paddle, ready for the white water rafting challenge. The guide shouted commands over the river's thunderous roar. They plunged into challenging rapids, the strong current pulling them relentlessly through the dense jungle. Every paddle stroke was crucial, demanding courage and teamwork. A sudden drop sent them plummeting, water engulfing the raft. They fought against the river's power, navigating through swirling eddies and hidden rocks. Exhausted but triumphant, they reached calmer waters. The wild ride was an unforgettable test of their limits, a true adventure in the heart of Karnataka's wilderness, leaving them breathless and exhilarated."
    },
    {
        "title": "Coorg: Barapole's Wild Ride",
        "summary": "A group of friends tackles the exhilarating white water rafting on Coorg's Barapole River. They face challenging rapids and strong currents, navigating the wild river through dense forests, testing their teamwork and adrenaline.",
        "hints": ["river", "raft", "friends", "rapids", "current", "forests", "paddle", "teamwork", "adrenaline", "adventure", "ride"],
        "userSelection": [],
        "story": "The Barapole River in Coorg, known for its exhilarating rapids, beckoned. Four friends, eager for adventure, strapped into their raft, ready for the white water rafting challenge. The guide's shouts echoed over the river's roar. They plunged into challenging rapids, the strong current pulling them through dense, emerald forests. Every paddle stroke was crucial, demanding teamwork and synchronized effort. A sudden drop sent them plummeting, water engulfing the raft. They fought against the river's power, navigating through swirling eddies and hidden rocks. Adrenaline surged through their veins with each twist and turn. Exhausted but triumphant, they reached calmer waters. The wild ride was an unforgettable test of their limits, a true adventure in the heart of Coorg's lush landscape."
    },
    {
        "title": "Corbett: Tiger's Jungle Trail",
        "summary": "A wildlife enthusiast embarks on a safari in Jim Corbett National Park, hoping to spot a tiger. The jungle trail offers thrilling encounters and unexpected moments, revealing the raw beauty of India's wilderness.",
        "hints": ["jungle", "safari", "enthusiast", "tiger", "trail", "animals", "tracks", "silence", "moment", "wilderness", "adventure"],
        "userSelection": [],
        "story": "The dense jungle of Jim Corbett National Park hummed with unseen life. Priya, a wildlife enthusiast, embarked on an early morning safari, her camera ready, hoping to spot a tiger. The dusty jungle trail wound through thick foliage. They saw deer grazing, elephants lumbering, and exotic birds. The silence of the wilderness was profound, broken only by distant calls. Suddenly, fresh tiger tracks appeared on the trail. Excitement surged. Every rustle in the bushes became a potential moment. The guide pointed to a faint movement. A majestic tiger, hidden in the shadows, emerged briefly before vanishing. The encounter was fleeting but thrilling, a raw glimpse into India's untamed beauty. The safari was an unforgettable adventure, a true communion with the king of the jungle."
    },
    {
        "title": "Ranthambore: Tiger Kingdom Quest",
        "summary": "A photographer ventures into Ranthambore National Park on a wildlife safari, determined to capture a tiger's elusive beauty. The quest involves patient waiting and thrilling encounters, revealing the raw power of the jungle.",
        "hints": ["park", "safari", "photographer", "tiger", "jungle", "tracks", "wait", "power", "quest", "moment", "adventure"],
        "userSelection": [],
        "story": "Ranthambore National Park, a kingdom of tigers, awaited. Rohan, a wildlife photographer, embarked on a safari, his powerful lens ready, determined to capture a tiger's elusive beauty. The dusty jungle tracks wound through ancient ruins and thorny bushes. They spotted deer, wild boar, and various birds. The quest involved long periods of patient waiting, scanning the dense foliage. Suddenly, fresh pugmarks appeared on the ground, indicating a tiger was near. Excitement surged through the jeep. Every rustle, every distant call, heightened the anticipation. A thrilling moment arrived: a majestic tigress emerged from the shadows, crossed their path, and vanished. The raw power of the jungle was palpable. The safari was an unforgettable adventure, a testament to nature's grandeur and Rohan's persistence."
    },
    {
        "title": "Meghalaya: Cave's Dark Depths",
        "summary": "An intrepid explorer delves into Meghalaya's mysterious caves. Their caving adventure involves navigating tight passages and dark chambers, revealing ancient formations and the thrilling challenge of the underground world.",
        "hints": ["cave", "explorer", "passages", "chambers", "formations", "darkness", "light", "challenge", "adventure", "world", "mystery"],
        "userSelection": [],
        "story": "The mysterious caves of Meghalaya, hidden beneath lush hills, beckoned. Liam, an intrepid explorer, delved into their dark depths, his headlamp cutting through the oppressive darkness. He navigated tight passages, sometimes crawling, sometimes squeezing through narrow gaps. The vast chambers opened up, revealing ancient, intricate rock formations. The air was cool and damp, thick with the scent of earth. The silence was profound, broken only by the drip of water. Each step was a thrilling challenge, pushing his limits. He discovered a hidden pool, its water crystal clear. The underground world was a labyrinth of natural wonders and unseen mysteries. After hours, he emerged, covered in mud but exhilarated. The caving adventure was an unforgettable journey into the earth's hidden beauty."
    },
    {
        "title": "Netrani Island: Reef's Blue Secrets",
        "summary": "A diver explores the vibrant coral reefs around Netrani Island. Their scuba diving adventure reveals dazzling marine life and hidden underwater secrets, offering a breathtaking glimpse into the ocean's blue depths.",
        "hints": ["island", "diver", "reefs", "marine", "fish", "current", "secrets", "ocean", "beauty", "discovery", "depths"],
        "userSelection": [],
        "story": "Netrani Island, a heart-shaped gem off Karnataka's coast, promised underwater wonders. Anya, a passionate diver, descended into the crystal-clear waters, eager to explore its vibrant coral reefs. Dazzling marine life, schools of colorful fish, and intricate coral formations surrounded her. Her scuba diving adventure was a serene ballet amidst the ocean's blue depths. A gentle current guided her past a hidden grotto. She spotted a rare nudibranch, a tiny, vibrant creature. The silence of the underwater world was profound, broken only by her own breathing. She uncovered a small, ancient anchor, hinting at past voyages. Surfacing, she knew the reefs held countless secrets waiting for discovery. Her dive was an unforgettable journey into the ocean's breathtaking beauty."
    },
    {
        "title": "Chikkamagaluru: Peak's Green Trails",
        "summary": "A trekker explores the challenging green trails of Chikkamagaluru's Mullayanagiri peak. The adventure involves navigating steep ascents and dense forests, revealing breathtaking views and the thrill of conquering nature.",
        "hints": ["peak", "trekker", "trails", "forests", "ascents", "view", "challenge", "nature", "summit", "adventure", "green"],
        "userSelection": [],
        "story": "The lush green trails of Chikkamagaluru's Mullayanagiri peak beckoned. Rohan, a dedicated trekker, began his ascent, eager for the adventure. The path wound through dense forests, alive with bird calls. He faced steep ascents, his muscles burning, but the promise of the view spurred him on. The air grew cooler, carrying the scent of eucalyptus. He navigated rocky sections and slippery roots. The challenge of conquering the peak was exhilarating. As he reached the summit, a breathtaking panoramic view unfolded: rolling hills, misty valleys, and distant towns. The vastness of nature was humbling. After a moment of triumph, he began his descent, already planning his next adventure. The green trails of Chikkamagaluru had offered an unforgettable experience."
    },
    {
        "title": "Panchmarhi: Cave's Rocky Labyrinth",
        "summary": "An explorer delves into Panchmarhi's ancient caves. Their caving adventure involves navigating tight passages and rocky labyrinths, revealing unique formations and the thrill of discovering hidden underground worlds.",
        "hints": ["caves", "explorer", "passages", "labyrinths", "formations", "darkness", "light", "challenge", "adventure", "world", "mystery"],
        "userSelection": [],
        "story": "The ancient caves of Panchmarhi, carved by time, promised mystery. Priya, an avid explorer, delved into their rocky labyrinth, her headlamp cutting through the oppressive darkness. She navigated tight passages, sometimes crawling through narrow gaps. The vast chambers opened up, revealing unique, intricate rock formations. The air was cool and damp, thick with the scent of earth. The silence was profound, broken only by the drip of water. Each step was a thrilling challenge, pushing her limits. She discovered hidden engravings, hinting at ancient inhabitants. The underground world was a maze of natural wonders and unseen mysteries. After hours, she emerged, covered in mud but exhilarated. The caving adventure was an unforgettable journey into the earth's hidden beauty."
    }
]
return easyStories;
}

function getMediumStories(){
    let mediumStories = [
            {
        "title": "Rishikesh: River Fury",
        "summary": "A group of adventurous friends courageously tackles Rishikesh's most challenging white water rapids. Their exhilarating rafting adventure intensifies as they face unexpected twists, powerful currents, and hidden obstacles, truly testing their courage, teamwork, and resilience against the untamed force of the mighty river.",
        "hints": ["rapids", "raft", "friends", "river", "paddle", "wave", "current", "rock", "thrill", "team", "adventure", "guide"],
        "userSelection": [],
        "story": "The roaring Ganga rapids in Rishikesh beckoned with a fierce promise. Six adventurous friends, strapped securely into their sturdy raft, gripped their paddles tightly, ready for the ultimate white water rafting adventure. The experienced guide shouted urgent commands over the deafening roar of the river. The first massive wave hit, drenching them completely and almost capsizing the raft. The powerful current pulled them into a swirling vortex, narrowly missing a jagged, submerged rock. Teamwork was absolutely crucial as they navigated treacherous sections and unexpected drops. A sudden plummet sent them freefalling, eliciting a mix of terrified screams and exhilarating laughter. The wild river relentlessly tested their courage and unity. They emerged downstream, soaked to the bone but profoundly exhilarated, having conquered the untamed ride. The intense thrill of the adventure lingered long after, a powerful testament to their daring spirit and the raw, untamed power of the sacred river."
    },
    {
        "title": "Manali: Sky's Embrace",
        "summary": "A solo traveler takes to the vast skies over Manali for an unforgettable paragliding experience. High above the breathtaking valley, an unexpected and sudden wind shift transforms the serene flight into a thrilling, high-stakes test of skill and nerve, pushing them to their absolute limits amidst the majestic Himalayan peaks.",
        "hints": ["sky", "traveler", "paraglider", "valley", "wind", "flight", "mountains", "control", "rush", "descent", "adventure", "Beas"],
        "userSelection": [],
        "story": "The crisp, exhilarating Manali air filled the paraglider's vibrant canopy. Anya, a solo traveler seeking ultimate freedom, ran off the steep mountain slope, soaring gracefully into the vast, boundless sky high above the picturesque valley. Below, the winding Beas River snaked through lush, emerald greenery, a miniature world. Her initially serene flight turned dramatically thrilling as an unexpected and powerful wind shift caught her. The paraglider dipped sharply and swerved violently, intensely testing her control and nerve. The instructor's voice crackled urgently in her ear, guiding her through the turbulent air currents. She saw the majestic, snow-capped mountains loom closer, then majestically recede into the distance. The exhilarating rush of the wind in her face was an unparalleled sensation. After a perfectly controlled descent, she landed safely, heart pounding furiously in her chest. The sky rush was an unforgettable adventure, a profound testament to her courage and the breathtaking, untamed beauty of the mighty Himalayas."
    },
    {
        "title": "Ladakh: Frozen Odyssey",
        "summary": "A determined trekker embarks on the legendary Chadar Trek in Leh-Ladakh, a perilous journey walking directly on a frozen river. This high-altitude expedition presents extreme, biting cold, treacherous thin ice, and formidable natural obstacles, demanding immense resilience and unwavering focus to navigate the challenging, yet breathtakingly beautiful, frozen path.",
        "hints": ["river", "trekker", "ice", "path", "cold", "mountains", "cave", "challenge", "journey", "survival", "adventure", "Zanskar", "air"],
        "userSelection": [],
        "story": "The mighty Zanskar River in Leh-Ladakh lay completely frozen, a shimmering, perilous path for the legendary Chadar Trek. Rahul, a determined trekker with a spirit for adventure, began his high-altitude journey, each careful step a calculated risk on the deceptively thin ice. The extreme, biting cold bit savagely at his exposed skin, and the thin, oxygen-deprived air made every breath a profound challenge. Towering, snow-covered mountains loomed menacingly on either side, casting long shadows. He navigated incredibly slippery sections, sometimes crawling on all fours through dark, icy caves. The frozen river presented a unique and formidable challenge, demanding constant vigilance against cracks and sudden drops. He encountered fellow adventurers, sharing hushed stories of survival and endurance. The journey was arduous, pushing his physical and mental limits, but breathtakingly beautiful. Reaching the end, he felt a profound, overwhelming sense of accomplishment, having truly conquered the treacherous frozen path and himself."
    },
    {
        "title": "Goa: Ocean's Deep Mystery",
        "summary": "An intrepid diver explores Goa's vibrant, mysterious underwater world, seeking a rumored hidden cave. Her exhilarating scuba diving adventure leads her through dazzling marine life and unexpected challenges, as she uncovers a long-lost secret concealed beneath the ocean's serene surface, making her dive a truly unforgettable experience.",
        "hints": ["ocean", "diver", "cave", "marine", "coral", "current", "light", "secret", "discovery", "adventure", "water", "Goa", "formations"],
        "userSelection": [],
        "story": "The warm, crystal-clear waters off Goa's sun-kissed coast beckoned with an irresistible allure. Maya, a passionate and experienced diver, descended gracefully into the ocean's mesmerizing depths, her mission to find a rumored hidden cave. Dazzling marine life, vibrant coral reefs teeming with activity, and schools of colorful, exotic fish surrounded her in a breathtaking kaleidoscope. Her scuba diving adventure was initially serene until a strong, unexpected current suddenly pulled her off course. She skillfully navigated through narrow, dimly lit passages, her dive light revealing ancient, intricate formations untouched by human hands. The elusive cave entrance, almost perfectly camouflaged, was finally found. Inside, the water was eerily still, revealing pristine, untouched coral gardens. She uncovered a small, metallic box, holding a long-lost secret from centuries past. Her air supply was dwindling rapidly. Surfacing, she knew the ocean held far more than just beauty; it held countless mysteries waiting for discovery, making her dive an utterly unforgettable adventure into the deep."
    },
    {
        "title": "Andaman: Sea Walker's Realm",
        "summary": "A curious sea walker embarks on an extraordinary journey exploring the vibrant coral gardens of the Andaman Islands. Their unique underwater experience offers breathtaking panoramic views and close, intimate encounters with diverse marine life, ultimately revealing the serene, untouched beauty and hidden wonders of the ocean floor in a truly immersive way.",
        "hints": ["sea", "walker", "coral", "fish", "helmet", "depths", "garden", "beauty", "adventure", "world", "ocean", "islands", "view"],
        "userSelection": [],
        "story": "The crystal-clear, inviting waters of the Andaman Islands beckoned for an extraordinary exploration. Rohan, a curious sea walker, descended slowly onto the vibrant ocean floor, a heavy, specialized helmet allowing him to breathe effortlessly amidst the aquatic wonders. He walked gently among the breathtaking coral gardens, completely surrounded by swirling schools of colorful, exotic fish. His unique underwater journey offered unparalleled panoramic views of the mesmerizing marine world. He saw playful clownfish darting through swaying anemones and majestic sea turtles gliding gracefully above him. The profound silence of the depths was absolute, broken only by the rhythmic sound of his own breathing. He reached out, almost touching a shimmering blue tang as it swam past. The entire experience was surreal, an intimate, close encounter with nature's serene, untouched beauty. Surfacing, he felt a profound, almost spiritual connection to the vast ocean, his sea walk an utterly unforgettable adventure into a truly different world."
    },
    {
        "title": "Sikkim: Teesta's Roar",
        "summary": "A determined team embarks on an exhilarating white water rafting expedition on Sikkim's powerful Teesta River. They bravely face challenging rapids, navigate strong, unpredictable currents, and paddle fiercely through stunning, rugged landscapes, rigorously testing their teamwork, endurance, and courage against the wild river's relentless roar.",
        "hints": ["river", "raft", "team", "rapids", "current", "mountains", "paddle", "challenge", "endurance", "adventure", "water", "Sikkim", "landscape"],
        "userSelection": [],
        "story": "The mighty Teesta River in Sikkim roared with an untamed power, its white waters promising an exhilarating and intense adventure. A determined team of six, strapped securely into their sturdy raft, prepared for the challenging rafting expedition. The experienced guide barked urgent commands over the river's thunderous roar. They plunged fearlessly into challenging rapids, the strong, unpredictable current pulling them relentlessly through the stunning, rugged mountain landscape. Towering mountains, covered in lush, vibrant greenery, lined the riverbanks, creating a majestic backdrop. Every single paddle stroke was absolutely crucial, demanding perfect teamwork and unwavering endurance. A sudden, terrifying drop sent them plummeting, water engulfing the entire raft. They fought fiercely against the river's immense power, expertly navigating through swirling eddies and hidden, jagged rocks. Exhausted but profoundly triumphant, they finally reached calmer waters. The wild ride was an unforgettable test of their physical and mental limits, a true adventure in the heart of Sikkim's untamed, beautiful landscape."
    },
    {
        "title": "Spiti: High Road Conquer",
        "summary": "A solo adventurer embarks on a challenging motorbiking expedition through Spiti Valley's remote, high-altitude roads. He navigates treacherous terrain, isolated passes, and extreme weather conditions, pushing his limits to conquer the breathtaking, yet formidable, journey and experience ultimate freedom amidst the grand Himalayas.",
        "hints": ["bike", "roads", "valley", "pass", "mountains", "cold", "journey", "challenge", "adventure", "terrain", "freedom", "Spiti", "monastery"],
        "userSelection": [],
        "story": "The rugged, high-altitude roads of Spiti Valley beckoned with an irresistible allure. Rahul, a solo adventurer with a thirst for discovery, revved his powerful motorbike, beginning his challenging expedition into the remote wilderness. The thin, biting air and extreme cold were immediate, formidable tests of his endurance. He skillfully navigated treacherous terrain, sharp, winding turns, and isolated mountain passes, each one a breathtaking challenge. Vast, barren mountains stretched endlessly in every direction, displaying a stark, raw beauty. His bike roared, a powerful symbol of freedom against the silent, imposing landscape. He faced sudden snow patches, slippery gravel, and unexpected rockfalls. The journey was arduous, constantly pushing his physical and mental limits. He reached a remote, ancient monastery, offering a brief moment of profound peace and reflection. The high roads were a true adventure, a powerful testament to his unwavering spirit and the raw, untamed, breathtaking beauty of Spiti Valley."
    },
    {
        "title": "Gulmarg: Snowboard Thrill",
        "summary": "An avid snowboarder experiences the ultimate thrill on Gulmarg's pristine, snow-covered slopes. Their exhilarating adventure involves expertly navigating deep powder, tackling challenging runs, and pushing their skills to the absolute limit amidst the stunning, majestic snow-covered landscapes of the Himalayas, creating an unforgettable winter experience.",
        "hints": ["snow", "boarder", "slopes", "powder", "run", "mountains", "speed", "thrill", "skill", "descent", "adventure", "Gulmarg", "landscape"],
        "userSelection": [],
        "story": "The pristine, untouched snow of Gulmarg's slopes glistened invitingly under the brilliant winter sun. Anya, an avid snowboarder with a passion for the mountains, strapped securely into her board, ready for the exhilarating descent. She carved effortlessly through deep, untouched powder, sending plumes of fresh snow into the crisp air behind her. The challenging runs rigorously tested her skill and balance, demanding precision and agility. The majestic, snow-covered mountains surrounded her in every direction, forming a breathtaking, panoramic landscape. She picked up incredible speed, feeling the exhilarating rush of the icy wind in her face. A sudden, unexpected patch of ice forced a quick, skillful maneuver. She navigated expertly through a cluster of pine trees, her movements fluid and precise. The pure thrill of the descent was an unmatched sensation. After a long, satisfying run, she reached the bottom, breathless but profoundly exhilarated. Gulmarg offered an unforgettable adventure, a perfect blend of challenging terrain and majestic beauty."
    },
    {
        "title": "Auli: Alpine Glory",
        "summary": "An enthusiastic skier gracefully glides down Auli's pristine, snow-covered slopes. Their alpine adventure offers breathtaking panoramic views of the Himalayas and exhilarating descents, allowing them to master the challenging snow-covered terrain and experience the pure, unadulterated joy of skiing in a truly magnificent setting.",
        "hints": ["skier", "slopes", "alpine", "snow", "mountains", "view", "descent", "joy", "skill", "adventure", "terrain", "Auli", "air"],
        "userSelection": [],
        "story": "The pristine, untouched, snow-covered slopes of Auli stretched invitingly, a canvas of white. Liam, an enthusiastic and skilled skier, clicked confidently into his bindings, ready to glide down. The crisp alpine air filled his lungs as he pushed off, feeling the immediate rush. Breathtaking panoramic views of the majestic Nanda Devi peak unfolded before him, a truly magnificent vista. He executed graceful, fluid turns, feeling the pure, unadulterated joy of skiing coursing through him. The exhilarating descent was a blur of incredible speed and precise control. He expertly navigated through gentle moguls and steeper, more challenging sections, mastering the diverse snow-covered terrain with ease. A sudden patch of fresh, deep powder offered an extra thrilling challenge, adding to the excitement. After a long, incredibly satisfying run, he reached the base, feeling a profound sense of accomplishment and contentment. Auli offered an unforgettable alpine adventure, a perfect dream realized for any skier, a true glory of the mountains."
    },
    {
        "title": "Bir Billing: Sky Freedom",
        "summary": "An experienced adventurer launches into the vast blue expanse of Bir Billing, renowned as a paragliding paradise. Their exhilarating flight offers unparalleled aerial views, a profound sense of freedom, and pushes their personal limits high above the scenic, sprawling valley, creating an unforgettable experience.",
        "hints": ["sky", "adventurer", "paraglider", "expanse", "valley", "wind", "freedom", "flight", "view", "limits", "adventure", "Bir", "canopy"],
        "userSelection": [],
        "story": "The vast, boundless blue expanse of Bir Billing, a world-renowned paragliding paradise, stretched invitingly below. Rohan, a seasoned adventurer, confidently launched his paraglider from the takeoff point, soaring effortlessly into the immense sky. The wind caught his vibrant canopy, lifting him gracefully high above the scenic, sprawling valley. Below, tiny villages looked like specks, and lush green fields unfolded into the horizon. The profound sense of freedom was exhilarating, an unparalleled aerial view of the world stretching out beneath him. He expertly rode the thermals, gaining significant altitude, constantly pushing his personal limits higher. The profound silence of the air was absolute, broken only by the gentle rustle of the fabric above him. He performed graceful, controlled turns, feeling completely in command. After a long, serene, and utterly breathtaking flight, he executed a perfect, soft landing. Bir Billing offered an unforgettable adventure, a true communion with the sky and an experience of ultimate freedom."
    },
    {
        "title": "Dandeli: Kali's Roar",
        "summary": "A thrill-seeker bravely tackles the challenging white water rafting on Karnataka's powerful Kali River. The intense adventure involves navigating formidable rapids, battling strong, unpredictable currents, and rigorously testing their courage, teamwork, and resilience against the river's thunderous, relentless roar, leaving them breathless and triumphant.",
        "hints": ["river", "raft", "thrill-seeker", "rapids", "current", "jungle", "paddle", "courage", "teamwork", "adventure", "roar", "Dandeli", "wilderness"],
        "userSelection": [],
        "story": "The mighty Kali River in Dandeli roared with an untamed fury, its white waters promising an intense and unforgettable adventure. Liam, an ultimate thrill-seeker, gripped his paddle tightly, ready for the white water rafting challenge. The experienced guide shouted urgent commands over the river's thunderous, relentless roar. They plunged fearlessly into formidable rapids, the strong, unpredictable current pulling them relentlessly through the dense, emerald jungle. Every single paddle stroke was absolutely crucial, demanding immense courage and perfect teamwork. A sudden, terrifying drop sent them plummeting downwards, water engulfing the entire raft. They fought fiercely against the river's immense power, expertly navigating through swirling eddies and hidden, jagged rocks. Exhausted but profoundly triumphant, they finally reached calmer waters. The wild ride was an unforgettable test of their physical and mental limits, a true adventure in the heart of Karnataka's untamed wilderness, leaving them breathless and utterly exhilarated."
    },
    {
        "title": "Coorg: Barapole Thrill",
        "summary": "A group of adventurous friends bravely tackles the exhilarating white water rafting on Coorg's Barapole River. They face challenging rapids and strong, unpredictable currents, navigating the wild river through dense, lush forests, rigorously testing their teamwork, adrenaline, and spirit of adventure against nature's raw power.",
        "hints": ["river", "raft", "friends", "rapids", "current", "forests", "paddle", "teamwork", "adrenaline", "adventure", "ride", "Coorg", "landscape"],
        "user_selection": [],
        "story": "The Barapole River in Coorg, renowned for its exhilarating rapids, beckoned with an irresistible call. Four adventurous friends, eager for an ultimate thrill, strapped securely into their raft, ready for the white water rafting challenge. The guide's booming shouts echoed over the river's thunderous roar. They plunged fearlessly into challenging rapids, the strong, unpredictable current pulling them relentlessly through dense, lush emerald forests. Every single paddle stroke was absolutely crucial, demanding perfect teamwork and synchronized effort. A sudden, terrifying drop sent them plummeting downwards, water engulfing the entire raft. They fought fiercely against the river's immense power, expertly navigating through swirling eddies and hidden, jagged rocks. Adrenaline surged powerfully through their veins with each twist and turn. Exhausted but profoundly triumphant, they finally reached calmer waters. The wild ride was an unforgettable test of their physical and mental limits, a true adventure in the heart of Coorg's breathtaking landscape."
    },
    {
        "title": "Corbett: Tiger Quest",
        "summary": "A dedicated wildlife enthusiast embarks on an thrilling safari in Jim Corbett National Park, hoping to spot an elusive tiger. The dense jungle trail offers suspenseful encounters and unexpected moments, ultimately revealing the raw, untamed beauty and powerful majesty of India's wilderness.",
        "hints": ["jungle", "safari", "enthusiast", "tiger", "trail", "animals", "tracks", "silence", "moment", "wilderness", "adventure", "camera", "beauty"],
        "userSelection": [],
        "story": "The dense, vibrant jungle of Jim Corbett National Park hummed with unseen, mysterious life. Priya, a dedicated wildlife enthusiast, embarked on an early morning safari, her camera poised and ready, hoping desperately to spot an elusive tiger. The dusty jungle trail wound through thick, impenetrable foliage. They saw graceful deer grazing, majestic elephants lumbering through the trees, and exotic, colorful birds. The profound silence of the wilderness was absolute, broken only by distant, echoing calls. Suddenly, fresh tiger tracks appeared clearly on the trail. Excitement surged through the jeep. Every rustle in the bushes, every distant sound, heightened the anticipation of a potential moment. The guide pointed to a faint movement in the shadows. A majestic tiger, perfectly camouflaged, emerged briefly before vanishing back into the undergrowth. The encounter was fleeting but incredibly thrilling, a raw glimpse into India's untamed beauty. The safari was an unforgettable adventure, a true communion with the king of the jungle."
    },
    {
        "title": "Ranthambore: Royal Hunt",
        "summary": "A determined photographer ventures into Ranthambore National Park on a wildlife safari, driven by the singular goal of capturing a tiger's elusive beauty on camera. This thrilling quest involves long periods of patient waiting and heart-pounding encounters, ultimately revealing the raw, untamed power and majestic grandeur of the jungle's most iconic predator.",
        "hints": ["park", "safari", "photographer", "tiger", "jungle", "tracks", "wait", "power", "quest", "moment", "adventure", "Ranthambore", "lens"],
        "userSelection": [],
        "story": "Ranthambore National Park, a legendary kingdom of tigers, awaited with its ancient secrets. Rohan, a dedicated wildlife photographer, embarked on a safari, his powerful lens poised and ready, determined to capture a tiger's elusive beauty. The dusty jungle tracks wound through ancient ruins and thorny bushes, hinting at past glories. They spotted graceful deer, wild boar, and various exotic birds. The thrilling quest involved long periods of patient waiting under the scorching sun, scanning the dense foliage for any sign. Suddenly, fresh pugmarks appeared clearly on the ground, indicating a tiger was incredibly near. Excitement surged through the jeep. Every rustle, every distant call, heightened the anticipation. A heart-pounding moment arrived: a majestic tigress emerged silently from the shadows, crossed their path with regal indifference, and vanished back into the undergrowth. The raw, untamed power of the jungle was palpable. The safari was an unforgettable adventure, a profound testament to nature's grandeur and Rohan's unwavering persistence."
    },
    {
        "title": "Meghalaya: Cave's Depths",
        "summary": "An intrepid explorer bravely delves into Meghalaya's mysterious, ancient caves. Their challenging caving adventure involves expertly navigating tight passages, dark, echoing chambers, and intricate rock formations, ultimately revealing unique geological wonders and the thrilling challenge of the vast, hidden underground world.",
        "hints": ["cave", "explorer", "passages", "chambers", "formations", "darkness", "light", "challenge", "adventure", "world", "mystery", "Meghalaya", "air"],
        "userSelection": [],
        "story": "The mysterious, ancient caves of Meghalaya, hidden beneath lush, verdant hills, beckoned with an irresistible allure. Liam, an intrepid explorer, bravely delved into their dark, silent depths, his headlamp cutting a solitary beam through the oppressive darkness. He expertly navigated incredibly tight passages, sometimes crawling on his belly, sometimes squeezing through impossibly narrow gaps. Vast, echoing chambers suddenly opened up, revealing unique, intricate rock formations sculpted by millennia of water and time. The air was cool and damp, thick with the earthy scent of ancient rock. The silence was profound, broken only by the rhythmic drip of water. Each careful step was a thrilling challenge, constantly pushing his physical and mental limits. He discovered hidden, shimmering pools and ancient engravings, hinting at forgotten inhabitants. The vast underground world was a labyrinth of natural wonders and unseen mysteries. After hours of exploration, he emerged, covered in mud but profoundly exhilarated. The caving adventure was an unforgettable journey into the earth's hidden beauty."
    },
    {
        "title": "Netrani: Reef's Secrets",
        "summary": "A passionate diver explores the vibrant, teeming coral reefs surrounding Netrani Island. Their exhilarating scuba diving adventure reveals dazzling marine life, intricate ecosystems, and hidden underwater secrets, offering a breathtaking and immersive glimpse into the profound beauty of the ocean's blue depths.",
        "hints": ["island", "diver", "reefs", "marine", "fish", "current", "secrets", "ocean", "beauty", "discovery", "depths", "Netrani", "waters"],
        "userSelection": [],
        "story": "Netrani Island, a heart-shaped gem off Karnataka's sun-drenched coast, promised unparalleled underwater wonders. Anya, a passionate and experienced diver, descended gracefully into the crystal-clear, inviting waters, eager to explore its vibrant coral reefs. Dazzling marine life, swirling schools of colorful fish, and intricate coral formations surrounded her in a breathtaking, living tapestry. Her exhilarating scuba diving adventure was a serene ballet amidst the ocean's profound blue depths. A gentle current guided her effortlessly past a hidden grotto, teeming with life. She spotted a rare nudibranch, a tiny, vibrant creature, and a majestic manta ray gliding by. The profound silence of the underwater world was absolute, broken only by the rhythmic sound of her own breathing. She uncovered a small, ancient anchor, hinting at past voyages and forgotten stories. Surfacing, she knew the reefs held countless, untold secrets waiting for discovery. Her dive was an utterly unforgettable journey into the ocean's breathtaking, mysterious beauty."
    },
    {
        "title": "Chikkamagaluru: Peak Ascent",
        "summary": "A dedicated trekker explores the challenging, lush green trails of Chikkamagaluru's Mullayanagiri peak. The adventure involves navigating steep ascents, dense forests, and rocky terrain, ultimately revealing breathtaking panoramic views and the profound thrill of conquering nature's majestic heights.",
        "hints": ["peak", "trekker", "trails", "forests", "ascents", "view", "challenge", "nature", "summit", "adventure", "green", "Chikkamagaluru", "air"],
        "userSelection": [],
        "story": "The lush, vibrant green trails of Chikkamagaluru's Mullayanagiri peak beckoned with an irresistible call. Rohan, a dedicated trekker with a passion for the outdoors, began his challenging ascent, eager for the adventure that lay ahead. The winding path led him through dense, ancient forests, alive with the calls of unseen birds. He faced incredibly steep ascents, his muscles burning with effort, but the promise of the panoramic view from the summit spurred him onward. The air grew cooler and crisper, carrying the refreshing scent of eucalyptus. He expertly navigated rocky sections and slippery roots, each step a test of balance. The profound challenge of conquering the majestic peak was exhilarating. As he finally reached the summit, a breathtaking panoramic view unfolded before him: rolling hills, misty valleys, and distant towns. The vastness of nature was humbling. After a moment of triumph, he began his descent, already planning his next adventure. The green trails of Chikkamagaluru had offered an unforgettable and deeply rewarding experience."
    },
    {
        "title": "Panchmarhi: Cave Quest",
        "summary": "An intrepid explorer bravely delves into Panchmarhi's ancient, mysterious caves. Their challenging caving adventure involves skillfully navigating tight passages, vast rocky labyrinths, and dark chambers, ultimately revealing unique geological formations and the profound thrill of discovering hidden underground worlds and their secrets.",
        "hints": ["caves", "explorer", "passages", "labyrinths", "formations", "darkness", "light", "challenge", "adventure", "world", "mystery", "Panchmarhi", "engravings"],
        "userSelection": [],
        "story": "The ancient, mysterious caves of Panchmarhi, intricately carved by millennia of time, promised untold wonders and deep secrets. Priya, an avid and intrepid explorer, bravely delved into their vast, rocky labyrinth, her headlamp cutting a solitary beam through the oppressive darkness. She expertly navigated incredibly tight passages, sometimes crawling on her belly, sometimes squeezing through impossibly narrow gaps. Vast, echoing chambers suddenly opened up before her, revealing unique, intricate rock formations sculpted by nature. The air was cool and damp, thick with the earthy scent of ancient rock. The profound silence was absolute, broken only by the rhythmic drip of water. Each careful step was a thrilling challenge, constantly pushing her physical and mental limits. She discovered hidden, shimmering pools and ancient engravings on the walls, hinting at forgotten inhabitants. The vast underground world was a complex maze of natural wonders and unseen mysteries. After hours of intense exploration, she emerged, covered in mud but profoundly exhilarated. The caving adventure was an unforgettable journey into the earth's hidden beauty."
    }
    ]

    return mediumStories;
}


export {getEasyStories ,getMediumStories};