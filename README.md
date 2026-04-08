# یا حکیم — Ya Hakeem
## Medical Directory for Halabja, Kurdistan

A static medical website hosted on Netlify, built for the Halabja region.

---

## File Structure

```
ya-hakeem/
├── index.html          ← Doctor directory (main page)
├── specialty.html      ← Specialty pages (all specialties, URL: ?sp=rheumatology)
├── article.html        ← Article reader (URL: ?id=art-ra-basics)
├── risale.html         ← Risale-i Nur page
├── about.html          ← About page
├── admin.html          ← Admin panel (open locally to manage data)
├── data.js             ← All doctors + article metadata
├── netlify.toml        ← Netlify config
└── articles/           ← One HTML file per article (full content)
    ├── art-ra-basics.html
    ├── art-gout.html
    └── ...
```

---

## How to Update Content

### Adding or Editing a Doctor
1. Open `data.js`
2. Find `specialtyDoctors:` → find the right specialty (e.g. `"rheumatology":`)
3. Add a new line inside the array:
   ```js
   {id:"new-doc-id", name:"دکتۆر ...", q:"MBChB", cl:"کلینیک...", days:"شەممە، دوو شەممە", ph:"075...", fee:"—", dataId:null},
   ```
4. Commit — site auto-deploys in ~30 seconds

### Writing a New Article

**Step 1 — Add metadata to `data.js`** (inside `articles:{}`)
```js
"art-my-article":{
  id:"art-my-article", specialty:"rheumatology", level:"patient", group:"conditions",
  icon:"🤲", date:"2025-06",
  title:"ناوی وتار",
  synopsis:"کورتەی وتار بۆ کارتی پەڕەی پسپۆڕی...",
  media:[], authors:["rzgar-tayb"], tags:["تاگ"], dateKu:"حوزەیران ٢٠٢٥"
},
```

**Step 2 — Create `articles/art-my-article.html`**
Write the full article in plain HTML:
```html
<h2>ناوی وتار</h2>
<p>ناوەڕۆکی وتار...</p>
<h3>بەشی دووەم</h3>
<p>زیاتر...</p>
<blockquote class="art-quote">"بنرخ..."</blockquote>
<div class="article-tip"><span>💡</span> تێبینی بۆ نەخۆش.</div>
```

**Step 3 — Commit both files** — site updates automatically.

---

## HTML Elements for Articles

| Element | Code |
|---|---|
| Heading 2 | `<h2>ناو</h2>` |
| Heading 3 | `<h3>ناو</h3>` |
| Paragraph | `<p>ناوەڕۆک</p>` |
| Bold | `<strong>ئەستور</strong>` |
| List | `<ul><li>خاڵ</li></ul>` |
| Quote | `<blockquote class="art-quote">"بنرخ"</blockquote>` |
| Patient tip | `<div class="article-tip"><span>💡</span> تێبینی.</div>` |
| Clinical note | `<div class="article-tip professional"><span>📌</span> تێبینی.</div>` |
| Table | See existing articles for example |

---

## Deploying

This site is connected to Netlify via GitHub.  
Every commit to the `main` branch triggers an automatic deploy.  
No manual steps needed after setup.

---

## Contact / Data Entry

Use `admin.html` (open locally) to generate ready-to-paste code for `data.js`.
