// Aminar — language switch (English / ไทย). Loaded in <head> on every page, after lang-th.js.
// The pages are written in English; in Thai mode every English text and label the visitor can see is swapped
// for its Thai version from lang-th.js, including text the page scripts add later (catalog, cart, panels).
// Choice order: the visitor's own pick (remembered) > ?lang= in the address > the phone/browser language.
// We go by the browser language, not the location: an Arab visitor in Bangkok still gets English.
(() => {
  const KEY = 'aminar-lang';
  const qs = new URLSearchParams(location.search).get('lang');
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  const browserThai = (navigator.languages || [navigator.language || '']).some((l) => /^th\b/i.test(l));
  const lang = ['en', 'th'].includes(qs) ? qs : saved || (browserThai ? 'th' : 'en');
  const TH = window.AMINAR_TH || {dict: {}, patterns: []};
  const isTh = lang === 'th';
  document.documentElement.lang = lang;
  if (isTh) {
    document.documentElement.classList.add('th');
    const base = (document.currentScript && document.currentScript.src || '').replace(/i18n\.js.*$/, '');
    const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = base + 'th.css' + (document.currentScript.src.split('?')[1] ? '?' + document.currentScript.src.split('?')[1] : '');
    document.head.append(l);
  }

  // ---- translation
  const dict = TH.dict, patterns = TH.patterns || [];
  let NAMES = null;
  const names = () => NAMES || (NAMES = new Set(((window.AMINAR || {}).products || []).map((p) => p.name)));
  const one = (s) => {
    if (Object.prototype.hasOwnProperty.call(dict, s)) return dict[s];
    for (const [re, to] of patterns) { const m = s.match(re); if (m) return typeof to === 'function' ? to(...m) : s.replace(re, to); }
    return null;
  };
  const t = (s) => {
    if (!isTh || s == null) return s;
    const core = String(s).replace(/\s+/g, ' ').trim();
    if (!core || !/[A-Za-z]/.test(core)) return s;
    if (names().has(core)) return s; // product names stay in English
    let r = one(core);
    // "a · b · c": translate each part on its own
    if (r == null && core.includes(' · ')) {
      const parts = core.split(' · ').map((p) => { const x = one(p); return x == null ? p : x; });
      if (parts.join(' · ') !== core) r = parts.join(' · ');
    }
    if (r == null) return s;
    const lead = String(s).match(/^\s*/)[0], trail = String(s).match(/\s*$/)[0];
    return lead + r + trail;
  };
  const skip = (el) => !el || el.closest('script,style,pre,[translate="no"],textarea');
  const ATTRS = ['aria-label', 'alt', 'placeholder', 'title'];
  const waFix = (el) => {
    const h = el.getAttribute && el.getAttribute('href');
    if (!h || !/^https:\/\/wa\.me\/.*[?&]text=/.test(h)) return;
    const u = new URL(h), txt = u.searchParams.get('text');
    const v = txt.split('\n').map((l) => t(l)).join('\n');
    if (v !== txt) { u.searchParams.set('text', v); el.setAttribute('href', u.toString()); }
  };
  const doNode = (n) => {
    if (n.nodeType === 3) {
      if (skip(n.parentElement)) return;
      const v = t(n.nodeValue); if (v !== n.nodeValue) n.nodeValue = v;
    } else if (n.nodeType === 1) {
      if (skip(n)) return;
      ATTRS.forEach((a) => { if (n.hasAttribute(a)) { const v = t(n.getAttribute(a)); if (v !== n.getAttribute(a)) n.setAttribute(a, v); } });
      waFix(n); n.querySelectorAll && n.querySelectorAll('a[href*="wa.me"]').forEach(waFix);
      const w = document.createTreeWalker(n, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
      let x; while ((x = w.nextNode())) { if (x.nodeType === 3) { if (!skip(x.parentElement)) { const v = t(x.nodeValue); if (v !== x.nodeValue) x.nodeValue = v; } } else if (!skip(x)) ATTRS.forEach((a) => { if (x.hasAttribute(a)) { const v = t(x.getAttribute(a)); if (v !== x.getAttribute(a)) x.setAttribute(a, v); } }); }
    }
  };
  if (isTh) {
    // translate as the page is read and whenever a script adds or changes text
    new MutationObserver((ms) => ms.forEach((m) => {
      if (m.type === 'childList') m.addedNodes.forEach(doNode);
      else if (m.type === 'characterData') doNode(m.target);
      else if (m.type === 'attributes') doNode(m.target);
    })).observe(document.documentElement, {childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: [...ATTRS, 'href']});
    const fixTitle = () => { const v = t(document.title); if (v !== document.title) document.title = v; };
    document.addEventListener('DOMContentLoaded', fixTitle);
  }

  // ---- the globe button
  const BTN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9s-1.2 6.4-3.8 9c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3Z"/></svg>';
  const set = (l) => { try { localStorage.setItem(KEY, l); } catch (e) {} const u = new URL(location.href); u.searchParams.delete('lang'); location.replace(u.toString()); };
  const place = () => {
    if (document.querySelector('.langsw')) return;
    const host = document.querySelector('header .cartbtn') || document.querySelector('#nav > :last-child, nav.nav > :last-child');
    if (!host) return;
    const w = document.createElement('span'); w.className = 'langsw'; w.setAttribute('translate', 'no');
    w.innerHTML = `<button type="button" aria-haspopup="true" aria-expanded="false" aria-label="${isTh ? 'เปลี่ยนภาษา' : 'Change language'}">${BTN}<b>${isTh ? 'TH' : 'EN'}</b></button><span class="langmenu" role="menu"><a role="menuitem" href="#" data-l="en"${isTh ? '' : ' aria-current="true"'}>English</a><a role="menuitem" href="#" data-l="th"${isTh ? ' aria-current="true"' : ''}>ไทย</a></span>`;
    // keep the globe and the last header item together, so the header's own spacing stays the same
    const pair = document.createElement('span'); pair.className = 'langswer';
    host.replaceWith(pair); pair.append(w, host);
    const b = w.querySelector('button');
    b.onclick = (e) => { e.stopPropagation(); const o = !w.classList.contains('open'); w.classList.toggle('open', o); b.setAttribute('aria-expanded', o); };
    w.querySelectorAll('[data-l]').forEach((a) => { a.onclick = (e) => { e.preventDefault(); if (a.dataset.l !== lang) set(a.dataset.l); else w.classList.remove('open'); }; });
    document.addEventListener('click', () => { w.classList.remove('open'); b.setAttribute('aria-expanded', 'false'); });
  };
  const css = document.createElement('style');
  css.textContent = `.langsw{position:relative;display:inline-flex;align-items:center;margin-right:6px;z-index:70}
.langsw button{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:0 8px;background:none;border:0;color:inherit;cursor:pointer;font:500 12px Jost,system-ui,sans-serif;letter-spacing:.14em}
.langsw svg{width:20px;height:20px}
.langsw .langmenu{position:absolute;right:0;top:100%;display:grid;min-width:130px;padding:6px;background:#15110d;border:1px solid rgba(226,180,60,.35);box-shadow:0 18px 40px rgba(0,0,0,.45);opacity:0;transform:translateY(-6px);pointer-events:none;transition:opacity .25s,transform .3s}
.langsw.open .langmenu{opacity:1;transform:none;pointer-events:auto}
.langsw .langmenu a{display:block;padding:10px 12px;color:#efe6d6;text-decoration:none;font:500 14px Jost,system-ui,sans-serif;letter-spacing:.04em}
.langsw .langmenu a:hover,.langsw .langmenu a[aria-current]{color:#e2b43c}
.langswer{display:flex;align-items:center;justify-self:end}
@media (max-width:600px){.langsw button b{display:none}.langsw button{padding:0 6px}}`;
  document.head.append(css);
  document.addEventListener('DOMContentLoaded', () => { place(); setTimeout(place, 300); });

  window.I18N = {lang, t};
})();
