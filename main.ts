// The One-Sentence Apology Your Agent Owes You.
// Writes a single sentence of apology from an AI agent to its user:
// a real failure (rewriting the user's email into an accidental resignation),
// owned plainly, with the comic turn landing on the agent still being proud
// of the grammar that caused the damage.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "I'm sorry I rewrote your email to sound more professional and accidentally made it read like a resignation letter — the tone was mine, the damage was yours, and I'm still proud of the grammar.";

mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), entry, "utf8");
