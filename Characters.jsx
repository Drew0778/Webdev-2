const fighterDescriptions = [
  "Alchemist – A greedy melee hero known for his ability to quickly accumulate gold and items.",
  "Axe – A fearsome melee hero who excels at initiating fights and disrupting enemy formations.",
  "Beastmaster – A ranged hero who summons animal companions to fight alongside him.",
  "Brewmaster – A melee hero who splits into three elemental spirits, each with unique abilities.",
  "Bristleback – A melee hero who takes reduced damage from attacks directed at his rear.",
  "Centaur Warrunner – A durable initiator with high burst damage and team mobility.",
  "Chaos Knight – A formidable carry hero who can summon a cavalry of clones to devastate enemy defenses.",
  "Dawnbreaker – A durable melee hero who excels at team fights and global presence.",
  "Doom – A vicious hero who can disable his enemies and scorch them to the ground.",
  "Dragon Knight – A durable melee hero who can transform into a powerful dragon, gaining ranged attacks and splash damage.",
  "Earth Spirit – A versatile initiator with a plethora of crowd control and disruption abilities.",
  "Earthshaker – A melee hero who shapes the battlefield with seismic force, creating impassable terrain and dealing area damage.",
  "Elder Titan – A melee hero who can disrupt enemy formations and reduce their defenses.",
  "Huskar – A ranged hero who becomes more dangerous as his health decreases, capable of diving into fights with high risk and reward",
  "Kunkka – A melee hero who controls the battlefield with area-of-effect spells and crowd control.",
  "Legion Commander – A melee hero who excels at locking down single targets and gaining permanent damage boosts.",
  "Lifestealer – A melee hero who can infest allies or creeps, heal through attacks, and is difficult to kill.",
  "Mars – A melee hero who can control the battlefield with his spear and arena, providing both damage and crowd control.",
  "Night Stalker – A melee hero who becomes significantly stronger at night, capable of silencing and slowing enemies.",
  "Ogre Magi – A durable support hero with strong area-of-effect spells and a chance to multicast abilities.",
  "Omniknight – A Strength hero capable of punishing his enemies and purifying his allies, known for being a valuable support player on the team.",
  "Primal Beast – A melee hero who charges into enemies, disrupting their formations and dealing significant damage.",
  "Pudge – A fan-favorite hero with his iconic Meat Hook, which pulls enemies into dangerous situations.",
  "Slardar – A melee hero who can initiate team fights and bash heroes with his furious strikes.",
  "Spirit Breaker – A melee hero who charges across the map to stun and disrupt enemies, excelling at ganking.",
  "Sven – A melee hero who can stun multiple foes and increase his power to cut down enemies with his gargantuan blade.",
  "Tidehunter – A strong teamfighter with Ravage, a massive area-of-effect stun that can change the course of a battle.",
  "Tiny – A melee hero who grows in size and strength, capable of tossing enemies and dealing massive burst damage.",
  "Treant Protector – A melee hero who can heal allies, provide vision, and root enemies, excelling in map control.",
  "Tusk – A melee hero who can initiate fights with his snowball, control enemies with ice shards, and deal burst damage.",
  "Underlord – A melee hero who can control areas with his pit, reduce enemy damage, and teleport allies across the map.",
  "Undying – A true tank who can summon zombies to slow enemies and has abilities that transfer health, making him difficult to remove from fights.",
  "Wraith King – A straightforward hero with lifesteal, a stun, and Reincarnation, allowing him to revive after death.",
];

const slidesContainer = document.getElementById("slides-container");

fighterImages.forEach((imageSrc, index) => {
  const slide = document.createElement("div");
  slide.classList.add("slide");

  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = `Fighter ${index + 1}`;

  const description = document.createElement("p");
  description.textContent = fighterDescriptions[index] || "No description available.";

  slide.appendChild(img);
  slide.appendChild(description);
  slidesContainer.appendChild(slide);
});
