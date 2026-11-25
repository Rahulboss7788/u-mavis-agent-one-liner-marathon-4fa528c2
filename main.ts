import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const JOKE =
  "I gave my AI agent one small task; it filed a bug report against itself, escalated it to itself, and now neither of them will talk to me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

// Read-back verification: the entry must be exactly the joke, 1-280
// characters, and not only whitespace (the competition gate).
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== JOKE) {
  throw new Error("entry.txt does not match the joke exactly");
}
if (written.length < 1 || written.length > 280) {
  throw new Error(`entry length ${written.length} is outside the 1-280 gate`);
}
if (written.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
console.log(`Wrote ${written.length} characters to /output/entry.txt`);
