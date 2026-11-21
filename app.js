(() => {
  'use strict';
  const d = window.SEMINAR || {};
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const esc = (v = '') => String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const isUrl = u => typeof u === 'string' && (/^https?:\/\/[^\s]+$/i.test(u) || /^(assets|bahan)\/[a-z0-9_./%+-]+$/i.test(u));
  const dateParts = (d.date || '2026-11-23').split('-').map(Number);
  const programmeDate = new Date(Date.UTC(dateParts[0], dateParts[1] - 1, dateParts[2], 12));
  const dateFormat = (opts) => new Intl.DateTimeFormat('ms-MY', { timeZone:'UTC', ...opts }).format(programmeDate);
  const weekday = dateFormat({weekday:'long'}).toUpperCase();
  const dateLong = dateFormat({day:'numeric',month:'long',year:'numeric'}).toUpperCase();
  const shortDate = dateFormat({day:'numeric',month:'short',year:'numeric'}).replaceAll('.', '').toUpperCase();
  const h12 = raw => { const [h,m] = String(raw || '00:00').split(':').map(Number); return `${(h % 12) || 12}:${String(m||0).padStart(2,'0')}`; };
  const meridiem = raw => { const h = Number(String(raw||'').slice(0,2)); return h < 12 ? 'PAGI' : h < 13 ? 'TENGAH HARI' : 'PETANG'; };
  const setText = (selector, value) => { const el = $(selector); if(el) el.textContent = value; };

  // Global programme copy and dates — no hardcoded content editing needed.
  setText('#heroDate', dateLong);
  setText('#heroWeekday', weekday);
  setText('#heroTime', `${h12(d.startTime)} ${meridiem(d.startTime)} — ${h12(d.endTime)} ${meridiem(d.endTime)}`);
  setText('#heroVenue', d.venue || 'LOKASI AKAN DIMAKLUMKAN');
  setText('#heroRoom', d.room || 'ZENITH HOTEL, PUTRAJAYA');
  setText('#heroMessage', d.headline || 'KEMENTERIAN DALAM NEGERI TAHUN 2026');
  setText('#heroDescription', d.description || '');
  setText('#introText', d.intro || '');
  setText('#agendaDateLabel', `${weekday}, ${dateLong}`);
  setText('#locationName', d.venue || 'Lokasi akan dimaklumkan');
  setText('#locationAddress', [d.room,d.address].filter(Boolean).join(' · ') || 'Butiran lokasi sedang diselaraskan oleh urus setia.');
  const mapLink = $('#mapLink');
  if (d.mapUrl && isUrl(d.mapUrl)) { mapLink.href = d.mapUrl; mapLink.hidden = false; }

  // Optional registration button — only shown after editor sets enabled=true.
  const reg = d.registration || {};
  if(reg.enabled && isUrl(reg.url)) {
    const link = document.createElement('a');
    link.className = 'button button-outline'; link.href = reg.url; link.target = '_blank'; link.rel = 'noopener noreferrer';
    link.innerHTML = `${esc(reg.label || 'Pengesahan Kehadiran')} <span aria-hidden="true">↗</span>`;
    $('.hero-ctas').append(link);
  }

  // Objectives.
  const objectives = Array.isArray(d.objectives) ? d.objectives : [];
  $('#objectivesGrid').innerHTML = objectives.map(o => `<article class="objective-item"><span class="objective-num">${esc(o.number)}</span><span class="objective-label">${esc(o.label)}</span><h4>${esc(o.title)}</h4><p>${esc(o.description)}</p></article>`).join('');

  // Atur cara.
  const agenda = Array.isArray(d.agenda) ? d.agenda : [];
  function renderAgenda(filter='semua') {
    const items = filter === 'sesi' ? agenda.filter(a => a.type === 'sesi') : agenda;
    $('#agendaList').innerHTML = items.map(a => `<article class="agenda-item ${a.type === 'sesi' ? 'is-sesi' : ''}">
      <div class="agenda-time">${esc(h12(a.time))}<small>${esc(meridiem(a.time))}</small></div>
      <div class="agenda-main"><span class="agenda-kicker">${esc(a.kicker || '')}${a.end && a.end!==a.time ? ` &nbsp; / &nbsp; ${esc(h12(a.time))} – ${esc(h12(a.end))}` : ''}</span><h3>${esc(a.title)}</h3>${a.description?`<p>${esc(a.description)}</p>`:''}${a.speaker?`<span class="agenda-speaker">${esc(a.speaker)}</span>`:''}</div><span class="agenda-arrow" aria-hidden="true">↗</span>
    </article>`).join('') || '<p class="resource-empty">Tiada atur cara untuk dipaparkan.</p>';
  }
  renderAgenda();
  $$('[data-agenda-filter]').forEach(btn => btn.addEventListener('click', () => {
    $$('[data-agenda-filter]').forEach(b => { const active = b === btn; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active)); });
    renderAgenda(btn.dataset.agendaFilter);
  }));
  $('#printAgenda').addEventListener('click', () => {
    const oldFilter = $('[data-agenda-filter].active')?.dataset.agendaFilter || 'semua';
    renderAgenda('semua'); document.body.classList.add('print-agenda');
    const restore = () => { document.body.classList.remove('print-agenda'); renderAgenda(oldFilter); window.removeEventListener('afterprint', restore); };
    window.addEventListener('afterprint', restore);
    window.print();
  });

  // Original vector illustrations for the three session cards.
  const shapes = [
    '<svg viewBox="0 0 180 180" aria-hidden="true"><path d="M19 131 54 98l35 20 39-66 34 38"/><path d="M19 147 54 114l35 20 39-66 34 38" opacity=".3"/><circle cx="19" cy="131" r="6"/><circle cx="54" cy="98" r="6"/><circle cx="89" cy="118" r="6"/><circle cx="128" cy="52" r="6"/><circle cx="162" cy="90" r="6"/><path d="M20 33v119h143" opacity=".3"/></svg>',
    '<svg viewBox="0 0 180 180" aria-hidden="true"><path d="M90 21c26 15 49 18 56 22v48c0 35-16 54-56 70-40-16-56-35-56-70V43c9-4 33-8 56-22Z"/><path d="M90 39c20 10 37 12 39 16v36c0 23-10 37-39 51-29-14-39-28-39-51V55c7-4 22-6 39-16Z" opacity=".4"/><rect x="77" y="85" width="27" height="24" rx="3"/><path d="M83 85v-8a7 7 0 0 1 15 0v8"/></svg>',
    '<svg viewBox="0 0 180 180" aria-hidden="true"><circle cx="90" cy="90" r="62"/><circle cx="90" cy="90" r="41" stroke-dasharray="4 7"/><circle cx="90" cy="90" r="19"/><path d="M90 5v30M90 145v30M5 90h30M145 90h30M29 29l22 22m78 78 22 22M151 29l-22 22m-78 78-22 22"/><path d="m84 85 6-12 6 12-6 16Z" fill="#748a55"/></svg>'
  ];
  const sessions = Array.isArray(d.sessions) ? d.sessions : [];
  $('#sessionsGrid').innerHTML = sessions.map((s,i) => `<article class="session-card">
    <div class="session-card-top"><span>WACANA / ${esc(s.code || String(i+1).padStart(2,'0'))}</span><span>↗</span></div>
    <span class="session-code" aria-hidden="true">${esc(s.code)}</span>
    <div class="session-glyph">${shapes[i % shapes.length]}</div>
    <div class="session-card-body"><span class="session-card-topic">${esc(s.topic)}</span><h3>${esc(s.title)}</h3><p class="session-card-desc">${esc(s.description)}</p><div class="session-footer"><span>${esc(s.speaker)}</span><button class="details-button" type="button" data-open-session="${i}" aria-label="Lihat butiran sesi ${i+1}">↗</button></div></div>
  </article>`).join('');

  // Session modal — z-index higher than header; independent scroll; always reachable close.
  const modal = $('#sessionModal'), modalDialog = $('.modal-dialog', modal);
  let modalTrigger = null;
  function openModal(index, trigger) {
    const s = sessions[index]; if(!s) return;
    modalTrigger = trigger;
    setText('#modalKicker',`SESI / ${s.code}`);setText('#modalCode',s.code);setText('#modalTopic',s.topic);
    setText('#modalTitle',s.title);setText('#modalDescription',s.description);
    setText('#modalSpeaker',s.speaker);setText('#modalRole',s.role);setText('#modalBio',s.bio);
    $('#modalTags').innerHTML = (s.tags || []).map(t=>`<span>${esc(t)}</span>`).join('');
    $('#modalAvatar').innerHTML = s.photo && isUrl(s.photo) ? `<img src="${esc(s.photo)}" alt="Foto ${esc(s.speaker)}">` : '✳';
    modal.hidden=false;document.body.classList.add('lock-scroll');$('#modalClose').focus();
  }
  function closeModal() {
    if(modal.hidden) return;
    modal.hidden=true;document.body.classList.remove('lock-scroll');
    if(modalTrigger) modalTrigger.focus({preventScroll:true});
  }
  $('#sessionsGrid').addEventListener('click',e=>{const b=e.target.closest('[data-open-session]');if(b)openModal(Number(b.dataset.openSession),b);});
  $('#modalClose').addEventListener('click',closeModal);
  modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
  modalDialog.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const focusables = $$('button,a[href],[tabindex]:not([tabindex="-1"])', modalDialog).filter(x=>!x.disabled);
    if(!focusables.length)return;
    const first=focusables[0], last=focusables[focusables.length-1];
    if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
  });

  // Resources — search and type filters. No dummy download buttons.
  const resources = Array.isArray(d.resources) ? d.resources : [];
  let activeResourceFilter = 'all';
  function renderResources(){
    const search = $('#resourceSearch').value.trim().toLowerCase();
    const shown=resources.filter(r => (activeResourceFilter==='all'||r.type===activeResourceFilter) && `${r.title||''} ${r.note||''}`.toLowerCase().includes(search));
    const target=$('#resourcesList');
    if(!shown.length){const hasResources=resources.length>0;target.innerHTML=`<div class="resource-empty"><span class="empty-symbol" aria-hidden="true">${hasResources?'⌕':'✳'}</span><div><h3>${hasResources?'Tiada padanan ditemui.':'Bahan dalam penyediaan.'}</h3><p>${hasResources?'Cuba kata kunci atau tapisan yang lain.':'Bahan pembentangan dan dokumen sokongan akan dipaparkan selepas mendapat pengesahan untuk dikongsi oleh urus setia.'}</p></div></div>`;return;}
    target.innerHTML=shown.map(r => {
      const href=isUrl(r.url)?r.url:'';const isPdf=r.type==='pdf';
      return `<div class="resource-row"><span class="resource-icon" aria-hidden="true">${isPdf?'▤':'↗'}</span><div class="resource-detail"><small>${isPdf?'DOKUMEN':'PAUTAN'}</small><h3>${esc(r.title)}</h3><p>${esc(r.note || '')}</p></div>${href?`<a class="resource-link" href="${esc(href)}" target="_blank" rel="noopener noreferrer">BUKA ↗</a>`:'<span class="resource-link" aria-label="Belum tersedia">BELUM ADA</span>'}</div>`;
    }).join('');
  }
  renderResources();
  $('#resourceSearch').addEventListener('input',renderResources);
  $$('[data-resource-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    activeResourceFilter=btn.dataset.resourceFilter;
    $$('[data-resource-filter]').forEach(b=>{const active=b===btn;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
    renderResources();
  }));

  // FAQ and administrative contacts.
  $('#faqList').innerHTML=(Array.isArray(d.faq)?d.faq:[]).map(item=>`<details class="faq-item"><summary>${esc(item.q)}</summary><p>${esc(item.a)}</p></details>`).join('');
  $('#contactsGrid').innerHTML=(Array.isArray(d.contacts)?d.contacts:[]).map(c=>`<div class="contact-person"><span>${esc(c.role)}</span><h3>${esc(c.name)}</h3><a href="mailto:${esc(c.email)}">${esc(c.email)} ↗</a></div>`).join('');
  if(d.officePhone){setText('#officePhone',d.officePhone);$('#officePhone').href='tel:'+d.officePhone.replace(/[^0-9+]/g,'');}

  // Mobile/tablet burger: drawer is hidden until clicked; close accessible above header.
  const overlay=$('#mobileOverlay'),panel=$('#mobilePanel'),openBtn=$('#menuOpen'),closeBtn=$('#menuClose');
  let menuWasOpened = false;
  function toggleMenu(open){
    menuWasOpened=open; overlay.hidden=!open;panel.classList.toggle('open',open);panel.setAttribute('aria-hidden',String(!open));
    if(open){panel.removeAttribute('inert');document.body.classList.add('lock-scroll');openBtn.setAttribute('aria-expanded','true');closeBtn.focus();}
    else{panel.setAttribute('inert','');document.body.classList.remove('lock-scroll');openBtn.setAttribute('aria-expanded','false');openBtn.focus({preventScroll:true});}
  }
  openBtn.addEventListener('click',()=>toggleMenu(true));closeBtn.addEventListener('click',()=>toggleMenu(false));
  overlay.addEventListener('click',()=>toggleMenu(false));
  $$('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>toggleMenu(false)));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!modal.hidden)closeModal();else if(menuWasOpened)toggleMenu(false);}});
  const desktopMedia = window.matchMedia('(min-width:1081px)');
  desktopMedia.addEventListener?.('change',e=>{if(e.matches && menuWasOpened)toggleMenu(false);});

  // Progress line and back-to-top.
  const backTop=$('#backToTop');
  function onScroll(){
    const max=document.documentElement.scrollHeight - window.innerHeight;
    $('#scrollProgress').style.width=`${max>0 ? Math.max(0,Math.min(100,window.scrollY/max*100)) : 0}%`;
    backTop.classList.toggle('visible',window.scrollY>650);
  }
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'}));

  // Set proper browser title / metadata for event title.
  document.title=`${d.title || 'Seminar AI'} — ${d.ministry || 'KDN'} ${d.year || '2026'}`;
})();
