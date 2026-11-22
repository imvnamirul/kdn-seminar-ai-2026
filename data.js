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
  headline: 'KEMENTERIAN DALAM NEGERI TAHUN 2026',
  description: 'Memberi pendedahan mengenai perkembangan AI dalam konteks keselamatan serta implikasinya terhadap persekitaran keselamatan semasa.',
  date: '2026-11-23',           // Isnin berdasarkan maklumat terbaru pengguna
  startTime: '08:00',
  endTime: '13:00',
  venue: 'Silk Hall, Level 1',
  room: 'Zenith Hotel, Putrajaya',
  address: 'Aras 1, Zenith Hotel, Putrajaya',
  mapUrl: '',                 // Isi pautan Google Maps apabila tempat disahkan
  organiser: 'Bahagian Perancangan Strategik (PG)',
  officialUrl: 'https://www.moha.gov.my/',
  registration: {
    enabled: false,            // tukar true apabila pautan / pendaftaran disahkan
    url: 'https://forms.gle/5Zyx3rwgk45i2skN6',
    label: 'Pengesahan Kehadiran'
  },
  intro: 'Seminar ini memberi pendedahan kepada warga KDN mengenai perkembangan teknologi AI dan implikasinya terhadap persekitaran keselamatan semasa. Penekanan turut diberikan kepada landskap ancaman, cabaran keselamatan yang muncul serta potensi dan risiko pengadaptasian AI dalam mendepani ancaman yang semakin kompleks.',
  objectives: [
    { number:'01', label:'Perkembangan AI', title:'Memahami perkembangan teknologi AI', description:'Meningkatkan kefahaman warga KDN mengenai perkembangan AI, khususnya dalam konteks keselamatan.' },
    { number:'02', label:'Implikasi Keselamatan', title:'Meneliti implikasi AI terhadap keselamatan', description:'Memberi pendedahan tentang implikasi teknologi AI terhadap persekitaran keselamatan semasa.' },
    { number:'03', label:'Ancaman & Cabaran', title:'Mengenal pasti ancaman dan cabaran baharu', description:'Memahami perubahan landskap ancaman keselamatan serta cabaran yang muncul seiring perkembangan AI.' },
    { number:'04', label:'Potensi & Risiko AI', title:'Menilai potensi dan risiko pengadaptasian AI', description:'Meneliti penggunaan AI dalam mendepani ancaman keselamatan yang semakin kompleks, termasuk potensi dan risikonya.' }
  ],
  /* ATUR CARA DI BAWAH BERASASKAN DRAF JEMPUTAN 26 NOVEMBER 2026.
     PERLU SEMAK SEBELUM MENERBITKAN UNTUK ACARA 23 NOVEMBER. */
  // Mengikut tentatif program bertarikh 21 November 2026.
  // Tiada aktiviti dinyatakan dalam tentatif bagi 08:30–09:00.
  agenda: [
    { time:'08:00', end:'08:30', type:'urusetia', kicker:'Ketibaan', title:'Pendaftaran Peserta dan Sarapan', description:'', speaker:'' },
    { time:'09:00', end:'10:00', type:'sesi', kicker:'Wacana 1', title:'Konsep Penggunaan Data Dalam Pembuatan Keputusan', description:'', speaker:'Encik Mohamad Zafir Bin Nadzri', role:'Pembantu Penyelidik, Institut Penyelidikan Perakaunan (ARI), UiTM' },
    { time:'10:00', end:'10:15', type:'rehat', kicker:'Rehat', title:'Minum Pagi', description:'', speaker:'' },
    { time:'10:15', end:'11:15', type:'sesi', kicker:'Wacana 2', title:'AI dan Keselamatan Siber: Peluang dan Ancaman KDN serta Agensi', description:'', speaker:'YBrs. Ts. Dr. Azlina binti Ab. Aziz', role:'Ketua Penolong Pengarah, Agensi Keselamatan Siber Negara (NACSA)' },
    { time:'11:20', end:'12:20', type:'sesi', kicker:'Wacana 3', title:'Apabila AI Menjadi Senjata: Jenayah Digital, Pemalsuan Identiti dan Cabaran Keselamatan Negara', description:'', speaker:'YBrs. Ts. Fakhrul Afiq Abd Aziz', role:'Senior Analyst, Unit AI, CyberSecurity Malaysia' },
    { time:'12:30', end:'12:30', type:'rasmi', kicker:'Penutup', title:'Ucapan Penutup', description:'', speaker:'YBrs. Puan Siti Salmiah binti Haji Dimyati', role:'Setiausaha Bahagian, Bahagian Perancangan Strategik' },
    { time:'13:00', end:'13:00', type:'urusetia', kicker:'Jamuan', title:'Makan Tengahari', description:'', speaker:'' }
  ],
  sessions: [
    { code:'01', topic:'DATA / KEPUTUSAN', title:'Konsep Penggunaan Data Dalam Pembuatan Keputusan', description:'Perkongsian mengenai konsep penggunaan data dalam pembuatan keputusan.', speaker:'Encik Mohamad Zafir Bin Nadzri', role:'Pembantu Penyelidik, Institut Penyelidikan Perakaunan (ARI), UiTM', photo:'', bio:'• 5 tahun pengalaman dalam pembangunan sistem dan AI.\n• Kepakaran: fine-tuning LLM, deep learning, agentic AI dan sistem multi-agent.\n• Hasil kerja: chatbot, RAG dan platform pengurusan kerja (Work OS).\n• Terlibat dalam pembangunan sistem IKKA, KDN.', tags:['Penggunaan Data','Pembuatan Keputusan','Pembangunan AI'] },
    { code:'02', topic:'AI / KESELAMATAN SIBER', title:'AI dan Keselamatan Siber: Peluang dan Ancaman KDN serta Agensi', description:'Perkongsian mengenai peluang dan ancaman AI dalam konteks keselamatan siber KDN serta agensi.', speaker:'YBrs. Ts. Dr. Azlina binti Ab. Aziz', role:'Ketua Penolong Pengarah, Agensi Keselamatan Siber Negara (NACSA)', photo:'', bio:'', tags:['Keselamatan Siber','Peluang AI','Ancaman AI'] },
    { code:'03', topic:'JENAYAH DIGITAL / IDENTITI', title:'Apabila AI Menjadi Senjata: Jenayah Digital, Pemalsuan Identiti dan Cabaran Keselamatan Negara', description:'Perkongsian mengenai jenayah digital, pemalsuan identiti dan cabaran keselamatan negara berkaitan AI.', speaker:'YBrs. Ts. Fakhrul Afiq Abd Aziz', role:'Senior Analyst, Unit AI, CyberSecurity Malaysia', photo:'', bio:'', tags:['Jenayah Digital','Pemalsuan Identiti','Keselamatan Negara'] }
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
