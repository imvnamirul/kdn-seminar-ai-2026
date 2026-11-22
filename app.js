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
  // Keep the separately styled ministry script and year intact.
  setText('#heroMinistry', d.ministry || 'Kementerian Dalam Negeri');
  setText('#heroYear', `TAHUN ${d.year || '2026'}`);
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
      <div class="agenda-main"><span class="agenda-kicker">${esc(a.kicker || '')}${a.end && a.end!==a.time ? ` &nbsp; / &nbsp; ${esc(h12(a.time))} – ${esc(h12(a.end))}` : ''}</span><h3>${esc(a.title)}</h3>${a.description?`<p>${esc(a.description)}</p>`:''}${a.speaker?`<span class="agenda-speaker">${esc(a.speaker)}</span>${a.role?`<span class="agenda-role">${esc(a.role)}</span>`:''}`:''}</div><span class="agenda-arrow" aria-hidden="true">↗</span>
    </article>`).join('') || '<p class="resource-empty">Tiada atur cara untuk dipaparkan.</p>';
  }
  renderAgenda();
  $$('[data-agenda-filter]').forEach(btn => btn.addEventListener('click', () => {
    $$('[data-agenda-filter]').forEach(b => { const active = b === btn; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active)); });
    renderAgenda(btn.dataset.agendaFilter);
  }));

  // Speaker-first cards: portraits and credentials lead; talk topic follows.
  const sessions = Array.isArray(d.sessions) ? d.sessions : [];
  $('#sessionsGrid').innerHTML = sessions.map((s,i) => {
    const index = esc(s.code || String(i+1).padStart(2,'0'));
    const image = s.photo && isUrl(s.photo)
      ? '<img class="speaker-card-portrait" src="'+esc(s.photo)+'" alt="Potret '+esc(s.speaker)+'" loading="lazy" decoding="async">'
      : '<div class="speaker-card-awaiting" aria-label="Foto penceramah belum tersedia"><span>'+index+'</span><small>FOTO PENCERAMAH<br>AKAN DIKEMAS KINI</small></div>';
    return '<article class="session-card speaker-profile-card">'
      +'<div class="speaker-profile-visual"><span class="speaker-wacana-tag">WACANA '+index+'</span>'+image+'</div>'
      +'<div class="speaker-profile-rule"></div>'
      +'<div class="speaker-profile-copy">'
      +'<h3 class="speaker-profile-name">'+esc(s.speaker)+'</h3>'
      +'<div class="speaker-profile-role">'+esc(s.role||'Maklumat jawatan akan dimaklumkan')+'</div>'
      +'<div class="speaker-profile-talk"><span>TAJUK WACANA</span><p>'+esc(s.title)+'</p></div>'
      +'<div class="speaker-profile-footer"><span>PROFIL PENCERAMAH</span><button class="details-button" type="button" data-open-session="'+i+'" aria-label="Lihat profil '+esc(s.speaker)+'">↗</button></div>'
      +'</div></article>';
  }).join('');

  // Session modal — z-index higher than header; independent scroll; always reachable close.
  const modal = $('#sessionModal'), modalDialog = $('.modal-dialog', modal);
  let modalTrigger = null;
  function openModal(index, trigger) {
    const s = sessions[index]; if(!s) return;
    modalTrigger = trigger;
    setText('#modalKicker', `WACANA ${s.code || String(index+1).padStart(2,'0')}`);
    setText('#modalSpeaker', s.speaker || 'Penceramah');
    setText('#modalRole', s.role || 'Maklumat jawatan belum dimaklumkan');
    setText('#modalTitle', s.title || 'Tajuk akan dimaklumkan');
    setText('#modalDescription', s.description || 'Maklumat fokus wacana akan dikemas kini oleh urus setia.');
    const bio = String(s.bio || '').trim();
    const lines = bio.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
    $('#modalBio').innerHTML = !bio
      ? '<p>Maklumat profil penceramah akan dikemas kini oleh urus setia.</p>'
      : lines.length > 1 || lines.some(line => line.startsWith('•'))
        ? '<ul class="modal-bio-list">' + lines.map(line => '<li>' + esc(line.replace(/^•\s*/, '')) + '</li>').join('') + '</ul>'
        : '<p>' + esc(bio) + '</p>';
    $('#modalAvatar').innerHTML = s.photo && isUrl(s.photo)
      ? `<img src="${esc(s.photo)}" alt="Foto ${esc(s.speaker)}" loading="eager" decoding="async">`
      : '<div class="modal-portrait-placeholder"><span>' + esc(s.code || String(index+1).padStart(2,'0')) + '</span><small>FOTO PENCERAMAH BELUM TERSEDIA</small></div>';
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

  // Wacana briefings — grounded in speaker slide decks; PDF parts are
  // assembled on demand to keep the static GitHub Pages site lightweight.
  const briefs = Array.isArray(d.wacanaBriefs) ? d.wacanaBriefs : [];
  const sessionByCode = new Map((Array.isArray(d.sessions) ? d.sessions : []).map(s => [String(s.code),s]));
  const pdfCache = new Map();
  $('#wacanaSummaries').innerHTML = briefs.map((b,i) => {
    const speaker = sessionByCode.get(String(b.code)) || {};
    const list = (items) => '<ul>' + (items||[]).map(item => '<li>'+esc(item)+'</li>').join('') + '</ul>';
    return '<article class="wacana-brief" id="ringkasan-wacana-'+esc(b.code)+'">' +
      '<div class="wacana-brief-left">' +
        '<span class="wacana-brief-pill">WACANA '+esc(b.code)+'</span>' +
        '<h3>'+esc(speaker.title||'Tajuk Wacana')+'</h3>' +
        '<div class="wacana-brief-speaker"><strong>'+esc(speaker.speaker||'Penceramah')+'</strong><small>'+esc(speaker.role||'')+'</small></div>' +
        '<div class="wacana-brief-actions">' +
          '<button type="button" class="wacana-brief-button primary" data-deck-index="'+i+'" data-deck-action="download">↓ MUAT TURUN PDF</button>' +
          '<button type="button" class="wacana-brief-button secondary" data-deck-index="'+i+'" data-deck-action="view">◉ LIHAT SLAID</button>' +
        '</div>' +
        '<span class="wacana-brief-count">'+esc(String(b.pageCount||''))+' HALAMAN SLAID</span>' +
      '</div>' +
      '<div class="wacana-brief-right">' +
        '<p class="wacana-brief-intro">'+esc(b.intro||'')+'</p>' +
        '<div class="wacana-brief-panels">' +
          '<section class="wacana-detail-panel"><h4>RINGKASAN KANDUNGAN</h4>'+list(b.content)+'</section>' +
          '<section class="wacana-detail-panel outcomes"><h4>HASIL PEMBELAJARAN</h4>'+list(b.outcomes)+'</section>' +
        '</div>' +
      '</div>' +
    '</article>';
  }).join('');

  // PDF1 is a normal file. PDFs 2 and 3 are split into static base64
  // resources; concatenate and decode when a visitor requests them.
  async function deckUrlFor(index) {
    const brief=briefs[index];
    if (!brief) throw new Error('Wacana tidak ditemui');
    if (brief.pdf) return new URL(brief.pdf,document.baseURI).href;
    if (pdfCache.has(index)) return pdfCache.get(index);
    if (!brief.partPrefix || !brief.partCount) throw new Error('Fail pembentangan belum tersedia');
    const paths=Array.from({length:brief.partCount},(_,i)=>brief.partPrefix+String(i+1).padStart(2,'0')+'.b64');
    const segments=await Promise.all(paths.map(async path=>{
      const response=await fetch(path,{cache:'force-cache'});
      if(!response.ok)throw new Error('Fail slaid tidak dapat dicapai: '+path);
      return (await response.text()).replace(/\s+/g,'');
    }));
    const encoded=segments.join('');
    const binary=atob(encoded);
    const buffer=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++)buffer[i]=binary.charCodeAt(i);
    const url=URL.createObjectURL(new Blob([buffer],{type:'application/pdf'}));
    pdfCache.set(index,url);
    return url;
  }

  $$('[data-deck-action]').forEach(button=>button.addEventListener('click',async ()=>{
    const idx=Number(button.dataset.deckIndex);
    const brief=briefs[idx];
    const action=button.dataset.deckAction;
    const viewer=action==='view' ? window.open('','_blank') : null;
    if(viewer) {
      viewer.opener=null;
      viewer.document.title='Memuatkan slaid seminar…';
      viewer.document.body.textContent='Memuatkan slaid seminar…';
    }
    const originalLabel=button.textContent;
    button.disabled=true;
    button.textContent='MENYEDIAKAN SLAID…';
    try{
      const url=await deckUrlFor(idx);
      if(action==='view'){
        if(viewer) viewer.location.href=url;
        else window.open(url,'_blank');
      }else{
        const a=document.createElement('a');
        a.href=url;
        a.download=brief.fileName||('wacana-'+brief.code+'.pdf');
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    }catch(error){
      if(viewer && !viewer.closed)viewer.close();
      window.alert('Maaf, slaid tidak dapat dibuka. Sila cuba lagi atau maklumkan kepada urus setia.');
      console.error('Wacana PDF gagal dimuatkan:',error);
    }finally{
      button.disabled=false;
      button.textContent=originalLabel;
    }
  }));
  window.addEventListener('pagehide',()=>pdfCache.forEach(url=>URL.revokeObjectURL(url)));

  // Contact information. FAQ section was intentionally removed.
  // Venue photo lightbox uses the native modal dialog, above the sticky header.
  const venueDialog = $('#venuePhotoDialog'), venueImg = $('#venuePhotoImage');
  let lastVenueTrigger = null;
  $('.seminar-venue-image').forEach(btn => btn.addEventListener('click', () => {
    const src = btn.dataset.venuePhoto;
    if (!isUrl(src) || !venueDialog || !venueImg) return;
    lastVenueTrigger = btn;
    venueImg.src = src;
    venueImg.alt = btn.dataset.venueTitle || 'Gambar lokasi seminar';
    setText('#venuePhotoTitle', btn.dataset.venueTitle || 'Gambar lokasi seminar');
    if (typeof venueDialog.showModal === 'function') venueDialog.showModal();
    else window.open(src, '_blank', 'noopener');
  }));
  $('#venuePhotoClose')?.addEventListener('click', () => venueDialog.close());
  venueDialog?.addEventListener('click', e => {
    if (e.target === venueDialog) venueDialog.close();
  });
  venueDialog?.addEventListener('close', () => {
    venueImg.removeAttribute('src');
    if (lastVenueTrigger) lastVenueTrigger.focus({preventScroll:true});
  });
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
  const desktopMedia = window.matchMedia('(min-width:1201px)');
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
