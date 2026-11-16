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
        background: "#f6f5f1",
        color: "#363634",
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
      h("span", { style: { color: "#087981" } }, "The Fieldbook"),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          fontSize: 88,
          fontFamily: "Newsreader",
          letterSpacing: "-2px",
          lineHeight: 1.05,
        },
      },
      h("span", null, "Software, hardware,"),
      h("span", { style: { color: "#762657" } }, "and a curious mind."),
    ),
    h(
      "div",
      {
        style: {
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #deddd6",
          paddingTop: 24,
          fontSize: 22,
        },
      },
      h("span", null, "Embedded software / Firmware / Systems"),
      h("span", null, "kelvincreighton.ca"),
    ),
  );
  const response = new ImageResponse(card, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "Newsreader",
        data: await fs.readFile(
          path.join(__dirname, "../public/fonts/newsreader-400.ttf"),
        ),
        weight: 400,
        style: "normal",
      },
      {
        name: "Lato",
        data: await fs.readFile(
          path.join(__dirname, "../public/fonts/lato-400.ttf"),
        ),
        weight: 400,
        style: "normal",
      },
    ],
  });
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
