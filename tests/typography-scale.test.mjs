import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!file.startsWith(".") && file !== "node_modules") {
        getAllFiles(fullPath, arrayOfFiles);
      }
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      arrayOfFiles.push(fullPath);
    }
  }
  return arrayOfFiles;
}

test("Typography Invariant: Max font weight is 500 across all TSX components and pages", () => {
  const componentFiles = getAllFiles(path.resolve("components"));
  const appFiles = getAllFiles(path.resolve("app"));
  const allFiles = [...componentFiles, ...appFiles];

  const heavyWeightPattern = /\bfont-(extrabold|black|bold|semibold)\b/g;
  const violations = [];

  for (const file of allFiles) {
    const content = fs.readFileSync(file, "utf8");
    const matches = content.match(heavyWeightPattern);
    if (matches && matches.length > 0) {
      violations.push({
        file: path.relative(process.cwd(), file),
        matches: Array.from(new Set(matches)),
      });
    }
  }

  assert.deepEqual(
    violations,
    [],
    `Found heavy font weights (>500) in files: ${JSON.stringify(violations, null, 2)}`
  );
});

test("Typography Invariant: CSS global tokens define max weight 500 and high-impact scale", () => {
  const css = fs.readFileSync(path.resolve("styles/global.css"), "utf8");

  // No heavy weights in CSS
  assert.ok(
    !/font-weight:\s*(600|700|800|900|bold|bolder)\b/i.test(css),
    "styles/global.css must not define font-weight > 500"
  );

  // H1 (.display-xl): 90px max (5.625rem), weight 500
  assert.ok(
    css.includes("font-size: clamp(2.75rem, 6.5vw, 5.625rem); /* Up to 90px */"),
    "H1 (.display-xl) must scale up to 90px (5.625rem)"
  );

  // H2 (.display-lg): 72px max (4.5rem), weight 500
  assert.ok(
    css.includes("font-size: clamp(2.25rem, 5vw, 4.5rem); /* Up to 72px */"),
    "H2 (.display-lg) must scale up to 72px (4.5rem)"
  );

  // Card H3 (.display-md): 40px max (2.5rem), weight 500
  assert.ok(
    css.includes("font-size: clamp(1.5rem, 2.8vw, 2.5rem); /* Up to 40px */"),
    "Card H3 (.display-md) must scale up to 40px (2.5rem)"
  );
});

test("Typography Invariant: Hero H1 scales to 90px with font-medium", () => {
  const heroContent = fs.readFileSync(path.resolve("components/home/HeroSection.tsx"), "utf8");
  assert.ok(
    heroContent.includes("lg:text-[90px] font-medium"),
    "HeroSection H1 must use lg:text-[90px] font-medium"
  );

  const corporateGiftingContent = fs.readFileSync(path.resolve("app/corporate-gifting/page.tsx"), "utf8");
  assert.ok(
    corporateGiftingContent.includes("lg:text-[90px] font-medium"),
    "Corporate Gifting Hero H1 must use lg:text-[90px] font-medium"
  );
});

test("Typography Invariant: Showcase and Section H2s scale to 72px with font-medium", () => {
  const categoryShowcase = fs.readFileSync(path.resolve("components/showcase/CategoryShowcaseSection.tsx"), "utf8");
  assert.ok(
    categoryShowcase.includes("lg:text-[72px] font-medium"),
    "CategoryShowcaseSection H2 must use lg:text-[72px] font-medium"
  );

  const featuredSets = fs.readFileSync(path.resolve("components/showcase/FeaturedSetsSection.tsx"), "utf8");
  assert.ok(
    featuredSets.includes("lg:text-[72px] font-medium"),
    "FeaturedSetsSection H2 must use lg:text-[72px] font-medium"
  );
});

test("Typography Invariant: Pillar Category Card and Featured Set Card H3s scale to 40px with font-medium", () => {
  const pillarCard = fs.readFileSync(path.resolve("components/showcase/PillarCategoryCard.tsx"), "utf8");
  assert.ok(
    pillarCard.includes("lg:text-[40px] font-medium"),
    "PillarCategoryCard H3 must use lg:text-[40px] font-medium"
  );

  const featuredSets = fs.readFileSync(path.resolve("components/showcase/FeaturedSetsSection.tsx"), "utf8");
  assert.ok(
    featuredSets.includes("lg:text-[40px] font-medium"),
    "FeaturedSetsSection Card H3 must use lg:text-[40px] font-medium"
  );
});
