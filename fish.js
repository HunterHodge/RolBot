exports.fish = environment => {
  environment = environment[1].toLowerCase();
  switch (
    environment //environment adjustment
  ) {
    case "sea":
      environment = "ocean";
      break;
    case "pond":
      environment = "lake";
      break;
    case "creek":
      environment = "river";
      break;
  }

  const arr = possibilities[environment];
  if (!arr) return `Error: ${environment} is not an environment`;
  const roll = Math.round(Math.random() * 20);
  if (roll <= 10) {
    const failState = [
      `got pulled into the water(Critical Fail)`, //template literal in case critical failure function is ever made
      "was pulled into the water",
      "got their pole pulled into the water",
      "got their hook caught in a plant",
      "didn't get a bite",
      "got a nibble but no bites",
      "got a fish on the hook but it quickly got off",
      "got a fish on the hook but it got away after some struggle",
      "had a fish escape at the shoreline"
    ];
    return failState[Math.floor(Math.random() * failState.length)];
  } else {
    const successTier = [
      "barely caught a ",
      "had trouble catching a ",
      "caught a ",
      "easily caught a ",
      "with little resistance, caught a "
    ];
    return `${successTier[Math.floor(Math.random() * successTier.length)]} ${arr[Math.floor(Math.random() * arr.length)]}`;
  }
};
const possibilities = {
  river: [
    "Bullhead",
    "Barbot",
    "Carp",
    "Chub",
    "Dace",
    "Eel",
    "Flounder",
    "Grayling",
    "Gudgeon",
    "Brook Lamprey",
    "Lamprey",
    "Loach",
    "Minnow",
    "Perch",
    "Pike",
    "Roach",
    "Rudd",
    "Ruffe",
    "Salmon",
    "Sand Eel",
    "Shad",
    "Smelt",
    "Stickleback",
    "Sturgeon",
    "Tench",
    "Trout"
  ],
  lake: [
    "Chub",
    "Brook Trout",
    "Lake Herring",
    "Cisco",
    "Common Shiner",
    "Creek Chub",
    "Deepwater Sculpin",
    "Emerald Shiner",
    "Johnny Darter",
    "Kiyi",
    "Lake Chub",
    "Lake Sturgeon",
    "Lake Trout",
    "Lake Whitefish",
    "Longnose Dace",
    "Longnose Sucker",
    "Mimic Shiner",
    "Ninespine Stickleback",
    "Northern Pike",
    "Pygmy Whitefish",
    "Rock Vass",
    "Round Whitefish",
    "Sand Shiner",
    "Shorthead Readhorse",
    "Shortjaw Cisco",
    "Silver Readhorse",
    "Slimy Sculpin",
    "Smallmouth Bass",
    "Spoonhead Sculpin",
    "Spottail Shiner",
    "Trout-perch",
    "Walleye",
    "White Sucker",
    "Yellow Perch"
  ],
  ocean: [
    "Atlantic Bluefin Tuna",
    "Atlantic Cod",
    "Atlantic Goliath Grouper",
    "Atlantic Salmon",
    "Atlantic Trumpetfish",
    "Atlantic Wolfish",
    "Banded Butterflyfish",
    "Beluga Sturgeon",
    "Blue Marlin",
    "Blue Tang",
    "Bluebanded Goby",
    "Bluehead Wrasse",
    "Broadclub Cuttlefish",
    "California Grunion",
    "Chilean Common Hake",
    "Chilean Jack Mackerel",
    "Chinook Salmon",
    "Clown Triggerfish",
    "Coelacanth",
    "Common Clownfish",
    "Common Dolphinfish",
    "Common Fangtooth",
    "Flashlightfish",
    "French Angelfish",
    "Guineafowl Puffer",
    "Humpback Anglerfish",
    "John Dory",
    "Leafy Seadragon",
    "Longnose Seahorse",
    "Mexican Lookdown",
    "Nassau Grouper",
    "Northern Red Snapper",
    "Oarfish",
    "Ocean Sunfish",
    "Ocean Roughy",
    "Pacific Blackdragon",
    "Pacific Halibut",
    "Pacific Sardine",
    "Patagonian Toothfish",
    "Peruvian Anchoveta",
    "Pink Salmon",
    "Queen Angelfish",
    "Queen Parrotfish",
    "Red Lionfish",
    "Sarcastic Fringehead",
    "Scarlet Frogfish",
    "Scorpionfish",
    "Skipjack Tuna",
    "Slender Snipe Eel",
    "Smalltooth Sawfish",
    "Spotted Moray",
    "Spotted Porkupinefish",
    "Spotted Ratfish",
    "Stonefish",
    "Stoplight Loosejaw",
    "Summer Flounder",
    "Swordfish",
    "Tan Bristlemouth",
    "Threespot Damselfish",
    "Tropical Two-wing Flyingfish",
    "Wahoo",
    "Whiptail Gulper",
    "White-ring Garden Eel",
    "Yellowfin Tuna"
  ],
  // jokes
  ice: ["boot"]
};
