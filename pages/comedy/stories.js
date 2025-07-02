function getEasyStories(){
    let easyStories = [
     {
        "title": "The Great Biryani Heist",
        "summary": "A family's highly anticipated biryani goes missing from the fridge. A hilarious investigation ensues, involving suspicious relatives and a very guilty-looking pet, leading to a surprising and messy culprit.",
        "hints": ["biryani", "fridge", "aunt", "dog", "clues", "kitchen", "nap", "sauce", "culprit"],
        "userSelection": [],
        "story": "The aroma of freshly made biryani filled the Sharma household, promising a feast. But when Auntie Meena went to retrieve the prized pot from the fridge, it was gone! A family emergency meeting was called. Uncle Rajesh, known for his sneaky snacks, was the first suspect. Then, little Rohan pointed at their Golden Retriever, Buddy, who was sporting a suspicious orange smudge on his nose. The kitchen became a crime scene, with everyone searching for clues. Buddy, trying to look innocent, kept licking his paws. Finally, a trail of rice and a half-eaten chicken leg led directly to Buddy's favorite napping spot under the table. He'd clearly enjoyed his solo feast, leaving a messy trail of evidence and a very guilty grin."
    },
    {
        "title": "Auto-Rickshaw Odyssey",
        "summary": "A tourist's simple auto-rickshaw ride in Delhi turns into a chaotic adventure. A misunderstanding with the driver, a wrong turn, and a series of absurd detours lead to an unexpected, yet hilarious, destination.",
        "hints": ["auto", "driver", "map", "market", "cow", "turn", "route", "destination", "laughter"],
        "userSelection": [],
        "story": "Fresh off the plane, Sarah hailed an auto-rickshaw in Delhi, eager for a simple ride to her hotel. 'Connaught Place, please!' she chirped. The auto driver, with a grand flourish, nodded. Soon, they were not on any familiar route. The auto veered through a bustling market, narrowly missing a sacred cow. Sarah pulled out her map, looking increasingly confused. The driver, oblivious, kept gesturing wildly and muttering. After a particularly sharp turn that nearly ejected her, Sarah realized they were at a wedding! The driver, beaming, announced, 'Best biryani here!' Sarah, bewildered but amused, burst into laughter. Her simple ride had become an unforgettable, albeit unplanned, adventure to a very lively, and delicious, destination."
    },
    {
        "title": "The Saree Disaster",
        "summary": "A groom's foreign best man attempts to wear a traditional Indian saree for the wedding. His hilarious struggles with the drapes and pleats lead to a memorable, tangled disaster, much to the amusement of the wedding guests.",
        "hints": ["saree", "best man", "wedding", "pleats", "fabric", "mirror", "guests", "laughter", "photos"],
        "userSelection": [],
        "story": "Tom, the groom's best man from abroad, decided to surprise everyone at the Indian wedding by wearing a traditional saree. What could go wrong? He found a vibrant silk saree and consulted YouTube tutorials. His first attempt involved him getting tangled in yards of fabric, resembling a brightly colored mummy. He wrestled with the pleats in front of the mirror, muttering to himself. Sweat beaded on his forehead. Just as he thought he had it, he tripped over the loose end, sending him sprawling onto the bed in a heap of silk. The bride walked in, stifling her laughter. By the time the wedding started, he was wearing a perfectly draped, but clearly stressed, saree, providing endless amusement and hilarious photos for all the guests."
    },
    {
        "title": "Mango Mania Mayhem",
        "summary": "A family's annual mango-eating competition descends into hilarious chaos. Sticky hands, flying pulp, and overly competitive relatives turn the sweet event into a messy, unforgettable battle.",
        "hints": ["mangoes", "family", "competition", "pulp", "faces", "laughter", "winner", "mess", "summer"],
        "userSelection": [],
        "story": "It was the annual summer mango-eating competition at the Gupta household, a tradition revered by all. Ten ripe mangoes sat ready. Little Arjun, armed with a bib, was surprisingly competitive. The whistle blew, and chaos erupted. Mango pulp flew, sticky juice dripped down chins, and faces were smeared with yellow. Auntie Renu, usually so prim, had a streak of pulp on her forehead. Uncle Suresh, trying to eat two at once, choked on a seed. The laughter was louder than the slurping. In the end, no clear winner emerged, only a room full of sticky, satisfied, and utterly messy family members. The competition was a glorious, sticky, sweet disaster, a perfect memory of summer."
    },
    {
        "title": "The Missing Dhokla",
        "summary": "A house party takes a comical turn when the star dish, a plate of homemade dhokla, vanishes. A 'food detective' is appointed, leading to a silly investigation and an unexpected, furry culprit.",
        "hints": ["party", "dhokla", "plate", "detective", "clues", "guest", "dog", "crumbs", "culprit"],
        "userSelection": [],
        "story": "The house party was in full swing, but a crisis loomed: the star dish, Auntie Preeti's famous homemade dhokla, had vanished from the snack table! A collective gasp went through the guests. Little Maya, declaring herself 'Food Detective,' began her investigation. She found a trail of orange crumbs leading under the sofa. The main suspect was Uncle Bharat, known for his stealthy snacking. But then, a suspicious bulge was spotted under the rug. Maya pulled it back to reveal not Uncle Bharat, but the family dog, Moti, looking incredibly guilty, with a single, fluffy piece of dhokla stuck to his nose. The mystery was solved, much to the amusement and laughter of all the party guests, and Moti was officially declared the 'Dhokla Thief.'"
    },
    {
        "title": "Cricket Match Chaos",
        "summary": "A friendly neighborhood cricket match devolves into hilarious chaos. Overly enthusiastic players, unexpected interruptions, and a series of comical mishaps turn the game into an unforgettable, messy spectacle.",
        "hints": ["match", "cricket", "ball", "player", "window", "neighbor", "dog", "rules", "laughter"],
        "userSelection": [],
        "story": "The neighborhood cricket match was supposed to be friendly, but competitive spirits ran high. Rahul, known for his wild swings, hit the first ball. It sailed not towards the boundary, but straight through Mrs. Sharma's kitchen window! A collective groan went through the players. Mrs. Sharma, a formidable neighbor, appeared at her door, brandishing a rolling pin. The game paused. Then, a stray dog ran onto the pitch, grabbing the ball and making a dash for it. The players, abandoning the match, began a comical chase after the dog. The rules were forgotten amidst the laughter and shouts. The cricket match ended not with a victory, but with a broken window, a happy dog, and a story that would be told for years, a truly chaotic spectacle."
    },
    {
        "title": "The Rickshaw Race",
        "summary": "Two rival auto-rickshaw drivers, vying for a passenger, engage in a comical, high-stakes race through crowded city streets. Their absurd antics and competitive spirit lead to a hilariously chaotic journey.",
        "hints": ["rickshaw", "drivers", "passenger", "race", "streets", "horns", "pedestrians", "market", "winner"],
        "userSelection": [],
        "story": "Old Man Sharma and young Raju, rival auto-rickshaw drivers, spotted the same foreign passenger. 'My auto is faster!' shouted Raju. 'Mine is classic!' retorted Sharma. A silent challenge was issued. What followed was a comical rickshaw race through the crowded city streets. They weaved through traffic, horns blaring like a symphony of chaos. Pedestrians scattered, market vendors yelled, and a bewildered cow watched them pass. Sharma took a shortcut through a narrow alley, nearly getting stuck. Raju tried to overtake, only to get caught behind a slow-moving truck. The passenger, initially terrified, soon burst into laughter. They arrived at the destination neck and neck, covered in dust, neither a clear winner, but providing the city with an unforgettable, hilarious spectacle."
    },
    {
        "title": "The Great Indian Wedding Mix-Up",
        "summary": "A massive Indian wedding descends into comical confusion when two grooms, dressed identically, are accidentally swapped. The ensuing chaos involves bewildered families, frantic searches, and a hilarious resolution.",
        "hints": ["wedding", "grooms", "families", "chaos", "stage", "bride", "photos", "laughter", "solution"],
        "userSelection": [],
        "story": "The grand Indian wedding was a spectacle of colors and joy. But a minor hiccup turned into major chaos. There were two grooms, both named Rahul, both wearing identical sherwanis! During the procession, a mix-up occurred. One Rahul ended up on stage with the wrong bride's family, smiling for photos. The other Rahul, meanwhile, was frantically searching for his own ceremony. The families, initially bewildered, soon realized the hilarious blunder. Frantic whispers turned into loud exclamations. The brides, initially confused, burst into laughter. It took twenty minutes, a lot of shouting, and a quick swap on the stage to sort out the mess. The wedding became legendary, not just for its grandeur, but for the great groom mix-up, providing endless laughter and a truly unforgettable solution."
    },
    {
        "title": "The Bollywood Dance-Off",
        "summary": "A shy office worker is dragged into an impromptu Bollywood dance-off at a company party. His awkward moves and unexpected flair turn him into a comical, accidental star, much to everyone's amusement.",
        "hints": ["party", "worker", "music", "dance", "moves", "stage", "crowd", "laughter", "star"],
        "userSelection": [],
        "story": "Rohan, a notoriously shy office worker, dreaded the annual company party, especially the inevitable Bollywood dance-off. He tried to blend into the crowd, nursing a lukewarm juice. But his colleagues had other plans. Soon, he was dragged onto the makeshift stage as the music blared. His initial moves were stiff, awkward, resembling a robot attempting the 'Naagin' dance. The crowd chuckled. Then, something shifted. The music's rhythm seemed to possess him. He unleashed a series of unexpected, flamboyant moves, spinning and jumping with surprising flair. His tie flew off, his hair became disheveled, but he danced with pure, unadulterated joy. The crowd erupted in cheers and laughter. Rohan, the accidental dance star, bowed, red-faced but beaming. He might not have won the dance-off, but he definitely won the party, becoming an instant legend."
    },
    {
        "title": "The Great Indian Train Journey",
        "summary": "A family embarks on a long Indian train journey, expecting peace. Instead, they face a series of comical mishaps: a misplaced ticket, a noisy co-passenger, and a runaway snack, turning their trip into an absurd adventure.",
        "hints": ["train", "journey", "family", "ticket", "co-passenger", "snack", "berth", "laughter", "adventure"],
        "userSelection": [],
        "story": "The Sharma family embarked on their long-awaited train journey across India, expecting a peaceful trip. Mrs. Sharma, ever organized, had packed enough snacks for an army. The first hiccup: Uncle Ramesh couldn't find his ticket. A frantic search ensued, involving emptying bags and rummaging under seats. Then, their co-passenger, a man with an incredibly loud phone conversation, began narrating his entire life story. Just as peace seemed to settle, a rogue monkey snatched little Priya's banana from the open window, leading to a comical chase down the aisle. The family's neat berth became a chaotic mess of luggage and giggles. By the time they reached their destination, they were exhausted but full of laughter. Their 'peaceful' journey had been an absurd, unforgettable adventure, far more entertaining than any movie."
    }
]
return easyStories;
}

