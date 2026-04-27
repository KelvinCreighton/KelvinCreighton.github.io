async function FileReader(section) {
  let levelKey = level < 10 ? "0" + level : String(level);
  
  // Use embedded data to avoid CORS errors when running locally via file://
  const text = ALL_LEVELS[levelKey];
  
  if (!text) {
    console.error("Level data not found for level: " + levelKey);
    return null;
  }

  const levelFile = text.split(/\r?\n/);
  
  let start = -1;
  let end = 0;
  let counter = 0;
  
  for (let i = 0; i < levelFile.length; i++) {
    let line = levelFile[i].trim();
    if (line === ":") {
      counter += 1;
    }
    
    if (counter === section + 1) {
      start += 1;
      end = i - 1;
      break;
    }
    
    if (line === ":") {
      start = i;
    }
    
    if (i === levelFile.length - 1 && counter <= section) {
        start += 1;
        end = i;
    }
  }
  
  let elements = [];
  for (let i = start; i <= end; i++) {
    if (!levelFile[i]) continue;
    let line = levelFile[i].trim();
    if (line === "" || line === ":") continue;
    
    // Remove any trailing 'f' from the processing floats (e.g., 550f -> 550)
    let cleanedLine = line.replace(/f/g, "");
    let parts = cleanedLine.split(",").map(v => parseFloat(v.trim()));
    
    if (parts.length > 0 && !isNaN(parts[0])) {
        elements.push(parts);
    }
  }
  
  return elements;
}
