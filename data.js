/* =============================================================
   SEMINAR AI KDN 2026 — EDIT DI SINI SAHAJA
   1) Tukar tarikh/tempat/masa, kemudian tajuk dan sesi.
   2) Untuk gambar penceramah: letak fail dalam assets/ lalu isi photo.
   3) Untuk PDF: letak dalam bahan/ dan isi url: "bahan/nama.pdf".
   4) Simpan semua fail, upload folder ini ke GitHub Pages.
   ============================================================= */
window.SEMINAR = {
  title: 'Seminar Kecerdasan Buatan (AI)',
  ministry: 'Kementerian Dalam Negeri',
  year: '2026',
  theme: 'KECERDASAN · DATA · KESELAMATAN',
  headline: 'Memahami AI. Mengukuh Keselamatan.',
  description: 'Meneroka peranan kecerdasan buatan dalam pembuatan keputusan, keselamatan data dan landskap ancaman keselamatan masa kini.',
  date: '2026-11-23',           // Isnin berdasarkan maklumat terbaru pengguna
  startTime: '08:00',
  endTime: '13:00',
  venue: '',                  // KOSONG = papar “Lokasi akan dimaklumkan”
  room: '',
  address: '',
  mapUrl: '',                 // Isi pautan Google Maps apabila tempat disahkan
  organiser: 'Bahagian Perancangan Strategik (PG)',
  officialUrl: 'https://www.moha.gov.my/',
  registration: {
    enabled: false,            // tukar true apabila pautan / pendaftaran disahkan
    url: 'https://forms.gle/5Zyx3rwgk45i2skN6',
    label: 'Pengesahan Kehadiran'
  },
  intro: 'Seminar ini mengetengahkan pemahaman tentang teknologi AI dalam konteks keselamatan negara, termasuk bagaimana data membantu keputusan strategik, melindungi maklumat serta memahami ancaman baharu dalam era AI.',
  objectives: [
    { number:'01', label:'Pemahaman AI', title:'Memperkukuh literasi AI', description:'Meningkatkan kefahaman tentang perkembangan AI dan aplikasinya dalam persekitaran kerja sektor awam.' },
    { number:'02', label:'Keputusan Berasaskan Data', title:'Memantapkan analisis strategik', description:'Menghayati nilai data sebagai asas untuk menyokong pertimbangan dan pembuatan keputusan yang lebih bermaklumat.' },
    { number:'03', label:'Keselamatan Data', title:'Memperkasa kesedaran perlindungan maklumat', description:'Mengukuhkan kepekaan terhadap keselamatan data serta penggunaan AI secara bertanggungjawab.' },
    { number:'04', label:'Ancaman Keselamatan', title:'Memahami risiko dalam era AI', description:'Meneliti landskap ancaman yang berubah dan implikasi teknologi AI terhadap cabaran keselamatan semasa.' }
  ],
  /* ATUR CARA DI BAWAH BERASASKAN DRAF JEMPUTAN 26 NOVEMBER 2026.
     PERLU SEMAK SEBELUM MENERBITKAN UNTUK ACARA 23 NOVEMBER. */
  agenda: [
    { time:'08:00', end:'08:30', type:'urusetia', kicker:'Ketibaan', title:'Pendaftaran Peserta & Sarapan', description:'Pendaftaran dan sarapan pagi.', speaker:'' },
    { time:'08:30', end:'09:00', type:'rasmi', kicker:'Pembukaan', title:'Taklimat Seminar & Ucapan Perasmian', description:'Taklimat pentadbiran dan ucapan perasmian.', speaker:'YBhg. Datuk Dr. Awang Alik bin Jeman', role:'Ketua Setiausaha, Kementerian Dalam Negeri' },
    { time:'09:00', end:'10:00', type:'sesi', kicker:'Sesi 01', title:'Konsep Penggunaan Data dalam Pembuatan Keputusan', description:'Mendalami asas penggunaan data sebagai sandaran kepada pertimbangan dan keputusan organisasi.', speaker:'Akan dimaklumkan', role:'Maklumat penceramah dalam penyelarasan' },
    { time:'10:00', end:'10:15', type:'rehat', kicker:'Rehat', title:'Minum Pagi', description:'Rehat ringkas.', speaker:'' },
    { time:'10:15', end:'11:15', type:'sesi', kicker:'Sesi 02', title:'Keselamatan Data dalam Perkhidmatan Awam di Era AI', description:'Meneroka isu perlindungan data, risiko pengendalian maklumat dan tanggungjawab organisasi.', speaker:'Akan dimaklumkan', role:'Maklumat penceramah dalam penyelarasan' },
    { time:'11:20', end:'12:20', type:'sesi', kicker:'Sesi 03', title:'Landskap Ancaman Keselamatan dalam Era AI', description:'Meneliti perkembangan ancaman digital serta cabaran keselamatan dalam persekitaran AI.', speaker:'Akan dimaklumkan', role:'Maklumat penceramah dalam penyelarasan' },
    { time:'12:30', end:'13:00', type:'rasmi', kicker:'Penutup', title:'Penutup Seminar', description:'Rumusan dan penutup.', speaker:'' },
    { time:'13:00', end:'13:00', type:'urusetia', kicker:'Selesai', title:'Makan Tengah Hari & Bersurai', description:'Program tamat.', speaker:'' }
  ],
  sessions: [
    { code:'01', topic:'DATA / DECISION', title:'Konsep Penggunaan Data dalam Pembuatan Keputusan', description:'Bagaimana data yang relevan, berkualiti dan ditafsir dengan teliti dapat memperkukuh keputusan organisasi.', speaker:'Akan dimaklumkan', role:'Penceramah Sesi 1', photo:'', bio:'Profil penceramah akan dimuat naik selepas pengesahan urus setia.', tags:['Analitik Data','Pembuatan Keputusan','Sektor Awam'] },
    { code:'02', topic:'DATA / PROTECTION', title:'Keselamatan Data dalam Perkhidmatan Awam di Era AI', description:'Tadbir urus maklumat dan keperluan keselamatan ketika AI semakin digunakan dalam perkhidmatan awam.', speaker:'Akan dimaklumkan', role:'Penceramah Sesi 2', photo:'', bio:'Profil penceramah akan dimuat naik selepas pengesahan urus setia.', tags:['Keselamatan Data','Tadbir Urus','AI Bertanggungjawab'] },
    { code:'03', topic:'AI / THREAT LANDSCAPE', title:'Landskap Ancaman Keselamatan dalam Era AI', description:'Risiko baharu, kaedah serangan yang berkembang dan keperluan kesedaran ancaman dalam era AI.', speaker:'Akan dimaklumkan', role:'Penceramah Sesi 3', photo:'', bio:'Profil penceramah akan dimuat naik selepas pengesahan urus setia.', tags:['Ancaman Siber','Risiko AI','Kesiapsiagaan'] }
  ],
  resources: [
    /* Contoh selepas bahan tersedia:
      {type:'pdf', title:'Slaid Sesi 1', note:'Bahan pembentangan', url:'bahan/slaid-sesi-1.pdf'},
      {type:'link', title:'Rujukan Rasmi', note:'Bahan bacaan', url:'https://www.example.gov.my'}
    */
  ],
  contacts: [
    { name:'Cik Siti Hanizah Binti Tupani', role:'Urus Setia Seminar', email:'sitihanizah@moha.gov.my' },
    { name:'Encik Amirul Iman Bin Md Nizam', role:'Urus Setia Seminar', email:'amiruliman@moha.gov.my' }
  ],
  officePhone: '03-8886 3299',
  faq: [
    { q:'Siapakah yang boleh menyertai seminar ini?', a:'Seminar ini dirancang untuk warga Kementerian Dalam Negeri serta jabatan dan agensi berkaitan, tertakluk kepada jemputan urus setia.' },
    { q:'Bagaimana untuk mengesahkan kehadiran?', a:'Pengesahan kehadiran adalah berdasarkan saluran yang dimaklumkan dalam jemputan rasmi. Hubungi urus setia untuk semakan lanjut.' },
    { q:'Adakah bahan pembentangan disediakan?', a:'Bahan perkongsian, jika dibenarkan oleh penceramah, akan dipaparkan pada bahagian Bahan Seminar selepas disahkan oleh urus setia.' },
    { q:'Apakah peralatan yang perlu dibawa?', a:'Sila rujuk arahan urus setia. Peranti peribadi boleh dibawa jika diperlukan, dengan mengambil kira dasar keselamatan maklumat tempat kerja.' }
  ]
};