function getMediumStories(){
    let mediumStories = [
            {
        "title": "Biryani Gone Bonkers",
        "summary": "A family's highly anticipated, delicious biryani mysteriously vanishes from the fridge, sparking a hilarious and chaotic investigation. Suspicion falls on various eccentric relatives and a very guilty-looking family pet, ultimately leading to a surprising, messy, and utterly comical culprit who clearly enjoyed their secret feast.",
        "hints": ["fridge", "aunt", "dog", "clues", "kitchen", "nap", "sauce", "culprit", "aroma", "pot", "grin"],
        "userSelection": [],
        "story": "The tantalizing aroma of freshly made biryani filled every corner of the Sharma household, promising a grand feast for the entire family. But when Auntie Meena, the culinary queen, went to retrieve the prized pot from the fridge, it was astonishingly gone! A chaotic family emergency meeting was immediately called. Uncle Rajesh, notorious for his sneaky midnight snacks, was the very first suspect. Then, little Rohan, with a mischievous twinkle in his eye, pointed accusingly at their Golden Retriever, Buddy, who was sporting a suspicious orange smudge on his nose. The kitchen instantly transformed into a hilarious crime scene, with everyone frantically searching for clues. Buddy, trying his absolute best to look innocent, kept comically licking his paws. Finally, a clear trail of rice and a half-eaten chicken leg led directly to Buddy's favorite napping spot under the dining table. He'd clearly enjoyed his solo feast, leaving a very messy trail of evidence and a gloriously guilty grin."
    },
    {
        "title": "Delhi Auto-Rickshaw Disaster",
        "summary": "A tourist's simple auto-rickshaw ride in bustling Delhi rapidly devolves into a hilariously chaotic adventure. A comical misunderstanding with the overly enthusiastic driver, a series of bizarre wrong turns, and absurd detours through unexpected parts of the city ultimately lead to a completely unplanned, yet surprisingly delightful and unforgettable, destination.",
        "hints": ["auto", "driver", "map", "market", "cow", "turn", "route", "destination", "laughter", "hotel", "wedding"],
        "userSelection": [],
        "story": "Fresh off the plane and brimming with excitement, Sarah hailed an auto-rickshaw in Delhi, eager for a simple ride to her pre-booked hotel. 'Connaught Place, please!' she chirped, pointing vaguely. The auto driver, with a grand, confident flourish, nodded enthusiastically. Soon, it became alarmingly clear they were not on any familiar route. The auto veered wildly through a bustling, vibrant market, narrowly missing a sacred cow with a loud honk. Sarah pulled out her map, looking increasingly bewildered and confused. The driver, oblivious to her growing panic, kept gesturing wildly and muttering in rapid Hindi. After a particularly sharp turn that nearly ejected her from the seat, Sarah realized with a jolt that they were at a loud, colorful wedding! The driver, beaming proudly, announced, 'Best biryani here, madam!' Sarah, utterly bewildered but finding the situation incredibly amusing, burst into uncontrollable laughter. Her simple ride had become an unforgettable, albeit wildly unplanned, adventure to a very lively, and deliciously unexpected, destination."
    },
    {
        "title": "The Tangled Saree Surprise",
        "summary": "A groom's foreign best man, determined to embrace local culture, bravely attempts to wear a traditional Indian saree for the wedding ceremony. His increasingly hilarious struggles with the intricate drapes and stubborn pleats lead to a truly memorable, tangled disaster. This comical spectacle provides endless amusement and unforgettable moments for all the wedding guests, solidifying his place in family lore.",
        "hints": ["saree", "best man", "wedding", "pleats", "fabric", "mirror", "guests", "laughter", "photos", "groom", "tutorials"],
        "userSelection": [],
        "story": "Tom, the groom's foreign best man, decided to pull off a grand surprise at the Indian wedding by wearing a traditional saree. 'What could possibly go wrong?' he mused confidently. He found a vibrant silk saree and, armed with determination, consulted countless YouTube tutorials. His first attempt involved him getting hopelessly tangled in yards of shimmering fabric, resembling a brightly colored mummy more than a dapper best man. He wrestled fiercely with the stubborn pleats in front of the full-length mirror, muttering exasperatedly to himself in English. Sweat beaded on his forehead, threatening to ruin his meticulously styled hair. Just as he thought he had finally mastered it, he tripped over the loose end, sending him sprawling onto the bed in a magnificent heap of silk. The bride walked in at that precise moment, stifling her uncontrollable laughter. By the time the wedding ceremony finally started, he was wearing a perfectly draped, but clearly stressed, saree, providing endless amusement and hilariously candid photos for all the guests."
    },
    {
        "title": "Mango Mayhem Mayhem",
        "summary": "A family's highly anticipated annual mango-eating competition quickly descends into uproarious, sticky chaos. Overly enthusiastic relatives, flying fruit pulp, and a series of comical, messy mishaps transform the sweet summer event into an unforgettable, full-blown battle of wills and sticky hands, leaving everyone covered in delicious evidence and roaring with laughter.",
        "hints": ["mangoes", "family", "competition", "pulp", "faces", "laughter", "winner", "mess", "summer", "bib", "juice"],
        "userSelection": [],
        "story": "It was the annual summer mango-eating competition at the bustling Gupta household, a cherished tradition revered by all. Ten perfectly ripe, juicy mangoes sat gleaming on the table, ready for the onslaught. Little Arjun, armed with an oversized bib, was surprisingly competitive for his age. The whistle blew, and instant, glorious chaos erupted. Mango pulp flew through the air like yellow projectiles, sticky juice dripped down chins and onto clothes, and every single face was smeared with bright yellow. Auntie Renu, usually so prim and proper, had a streak of pulp conspicuously on her forehead. Uncle Suresh, in a bold attempt to eat two mangoes at once, comically choked on a seed. The uproarious laughter was louder than the slurping and chewing combined. In the end, no clear winner emerged from the sticky melee, only a room full of delightfully sticky, thoroughly satisfied, and utterly messy family members. The competition was a glorious, sticky, sweet disaster, a perfect, unforgettable memory of summer."
    },
    {
        "title": "The Dhokla Disappearance",
        "summary": "A lively house party takes an unexpected and utterly comical turn when the highly anticipated star dish, a meticulously prepared plate of homemade dhokla, mysteriously vanishes from the snack table. A self-appointed 'food detective' leads a silly, yet determined, investigation, ultimately uncovering a truly unexpected and adorably furry culprit, much to the amusement of all the bewildered guests.",
        "hints": ["party", "dhokla", "plate", "detective", "clues", "guest", "dog", "crumbs", "culprit", "table", "laughter"],
        "userSelection": [],
        "story": "The house party was in full swing, music blaring and conversations buzzing, but a sudden crisis loomed: the star dish, Auntie Preeti's famous homemade dhokla, had inexplicably vanished from the snack table! A collective gasp went through the bewildered guests. Little Maya, with a serious expression and hands on her hips, immediately declared herself 'Food Detective,' and began her silly, yet determined, investigation. She quickly found a suspicious trail of tiny orange crumbs leading directly under the sofa. The primary suspect was Uncle Bharat, notorious for his stealthy snacking habits. But then, a very suspicious bulge was spotted under the living room rug. Maya, with a dramatic flourish, pulled it back to reveal not Uncle Bharat, but the family dog, Moti, looking incredibly guilty, with a single, fluffy piece of dhokla stuck to his nose. The mystery was instantly solved, much to the uproarious amusement and laughter of all the party guests, and Moti was officially, and comically, declared the 'Dhokla Thief.'"
    },
    {
        "title": "Cricket Chaos Craze",
        "summary": "A friendly neighborhood cricket match, intended for leisurely fun, rapidly devolves into hilarious, uncontrollable chaos. Overly enthusiastic players, a series of unexpected and comical interruptions, and a string of absurd mishaps transform the simple game into an unforgettable, messy, and utterly spectacular event, leaving everyone in stitches.",
        "hints": ["match", "cricket", "ball", "player", "window", "neighbor", "dog", "rules", "laughter", "pitch", "spectacle"],
        "userSelection": [],
        "story": "The neighborhood cricket match was supposed to be a friendly, leisurely affair, but competitive spirits ran surprisingly high from the very first ball. Rahul, known for his wild, unpredictable swings, hit the inaugural ball. It sailed not towards the boundary, but straight through Mrs. Sharma's pristine kitchen window! A collective groan, followed by stifled giggles, went through the players. Mrs. Sharma, a formidable neighbor with a reputation for strictness, appeared at her door, brandishing a rolling pin like a weapon. The game instantly paused in terrified silence. Then, as if on cue, a stray dog suddenly ran onto the pitch, grabbed the cricket ball, and made a comical dash for it. The players, abandoning the match entirely, began a hilarious, disorganized chase after the dog. The rules were completely forgotten amidst the uproarious laughter and shouts. The cricket match ended not with a victory or defeat, but with a broken window, a very happy dog, and a story that would be told and retold for years, a truly chaotic and unforgettable spectacle."
    },
    {
        "title": "The Great Rickshaw Race",
        "summary": "Two fiercely rival auto-rickshaw drivers, both vying intensely for the same foreign passenger, inadvertently engage in a comical, high-stakes race through the incredibly crowded and vibrant city streets. Their absurd antics, competitive spirit, and disregard for traffic rules lead to a hilariously chaotic and utterly memorable journey for their bewildered fare.",
        "hints": ["rickshaw", "drivers", "passenger", "race", "streets", "horns", "pedestrians", "market", "winner", "auto", "journey"],
        "userSelection": [],
        "story": "Old Man Sharma and young Raju, two fiercely rival auto-rickshaw drivers, spotted the same foreign passenger hailing from the curb. 'My auto is faster, sahib!' shouted Raju, revving his engine. 'Mine is a classic, built for comfort!' retorted Sharma, with a disdainful sniff. A silent, unspoken challenge was instantly issued between them. What followed was an utterly comical rickshaw race through the incredibly crowded and vibrant city streets. They expertly (and dangerously) weaved through dense traffic, their horns blaring like a chaotic symphony. Pedestrians scattered in their wake, market vendors yelled in exasperation, and a bewildered sacred cow watched their absurd antics pass by. Sharma took a daring shortcut through a ridiculously narrow alley, nearly getting his auto stuck. Raju tried to overtake him, only to get frustratingly caught behind a slow-moving truck. The passenger, initially terrified by the reckless driving, soon burst into uncontrollable laughter at the sheer absurdity of the situation. They arrived at the destination neck and neck, covered in dust, neither a clear winner, but providing the city with an unforgettable, hilariously chaotic journey."
    },
    {
        "title": "Wedding Grooms Gone Wild",
        "summary": "A massive, elaborate Indian wedding descends into comical, utter confusion when two grooms, dressed in identical attire, are accidentally swapped during the chaotic procession. The ensuing pandemonium involves bewildered families, frantic and loud searches, and a hilariously awkward resolution, making the wedding legendary for all the wrong, yet amusing, reasons.",
        "hints": ["wedding", "grooms", "families", "chaos", "stage", "bride", "photos", "laughter", "solution", "sherwanis", "procession"],
        "userSelection": [],
        "story": "The grand Indian wedding was a magnificent spectacle of vibrant colors, joyous music, and overwhelming excitement. But a minor hiccup quickly escalated into major, unforgettable chaos. There were two grooms, both named Rahul, and both, to everyone's utter dismay, were wearing absolutely identical sherwanis! During the elaborate procession, a comical mix-up occurred amidst the drumming and dancing. One Rahul somehow ended up on the main stage with the wrong bride's family, smiling innocently for photos. The other Rahul, meanwhile, was frantically searching through the bewildered crowd for his own ceremony, utterly confused. The families, initially bewildered and then horrified, soon realized the hilarious blunder. Frantic whispers turned into loud, exasperated exclamations and pointing fingers. The brides, initially confused and a little annoyed, eventually burst into uncontrollable laughter at the absurdity. It took a full twenty minutes, a lot of shouting, and a very quick, awkward swap on the stage to finally sort out the glorious mess. The wedding became legendary, not just for its grandeur, but for the truly great groom mix-up, providing endless laughter and a truly unforgettable, albeit chaotic, solution."
    },
    {
        "title": "Bollywood Dance-Off Debacle",
        "summary": "A notoriously shy office worker finds himself unwillingly dragged into an impromptu Bollywood dance-off at a company party. His initially awkward, stiff moves and comical attempts soon give way to an unexpected burst of flamboyant flair. This transformation turns him into a hilarious, accidental star, much to everyone's uproarious amusement, creating a legendary moment in company history.",
        "hints": ["party", "worker", "music", "dance", "moves", "stage", "crowd", "laughter", "star", "robot", "tie"],
        "userSelection": [],
        "story": "Rohan, a notoriously shy office worker, dreaded the annual company party, especially the inevitable, dreaded Bollywood dance-off. He tried desperately to blend into the background, nursing a lukewarm juice and avoiding eye contact. But his boisterous colleagues had other, more entertaining plans for him. Soon, he was unwillingly dragged onto the makeshift stage as the loud, pulsating music blared. His initial dance moves were stiff, incredibly awkward, resembling a rusty robot attempting the 'Naagin' dance. The crowd politely chuckled. Then, something inexplicable shifted within him. The music's infectious rhythm seemed to possess his very soul. He unleashed a series of completely unexpected, flamboyant moves, spinning wildly and jumping with surprising, uncharacteristic flair. His tie flew off, his hair became comically disheveled, but he danced with pure, unadulterated joy. The crowd erupted in thunderous cheers and uproarious laughter. Rohan, the accidental dance star, bowed, red-faced but beaming with newfound confidence. He might not have won the official dance-off, but he definitely won the party, becoming an instant legend in company lore."
    },
    {
        "title": "The Crazy Train Trip",
        "summary": "A family embarks on a long Indian train journey, hoping for peace and quiet. Instead, they are met with a series of increasingly comical and absurd mishaps: a perpetually misplaced ticket, a boisterous co-passenger with endless stories, and a mischievous, runaway snack thief. Their 'peaceful' trip quickly transforms into an unforgettable, chaotic, and utterly hilarious adventure.",
        "hints": ["train", "journey", "family", "ticket", "co-passenger", "snack", "berth", "laughter", "adventure", "monkey", "aisle"],
        "userSelection": [],
        "story": "The Sharma family embarked on their long-awaited train journey across India, expecting a peaceful, serene trip filled with quiet contemplation. Mrs. Sharma, ever the meticulous organizer, had packed enough snacks for an entire army. The very first hiccup arrived swiftly: Uncle Ramesh couldn't find his ticket anywhere! A frantic, chaotic search ensued, involving emptying bags onto the floor and rummaging desperately under all the seats. Then, their co-passenger, a man with an incredibly loud phone conversation, began narrating his entire life story to an unseen listener, much to the family's growing exasperation. Just as a semblance of peace seemed to settle over their compartment, a rogue monkey, with lightning speed, snatched little Priya's banana directly from the open window, leading to a comical chase down the train aisle. The family's once-neat berth quickly became a chaotic mess of luggage, discarded wrappers, and uncontrollable giggles. By the time they finally reached their destination, they were utterly exhausted but brimming with laughter. Their 'peaceful' journey had been an absurd, unforgettable adventure, far more entertaining than any movie they could have watched."
    }
    ]

    return mediumStories;
}


export {getEasyStories ,getMediumStories};