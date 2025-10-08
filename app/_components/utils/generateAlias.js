const adjectives = [
  "Silent", "Velvet", "Quantum", "Shadow", "Neon", "Iron", "Mystic", "Solar", "Binary", "Ghost",
  "Swift", "Crimson", "Emerald", "Frozen", "Golden", "Ivory", "Jagged", "Lucid", "Obsidian", "Rapid",
  "Clever", "Wild", "Stormy", "Ancient", "Shiny", "Brave", "Cosmic", "Daring", "Epic", "Frosty",
  "Glowing", "Hidden", "Infinite", "Lunar", "Majestic", "Noble", "Phantom", "Radiant", "Savage", "Titan"
];

const nouns = [
  "Falcon", "Comet", "Circuit", "Nomad", "Hydra", "Tiger", "Otter", "Phoenix", "Cipher", "Reactor",
  "Wolf", "Hawk", "Dragon", "Lion", "Eagle", "Cobra", "Panther", "Bear", "Viper", "Shark",
  "Blade", "Raven", "Ghost", "Knight", "Samurai", "Wizard", "Rider", "Hunter", "Nomad", "Striker",
  "Sentinel", "Warden", "Raider", "Guardian", "Seeker", "Pilot", "Scout", "Titan", "Rogue", "Master"
];

export function generateAlias(refId) {
  const hash = Array.from(refId).reduce((acc, c) => acc + c.charCodeAt(0), 0);
  const adj = adjectives[hash % adjectives.length];
  const noun = nouns[(hash >> 3) % nouns.length];
  const num = (hash % 100).toString().padStart(2, "0");
  return `${adj}${noun}${num}`;
}
