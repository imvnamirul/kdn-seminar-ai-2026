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
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zenith+Hotel+Putrajaya',
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
 {
  time:'08:00',
  end:'09:00',
  type:'urusetia',
  kicker:'Ketibaan',
  title:'Pendaftaran Peserta dan Sarapan',
  description:'',
  speaker:''
},

  {
    time:'09:00',
    end:'09:00',
    type:'rasmi',
    kicker:'Fotografi',
    title:'Sesi Fotografi',
    description:'',
    speaker:''
  },
  {
    time:'09:05',
    end:'09:05',
    type:'rasmi',
    kicker:'Perasmian',
    title:'Ucapan Perasmian',
    description:'',
    speaker:'YBrs. Puan Siti Salmiah Binti Haji Dimyati',
    role:'Setiausaha Bahagian, Bahagian Perancangan Strategik'
  },
  {
    time:'09:15',
    end:'10:15',
    type:'sesi',
    kicker:'Wacana 1',
    title:'Konsep Penggunaan Data Dalam Pembuatan Keputusan',
    description:'',
    speaker:'Encik Mohamad Zafir Bin Nadzri',
    role:'Pembantu Penyelidik, Institut Penyelidikan Perakaunan (ARI), Universiti Teknologi MARA (UiTM)'
  },
  {
    time:'10:15',
    end:'10:30',
    type:'rehat',
    kicker:'Rehat',
    title:'Minum Pagi',
    description:'',
    speaker:''
  },
  {
    time:'10:30',
    end:'11:30',
    type:'sesi',
    kicker:'Wacana 2',
    title:'AI dan Keselamatan Siber: Antara Potensi dan Risiko',
    description:'',
    speaker:'YBrs. Ts. Dr. Azlina binti Ab. Aziz',
    role:'Ketua Penolong Pengarah, Agensi Keselamatan Siber Negara (NACSA)'
  },
  {
    time:'11:35',
    end:'12:35',
    type:'sesi',
    kicker:'Wacana 3',
    title:'Apabila AI Menjadi Senjata: Jenayah Digital, Pemalsuan Identiti dan Cabaran Keselamatan Negara',
    description:'',
    speaker:'YBrs. Ts. Fakhrul Afiq Abd Aziz',
    role:'Senior Analyst, Unit Kecerdasan Buatan (AI), CyberSecurity Malaysia'
  },
  {
    time:'12:35',
    end:'13:00',
    type:'urusetia',
    kicker:'Penutup',
    title:'Makan Tengah Hari dan Bersurai',
    description:'',
    speaker:''
  }
],


  sessions: [
    { code:'01', topic:'DATA / KEPUTUSAN', title:'Konsep Penggunaan Data Dalam Pembuatan Keputusan', description:'Perkongsian mengenai konsep penggunaan data dalam pembuatan keputusan.', speaker:'Encik Mohamad Zafir Bin Nadzri', role:'Pembantu Penyelidik, Institut Penyelidikan Perakaunan (ARI), Universiti Teknologi MARA (UiTM)', photo:'assets/wacana1_zafir.webp', bio:'• 5 tahun pengalaman dalam pembangunan sistem dan AI.\n• Kepakaran: fine-tuning LLM, deep learning, agentic AI dan sistem multi-agent.\n• Hasil kerja: chatbot, RAG dan platform pengurusan kerja (Work OS).\n• Terlibat dalam pembangunan sistem IKKA, KDN.', tags:['Penggunaan Data','Pembuatan Keputusan','Pembangunan AI'] },
    { code:'02', topic:'AI / KESELAMATAN SIBER', title:'AI dan Keselamatan Siber: Antara Potensi dan Risiko', description:'Meneroka peluang penggunaan AI dalam keselamatan siber serta risiko seperti kebocoran data, ancaman kepada sistem AI dan penyalahgunaan teknologi terhadap agensi KDN.', speaker:'YBrs. Ts. Dr. Azlina binti Ab. Aziz', role:'Ketua Penolong Pengarah, Agensi Keselamatan Siber Negara (NACSA), Majlis Keselamatan Negara (MKN), Jabatan Perdana Menteri (JPM)', photo:'assets/wacana2_azlina.webp', bio:'• Lebih 20 tahun pengalaman dalam perkhidmatan awam, termasuk JPJ, MOSTI dan MAFI, dengan kepakaran dalam tadbir urus ICT, transformasi digital dan inovasi sektor awam.\n• Memiliki Ph.D. dalam Sains Maklumat (UKM), Sarjana Teknologi Maklumat (UiTM) serta Ijazah Sarjana Muda dan Diploma Sains Komputer (UPM).\n• Menerajui pembangunan AISCF, Dasar Kriptografi Negara (MyKriptografi) dan Pelan Tindakan MyKriptografi 2026–2030; turut menyumbang kepada MCSS 2025–2030.\n• Felo UNIDIR Women in AI serta ahli Kumpulan Kerja Keselamatan AI (AI Malaysia Berhad) dan Jawatankuasa Keselamatan Siber NBAIC.', tags:['Keselamatan Siber','AI','Kriptografi'] },
    { code:'03', topic:'JENAYAH DIGITAL / IDENTITI', title:'Apabila AI Menjadi Senjata: Jenayah Digital, Pemalsuan Identiti dan Cabaran Keselamatan Negara', description:'Perkongsian mengenai jenayah digital, pemalsuan identiti dan cabaran keselamatan negara berkaitan AI.', speaker:'Ts. Fakhrul Afiq bin Abd Aziz', role:'Senior Analyst, Unit Kecerdasan Buatan (AI), CyberSecurity Malaysia', photo:'assets/wacana3_fakhrul.webp', bio:'• Pakar forensik digital dan keselamatan siber dengan pengalaman lebih 10 tahun di CyberSecurity Malaysia.\n• Memiliki Ijazah Sarjana dalam Digital Security dari EURECOM, Perancis.\n• Mengendalikan siasatan forensik digital termasuk kes berprofil tinggi dan memberikan keterangan sebagai saksi pakar di mahkamah.\n• Mengetuai Makmal Forensik Kenderaan CyberSecurity Malaysia serta terlibat dalam pembangunan CamScore dan Modern Vehicle Expert Consortium.\n• Mengetuai pembangunan TERAI dan menyumbang kepada MyAISAFE, AISCF dan MTSFB Technical Code on Artificial Intelligence.\n• Berkongsi kepakaran di peringkat antarabangsa melalui UNODC dan INTERPOL.', tags:['Jenayah Digital','Pemalsuan Identiti','Keselamatan Negara'] }
  ],
  // Inti pati dirumus daripada slaid sebenar ketiga-tiga pembentang.
  wacanaBriefs: [
    {
      code:'01', fileName:'Wacana_01_Konsep_Penggunaan_Data.pdf', pageCount:37,
      pdf:'bahan/wacana-01.pdf',
      intro:'Memahami bagaimana data dinilai dan diterjemahkan menjadi keputusan yang lebih tepat, berasaskan contoh serta pengalaman pembangunan sistem IKKA di KDN.',
      content:[
        'Bagaimana data mentah ditukar kepada ukuran, tafsiran dan maklumat yang boleh menyokong keputusan.',
        'Empat lapisan analitik: deskriptif (apa berlaku), diagnostik (mengapa), prediktif (apa mungkin berlaku) dan preskriptif (apa tindakan terbaik).',
        'Contoh pembangunan sistem IKKA serta isu kualiti, integriti dan keselamatan data dalam persekitaran kerja KDN.'
      ],
      outcomes:[
        'Mulakan tugasan analisis dengan menyatakan keputusan yang hendak dibuat dan bukti yang diperlukan.',
        'Pilih jenis analitik yang sesuai dengan soalan kerja, bukan terus menghasilkan graf atau angka tanpa konteks.',
        'Semak sumber serta ketepatan dapatan dan asingkan maklumat terperingkat sebelum menggunakan mana-mana alat AI.'
      ]
    },
 
{
  code:'02',
  fileName:'Wacana_02_AI_dan_Keselamatan_Siber_Terkini.pdf',
  pageCount:64,
  pdf:'bahan/wacana-02-terkini.pdf',

  intro:'Meneliti peluang AI untuk meningkatkan operasi KDN, ancaman yang muncul apabila AI digunakan atau disalah guna, dan inisiatif kerajaan bagi penggunaan AI yang selamat.',

  content:[
    'Aplikasi AI dalam konteks KDN: analitik keselamatan, kecekapan operasi, pengesahan identiti, pemantauan sempadan dan penyampaian perkhidmatan.',

    'Tiga kelompok risiko siber: tradisional, khusus sistem AI (termasuk data poisoning dan prompt injection), serta baharu seperti deepfake, identiti sintetik dan ejen autonomi.',

    'Inisiatif kerajaan serta dokumen rujukan termasuk AI Malaysia Berhad, Pelan Tindakan AI Kebangsaan 2026–2030 dan Kerangka Keselamatan Siber bagi Sistem Kecerdasan Buatan (AISCF).'
  ],

  outcomes:[
    'Pilih penggunaan AI yang sesuai dengan fungsi agensi dan pastikan keputusan penting tetap disemak oleh pegawai.',

    'Lindungi maklumat sensitif KDN: elakkan perkongsian melalui AI awam dan semak ketepatan serta sumber output sebelum digunakan.',

    'Sahkan arahan suara atau kandungan yang mencurigakan melalui saluran rasmi; amalkan disiplin, semakan dan tanggungjawab.'
  ]
},

    {
      code:'03', fileName:'Wacana_03_Apabila_AI_Menjadi_Senjata.pdf', pageCount:48,
      partPrefix:'bahan/wacana-03.part', partCount:9,
      intro:'Menjelaskan bagaimana AI mempercepat jenayah digital dan pemalsuan identiti, serta langkah mengesahkan maklumat, melindungi dokumen dan memelihara integriti bukti.',
      content:[
        'Modus operandi penipuan berasaskan AI: deepfake, pengklonan suara dan jenayah siber sebagai perkhidmatan (CaaS).',
        'Manipulasi identiti melalui dokumen palsu, penyamaran biometrik dan kandungan audio-visual yang direka.',
        'Ancaman terhadap model dan ejen AI seperti prompt injection serta cabaran integriti bukti dalam forensik digital.'
      ],
      outcomes:[
        'Jangan luluskan transaksi atau arahan mendesak hanya berdasarkan rakaman suara atau video; hubungi pengirim melalui saluran berasingan.',
        'Kekalkan fail asal, rekod komunikasi dan butiran kejadian apabila menemui bahan digital yang disyaki dimanipulasi.',
        'Gunakan rutin SEMAK → SAHKAN → LINDUNGI → LAPORKAN sebelum berkongsi maklumat atau bertindak atas arahan mencurigakan.'
      ]
    }
  ],
  contacts: [
    { name:'Cik Siti Hanizah Binti Tupani', role:'Urus Setia Seminar', phone:'019-6353 700', email:'sitihanizah@moha.gov.my' },
    { name:'Cik Haziqah Nazurah Binti Priyant', role:'Urus Setia Seminar', phone:'016-388 9206', email:'haziqahnazurah@moha.gov.my' },
    { name:'Encik Amirul Iman Bin Md Nizam', role:'Urus Setia Seminar', phone:'011-39132036', email:'amiruliman@moha.gov.my' }
  ],
  office: {
    name:'Bahagian Perancangan Strategik (PG)',
    ministry:'Kementerian Dalam Negeri',
    addressLines:['Aras 7 & 8, Setia Perkasa 2','Kompleks Setia Perkasa','Pusat Pentadbiran Kerajaan Persekutuan','62546 Putrajaya'],
    phone:'03 8886 3299',
    fax:'03 8889 1713',
    email:'bahagian_pg@moha.gov.my'
  },
  officePhone: '03-8886 3299'

};
