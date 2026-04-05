const sharp = require('sharp');
const fs = require('fs');

const svgImage = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white"/>
  <text x="600" y="250" font-family="sans-serif" font-size="48" fill="#64748b" text-anchor="middle">kelvincreighton.ca</text>
  <text x="600" y="350" font-family="sans-serif" font-weight="bold" font-size="96" fill="black" text-anchor="middle">Kelvin Creighton</text>
  <text x="600" y="450" font-family="sans-serif" font-size="38" font-weight="500" fill="#2563eb" text-anchor="middle">Cybersecurity • Software Engineering • Game Dev</text>
</svg>
`;

sharp(Buffer.from(svgImage))
  .png()
  .toFile('./src/app/opengraph-image.png')
  .then(() => {
    sharp(Buffer.from(svgImage))
      .png()
      .toFile('./src/app/twitter-image.png')
      .then(() => console.log('Images generated.'));
  })
  .catch(err => console.error(err));
