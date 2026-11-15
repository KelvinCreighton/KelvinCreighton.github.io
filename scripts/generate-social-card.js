// Render a static PNG so GitHub Pages can serve it with the correct image MIME type.
// The card is code-generated typography and layout; it makes no network requests.
const fs = require("node:fs/promises");
const path = require("node:path");
const React = require("react");
const { ImageResponse } = require("next/og");
const h = React.createElement;

async function main() {
  const card = h(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f3f0e8",
        color: "#202925",
        padding: "64px 72px",
      },
    },
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        },
      },
      h("span", null, "Kelvin Creighton"),
      h("span", { style: { color: "#58645c" } }, "A personal fieldbook"),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          letterSpacing: "-3px",
          lineHeight: 1.05,
        },
      },
      h("span", null, "Understanding systems."),
      h("span", { style: { color: "#2d624f" } }, "Building things."),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #c9cec3",
          paddingTop: 24,
          fontSize: 22,
        },
      },
      h("span", null, "Embedded software / Firmware / Systems"),
      h("span", null, "kelvincreighton.ca"),
    ),
  );
  const response = new ImageResponse(card, { width: 1200, height: 630 });
  const png = Buffer.from(await response.arrayBuffer());
  for (const name of ["opengraph-image.png", "twitter-image.png"]) {
    await fs.writeFile(path.join(__dirname, "../src/app", name), png);
  }
  console.log("Updated static social cards.");
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
