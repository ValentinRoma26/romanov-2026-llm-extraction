import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";
import path from "node:path";

const siteDirectory = path.dirname(fileURLToPath(import.meta.url));
const repositoryRoot = path.resolve(siteDirectory, "..");
const requestedOutput = process.argv[2] ?? "dist";
const outputDirectory = path.resolve(repositoryRoot, requestedOutput);

if (
  outputDirectory === repositoryRoot ||
  outputDirectory === path.parse(outputDirectory).root
) {
  throw new Error("Refusing to replace a broad output directory.");
}

const staticFiles = ["index.html", "styles.css", "app.js", "benchmark.json"];
const promptFiles = [
  "1-gold-standard-prompt.md",
  "2-normalizer-prompt.md",
  "3-initial-meta-prompt.md",
  "4-aggregate-meta-prompt.md",
];

await fs.rm(outputDirectory, { recursive: true, force: true });
await fs.mkdir(path.join(outputDirectory, "assets", "prompts"), {
  recursive: true,
});

for (const file of staticFiles) {
  await fs.copyFile(
    path.join(siteDirectory, file),
    path.join(outputDirectory, file),
  );
}

const manifest = [];
for (const file of promptFiles) {
  const source = path.join(repositoryRoot, "tutorial", "prompts", file);
  const destination = path.join(outputDirectory, "assets", "prompts", file);
  await fs.copyFile(source, destination);

  const [sourceBytes, destinationBytes] = await Promise.all([
    fs.readFile(source),
    fs.readFile(destination),
  ]);
  const sourceHash = sha256(sourceBytes);
  const destinationHash = sha256(destinationBytes);
  if (sourceHash !== destinationHash) {
    throw new Error(`Prompt integrity check failed for ${file}.`);
  }
  manifest.push({ file, sha256: sourceHash });
}

const assets = [
  ["tutorial/paper/ref13.pdf", "assets/ref13.pdf"],
  [
    "tutorial/scoring/ref13-scoring-template.xlsx",
    "assets/ref13-scoring-template.xlsx",
  ],
  [
    "tutorial/benchmark/ref13-ground-truth.xlsx",
    "assets/ref13-ground-truth.xlsx",
  ],
];

for (const [source, destination] of assets) {
  await fs.copyFile(
    path.join(repositoryRoot, source),
    path.join(outputDirectory, destination),
  );
}

await fs.writeFile(
  path.join(outputDirectory, "assets", "prompt-manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`,
);
await fs.writeFile(path.join(outputDirectory, ".nojekyll"), "");

console.log(
  `Built ${path.relative(repositoryRoot, outputDirectory)} with ${manifest.length} verified prompts.`,
);

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}
