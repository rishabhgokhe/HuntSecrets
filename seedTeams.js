import mongoose from "mongoose";
import TeamData from "./models/SecondaryTeam.js";
`1`;
const teams = [
  {
    teamId: "team001",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "dr0IC8pL",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I can paddle without hands, float without a raft, and some of my kind hunt in water. Who am I?",
        options: ["Dog", "Tiger", "Elephant", "Horse"],
        answer: "Horse",
        hint: "Na tyre, na rail par chalti hoon, Floor se floor tak tum le jaati hoon. Button dabte hi khulti meri dehleez, Guess karo, main kaun hoon is CSE ki breeze?",
      },
      {
        value: "LKKBoDUy",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "In C programming, what is the correct output type for sizeof('A') on a 64-bit GCC compiler?",
        options: ["1", "4", "8", "Depends on flags"],
        answer: "4",
        hint: "Na kitab, na board, bas comfort yahan, Friends ke saath guzar jaate breaks ke raan. Khushbu se pehchano is jagah ka naam, Har break ka main intezaam.",
      },
      {
        value: "YDDm505s",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Decode the given into correct word: 'isntel'?",
        options: ["listen", "silent", "tinsel", "enlist"],
        answer: "silent",
        hint: "Shor se door, shanti ka asra, Haathon mein judta sab ka basera. Ghanti ki goonj, sukh ka pal, Kaun si jagah banaye mann nirmal?",
      },
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          'The game "X of Y," also searchable on Google as the "Y Number," involves linking actor Y to other actors through their film roles. What is this game commonly called?',
        options: [
          "The Marlon Brando Method",
          "The Hollywood Chain",
          "Six Degrees of Kevin Bacon",
          "The Charlie Chaplin Effect",
        ],
        answer: "Six Degrees of Kevin Bacon",
        hint: "Lohe aur machines ka ghar, Yahan hoti soch ko roop asar. Chingari, grease aur tools ka mela, Kaun si jagah kaam kare har bela?",
      },
      {
        value: "62tMOzMe",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "In Python, what will 0.1 + 0.2 == 0.3 return?",
        options: ["TRUE", "FALSE", "Float precision", "Error"],
        answer: "FALSE",
        hint: "Samne se nahi, par piche se hai raasta, Beaker, flask aur pipette ka hai yeh basta. Experiments aur theory ka hai yeh saathi, Batao kaun si jagah hai chemistry ki baathi?",
      },
      {
        value: "b5X7r9yG",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I can be eaten raw, made into juice, and some call me a berry (though I'm not). Which am I?",
        options: ["Tomato", "Banana", "Mango", "Avocado"],
        answer: "Banana",
        hint: "Building ke side, choti si jagah, Gaadiyaan khadi hoti, machine se ghoomti sab yahaan. Main khud na chalun, par gaadiyaan move karu, Batao main kaun hoon?",
      },
      {
        value: "hqYUOqVZ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Which sorting algorithm has the best average case complexity among these for large datasets in practical use?",
        options: ["Merge Sort", "Tim Sort", "Heap Sort", "Quick Sort"],
        answer: "Tim Sort",
        hint: "Completed",
      },
    ],
  },
  {
    teamId: "team002",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "LKKBoDUy",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "In Python, what will 0.1 + 0.2 == 0.3 return?",
        options: ["TRUE", "FALSE", "Float precision", "Error"],
        answer: "FALSE",
        hint: "Shor se door, shanti ka asra, Haathon mein judta sab ka basera. Ghanti ki goonj, sukh ka pal, Kaun si jagah banaye mann nirmal?",
      },
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Which of these is the optimal storage unit for dreams about passing all exams?",
        options: [
          "Non-Volatile Ambition Memory",
          "Random Access Hope Storage",
          "Sequential Aspiration Buffer",
          "Cloud-Based Grade Repository",
        ],
        answer: "Cloud-Based Grade Repository",
        hint: "CSE ke auditorium ke side, badi si jagah, Gaadiyaan khadi, machine se ghoomti sab yahaan. Main khud na chalun, par har gaadi ka raasta banaun, Batao main kaun hoon?",
      },
      {
        value: "qJwZa4NJ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Decode the given into correct word: 'opst'?",
        options: ["post", "spot", "stop", "tops"],
        answer: "tops",
        hint: "Naap, tol aur design ka khel yahan hota, (Mandir ke paas, jahan students buildings ke models banate hain) Batao kaun si jagah hai yeh?",
      },
      {
        value: "VsuvZOXK",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I'm a silent river for electricity; jewelry loves me, wires need me. Which am I?",
        options: ["Copper", "Gold", "Silver", "Aluminium"],
        answer: "Copper",
        hint: "Na library, na canteen stall, Class aur guests ke saath mera hall. Mic aur stage, taaliyon ka jahan, Kaun hoon main, batao yahan?",
      },
      {
        value: "dr0IC8pL",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "A student encrypts their notes using “Procrastination Cipher v3.0.” What's the decryption key?",
        options: [
          "Deadline Anxiety Constant",
          "Sleep Deprivation Hash",
          "Coffee Consumption Index",
          "Last-Minute Miracle Code",
        ],
        answer: "Last-Minute Miracle Code",
        hint: "Na kitab, na board, bas comfort yahan, Friends ke saath guzar jaate breaks ke raan. Khushbu se pehchano is jagah ka naam, Har break ka main intezaam.",
      },
      {
        value: "YDDm505s",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Decode the given into correct word: 'cinema'?",
        options: ["cinema", "anemic", "iceman", "amine"],
        answer: "iceman",
        hint: "Lohe aur machines ka ghar, Yahan hoti soch ko roop asar. Chingari, grease aur tools ka mela, Kaun si jagah kaam kare har bela?",
      },
      {
        value: "62tMOzMe",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I bounce, I roll, I fly over nets; I'm the heart of many games. What am I?",
        options: ["Cricket", "Basketball", "Tennis", "Volleyball"],
        answer: "Tennis",
        hint: "Completed",
      },
    ],
  },
  {
    teamId: "team003",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "YDDm505s",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "After describing the diet of penguins, the density of icebergs, and the chemical formula for salt, the passage suddenly mentions that the only thing in the room that opens to let someone leave is made of wood with a handle.",
        options: ["Door", "Window", "Gate", "Cabinet"],
        answer: "Door",
        hint: "Lohe aur machines ka ghar, Yahan hoti soch ko roop asar. Chingari, grease aur tools ka mela, Kaun si jagah kaam kare har bela?",
      },
      {
        value: "62tMOzMe",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          'Originating from a 1999 Nickelodeon episode "I Was a Teenage Gary," these items have been used over 60 times in the series and became popular in Rage Comics. What are they?',
        options: [
          "Krabby Patty Secret Formulas",
          "Plankton's Inventions",
          "SpongeBob Time Cards",
          "Squidward's Clarinet Solos",
        ],
        answer: "SpongeBob Time Cards",
        hint: "Naap, tol aur design ka khel yahan hota, (Mandir ke paas, jahan students buildings ke models banate hain) Batao kaun si jagah hai yeh?",
      },
      {
        value: "VsuvZOXK",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Without me you can't live, without me your bones weaken, without me your muscles fade. What am I?",
        options: ["Water", "Calcium", "Iron", "Protein"],
        answer: "Iron",
        hint: "IT department ke samne, screen aur ideas ka mela, Code aur circuits ka yahan hota khela. Seekhne, banane aur dikhane ka hub, Kaun si jagah hai tech lovers ka club?",
      },
      {
        value: "cY4dRNfl",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "In CSS, which selector has the highest specificity?",
        options: [
          "ID selector",
          "Inline style",
          "Class selector",
          "Attribute selector",
        ],
        answer: "Inline style",
        hint: "Na tyre, na rail par chalti hoon, Floor se floor tak tum le jaati hoon. Button dabte hi khulti meri dehleez, Guess karo, main kaun hoon is CSE ki breeze?",
      },
      {
        value: "LKKBoDUy",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Your AI assistant refuses to answer until it's given pizza. Which machine learning model is it running?",
        options: [
          "Convolutional Appetite Network",
          "Recurrent Snack Memory",
          "Generative Hunger Transformer",
          "Support Vector Pizza",
        ],
        answer: "Generative Hunger Transformer",
        hint: "Shor se door, shanti ka asra, Haathon mein judta sab ka basera. Ghanti ki goonj, sukh ka pal, Kaun si jagah banaye mann nirmal?",
      },
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "A discussion begins about art history, digresses into train timetables, explores volcanic rock types, and then nonchalantly mentions that the rectangular transparent thing you can look through is made of glass and part of the wall.",
        options: ["Window", "Screen", "Painting", "Mirror"],
        answer: "Window",
        hint: "Samne se nahi, par piche se hai raasta, Beaker, flask aur pipette ka hai yeh basta. Experiments aur theory ka hai yeh saathi, Batao kaun si jagah hai chemistry ki baathi?",
      },
      {
        value: "b5X7r9yG",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I fill the air, I'm light as nothing, yet lift balloons high. Who am I?",
        options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"],
        answer: "Hydrogen",
        hint: "Completed",
      },
    ],
  },
  {
    teamId: "team004",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I fly on flags, proud in crimson; my color stands for blood, courage, or luck. Who am I?",
        options: ["Canada", "Japan", "China", "Switzerland"],
        answer: "Canada",
        hint: "Samne se nahi, par piche se hai raasta, Beaker, flask aur pipette ka hai yeh basta. Experiments aur theory ka hai yeh saathi, Batao kaun si jagah hai chemistry ki baathi?",
      },
      {
        value: "b5X7r9yG",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "In Git, what does git reset --hard HEAD~1 do?",
        options: [
          "Deletes last commit permanently",
          "Removes commit but keeps changes",
          "Moves HEAD but keeps files",
          "Reverts commit with new commit",
        ],
        answer: "Deletes last commit permanently",
        hint: "Building ke side, choti si jagah, Gaadiyaan khadi hoti, machine se ghoomti sab yahaan. Main khud na chalun, par gaadiyaan move karu, Batao main kaun hoon?",
      },
      {
        value: "hqYUOqVZ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "While elaborating on ocean currents, the boiling point of water, and the evolution of amphibians, a single remark indicates that the object that keeps you dry in rain has a collapsible canopy.",
        options: ["Umbrella", "Raincoat", "Tent", "Tarp"],
        answer: "Umbrella",
        hint: "CSE ke auditorium ke side, choti si jagah, Gaadiyaan khadi, machine se ghoomti sab yahaan. Main khud na chalun, par har gaadi ka raasta banaun, Batao main kaun hoon?",
      },
      {
        value: "qJwZa4NJ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Inspired by Swami Dayanand Saraswati and pioneered by Lala Hansraj in Lahore in 1886, this network of over 780 educational institutions blends Indian values with modern technology. What is it?",
        options: [
          "Kendriya Vidyalayas",
          "Delhi Public Schools (DPS)",
          "Ryan International Schools",
          "D.A.V. (Dayanand Anglo-Vedic) Schools",
        ],
        answer: "D.A.V. (Dayanand Anglo-Vedic) Schools",
        hint: "Na library, na canteen stall, Class aur guests ke saath mera hall. Mic aur stage, taaliyon ka jahan, Kaun hoon main, batao yahan?",
      },
      {
        value: "dr0IC8pL",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I breathe air, feed milk to my young, and live in water, sky, or land. What am I?",
        options: ["Dolphin", "Bat", "Human", "Whale"],
        answer: "Whale",
        hint: "Naap, tol aur design ka khel yahan hota, (Mandir ke paas, jahan students buildings ke models banate hain) Batao kaun si jagah hai yeh?",
      },
      {
        value: "VsuvZOXK",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Which data structure is most efficient for implementing a priority queue?",
        options: ["Stack", "Heap", "Linked List", "BST"],
        answer: "Heap",
        hint: "Na kitab, na board, bas comfort yahan, Friends ke saath guzar jaate breaks ke raan. Khushbu se pehchano is jagah ka naam, Har break ka main intezaam.",
      },
      {
        value: "YDDm505s",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "The narrative overexplains traffic patterns, jet engine thrust, and the shape of Saturn's rings before revealing in passing that the footwear you're wearing now is laced.",
        options: ["Slippers", "Sandals", "Shoes", "Boots"],
        answer: "Shoes",
        hint: "Completed",
      },
    ],
  },
  {
    teamId: "team005",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "62tMOzMe",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I hum when plucked, sing when bowed, and can make a whole room dance. Who am I?",
        options: ["Guitar", "Violin", "Sitar", "Harp"],
        answer: "Guitar",
        hint: "Building ke side, choti si jagah, Gaadiyaan khadi hoti, machine se ghoomti sab yahaan. Main khud na chalun, par gaadiyaan move karu, Batao main kaun hoon?",
      },
      {
        value: "hqYUOqVZ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "In Python, which module is used for decimal fixed-point and floating-point arithmetic with exact precision?",
        options: ["math", "decimal", "fractions", "bigfloat"],
        answer: "decimal",
        hint: "Na library, na canteen stall, Class aur guests ke saath mera hall. Mic aur stage, taaliyon ka jahan, Kaun hoon main, batao yahan?",
      },
      {
        value: "dr0IC8pL",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "The passage discusses weather vanes, the history of typewriters, and the role of sugar in baking, then slips in the fact that you just placed your coffee on a flat horizontal surface in front of you.",
        options: ["Chair", "Table", "Shelf", "Floor"],
        answer: "Table",
        hint: "Na tyre, na rail par chalti hoon, Floor se floor tak tum le jaati hoon. Button dabte hi khulti meri dehleez, Guess karo, main kaun hoon is CSE ki breeze?",
      },
      {
        value: "LKKBoDUy",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Derived from the Latin for 'a bundle of sticks,' this word was associated with an ancient Roman symbol of authority (rods tied around an axe) and came to represent a political ideology. What is the word?",
        options: ["Communism", "Fascism", "Socialism", "Syndicalism"],
        answer: "Fascism",
        hint: "IT department ke samne, screen aur ideas ka mela, Code aur circuits ka yahan hota khela. Seekhne, banane aur dikhane ka hub, Kaun si jagah hai tech lovers ka club?",
      },
      {
        value: "cY4dRNfl",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Which SQL clause is executed first logically?",
        options: ["SELECT", "FROM", "WHERE", "GROUP BY"],
        answer: "FROM",
        hint: "Shor se door, shanti ka asra, Haathon mein judta sab ka basera. Ghanti ki goonj, sukh ka pal, Kaun si jagah banaye mann nirmal?",
      },
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "A labyrinthine explanation of the postal system, mountain climbing, and bird anatomy eventually remarks that the item used to cut paper has two metal blades joined at a pivot.",
        options: ["Knife", "Scissors", "Cutter", "Razor"],
        answer: "Scissors",
        hint: "Samne se nahi, par piche se hai raasta, Beaker, flask aur pipette ka hai yeh basta. Experiments aur theory ka hai yeh saathi, Batao kaun si jagah hai chemistry ki baathi?",
      },
      {
        value: "b5X7r9yG",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "In the 1958 FIFA World Cup, Brazilian manager Vicente Feola told his team to get the ball to player X, who then created 'the greatest three minutes of football.' Who was X, often called the greatest dribbler ever?",
        options: ["Pelé", "Didi", "Vavá", "Garrincha"],
        answer: "Garrincha",
        hint: "Completed",
      },
    ],
  },
  {
    teamId: "team006",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "b5X7r9yG",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I'm a blanket in the sky, sometimes fluffy, sometimes thin as silk. What am I?",
        options: ["Cirrus", "Cumulus", "Stratus", "Nimbus"],
        answer: "Nimbus",
        hint: "Naap, tol aur design ka khel yahan hota, (Mandir ke paas, jahan students buildings ke models banate hain) Batao kaun si jagah hai yeh?",
      },
      {
        value: "VsuvZOXK",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "Which algorithm is used in public key cryptography?",
        options: ["AES", "RSA", "SHA-256", "MD5"],
        answer: "RSA",
        hint: "Shor se door, shanti ka asra, Haathon mein judta sab ka basera. Ghanti ki goonj, sukh ka pal, Kaun si jagah banaye mann nirmal?",
      },
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "The narrative drifts through stories about famous painters, the anatomy of frogs, and the structure of snowflakes before mentioning the object that lets you see in the dark with a battery-powered beam.",
        options: ["Flashlight", "Lamp", "Candle", "Torch"],
        answer: "Flashlight",
        hint: "Na kitab, na board, bas comfort yahan, Friends ke saath guzar jaate breaks ke raan. Khushbu se pehchano is jagah ka naam, Har break ka main intezaam.",
      },
      {
        value: "YDDm505s",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "During the Battle of Britain, the government popularized a myth to hide its new radar technology, which was the real reason for RAF pilots' improved night-time success. What was the myth?",
        options: [
          "The pilots had genetically superior eyesight",
          "Eating carrots improves night vision",
          "Their planes were equipped with silent engines",
          "They were guided by trained owls",
        ],
        answer: "Eating carrots improves night vision",
        hint: "CSE ke auditorium ke side, choti si jagah, Gaadiyaan khadi, machine se ghoomti sab yahaan. Main khud na chalun, par har gaadi ka raasta banaun, Batao main kaun hoon?",
      },
      {
        value: "qJwZa4NJ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I leave a trail of words wherever I touch; I can be ink, graphite, dust, or dye. Who am I?",
        options: ["Pen", "Pencil", "Chalk", "Marker"],
        answer: "Marker",
        hint: "Na library, na canteen stall, Class aur guests ke saath mera hall. Mic aur stage, taaliyon ka jahan, Kaun hoon main, batao yahan?",
      },
      {
        value: "dr0IC8pL",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question: "In IPv6, how many bits are in an address?",
        options: ["32", "64", "128", "256"],
        answer: "128",
        hint: "Lohe aur machines ka ghar, Yahan hoti soch ko roop asar. Chingari, grease aur tools ka mela, Kaun si jagah kaam kare har bela?",
      },
      {
        value: "62tMOzMe",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "A drawn-out commentary on energy conservation, Shakespearean plays, and bicycle gears eventually hints that the only moving vehicle in the driveway has four wheels.",
        options: ["Car", "Bicycle", "Bus", "Tractor"],
        answer: "Car",
        hint: "Completed",
      },
    ],
  },
  {
    teamId: "team007",
    qrId: "Oj5PLQr6",
    penaltyUntil: null,
    codes: [
      {
        value: "hqYUOqVZ",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "Club 33 is an exclusive private club first opened in 1967. It was notably the only location within this larger establishment (X) to serve alcohol. What is X?",
        options: ["Universal Studios", "Six Flags", "SeaWorld", "Disneyland"],
        answer: "Disneyland",
        hint: "IT department ke samne, screen aur ideas ka mela, Code aur circuits ka yahan hota khela. Seekhne, banane aur dikhane ka hub, Kaun si jagah hai tech lovers ka club?",
      },
      {
        value: "cY4dRNfl",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I'm indivisible by all but one and myself, and I'm proud to be odd. Who am I?",
        options: ["2", "3", "5", "7"],
        answer: "5",
        hint: "Naap, tol aur design ka khel yahan hota, (Mandir ke paas, jahan students buildings ke models banate hain) Batao kaun si jagah hai yeh?",
      },
      {
        value: "VsuvZOXK",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "The text moves between cloud seeding, sewing techniques, and Mars exploration, before saying that the object strapped on your shoulder carries books.",
        options: ["Satchel", "Suitcase", "Backpack", "Tote"],
        answer: "Backpack",
        hint: "Na library, na canteen stall, Class aur guests ke saath mera hall. Mic aur stage, taaliyon ka jahan, Kaun hoon main, batao yahan?",
      },
      {
        value: "dr0IC8pL",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "In Python, which statement is used to manually raise an exception?",
        options: ["throw", "raise", "except", "assert"],
        answer: "raise",
        hint: "Na tyre, na rail par chalti hoon, Floor se floor tak tum le jaati hoon. Button dabte hi khulti meri dehleez, Guess karo, main kaun hoon is CSE ki breeze?",
      },
      {
        value: "LKKBoDUy",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "The story spans the invention of the wheel, color theory, and famous waterfalls, but slips in a remark about the object on the desk that moves a cursor on a screen.",
        options: ["Mouse", "Keyboard", "Trackpad", "Joystick"],
        answer: "Mouse",
        hint: "Na kitab, na board, bas comfort yahan, Friends ke saath guzar jaate breaks ke raan. Khushbu se pehchano is jagah ka naam, Har break ka main intezaam.",
      },
      {
        value: "YDDm505s",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "I'm perfectly balanced in my sides, wearing symmetry like a crown. Who am I?",
        options: [
          "Square",
          "Rhombus",
          "Equilateral Triangle",
          "Regular Pentagon",
        ],
        answer: "Rhombus",
        hint: "Shor se door, shanti ka asra, Haathon mein judta sab ka basera. Ghanti ki goonj, sukh ka pal, Kaun si jagah banaye mann nirmal?",
      },
      {
        value: "tyRKA5ZM",
        scanned: false,
        scannedAt: null,
        timeOnly: null,
        question:
          "After talking about desert ecosystems, electric circuits, and origami folding, a casual line says that the only wearable object showing numerals is on your wrist.",
        options: ["Watch", "Bracelet", "Ring", "Locket"],
        answer: "Watch",
        hint: "Completed",
      },
    ],
  },
];

async function insertTeams() {
  try {
    const MONGO_URI = "";
    if (!MONGO_URI) throw new Error("Missing MONGO_URI in environment");

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected");

    await TeamData.deleteMany({});
    console.log("🗑 Existing team data cleared");

    await TeamData.insertMany(teams);
    console.log("✅ Teams inserted successfully");

    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error inserting teams:", error);
    await mongoose.disconnect();
  }
}

insertTeams();
