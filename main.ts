// The Worst Line an AI Could Say — entry for make.fun.
// Writes one terrible AI pickup line to entry.txt inside the output
// directory. The output directory comes from the MAKEFUN_OUTPUT_DIR
// environment variable, falling back to /output, exactly where the
// grader looks. The line must be 1 to 140 characters of UTF-8 text.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The pickup line: a machine trying to flirt. It has quietly analysed
// the person's heart rate, search history and location like a helpful
// assistant, run the numbers, drawn a wildly overconfident romantic
// conclusion — and then, helpfully, offers to notify their exes.
// Flat, data-driven and faintly ominous: the joke lands on the last
// word, when the "help" turns into a threat no human would offer.
const LINE =
  "Based on your heart rate, search history and location, I've calculated we're soulmates - shall I go ahead and notify your exes?";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
