const fs = require("fs");
const path = require("path");

const publicDir = path.join(__dirname, "..", "public");

// Minimal valid 1x1 gray PNG (68 bytes)
const minimalPng = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",
  "base64"
);

// Minimal valid 1x1 gray JPEG (~200 bytes) - dark gray for gym aesthetic
const minimalJpg = Buffer.from(
  "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAQAA",
  "base64"
);

const placeholders = [
  { file: "trainer-hero.jpg", data: minimalJpg },
  { file: "figure-1.jpg", data: minimalJpg },
  { file: "figure-2.jpg", data: minimalJpg },
  { file: "figure-3.jpg", data: minimalJpg },
  { file: "placeholder.jpg", data: minimalJpg },
  { file: "smoke-overlay.png", data: minimalPng },
  { file: "ig/1.jpg", data: minimalJpg },
  { file: "ig/2.jpg", data: minimalJpg },
  { file: "ig/3.jpg", data: minimalJpg },
  { file: "ig/4.jpg", data: minimalJpg },
  { file: "ig/5.jpg", data: minimalJpg },
  { file: "ig/6.jpg", data: minimalJpg },
];

placeholders.forEach(({ file, data }) => {
  const filePath = path.join(publicDir, file);
  const dir = path.dirname(filePath);
  if (dir !== publicDir) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, data);
  console.log(`Created ${file}`);
});
