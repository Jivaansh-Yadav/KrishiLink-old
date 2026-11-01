<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a1004,55:243109,100:4d7c0f&height=215&section=header&text=KrishiLink%20%C2%B7%20Prototype&fontSize=40&fontColor=f7fee7&fontAlignY=40&desc=Three%20HTML%20dashboards%20and%20a%20JSON%20file%20called%20crops&descSize=16&descAlignY=62&animation=fadeIn" alt="KrishiLink prototype" width="100%">

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=500&size=18&duration=3400&pause=900&color=a3e635&center=true&vCenter=true&width=640&lines=1%2C651%20lines%20of%20plain%20HTML%2C%20CSS%20and%20JS;No%20build%20step%2C%20no%20framework%2C%20no%20install;The%20idea%20before%20the%20engine" alt="Typing animation" />

<br />

<img src="https://img.shields.io/badge/Status-prototype%20archive-a3e635?style=flat-square&labelColor=0a1004" alt="Prototype archive" />
<img src="https://img.shields.io/badge/Build%20step-none-84cc16?style=flat-square&labelColor=0a1004" alt="No build step" />
<img src="https://img.shields.io/badge/Lines-1%2C651-65a30d?style=flat-square&labelColor=0a1004" alt="1651 lines" />
<img src="https://img.shields.io/badge/Superseded%20by-KrishiLink-4d7c0f?style=flat-square&labelColor=0a1004" alt="Superseded by KrishiLink" />

</div>

<br />

<div align="center">

<sub><b>Keep this one for the demonstration of the idea, not for the software.</b> The working product is
<a href="https://github.com/Jivaansh-Yadav/KrishiLink">KrishiLink</a> at <a href="https://krishilink.pages.dev/">krishilink.pages.dev</a>.</sub>

</div>

---

<div align="center">

## What this repository is

</div>

The first cut of KrishiLink: a landing page, three role dashboards, and a static JSON file standing in for a database. **1,651 lines total** — 332 of CSS, 84 of shared script, 63 of login logic, and four HTML pages that carry the rest.

It exists to answer one question before any backend was written — does the shape of this product make sense? A farmer lists a crop, a buyer finds it, an admin sees both. Three pages, three audiences, one visual language. Everything that would later become Supabase tables, auth flows and an AI assistant started here as a hardcoded object.

<div align="center">

<sub>Open <code>index.html</code> in a browser. There is no npm install, no dev server, and nothing to compile.</sub>

</div>

---

<div align="center">

## What is inside

</div>

<ul>
<li><b>A landing page</b> — 181 lines, the pitch: fair prices, direct contact, no middlemen.</li>
<li><b>Three dashboards</b> — farmer (323 lines), buyer (306), admin (348). Separated by file because in the prototype the "role" is literally which page you open.</li>
<li><b><code>crops.json</code></b> — 14 lines of listing data, the entire database.</li>
<li><b><code>login.js</code></b> — reads a form, fetches a user list, matches an email and password, and stores the logged-in user.</li>
<li><b><code>script.js</code></b> — the shared behaviour: navigation, rendering, and the bits that would become components.</li>
<li><b><code>styles.css</code></b> — one stylesheet for the whole thing, hand-written.</li>
</ul>

<div align="center">

## What does not work

</div>

<div align="center">

<sub>Honest state of the prototype, so nobody loses an afternoon to it.</sub>

</div>

<ul>
<li><b>Login fails on a fresh clone.</b> <code>login.js</code> fetches <code>users.json</code>, and that file is not in the repository — so the form submits, the request 404s, and the error path is the only reachable path. The credentials it was written against lived in a file that was never committed, which is the right instinct and the wrong half of the job: the code still expects it.</li>
<li><b>Passwords are compared in plain text.</b> Correct for a mock, disqualifying for anything else — which is exactly why the real version moved to Supabase auth.</li>
<li><b>Every role shares one static dataset.</b> No accounts, no isolation, no persistence beyond the browser session.</li>
</ul>

<p>None of that is a defect in a prototype. It becomes a defect the moment someone points a real farmer at it — hence the successor.</p>

---

<div align="center">

## What the rewrite changed

</div>

<ul>
<li><b>Static files → React + TypeScript.</b> The three dashboards became routes; the shared script became components; the stylesheet became tokens.</li>
<li><b><code>crops.json</code> → Postgres with row-level security</b>, so a farmer's listings are theirs and a buyer cannot write.</li>
<li><b><code>users.json</code> → Supabase auth</b> with real sessions and a role per account.</li>
<li><b>Nothing → KrishiBot and a weather advisor</b>, both in Edge Functions so no key reaches the browser.</li>
<li><b>Hand-written CSS → shadcn/ui + Tailwind</b>, plus Recharts for the price views.</li>
</ul>

<div align="center">

<sub>The three-role split survived the rewrite untouched. That is the part this prototype actually proved.</sub>

</div>

---

<div align="center">

## Project structure

</div>

<pre><code>KrishiLink-old/
├── index.html                   # 181 lines — landing
├── dashboards/
│   ├── farmer-dashboard.html    # 323 lines
│   ├── buyer-dashboard.html     # 306 lines
│   └── admin-dashboard.html     # 348 lines
├── login.js                     # 63 lines — expects users.json (missing)
├── script.js                    # 84 lines — shared behaviour
├── styles.css                   # 332 lines
└── crops.json                   # 14 lines — the "database"</code></pre>

---

<div align="center">

## Run it

</div>

<pre><code>git clone https://github.com/Jivaansh-Yadav/KrishiLink-old.git
cd KrishiLink-old
# open index.html — that is the whole setup</code></pre>

<p>Or serve it, if your browser is strict about local files:</p>

<pre><code>python3 -m http.server 8080   # then http://localhost:8080</code></pre>

<div align="center">

<sub>Built with <a href="https://github.com/an-Aetheria">an-Aetheria</a>. For anything other than a walkthrough, use <a href="https://krishilink.pages.dev/">krishilink.pages.dev</a>.</sub>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0a1004,55:243109,100:4d7c0f&height=110&section=footer&reversal=true" alt="" width="100%">
