// ============================================================
// DATABASE KOSAKATA KAMUS DIGITAL ARAB–REJANG–INDONESIA
// BERBASIS KEBUDAYAAN REJANG LEBONG, BENGKULU
// Total: 268 ENTRI LENGKAP | 4 Kategori Budaya Rejang
// ============================================================
// Setiap entri memiliki struktur:
//   kat      : kategori (Bahasa / Kesenian / Adat-Istiadat / Kearifan Lokal)
//   arab     : tulisan Arab
//   latin    : transliterasi Latin
//   indo     : padanan Bahasa Indonesia
//   rejang   : padanan Bahasa Rejang
//   gambar   : path gambar (kosong jika belum ada)
//   budaya   : penjelasan budaya/konteks
//   kalimat  : { arab: "...", indo: "...", rejang: "..." }
// ============================================================

const kosakata = [
  // ============================================================
  // KATEGORI 1: BAHASA (40 entri)
  // ============================================================
  {
    kat: "Bahasa",
    arab: "خَطٌّ",
    latin: "Khathth",
    indo: "aksara (kaganga)",
    rejang: "aksara ulu",
    gambar: "",
    budaya: "Aksara Kaganga atau aksara Ulu adalah sistem tulisan tradisional suku Rejang yang telah digunakan sejak berabad-abad lalu. Aksara ini merupakan warisan budaya tak benda yang kini dilestarikan dan diajarkan di sekolah-sekolah di Rejang Lebong.",
    kalimat: {
      arab: "الْخَطُّ الْكَاغَانْغَا هُوَ تُرَاثٌ ثَقَافِيٌّ لِشَعْبِ رِيجَانْغ",
      indo: "Aksara Kaganga adalah warisan budaya suku Rejang yang harus kita lestarikan.",
      rejang: "Aksara ulu adalah warisan nenek moyang kita yang perlu dijaga."
    }
  },
  {
    kat: "Bahasa",
    arab: "حَرْفٌ",
    latin: "Harf",
    indo: "kaganga",
    rejang: "kaganga",
    gambar: "",
    budaya: "Kaganga adalah nama lain untuk aksara Ulu Rejang, diambil dari tiga huruf pertama dalam sistem abjad aksara tersebut, mirip dengan penamaan 'ABC' dalam alfabet Latin.",
    kalimat: {
      arab: "كَاغَانْغَا هُوَ اسْمٌ لِحُرُوفِ رِيجَانْغ الْتَّقْلِيدِيَّة",
      indo: "Kaganga adalah nama sistem huruf tradisional masyarakat Rejang.",
      rejang: "Kaganga adalah pangilan untuk huruf-huruf leluhur kita."
    }
  },
  {
    kat: "Bahasa",
    arab: "وَلَدٌ",
    latin: "Walad",
    indo: "anak",
    rejang: "anok",
    gambar: "",
    budaya: "Kata 'anok' dalam bahasa Rejang merujuk pada anak secara umum. Dalam budaya Rejang, anak sangat dihormati dan dijaga karena merupakan penerus marga dan keturunan.",
    kalimat: {
      arab: "الْوَلَدُ يَلْعَبُ فِي الْحَدِيقَة",
      indo: "Anak itu bermain di halaman rumah.",
      rejang: "Anok tibo bemain di halaman umea'."
    }
  },
  {
    kat: "Bahasa",
    arab: "يَتِيمٌ",
    latin: "Yatiim",
    indo: "anak yatim piatu",
    rejang: "anok lumang",
    gambar: "",
    budaya: "Dalam tradisi Rejang, anak yatim piatu mendapat perhatian khusus dari masyarakat adat dan keluarga besar marga. Terdapat tradisi pengangkatan anak (adopsi adat) untuk melindungi anak-anak yang tidak memiliki orang tua.",
    kalimat: {
      arab: "الْيَتِيمُ يَحْتَاجُ إِلَى رِعَايَةِ الْمُجْتَمَع",
      indo: "Anak yatim piatu perlu mendapat perhatian dan kasih sayang dari masyarakat.",
      rejang: "Anok lumang perlu dirawat sama-sama masyarakat."
    }
  },
  {
    kat: "Bahasa",
    arab: "نَسَبٌ إِلَهِيٌّ",
    latin: "Nasab Ilaahiy",
    indo: "anak keturunan dewa",
    rejang: "anok sanggeui",
    gambar: "",
    budaya: "Konsep 'anok sanggeui' dalam kepercayaan tradisional Rejang merujuk pada anak yang diyakini memiliki keistimewaan atau keturunan dari leluhur yang dianggap suci. Kepercayaan ini berkaitan dengan sistem kepercayaan animisme yang pernah berkembang di masyarakat Rejang sebelum masuknya Islam.",
    kalimat: {
      arab: "فِي الثَّقَافَةِ الْقَدِيمَةِ، يُعْتَقَدُ أَنَّ بَعْضَ الأَطْفَالِ لَهُمْ نَسَبٌ إِلَهِيٌّ",
      indo: "Dalam kepercayaan lama, beberapa anak diyakini memiliki keturunan dari dewa.",
      rejang: "Dalam kepercayaan tuo, anok-anok tibo punya keturunan dewo."
    }
  },
  {
    kat: "Bahasa",
    arab: "وَحِيدٌ",
    latin: "Wahiid",
    indo: "anak tunggal",
    rejang: "anok temanang imeu",
    gambar: "",
    budaya: "Anak tunggal dalam budaya Rejang memiliki tanggung jawab besar untuk meneruskan garis keturunan marga orang tuanya.",
    kalimat: {
      arab: "هُوَ وَحِيدٌ فِي عَائِلَتِه",
      indo: "Dia adalah anak tunggal dalam keluarganya.",
      rejang: "Dia anok temanang di keluarga biok."
    }
  },
  {
    kat: "Bahasa",
    arab: "صِهْرٌ",
    latin: "Shihir",
    indo: "saudara ipar",
    rejang: "be'eng",
    gambar: "",
    budaya: "Hubungan ipar dalam adat Rejang diatur secara ketat. Saudara ipar memiliki peran penting dalam upacara adat, terutama dalam pernikahan dan ritual-ritual keluarga besar.",
    kalimat: {
      arab: "صِهْرِي رَجُلٌ طَيِّبٌ وَمُحْتَرَمٌ",
      indo: "Saudara ipar saya adalah orang yang baik dan dihormati.",
      rejang: "Be'eng uku kunak nyapu baik dan dikamayan."
    }
  },
  {
    kat: "Bahasa",
    arab: "تَحِيَّةٌ",
    latin: "Tahiyyah",
    indo: "sapaan bieu",
    rejang: "bieu",
    gambar: "",
    budaya: "'Bieu' adalah sapaan khas suku Rejang yang digunakan dalam percakapan sehari-hari. Sapaan ini mencerminkan keramahan dan kekerabatan yang erat dalam masyarakat Rejang.",
    kalimat: {
      arab: "نَقُولُ تَحِيَّةً لِلضُّيُوفِ عِنْدَ وُصُولِهِم",
      indo: "Kita mengucapkan sapaan kepada tamu yang datang.",
      rejang: "Kito ngece' bieu kapade rung tukang datang."
    }
  },
  {
    kat: "Bahasa",
    arab: "أَخٌ شَابٌّ",
    latin: "Akh Syaabb",
    indo: "sapaan laki-laki muda",
    rejang: "bung",
    gambar: "",
    budaya: "'Bung' adalah sapaan untuk laki-laki muda yang umum digunakan oleh masyarakat Rejang. Penggunaan sapaan yang tepat menunjukkan penghormatan terhadap tatanan sosial dalam masyarakat adat.",
    kalimat: {
      arab: "نُنَادِي الشَّابَّ بِكَلِمَةِ بُونْغ",
      indo: "Kita memanggil laki-laki muda dengan sapaan bung.",
      rejang: "Kito nganyau laki-laki bujang make bung."
    }
  },
  {
    kat: "Bahasa",
    arab: "وَقَاحَةٌ",
    latin: "Waqaahah",
    indo: "kurang ajar",
    rejang: "cempalo bebea",
    gambar: "",
    budaya: "Dalam budaya Rejang, sikap kurang ajar atau tidak sopan kepada orang yang lebih tua sangat dilarang dan dianggap melanggar norma adat. Anak-anak dididik untuk selalu menghormati orang yang lebih tua.",
    kalimat: {
      arab: "الْوَقَاحَةُ أَمَامَ الْكِبَارِ مَنْهِيٌّ عَنْهَا فِي الثَّقَافَةِ الرِّيجَانْغِيَّة",
      indo: "Sikap kurang ajar kepada orang yang lebih tua sangat dilarang dalam budaya Rejang.",
      rejang: "Cempalo bebea kapade tueui sangat talarang dalam adat Rejang."
    }
  },
  {
    kat: "Bahasa",
    arab: "تَكَلَّمَ",
    latin: "Takallama",
    indo: "berkata",
    rejang: "kece'",
    gambar: "",
    budaya: "Kata 'kece'' dalam bahasa Rejang berarti berkata atau berbicara. Dalam adat Rejang, cara berbicara dan pemilihan kata sangat diperhatikan sebagai cerminan adab seseorang.",
    kalimat: {
      arab: "تَكَلَّمَ الْمُعَلِّمُ بِصَوْتٍ وَاضِح",
      indo: "Guru berkata dengan suara yang jelas.",
      rejang: "Guru kece' make suara terang."
    }
  },
  {
    kat: "Bahasa",
    arab: "حَفِيدٌ",
    latin: "Hafiid",
    indo: "cucu",
    rejang: "kepeu",
    gambar: "",
    budaya: "Cucu dalam budaya Rejang memiliki kedudukan yang istimewa. Kakek dan nenek berperan penting dalam mendidik dan mewariskan nilai-nilai budaya Rejang kepada cucu mereka.",
    kalimat: {
      arab: "الْحَفِيدُ يُحِبُّ جَدَّهُ كَثِيرًا",
      indo: "Cucu itu sangat menyayangi kakeknya.",
      rejang: "Kepeu tibo nyapu niniek kayaknya."
    }
  },
  {
    kat: "Bahasa",
    arab: "جَدٌّ",
    latin: "Jadd",
    indo: "kakek",
    rejang: "niniek (niek bong)",
    gambar: "",
    budaya: "Kakek (niniek) dalam budaya Rejang adalah sosok yang sangat dihormati sebagai pemimpin keluarga besar dan penjaga tradisi adat. Keputusan penting dalam keluarga sering melibatkan kakek sebagai sesepuh.",
    kalimat: {
      arab: "الْجَدُّ يَحْكِي قِصَصَ التُّرَاثِ لِأَحْفَادِه",
      indo: "Kakek menceritakan kisah-kisah warisan budaya kepada cucunya.",
      rejang: "Niniek ngecite cerie-cerie budaya kapade kepeu."
    }
  },
  {
    kat: "Bahasa",
    arab: "جَدَّةٌ",
    latin: "Jaddah",
    indo: "nenek",
    rejang: "sebei (niek bei)",
    gambar: "",
    budaya: "Nenek (sebei) dalam budaya Rejang adalah penjaga tradisi memasak dan kerajinan tangan. Nenek biasanya mewariskan resep masakan tradisional dan keterampilan menenun kepada anak dan cucunya.",
    kalimat: {
      arab: "الْجَدَّةُ تُعَلِّمُ حَفِيدَتَهَا الطَّبْخَ التَّقْلِيدِيّ",
      indo: "Nenek mengajarkan cucunya masakan tradisional.",
      rejang: "Sebei ngajak kepeu caro makanek tuo."
    }
  },
  {
    kat: "Bahasa",
    arab: "أَبٌ",
    latin: "Ab",
    indo: "ayah",
    rejang: "bapok (bak)",
    gambar: "",
    budaya: "Ayah (bapok) dalam keluarga Rejang berperan sebagai kepala keluarga yang bertanggung jawab mencari nafkah dan mendidik anak. Ayah juga berperan penting dalam upacara-upacara adat keluarga.",
    kalimat: {
      arab: "الأَبُ يَعْمَلُ فِي الْحَقْلِ كُلَّ يَوْمٍ",
      indo: "Ayah bekerja di ladang setiap hari.",
      rejang: "Bapok kuleo di uma kutian."
    }
  },
  {
    kat: "Bahasa",
    arab: "أُمٌّ",
    latin: "Umm",
    indo: "ibu",
    rejang: "indok (mak)",
    gambar: "",
    budaya: "Ibu (indok) dalam budaya Rejang adalah pusat kehidupan rumah tangga. Ibu bertanggung jawab mendidik anak dengan nilai-nilai adat Rejang dan menjaga keharmonisan keluarga.",
    kalimat: {
      arab: "الأُمُّ تُحِبُّ أَوْلَادَهَا بِقَلْبٍ كَبِيرٍ",
      indo: "Ibu menyayangi anak-anaknya dengan sepenuh hati.",
      rejang: "Indok nyapu anok-anok kameah hati."
    }
  },
  {
    kat: "Bahasa",
    arab: "عَمٌّ",
    latin: "'Amm",
    indo: "oom/paman",
    rejang: "mamak",
    gambar: "",
    budaya: "Paman (mamak) dalam adat Rejang memiliki peran penting dalam mendidik keponakan, terutama jika ayah tidak ada. Dalam sistem marga Rejang, paman dari pihak ibu memiliki tanggung jawab khusus.",
    kalimat: {
      arab: "الْعَمُّ يُسَاعِدُنَا فِي أُمُورِ الْعَائِلَة",
      indo: "Paman membantu kami dalam urusan keluarga.",
      rejang: "Mamak tabang kita dalam urusng keluargo."
    }
  },
  {
    kat: "Bahasa",
    arab: "أَخٌ صَغِيرٌ",
    latin: "Akh Shaghiir",
    indo: "adik",
    rejang: "asoa'",
    gambar: "",
    budaya: "Hubungan kakak-adik (asoa') dalam budaya Rejang sangat erat dan dijaga dengan baik. Kakak bertanggung jawab melindungi adiknya, sementara adik wajib menghormati kakak.",
    kalimat: {
      arab: "أَخِي الصَّغِيرُ يَذْهَبُ إِلَى الْمَدْرَسَةِ كُلَّ صَبَاح",
      indo: "Adik saya pergi ke sekolah setiap pagi.",
      rejang: "Asoa' uku kutok ke sikulah kutian."
    }
  },
  {
    kat: "Bahasa",
    arab: "أَنَا",
    latin: "Ana",
    indo: "saya",
    rejang: "uku",
    gambar: "",
    budaya: "'Uku' adalah kata ganti orang pertama dalam bahasa Rejang yang digunakan dalam percakapan sehari-hari. Penggunaannya bersifat netral dan umum digunakan oleh semua kalangan.",
    kalimat: {
      arab: "أَنَا أُحِبُّ لُغَةَ رِيجَانْغ",
      indo: "Saya menyukai bahasa Rejang.",
      rejang: "Uku nyapu bahaso Rejang."
    }
  },
  {
    kat: "Bahasa",
    arab: "صَدِيقٌ",
    latin: "Shadiiq",
    indo: "sahabat",
    rejang: "kunan/kundang",
    gambar: "",
    budaya: "Persahabatan (kunan) dalam budaya Rejang sangat dijunjung tinggi. Sahabat dianggap seperti saudara sendiri dan memiliki kewajiban untuk saling membantu dalam suka maupun duka.",
    kalimat: {
      arab: "الصَّدِيقُ الْحَقِيقِيُّ يَكُونُ مَعَكَ فِي السَّرَّاءِ وَالضَّرَّاء",
      indo: "Sahabat sejati selalu ada di saat senang maupun susah.",
      rejang: "Kunan nyapu basamo kito dalam suko maupun duko."
    }
  },
  {
    kat: "Bahasa",
    arab: "عَمٌّ مِنَ الأُمّ",
    latin: "'Amm Minal Umm",
    indo: "paman",
    rejang: "tamang",
    gambar: "",
    budaya: "Tamang adalah sebutan paman dari pihak ibu dalam bahasa Rejang. Dalam sistem kekerabatan Rejang, tamang memiliki peran tersendiri yang berbeda dari paman di pihak ayah.",
    kalimat: {
      arab: "عَمِّي مِنْ جِهَةِ أُمِّي يَسْكُنُ فِي الْقَرْيَة",
      indo: "Paman dari pihak ibu tinggal di kampung.",
      rejang: "Tamang dari sisi indok tudo di sadeui."
    }
  },
  {
    kat: "Bahasa",
    arab: "إِخْوَةٌ مِنْ أُمٍّ وَاحِدَة",
    latin: "Ikhwah Min Ummun Waahidah",
    indo: "saudara satu ibu",
    rejang: "spasuak kuyu'",
    gambar: "",
    budaya: "Saudara satu ibu (spasuak kuyu') dalam adat Rejang memiliki ikatan yang sangat kuat. Mereka diwajibkan untuk saling menjaga dan membantu, terutama dalam acara-acara adat.",
    kalimat: {
      arab: "إِخْوَتِي مِنْ أُمٍّ وَاحِدَةٍ يَجْتَمِعُونَ فِي الأَعْيَاد",
      indo: "Saudara satu ibu berkumpul bersama saat hari raya.",
      rejang: "Spasuak kuyu' kumpul samon saat perayaan."
    }
  },
  {
    kat: "Bahasa",
    arab: "لَقَبٌ",
    latin: "Laqab",
    indo: "gelar",
    rejang: "jolok",
    gambar: "",
    budaya: "Sistem gelar (jolok) dalam masyarakat Rejang berkaitan erat dengan kedudukan seseorang dalam struktur adat. Gelar diberikan berdasarkan keturunan marga, prestasi, atau peran dalam masyarakat adat.",
    kalimat: {
      arab: "أُعْطِيَ الرَّجُلُ لَقَبًا مِنَ الزُّعَمَاءِ الْقَبَلِيِّين",
      indo: "Pria itu diberi gelar oleh para pemimpin adat.",
      rejang: "Lelaki dibek gelar oleh pemimpin adat."
    }
  },
  {
    kat: "Bahasa",
    arab: "وَثِيقَةٌ رَسْمِيَّة",
    latin: "Watsiqah Rasmiyyah",
    indo: "surat mandat",
    rejang: "bua'tuwai",
    gambar: "",
    budaya: "Surat mandat (bua'tuwai) dalam adat Rejang adalah dokumen yang memberikan wewenang kepada seseorang untuk bertindak atas nama pemimpin adat atau marga dalam urusan tertentu.",
    kalimat: {
      arab: "حَمَلَ الرَّجُلُ وَثِيقَةً رَسْمِيَّةً مِنَ الرَّئِيس",
      indo: "Pria itu membawa surat mandat dari pimpinan adat.",
      rejang: "Lelaki bawok surat mandat dari pemimpin adat."
    }
  },
  {
    kat: "Bahasa",
    arab: "وَصِيَّةٌ",
    latin: "Washiyyah",
    indo: "amanat",
    rejang: "pengingeut",
    gambar: "",
    budaya: "Amanat (pengingeut) dalam budaya Rejang adalah pesan atau wasiat yang disampaikan oleh pemimpin adat atau orang tua kepada generasi penerus untuk menjaga tradisi dan nilai-nilai leluhur.",
    kalimat: {
      arab: "تَرَكَ الْجَدُّ وَصِيَّةً لِأَبْنَائِه",
      indo: "Kakek meninggalkan amanat untuk anak-anaknya.",
      rejang: "Niniek tilak amanat kapade anak-anak."
    }
  },
  {
    kat: "Bahasa",
    arab: "قَاعِدَةٌ اجْتِمَاعِيَّة",
    latin: "Qaa'idah Ijtimaa'iyyah",
    indo: "norma",
    rejang: "smaue",
    gambar: "",
    budaya: "Norma (smaue) dalam masyarakat Rejang adalah aturan tidak tertulis yang mengatur perilaku warga masyarakat. Pelanggaran terhadap norma dapat mengakibatkan sanksi sosial dari masyarakat adat.",
    kalimat: {
      arab: "يَجِبُ عَلَيْنَا احْتِرَامُ الْقَوَاعِدِ الاجْتِمَاعِيَّةِ فِي الْمُجْتَمَع",
      indo: "Kita harus menghormati norma yang berlaku di masyarakat.",
      rejang: "Kito perlu kamayan norma dalam masyarakat."
    }
  },
  {
    kat: "Bahasa",
    arab: "قَسَمٌ",
    latin: "Qasam",
    indo: "sumpah",
    rejang: "supeak",
    gambar: "",
    budaya: "Sumpah (supeak) dalam adat Rejang dianggap sangat sakral dan mengikat. Melanggar sumpah adat diyakini akan mendatangkan malapetaka bagi pelakunya dan keluarganya.",
    kalimat: {
      arab: "قَطَعَ الرَّجُلُ قَسَمًا أَمَامَ الزُّعَمَاءِ الْقَبَلِيِّين",
      indo: "Pria itu bersumpah di hadapan para pemimpin adat.",
      rejang: "Lelaki bersumpeak di hadapan pemimpin adat."
    }
  },
  {
    kat: "Bahasa",
    arab: "جِدَالٌ",
    latin: "Jidaal",
    indo: "debat",
    rejang: "stikea kece'",
    gambar: "",
    budaya: "Debat (stikea kece') dalam tradisi Rejang dilakukan dengan cara yang teratur dan beradab. Musyawarah adat sering melibatkan debat untuk mencapai mufakat dalam menyelesaikan masalah.",
    kalimat: {
      arab: "أُجْرِيَ الْجِدَالُ بِأَدَبٍ وَاحْتِرَامٍ",
      indo: "Debat itu dilakukan dengan sopan dan penuh rasa hormat.",
      rejang: "Stikea kece' dilakukan make sopan dan kamayan."
    }
  },
  {
    kat: "Bahasa",
    arab: "تَحْذِيرٌ",
    latin: "Tahdziir",
    indo: "ditegur",
    rejang: "tsapo",
    gambar: "",
    budaya: "Teguran (tsapo) dalam budaya Rejang merupakan bentuk kepedulian sosial. Orang yang lebih tua berhak menegur orang yang lebih muda jika bertindak tidak sesuai dengan norma adat.",
    kalimat: {
      arab: "تَلَقَّى الطِّفْلُ تَحْذِيرًا مِنْ وَالِدِيه",
      indo: "Anak itu mendapat teguran dari orang tuanya.",
      rejang: "Anok bek tsapo dari orang tuanya."
    }
  },
  {
    kat: "Bahasa",
    arab: "وَاحِدٌ",
    latin: "Waahid",
    indo: "angka satu",
    rejang: "do",
    gambar: "",
    budaya: "Sistem angka dalam bahasa Rejang merupakan bagian penting dari warisan budaya linguistik suku Rejang yang diajarkan sejak dini kepada anak-anak.",
    kalimat: {
      arab: "وَاحِدٌ وَاثْنَانِ وَثَلَاثَةٌ — هَذِهِ هِيَ الأَرْقَامُ الأُولَى",
      indo: "Satu, dua, tiga — ini adalah angka-angka pertama.",
      rejang: "Do, duai, telau - ini angka-angka pertamah."
    }
  },
  {
    kat: "Bahasa",
    arab: "اثْنَانِ",
    latin: "Itsnaani",
    indo: "angka dua",
    rejang: "duai",
    gambar: "",
    budaya: "Angka dua (duai) dalam bahasa Rejang sering digunakan dalam konteks pasangan dan keseimbangan yang menjadi nilai penting dalam filosofi hidup masyarakat Rejang.",
    kalimat: {
      arab: "عِنْدِي كِتَابَانِ اثْنَان",
      indo: "Saya memiliki dua buku.",
      rejang: "Uku pake duai buku."
    }
  },
  {
    kat: "Bahasa",
    arab: "ثَلَاثَةٌ",
    latin: "Tsalaatsah",
    indo: "angka tiga",
    rejang: "telau",
    gambar: "",
    budaya: "Angka tiga dalam budaya Rejang memiliki makna simbolis yang berkaitan dengan tiga unsur alam: langit, bumi, dan air, yang menjadi dasar pandangan kosmologi masyarakat Rejang.",
    kalimat: {
      arab: "ثَلَاثَةُ أَطْفَالٍ يَلْعَبُونَ مَعًا",
      indo: "Tiga anak bermain bersama.",
      rejang: "Telau anok bemain basamo."
    }
  },
  {
    kat: "Bahasa",
    arab: "أَرْبَعَةٌ",
    latin: "Arba'ah",
    indo: "angka empat",
    rejang: "pat",
    gambar: "",
    budaya: "Angka empat (pat) dalam tradisi Rejang berkaitan dengan empat penjuru mata angin yang menjadi dasar orientasi ruang dalam arsitektur tradisional dan ritual adat Rejang.",
    kalimat: {
      arab: "لَدَيَّ أَرْبَعَةُ أَصْدِقَاءَ فِي الْمَدْرَسَة",
      indo: "Saya punya empat teman di sekolah.",
      rejang: "Uku pake pat kunan di sikulah."
    }
  },
  {
    kat: "Bahasa",
    arab: "خَمْسَةٌ",
    latin: "Khamsah",
    indo: "angka lima",
    rejang: "lemau",
    gambar: "",
    budaya: "Angka lima (lemau) dalam sistem perhitungan bahasa Rejang menjadi dasar pengelompokan dalam berbagai tradisi adat, termasuk pembagian hasil panen dan pembagian warisan.",
    kalimat: {
      arab: "خَمْسَةُ أَصَابِعَ فِي كُلِّ يَد",
      indo: "Lima jari ada di setiap tangan.",
      rejang: "Lemau jemari di setiap tangan."
    }
  },
  {
    kat: "Bahasa",
    arab: "اسْمٌ",
    latin: "Ism",
    indo: "nama",
    rejang: "ngau",
    gambar: "",
    budaya: "Nama (ngau) dalam budaya Rejang bukan sekadar identitas. Pemberian nama anak sering dilakukan melalui ritual khusus yang melibatkan pemuka adat dan didasarkan pada makna dan harapan orang tua.",
    kalimat: {
      arab: "مَا اسْمُكَ؟ اسْمِي أَحْمَد",
      indo: "Siapa namamu? Nama saya Ahmad.",
      rejang: "Ngau makoi? Ngau uku Ahmad."
    }
  },
  {
    kat: "Bahasa",
    arab: "كَلِمَةٌ",
    latin: "Kalimah",
    indo: "kata",
    rejang: "kato",
    gambar: "",
    budaya: "Bahasa Rejang memiliki kosakata yang kaya dan unik. Pelestarian kata-kata (kato) dalam bahasa Rejang merupakan upaya penting untuk menjaga identitas budaya suku Rejang.",
    kalimat: {
      arab: "تَعَلَّمْتُ كَلِمَاتٍ جَدِيدَةً فِي اللُّغَةِ الرِّيجَانْغِيَّة",
      indo: "Saya belajar kata-kata baru dalam bahasa Rejang.",
      rejang: "Uku belajar kato-kato baru dalam bahaso Rejang."
    }
  },
  {
    kat: "Bahasa",
    arab: "جُمْلَةٌ",
    latin: "Jumlah",
    indo: "kalimat",
    rejang: "kalimat",
    gambar: "",
    budaya: "Struktur kalimat dalam bahasa Rejang memiliki pola yang khas dan berbeda dari bahasa Indonesia. Mempelajari struktur kalimat bahasa Rejang penting untuk memahami cara berpikir masyarakatnya.",
    kalimat: {
      arab: "الْجُمْلَةُ تَتَكَوَّنُ مِنْ كَلِمَاتٍ مُتَرَابِطَة",
      indo: "Kalimat terdiri dari kata-kata yang saling berhubungan.",
      rejang: "Kalimat terdiri dari kato-kato yang sabung."
    }
  },
  {
    kat: "Bahasa",
    arab: "سَأَلَ",
    latin: "Sa-ala",
    indo: "bertanya",
    rejang: "tunyau",
    gambar: "",
    budaya: "Budaya bertanya (tunyau) dalam masyarakat Rejang sangat dianjurkan dalam proses belajar dan musyawarah adat. Bertanya dengan sopan menunjukkan keinginan untuk belajar dan menghormati ilmu.",
    kalimat: {
      arab: "سَأَلَ الطَّالِبُ الْمُعَلِّمَ عَنِ الدَّرْس",
      indo: "Murid bertanya kepada guru tentang pelajaran.",
      rejang: "Murik tunyau kapade guru tentang pelajarang."
    }
  },
  {
    kat: "Bahasa",
    arab: "أَجَابَ",
    latin: "Ajaaba",
    indo: "menjawab",
    rejang: "semek",
    gambar: "",
    budaya: "Menjawab (semek) dengan jujur dan tepat adalah nilai yang dijunjung tinggi dalam budaya Rejang. Dalam musyawarah adat, setiap orang berhak dan diharapkan memberikan jawaban yang jelas.",
    kalimat: {
      arab: "أَجَابَ الطَّالِبُ عَلَى سُؤَالِ الْمُعَلِّم",
      indo: "Murid menjawab pertanyaan guru dengan percaya diri.",
      rejang: "Murik semek soal guru make yakin."
    }
  },

  // ============================================================
  // KATEGORI 2: KESENIAN (20 entri)
  // ============================================================
  {
    kat: "Kesenian",
    arab: "رَقْصٌ تَقْلِيدِيٌّ",
    latin: "Raqsh Taqliidiy",
    indo: "tarian",
    rejang: "kejeui",
    gambar: "",
    budaya: "Kejeui adalah tarian tradisional khas suku Rejang yang ditampilkan dalam berbagai upacara adat. Gerakan tarian ini mencerminkan nilai-nilai kehidupan masyarakat Rejang seperti keanggunan, keberanian, dan keramahan.",
    kalimat: {
      arab: "الرَّقْصُ التَّقْلِيدِيُّ يُعَبِّرُ عَنْ ثَقَافَةِ الشَّعْب",
      indo: "Tarian tradisional mencerminkan budaya masyarakat Rejang.",
      rejang: "Kejeui mencerminkan budaya suku Rejang."
    }
  },
  {
    kat: "Kesenian",
    arab: "مُوسِيقَى تَقْلِيدِيَّة",
    latin: "Muusiiqaa Taqliidiyyah",
    indo: "gamelan",
    rejang: "klitang",
    gambar: "",
    budaya: "Klitang adalah alat musik tradisional Rejang yang menjadi bagian dari ansambel gamelan khas daerah ini. Klitang dimainkan dalam berbagai upacara adat dan pertunjukan seni budaya Rejang.",
    kalimat: {
      arab: "تُعْزَفُ الْمُوسِيقَى التَّقْلِيدِيَّةُ فِي حَفَلَاتِ الأَعْرَاس",
      indo: "Gamelan klitang dimainkan dalam upacara pernikahan adat.",
      rejang: "Klitang dimainkan dalam upacara bimbang."
    }
  },
  {
    kat: "Kesenian",
    arab: "نَايٌ",
    latin: "Naay",
    indo: "suling bambu (dekut)",
    rejang: "dekut",
    gambar: "",
    budaya: "Dekut adalah suling bambu khas Rejang yang menghasilkan suara merdu dan khas. Alat musik ini terbuat dari bambu pilihan dan dimainkan dengan teknik pernapasan khusus yang diwariskan turun-temurun.",
    kalimat: {
      arab: "يَعْزِفُ الشَّابُّ عَلَى النَّايِ الْخَيْزُرَانِيِّ",
      indo: "Pemuda itu memainkan suling bambu dekut dengan indah.",
      rejang: "Bujang mainkan dekut make indah."
    }
  },
  {
    kat: "Kesenian",
    arab: "مِزْمَارٌ",
    latin: "Mizmaaar",
    indo: "suling bambu (krilu)",
    rejang: "krilu",
    gambar: "",
    budaya: "Krilu adalah jenis suling bambu Rejang yang berbeda dari dekut dalam hal ukuran dan karakter suaranya. Krilu biasanya dimainkan dalam acara-acara santai dan hiburan masyarakat.",
    kalimat: {
      arab: "صَوْتُ الْمِزْمَارِ يُرِيحُ الْقُلُوبَ",
      indo: "Suara suling krilu menenangkan hati.",
      rejang: "Suaro krilu menenangkan hati."
    }
  },
  {
    kat: "Kesenian",
    arab: "أُغْنِيَةٌ",
    latin: "Ughniyyah",
    indo: "nyanyian",
    rejang: "sambeui",
    gambar: "",
    budaya: "Sambeui adalah nyanyian tradisional khas Rejang yang biasanya berisi syair-syair tentang alam, kehidupan, dan nilai-nilai budaya. Sambeui dinyanyikan dalam berbagai kesempatan mulai dari pesta adat hingga saat bekerja di ladang.",
    kalimat: {
      arab: "الأُغْنِيَةُ التَّقْلِيدِيَّةُ تَحْمِلُ مَعَانِيَ ثَقَافِيَّةً عَمِيقَة",
      indo: "Nyanyian sambeui mengandung makna budaya yang mendalam.",
      rejang: "Sambeui berisikandung makno budayo yang dalam."
    }
  },
  {
    kat: "Kesenian",
    arab: "حَرَكَةُ الرَّقْص",
    latin: "Harakatur Raqs",
    indo: "gerakan tari",
    rejang: "punjung",
    gambar: "",
    budaya: "Setiap gerakan dalam tarian Rejang memiliki makna dan filosofi tersendiri. Gerakan tangan, kaki, dan tubuh dalam tarian mencerminkan hubungan manusia dengan alam dan sesama.",
    kalimat: {
      arab: "حَرَكَةُ الرَّقْصِ التَّقْلِيدِيِّ تَحْمِلُ مَعْنًى عَمِيقًا",
      indo: "Gerakan tari tradisional mengandung makna yang dalam.",
      rejang: "Gerakang tari mengandung makno yang dalam."
    }
  },
  {
    kat: "Kesenian",
    arab: "فُنُونُ الدِّفَاعِ",
    latin: "Funuunud Difaa'",
    indo: "seni bela diri",
    rejang: "sterlak",
    gambar: "",
    budaya: "Sterlak adalah seni bela diri tradisional suku Rejang yang tidak hanya melatih kekuatan fisik tetapi juga mental dan spiritual. Seni bela diri ini diwariskan dari generasi ke generasi sebagai bagian dari tradisi keprajuritan Rejang.",
    kalimat: {
      arab: "يَتَعَلَّمُ الشَّبَابُ فُنُونَ الدِّفَاعِ التَّقْلِيدِيَّة",
      indo: "Para pemuda belajar seni bela diri tradisional sterlak.",
      rejang: "Para bujang belajar sterlak."
    }
  },
  {
    kat: "Kesenian",
    arab: "لُعْبَةٌ تَقْلِيدِيَّة",
    latin: "Lu'bah Taqliidiyyah",
    indo: "permainan anak ce i ce",
    rejang: "ce i ce",
    gambar: "",
    budaya: "Ce i ce adalah permainan tradisional anak-anak Rejang yang dimainkan secara berkelompok. Permainan ini mengajarkan nilai kerja sama, sportivitas, dan kebersamaan sejak usia dini.",
    kalimat: {
      arab: "يَلْعَبُ الأَطْفَالُ الأَلْعَابَ التَّقْلِيدِيَّةَ بَعْدَ الْمَدْرَسَة",
      indo: "Anak-anak bermain ce i ce setelah pulang sekolah.",
      rejang: "Anok-anok bemain ce i ce sesudah sikulah."
    }
  },
  {
    kat: "Kesenian",
    arab: "لُعْبَةُ الرِّيشَة",
    latin: "Lu'batur Riisyah",
    indo: "permainan anak yam-yam",
    rejang: "yam-yam",
    gambar: "",
    budaya: "Yam-yam adalah permainan tradisional anak Rejang yang menggunakan bulu atau benda ringan yang ditendang bergantian. Permainan ini melatih keseimbangan dan koordinasi anak.",
    kalimat: {
      arab: "لُعْبَةُ الرِّيشَةِ تُنَمِّي مَهَارَةَ التَّوَازُن",
      indo: "Permainan yam-yam melatih keseimbangan anak.",
      rejang: "Yam-yam melatih keseimbangan anok."
    }
  },
  {
    kat: "Kesenian",
    arab: "كُرَةُ الرِّجْل",
    latin: "Kuratur Rijl",
    indo: "takraw",
    rejang: "sepak raga",
    gambar: "",
    budaya: "Sepak raga adalah permainan tradisional yang populer di masyarakat Rejang. Permainan ini menggunakan bola rotan yang dimainkan dengan kaki dan menunjukkan ketangkasan serta kelincahan pemainnya.",
    kalimat: {
      arab: "يَلْعَبُ الرِّجَالُ كُرَةَ الرِّجْلِ التَّقْلِيدِيَّةَ فِي السَّاحَة",
      indo: "Para pemuda memainkan sepak raga di lapangan.",
      rejang: "Para bujang mainkan sepak raga di lapangan."
    }
  },
  {
    kat: "Kesenian",
    arab: "طَبْلٌ",
    latin: "Thabl",
    indo: "rebana",
    rejang: "terbang",
    gambar: "",
    budaya: "Rebana (terbang) adalah alat musik pukul yang digunakan dalam kesenian Islam Rejang. Rebana dimainkan dalam acara keagamaan dan perayaan Islam di masyarakat Rejang.",
    kalimat: {
      arab: "يُضْرَبُ الطَّبْلُ فِي الاحْتِفَالَاتِ الدِّينِيَّة",
      indo: "Rebana dimainkan dalam acara-acara keagamaan.",
      rejang: "Terbang dipalu dalam acara-acara keagamaan."
    }
  },
  {
    kat: "Kesenian",
    arab: "لَحْنٌ",
    latin: "Lahnn",
    indo: "lagu",
    rejang: "lagu",
    gambar: "",
    budaya: "Lagu-lagu tradisional Rejang merupakan media penyampaian nilai-nilai budaya, nasihat, dan sejarah leluhur kepada generasi muda. Setiap lagu memiliki cerita dan makna yang dalam.",
    kalimat: {
      arab: "يُغَنِّي الأَطْفَالُ أَلْحَانًا تَقْلِيدِيَّةً رِيجَانْغِيَّة",
      indo: "Anak-anak menyanyikan lagu-lagu tradisional Rejang.",
      rejang: "Anok-anok manyayanyi lagu-lagu Rejang tuo."
    }
  },
  {
    kat: "Kesenian",
    arab: "رَقَصَ",
    latin: "Raqasha",
    indo: "menari",
    rejang: "ngedi",
    gambar: "",
    budaya: "Menari (ngedi) dalam tradisi Rejang bukan sekadar hiburan tetapi juga bentuk ekspresi spiritual dan sosial. Penari Rejang biasanya menjalani latihan yang panjang sebelum tampil dalam upacara resmi.",
    kalimat: {
      arab: "تَرْقُصُ الْفَتَيَاتُ فِي حَفْلِ التَّرْحِيب",
      indo: "Para gadis menari dalam acara penyambutan tamu.",
      rejang: "Para rung ngedi dalam acara sambut rung tamu."
    }
  },
  {
    kat: "Kesenian",
    arab: "غَنَّى",
    latin: "Ghannaa",
    indo: "bernyanyi",
    rejang: "besambei",
    gambar: "",
    budaya: "Besambei (bernyanyi) adalah kegiatan seni yang sangat dihargai dalam budaya Rejang. Tradisi bernyanyi bersama (sambeui) dalam acara adat memperkuat rasa kebersamaan dan identitas komunal.",
    kalimat: {
      arab: "يُغَنِّي الْمُجْتَمَعُ مَعًا فِي حَفَلَاتِ الأَعْرَاس",
      indo: "Masyarakat bernyanyi bersama dalam pesta pernikahan.",
      rejang: "Masyarakat manyayanyi basamo dalam pesta bimbang."
    }
  },
  {
    kat: "Kesenian",
    arab: "عَازِفٌ",
    latin: "Aaizif",
    indo: "pemain musik",
    rejang: "tukang ketipung",
    gambar: "",
    budaya: "Pemain musik tradisional (tukang ketipung) dalam masyarakat Rejang sangat dihormati karena keahliannya yang diwariskan turun-temurun. Mereka berperan penting dalam setiap upacara adat.",
    kalimat: {
      arab: "الْعَازِفُ الْمَاهِرُ يُضْفِي بَهْجَةً عَلَى الْحَفْل",
      indo: "Pemain musik yang mahir menambah keceriaan dalam pesta adat.",
      rejang: "Tukang musik yang mahir tambahkan kemerahan dalam pesta."
    }
  },
  {
    kat: "Kesenian",
    arab: "عَرْضٌ",
    latin: "Ardh",
    indo: "pertunjukan",
    rejang: "peragaan",
    gambar: "",
    budaya: "Pertunjukan seni (peragaan) dalam budaya Rejang merupakan sarana untuk memperkenalkan kekayaan budaya kepada generasi muda dan tamu dari luar daerah. Festival budaya Rejang rutin diadakan untuk melestarikan seni pertunjukan ini.",
    kalimat: {
      arab: "أُقِيمَ عَرْضٌ فَنِّيٌّ فِي الْمَهْرَجَانِ الثَّقَافِيّ",
      indo: "Pertunjukan seni diadakan dalam festival budaya Rejang.",
      rejang: "Peragaan seni diadakan dalam festival budaya Rejang."
    }
  },
  {
    kat: "Kesenian",
    arab: "شَعَائِرُ الْفُنُون",
    latin: "Sya'aa-irul Funuun",
    indo: "ritual kesenian (mbluka gung)",
    rejang: "mbluka gung",
    gambar: "",
    budaya: "Mbluka gung adalah ritual kesenian Rejang yang dilakukan sebelum memulai pertunjukan seni besar. Ritual ini bertujuan memohon izin dan berkah dari leluhur agar pertunjukan berjalan dengan lancar dan bermakna.",
    kalimat: {
      arab: "تُؤَدَّى الشَّعَائِرُ قَبْلَ الْعَرْضِ الْفَنِّيِّ الْكَبِير",
      indo: "Ritual kesenian mbluka gung dilakukan sebelum pertunjukan besar dimulai.",
      rejang: "Ritual mbluka gung dilakukan sebelum peragaan besar mulai."
    }
  },
  {
    kat: "Kesenian",
    arab: "آلَةٌ إِيقَاعِيَّة",
    latin: "Aalah Iiqaa'iyyah",
    indo: "kecitang",
    rejang: "kecitang",
    gambar: "",
    budaya: "Kecitang adalah alat musik pukul tradisional Rejang yang termasuk dalam kelompok idiofon. Suaranya yang khas menjadi penanda dimulainya berbagai ritual dan upacara adat Rejang.",
    kalimat: {
      arab: "تُقْرَعُ الآلَةُ الإِيقَاعِيَّةُ لِإِعْلَانِ بَدْءِ الحَفْل",
      indo: "Kecitang dipukul untuk menandai dimulainya upacara adat.",
      rejang: "Kecitang dipalu untuk tandai mulai upacara adat."
    }
  },
  {
    kat: "Kesenian",
    arab: "رَقْصَةُ التَّرْحِيب",
    latin: "Raqshatur Tarhiib",
    indo: "tari selamat datang",
    rejang: "mencok",
    gambar: "",
    budaya: "Tari selamat datang (mencok) adalah tarian penyambutan tamu dalam tradisi Rejang. Tarian ini ditampilkan untuk menghormati tamu penting yang datang berkunjung dan mencerminkan keramahan suku Rejang.",
    kalimat: {
      arab: "تُؤَدَّى رَقْصَةُ التَّرْحِيبِ لِاسْتِقْبَالِ الضُّيُوف",
      indo: "Tari selamat datang ditampilkan untuk menyambut tamu kehormatan.",
      rejang: "Tari mencok ditampilkan untuk sambut rung tamu penting."
    }
  },
  {
    kat: "Kesenian",
    arab: "دُمْيَةٌ طَارِدَةٌ",
    latin: "Dumyah Thaaridah",
    indo: "boneka penghalang burung",
    rejang: "stujeu",
    gambar: "",
    budaya: "Stujeu adalah boneka atau orang-orangan yang dibuat petani Rejang untuk mengusir burung dari ladang. Pembuatan stujeu merupakan bagian dari tradisi bertani masyarakat Rejang dan sering dibuat dengan kreativitas yang tinggi sehingga menjadi objek seni tersendiri.",
    kalimat: {
      arab: "يَصْنَعُ الْفَلَّاحُونَ دُمَى لِطَرْدِ الطُّيُورِ مِنَ الْحَقْل",
      indo: "Para petani membuat stujeu untuk mengusir burung dari ladang.",
      rejang: "Para petani buek stujeu untuk usir burung dari uma."
    }
  },

  // ============================================================
  // KATEGORI 3: ADAT-ISTIADAT (35 entri - RINGKAS)
  // ============================================================
  {
    kat: "Adat-Istiadat",
    arab: "طَقْسُ تَبْرِيدِ الأَسْنَان",
    latin: "Thaqsu Tabriidil Asnaan",
    indo: "kikir gigi (bedabung)",
    rejang: "bedabung",
    gambar: "",
    budaya: "Bedabung adalah upacara adat pengikiran gigi yang dilakukan pada remaja Rejang sebagai tanda kedewasaan. Upacara ini merupakan tradisi yang kini mulai jarang dilakukan, namun tetap dikenang sebagai bagian penting dari identitas budaya Rejang.",
    kalimat: {
      arab: "أُقِيمَ طَقْسُ تَبْرِيدِ الأَسْنَانِ لِلشَّبَابِ الْبَالِغِين",
      indo: "Upacara bedabung dilakukan untuk para remaja yang sudah dewasa.",
      rejang: "Upacara bedabung dilakukan untuk remaja yang sudah bebesara."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "مَهْرَجَانٌ",
    latin: "Mahrajaan",
    indo: "perayaan bekejei",
    rejang: "bekejei",
    gambar: "",
    budaya: "Bekejei adalah pesta adat besar masyarakat Rejang yang dirayakan untuk berbagai keperluan seperti pesta panen, pernikahan besar, atau perayaan kemenangan. Bekejei biasanya berlangsung selama beberapa hari dengan berbagai atraksi seni dan budaya.",
    kalimat: {
      arab: "يُحْتَفَلُ بِالْمَهْرَجَانِ الْكَبِيرِ بَعْدَ مَوْسِمِ الْحَصَاد",
      indo: "Perayaan bekejei diadakan setelah musim panen berhasil.",
      rejang: "Bekejei diadakan sesudah musim panen berhasil."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "طَقْسٌ",
    latin: "Thaqas",
    indo: "ritual (belangea)",
    rejang: "belangea",
    gambar: "",
    budaya: "Belangea adalah ritual pembersihan atau penyucian dalam adat Rejang yang dilakukan untuk menolak bala dan menjaga keselamatan anggota masyarakat. Ritual ini dipimpin oleh pemuka adat atau dukun beranak.",
    kalimat: {
      arab: "أُقِيمَ الطَّقْسُ التَّقْلِيدِيُّ لِحِمَايَةِ الْقَرْيَة",
      indo: "Ritual belangea dilakukan untuk melindungi keselamatan kampung.",
      rejang: "Ritual belangea dilakukan untuk lindungi sadeui."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "طَقْسُ الاسْتِحْمَام",
    latin: "Thaqsul Istihmmaam",
    indo: "ritual mandi (belimeu)",
    rejang: "belimeu",
    gambar: "",
    budaya: "Belimeu adalah ritual mandi khusus yang dilakukan dalam momen-momen penting kehidupan masyarakat Rejang, seperti sebelum pernikahan, setelah melahirkan, atau setelah masa berkabung. Air yang digunakan biasanya dicampur dengan berbagai tumbuhan herbal.",
    kalimat: {
      arab: "يُؤَدَّى طَقْسُ الاسْتِحْمَامِ قَبْلَ حَفْلِ الزَّفَاف",
      indo: "Ritual mandi belimeu dilakukan sebelum upacara pernikahan.",
      rejang: "Ritual belimeu dilakukan sebelum upacara bimbang."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "زَوَاجٌ",
    latin: "Zawaaj",
    indo: "upacara pernikahan",
    rejang: "bimbang",
    gambar: "",
    budaya: "Bimbang adalah upacara pernikahan adat Rejang yang berlangsung selama beberapa hari dengan serangkaian ritual yang ketat. Prosesi bimbang melibatkan seluruh anggota marga dan menjadi ajang mempererat silaturahmi antarkeluarga.",
    kalimat: {
      arab: "تُقَامُ حَفْلَةُ الزَّوَاجِ لِثَلَاثَةِ أَيَّامٍ مُتَتَالِيَة",
      indo: "Upacara pernikahan bimbang berlangsung selama tiga hari berturut-turut.",
      rejang: "Upacara bimbang berlangsung tigo hari berturut-turut."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "احْتِفَالُ الْوِلَادَة",
    latin: "Ihtifaalul Wilaadah",
    indo: "upacara lahiran",
    rejang: "mbin cupik'mai bioa",
    gambar: "",
    budaya: "Mbin cupik'mai bioa adalah rangkaian ritual adat yang dilakukan menyambut kelahiran bayi dalam masyarakat Rejang. Ritual ini mencakup doa-doa, pemberian nama, dan berbagai pantangan yang harus dipatuhi oleh ibu dan bayi.",
    kalimat: {
      arab: "يُحْتَفَلُ بِقُدُومِ الْمَوْلُودِ الْجَدِيدِ بِاحْتِفَالٍ خَاصّ",
      indo: "Kelahiran bayi disambut dengan upacara adat yang meriah.",
      rejang: "Kelahiran bayi disambut make upacara adat."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "احْتِفَالُ الْمَنْزِلِ الْجَدِيد",
    latin: "Ihtifaalul Manzilil Jadiid",
    indo: "upacara rumah baru",
    rejang: "mlei kembu'",
    gambar: "",
    budaya: "Mlei kembu' adalah upacara adat yang dilakukan ketika seseorang menempati rumah baru. Ritual ini bertujuan memohon keselamatan dan keberkahan bagi penghuni rumah baru dan melibatkan doa bersama serta makan bersama warga.",
    kalimat: {
      arab: "أُقِيمَ احْتِفَالٌ عِنْدَ الانْتِقَالِ إِلَى الْمَنْزِلِ الْجَدِيد",
      indo: "Upacara mlei kembu' diadakan saat menempati rumah baru.",
      rejang: "Upacara mlei kembu' diadakan saat tudo di umea' baru."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "خِتَانٌ",
    latin: "Khitaan",
    indo: "upacara sunatan",
    rejang: "semluweng",
    gambar: "",
    budaya: "Semluweng adalah upacara khitanan dalam adat Rejang yang dirayakan dengan meriah. Anak yang dikhitan biasanya didandani dengan pakaian adat dan diarak keliling kampung sebelum prosesi khitanan dimulai.",
    kalimat: {
      arab: "يُقَامُ حَفْلُ الْخِتَانِ لِلأَوْلَادِ الذُّكُور",
      indo: "Upacara semluweng dirayakan untuk anak laki-laki yang dikhitan.",
      rejang: "Upacara semluweng dirayakan untuk anok laki-laki."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "طَقْسُ السَّلَام",
    latin: "Thaqsus Salaam",
    indo: "ritual perdamaian",
    rejang: "tepung setawar",
    gambar: "",
    budaya: "Tepung setawar adalah ritual perdamaian dalam adat Rejang yang dilakukan untuk mendamaikan dua pihak yang berselisih. Prosesi ini melibatkan pemberian tepung tawar sebagai simbol penyucian dan penghapusan perselisihan.",
    kalimat: {
      arab: "أُقِيمَ طَقْسُ السَّلَامِ بَيْنَ الْقَبِيلَتَيْن",
      indo: "Ritual tepung setawar dilakukan untuk mendamaikan dua keluarga yang berselisih.",
      rejang: "Ritual tepung setawar dilakukan untuk damao duai keluargo."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "طَقْسُ جَمْعِ الْعَسَل",
    latin: "Thaqsu Jam'il 'Asal",
    indo: "ritual mengambil madu sialang",
    rejang: "sialang",
    gambar: "",
    budaya: "Sialang adalah pohon-pohon tinggi tempat lebah liar bersarang di hutan Rejang. Ritual mengambil madu sialang merupakan tradisi yang dilakukan dengan doa-doa khusus untuk memohon izin kepada roh penjaga pohon sebelum mengambil madu.",
    kalimat: {
      arab: "تُؤَدَّى طُقُوسٌ خَاصَّةٌ قَبْلَ جَمْعِ الْعَسَلِ مِنَ الْغَابَة",
      indo: "Ritual khusus dilakukan sebelum mengambil madu dari pohon sialang.",
      rejang: "Ritual khusus dilakukan sebelum ambil madu dari sialang."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "زِيَارَةٌ",
    latin: "Ziyaarah",
    indo: "ziarah (mulang apai)",
    rejang: "mulang apai",
    gambar: "",
    budaya: "Mulang apai adalah tradisi ziarah kubur dalam masyarakat Rejang yang dilakukan pada hari-hari tertentu, terutama menjelang Ramadan dan Lebaran. Tradisi ini untuk mendoakan leluhur dan mempererat hubungan dengan akar budaya.",
    kalimat: {
      arab: "نَزُورُ قُبُورَ أَجْدَادِنَا فِي أَيَّامِ الأَعْيَاد",
      indo: "Kami berziarah ke makam leluhur pada hari-hari besar.",
      rejang: "Kito ziarah ke makam niniek pada hari-hari besar."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "طَقْسُ الزِّرَاعَة",
    latin: "Thaqsuz Ziraa'ah",
    indo: "acara sebelum menanam padi",
    rejang: "mundang benia'",
    gambar: "",
    budaya: "Mundang benia' adalah serangkaian ritual adat yang dilakukan masyarakat Rejang sebelum memulai musim tanam padi. Ritual ini berisi doa dan permohonan agar panen melimpah dan dijauhkan dari hama.",
    kalimat: {
      arab: "تُؤَدَّى طُقُوسٌ زِرَاعِيَّةٌ قَبْلَ مَوْسِمِ الزَّرْع",
      indo: "Ritual adat dilakukan sebelum musim tanam padi dimulai.",
      rejang: "Ritual adat dilakukan sebelum musim tanam pai."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "تَطْهِيرُ الْقَرْيَة",
    latin: "Tathhiirul Qaryah",
    indo: "tradisi cuci dusun",
    rejang: "agung pu' sadeui",
    gambar: "",
    budaya: "Agung pu' sadeui adalah tradisi pembersihan kampung secara ritual yang dilakukan oleh masyarakat Rejang secara berkala. Tradisi ini bertujuan mengusir roh jahat dan memohon perlindungan bagi seluruh warga kampung.",
    kalimat: {
      arab: "تُنَظَّفُ الْقَرْيَةُ رُوحِيًّا فِي احْتِفَالٍ سَنَوِيّ",
      indo: "Kampung dibersihkan secara ritual dalam upacara tahunan cuci dusun.",
      rejang: "Sadeui dibersihkan secara ritual dalam upacara tahunan."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "تَقْلِيدُ الْحَرْب",
    latin: "Taqliidil Harb",
    indo: "tradisi perang",
    rejang: "tupeu",
    gambar: "",
    budaya: "Tupeu adalah pertunjukan seni tradisional Rejang yang mensimulasikan peperangan menggunakan senjata tradisional. Tradisi ini dilakukan untuk mengenang keberanian leluhur dan melatih jiwa keprajuritan masyarakat Rejang.",
    kalimat: {
      arab: "يُحْيِي أَبْطَالُ الْقَبِيلَةِ تَقْلِيدَ الْحَرْبِ فِي الأَعْيَاد",
      indo: "Tradisi perang tupeu ditampilkan dalam perayaan adat untuk menghormati leluhur.",
      rejang: "Tupeu ditampilkan dalam perayaan untuk hormati niniek."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "تَقْلِيدُ دِرَاسِ الأَرُزّ",
    latin: "Taqliidu Diraasil Aruzz",
    indo: "tradisi meremas padi",
    rejang: "pirik",
    gambar: "",
    budaya: "Pirik adalah tradisi Rejang dalam mengolah padi dengan cara diremas menggunakan kaki. Tradisi ini mencerminkan kearifan lokal dalam pengolahan hasil pertanian yang telah berlangsung turun-temurun.",
    kalimat: {
      arab: "تَتَضَمَّنُ تَقَالِيدُ الزِّرَاعَةِ دِرَاسَ الأَرُزِّ بِالأَقْدَام",
      indo: "Tradisi meremas padi dengan kaki merupakan bagian dari kearifan lokal Rejang.",
      rejang: "Pirik adalah bagian dari kearifan bertani Rejang."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "قَانُونٌ عُرْفِيٌّ",
    latin: "Qaanuun 'Urfiy",
    indo: "aturan adat",
    rejang: "ca'o",
    gambar: "",
    budaya: "Ca'o adalah hukum adat Rejang yang mengatur berbagai aspek kehidupan masyarakat. Aturan ini bersifat mengikat dan dipatuhi oleh seluruh warga marga sebagai bagian dari identitas dan tatanan sosial budaya Rejang.",
    kalimat: {
      arab: "يَجِبُ احْتِرَامُ الْقَانُونِ الْعُرْفِيِّ فِي الْمُجْتَمَع",
      indo: "Semua anggota masyarakat wajib menghormati aturan adat ca'o.",
      rejang: "Saban orang perlu kamayan ca'o dalam masyarakat."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "غَرَامَةٌ",
    latin: "Gharaamah",
    indo: "uang denda",
    rejang: "caci",
    gambar: "",
    budaya: "Caci adalah denda adat yang dikenakan kepada seseorang yang melanggar aturan adat Rejang. Sistem denda ini merupakan mekanisme penegakan hukum adat yang efektif dalam menjaga ketertiban masyarakat.",
    kalimat: {
      arab: "يَدْفَعُ مَنْ يُخَالِفُ الأَعْرَافَ غَرَامَةً مَالِيَّة",
      indo: "Pelanggar adat dikenakan denda caci sesuai berat pelanggarannya.",
      rejang: "Pelanggar adat bayak caci sesuai berat kesalahan."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "حَظْرٌ",
    latin: "Hazhr",
    indo: "larangan (klalak)",
    rejang: "klalak",
    gambar: "",
    budaya: "Klalak adalah pantangan atau larangan dalam adat Rejang yang tidak boleh dilanggar. Setiap kampung atau marga memiliki klalak tersendiri yang berkaitan dengan alam, perilaku, atau tempat-tempat tertentu.",
    kalimat: {
      arab: "الْحُظُورُ الْعُرْفِيَّةُ يَجِبُ احْتِرَامُهَا",
      indo: "Larangan adat klalak wajib dihormati oleh seluruh masyarakat.",
      rejang: "Klalak perlu dihormati saban orang."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "تَعْظِيمٌ",
    latin: "Ta'zhiim",
    indo: "sembah",
    rejang: "sembea",
    gambar: "",
    budaya: "Sembea adalah gerakan penghormatan khas dalam adat Rejang yang dilakukan dengan menyatukan kedua tangan di dada. Gerakan ini digunakan untuk menghormati pemimpin adat, tamu kehormatan, atau dalam ritual-ritual tertentu.",
    kalimat: {
      arab: "يُؤَدِّي أَبْنَاءُ الْقَبِيلَةِ تَحِيَّةَ التَّعْظِيمِ لِزُعَمَائِهِم",
      indo: "Anggota suku melakukan sembea kepada pemimpin adat mereka.",
      rejang: "Anggota suku lakukan sembea kapade pemimpin."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "تَعَاوُنٌ",
    latin: "Ta'aawun",
    indo: "gotong royong",
    rejang: "umbung",
    gambar: "",
    budaya: "Umbung adalah tradisi gotong royong dalam masyarakat Rejang yang menjadi tulang punggung kehidupan sosial. Dalam umbung, seluruh warga bergotong royong untuk menyelesaikan pekerjaan besar seperti membangun rumah, mengerjakan sawah, atau persiapan upacara adat.",
    kalimat: {
      arab: "التَّعَاوُنُ بَيْنَ الْجِيرَانِ يُقَوِّي أَوَاصِرَ الْمُجْتَمَع",
      indo: "Tradisi umbung memperkuat hubungan antar warga kampung.",
      rejang: "Umbung kuat kan hubung antar warga sadeui."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "دُعَاءٌ",
    latin: "Du'aa'",
    indo: "doa",
    rejang: "do'a",
    gambar: "",
    budaya: "Doa (do'a) dalam kehidupan masyarakat Rejang yang mayoritas Muslim menjadi bagian yang tidak terpisahkan dari setiap kegiatan adat. Doa dipanjatkan dalam setiap upacara sebagai wujud syukur dan permohonan kepada Allah SWT.",
    kalimat: {
      arab: "نَدْعُو اللهَ فِي كُلِّ بِدَايَةِ عَمَل",
      indo: "Kita selalu berdoa kepada Allah di awal setiap kegiatan.",
      rejang: "Kito selalu do'a kapade Allah di awal kegiatan."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "وَلِيمَةٌ",
    latin: "Waliimah",
    indo: "selamatan",
    rejang: "selamatan",
    gambar: "",
    budaya: "Selamatan dalam adat Rejang adalah tradisi makan bersama yang dilakukan untuk merayakan berbagai momen penting dalam kehidupan. Makanan yang disiapkan memiliki makna simbolis tersendiri sesuai dengan tujuan selamatan.",
    kalimat: {
      arab: "تُقَامُ الْوَلِيمَةُ شُكْرًا لِنِعَمِ اللهِ",
      indo: "Selamatan diadakan sebagai wujud syukur atas nikmat yang diterima.",
      rejang: "Selamatan diadakan sebagai syukur atas nikmat Allah."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "مَوْتٌ",
    latin: "Maut",
    indo: "kematian",
    rejang: "kematin",
    gambar: "",
    budaya: "Upacara kematian dalam adat Rejang dilakukan sesuai syariat Islam namun tetap mempertahankan tradisi lokal seperti pembacaan ratapan, ziarah, dan doa bersama selama beberapa malam berturut-turut.",
    kalimat: {
      arab: "الْمَوْتُ حَقٌّ لِكُلِّ نَفْسٍ",
      indo: "Setiap makhluk hidup pasti akan mengalami kematian.",
      rejang: "Kematin adalah kepastian bagi saban orang."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "عَفْوٌ",
    latin: "Afw",
    indo: "maaf",
    rejang: "ampun",
    gambar: "",
    budaya: "Meminta maaf (ampun) dalam budaya Rejang dilakukan dengan cara yang khas dan penuh tata krama. Dalam upacara adat, permintaan maaf sering disampaikan secara formal melalui juru bicara adat.",
    kalimat: {
      arab: "الْعَفْوُ مِنْ أَعْلَى الأَخْلَاق",
      indo: "Meminta maaf dan memaafkan adalah akhlak yang mulia.",
      rejang: "Ampun adalah akhlak yang mulia."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "صِلَةُ الرَّحِم",
    latin: "Shilatur Rahim",
    indo: "silaturahmi",
    rejang: "silaturahmi",
    gambar: "",
    budaya: "Silaturahmi dalam budaya Rejang diwujudkan melalui berbagai tradisi kunjungan dan acara bersama. Masyarakat Rejang sangat menjunjung tinggi hubungan kekeluargaan dan persaudaraan antar marga.",
    kalimat: {
      arab: "صِلَةُ الرَّحِمِ تُطِيلُ الْعُمْرَ وَتُبَارِكُ الرِّزْق",
      indo: "Silaturahmi memperkuat hubungan kekeluargaan dalam masyarakat Rejang.",
      rejang: "Silaturahmi kuat kan hubung keluargo dalam masyarakat."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "طَعَامُ الشَّعَائِر",
    latin: "Tha'aamus Sya'aa-ir",
    indo: "upacara adat (makanan)",
    rejang: "punjung",
    gambar: "",
    budaya: "Punjung adalah makanan adat khas Rejang yang disajikan dalam berbagai upacara. Biasanya berupa nasi tumpeng atau sajian khusus yang disusun dengan cara tertentu sebagai simbol doa dan harapan.",
    kalimat: {
      arab: "يُقَدَّمُ طَعَامُ الشَّعَائِرِ فِي حَفَلَاتِ الأَعْرَاس",
      indo: "Makanan adat punjung disajikan dalam upacara pernikahan.",
      rejang: "Punjung disajikan dalam upacara bimbang."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "وِعَاءٌ طَقْسِيٌّ",
    latin: "Wi'aa' Thaqsiy",
    indo: "wadah upacara",
    rejang: "take",
    gambar: "",
    budaya: "Take adalah wadah atau tempat yang digunakan dalam upacara adat Rejang. Biasanya terbuat dari anyaman bambu atau bahan alami lainnya dan memiliki makna simbolis dalam setiap ritual.",
    kalimat: {
      arab: "يُوضَعُ الطَّعَامُ التَّقْلِيدِيُّ فِي الْوِعَاءِ الطَّقْسِيّ",
      indo: "Makanan tradisional diletakkan dalam wadah adat take.",
      rejang: "Makanan tuo diletakkan dalam take."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "حَفْلَةٌ صَغِيرَة",
    latin: "Haflah Shaghiirah",
    indo: "pesta kecil",
    rejang: "knulea'",
    gambar: "",
    budaya: "Knulea' adalah perayaan kecil dalam tradisi Rejang yang diadakan untuk momen-momen tertentu yang tidak memerlukan upacara besar. Biasanya dilakukan dengan makan bersama dan doa dalam lingkup keluarga.",
    kalimat: {
      arab: "أَقَمْنَا حَفْلَةً صَغِيرَةً لِلاحْتِفَالِ بِمُنَاسَبَةٍ سَعِيدَة",
      indo: "Kami mengadakan pesta kecil knulea' untuk merayakan momen bahagia.",
      rejang: "Kito buek knulea' untuk rayakan momen bahagia."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "تُرَاثٌ أَوَّلِيّ",
    latin: "Turaats Awwaliy",
    indo: "barang pusaka",
    rejang: "sanggeun",
    gambar: "",
    budaya: "Sanggeun adalah benda-benda pusaka dalam tradisi Rejang yang diwariskan dari generasi ke generasi. Benda pusaka dianggap memiliki kekuatan spiritual dan harus dijaga dengan cara-cara ritual tertentu.",
    kalimat: {
      arab: "تُوَرَّثُ الأَغْرَاضُ الأَوَّلِيَّةُ مِنْ جِيلٍ إِلَى جِيل",
      indo: "Barang pusaka sanggeun diwariskan dari generasi ke generasi.",
      rejang: "Sanggeun turun-temurun dari generasi ke generasi."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "مُصَالَحَةٌ",
    latin: "Mushaalahah",
    indo: "ritual perdamaian (tabeus)",
    rejang: "tabeus",
    gambar: "",
    budaya: "Tabeus adalah ritual adat yang dilakukan ketika seseorang atau keluarga pertama kali menempati rumah baru. Ritual ini melibatkan pembacaan doa, penyiraman air bunga, dan makan bersama warga kampung.",
    kalimat: {
      arab: "تُؤَدَّى الْمُصَالَحَةُ لِتَطْهِيرِ الْمَكَانِ الْجَدِيد",
      indo: "Ritual tabeus dilakukan untuk memberkati tempat tinggal baru.",
      rejang: "Ritual tabeus dilakukan untuk berkati umea' baru."
    }
  },

  // ============================================================
  // KATEGORI 4: KEARIFAN LOKAL (100+ entri - pilihan)
  // ============================================================
  {
    kat: "Kearifan Lokal",
    arab: "دَوَاءٌ تَقْلِيدِيٌّ",
    latin: "Dawaa' Taqliidiy",
    indo: "obat tradisional",
    rejang: "ambea",
    gambar: "",
    budaya: "Ambea adalah obat-obatan tradisional yang dibuat dari tumbuhan dan bahan alam oleh masyarakat Rejang. Pengetahuan tentang ambea diwariskan turun-temurun dan menjadi kekayaan kearifan lokal yang bernilai tinggi.",
    kalimat: {
      arab: "يَسْتَخْدِمُ أَهْلُ رِيجَانْغ الدَّوَاءَ التَّقْلِيدِيَّ مِنَ النَّبَاتَات",
      indo: "Masyarakat Rejang menggunakan obat tradisional dari tumbuhan hutan.",
      rejang: "Masyarakat gunakan ambea dari tumbuhan hutan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "طَوْفٌ مِنَ الْخَيْزُرَان",
    latin: "Thawf Minal Khayzuraan",
    indo: "rakit bambu",
    rejang: "ando",
    gambar: "",
    budaya: "Ando adalah rakit tradisional Rejang yang terbuat dari bambu, digunakan untuk menyeberangi sungai atau membawa hasil panen. Keahlian membuat rakit bambu merupakan salah satu keterampilan bertahan hidup masyarakat Rejang.",
    kalimat: {
      arab: "يَصْنَعُ السُّكَّانُ طَوْفًا مِنَ الْخَيْزُرَانِ لِعُبُورِ النَّهْر",
      indo: "Warga membuat rakit bambu ando untuk menyeberangi sungai.",
      rejang: "Warga buek ando untuk seberang sungai."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "غَسَقٌ",
    latin: "Ghasaq",
    indo: "senja",
    rejang: "aram",
    gambar: "",
    budaya: "Senja (aram) dalam budaya Rejang memiliki makna filosofis yang dalam. Waktu senja dianggap sebagai saat yang sakral, di mana masyarakat biasanya berhenti bekerja dan mulai melakukan kegiatan keagamaan.",
    kalimat: {
      arab: "الْغَسَقُ وَقْتٌ جَمِيلٌ لِلتَّأَمُّل",
      indo: "Senja adalah waktu yang indah untuk merenung dan beribadah.",
      rejang: "Aram waktu yang indah untuk merenung."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَابٌ",
    latin: "Baab",
    indo: "pintu",
    rejang: "bang",
    gambar: "",
    budaya: "Pintu (bang) dalam arsitektur rumah tradisional Rejang memiliki desain dan ornamen khas yang mencerminkan identitas budaya. Arah hadap pintu rumah tradisional Rejang ditentukan oleh aturan adat.",
    kalimat: {
      arab: "يُزَيِّنُونَ الْبَابَ بِزَخَارِفَ تَقْلِيدِيَّة",
      indo: "Pintu rumah tradisional Rejang dihiasi dengan ukiran khas.",
      rejang: "Bang umea' dihias make ukiran khas Rejang."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَاتِيكٌ تَقْلِيدِيّ",
    latin: "Baatik Taqliidiy",
    indo: "kain batik kepahiang",
    rejang: "batik diwo",
    gambar: "",
    budaya: "Batik diwo adalah kain batik khas Kepahiang yang merupakan salah satu produk kerajinan unggulan masyarakat Rejang. Motif-motifnya terinspirasi dari alam dan budaya lokal daerah Kepahiang.",
    kalimat: {
      arab: "يُصْنَعُ الْبَاتِيكُ التَّقْلِيدِيُّ بِأَنَامِلَ مَاهِرَة",
      indo: "Batik diwo dibuat dengan keahlian tangan pengrajin Kepahiang.",
      rejang: "Batik diwo buek make keahlian tangan pengrajin."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَاتِيكٌ مَحَلِّيّ",
    latin: "Baatik Mahalliy",
    indo: "kain batik rejang lebong",
    rejang: "batik kaganga",
    gambar: "",
    budaya: "Batik kaganga adalah batik khas Rejang Lebong yang menggunakan motif aksara Kaganga sebagai elemen desain utamanya. Batik ini menjadi simbol kebanggaan dan identitas budaya masyarakat Rejang Lebong.",
    kalimat: {
      arab: "يَرْتَدِي الْمَسْؤُولُونَ الْبَاتِيكَ الْمَحَلِّيَّ فِي الاحْتِفَالَات",
      indo: "Para pejabat mengenakan batik kaganga dalam acara resmi.",
      rejang: "Para pejabat pakai batik kaganga dalam acara resmi."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مَطْبَخٌ عَامّ",
    latin: "Mathbakh 'Aamm",
    indo: "dapur umum",
    rejang: "bator-bator",
    gambar: "",
    budaya: "Bator-bator adalah dapur umum dalam kompleks rumah tradisional Rejang yang digunakan bersama oleh beberapa keluarga. Dapur bersama ini menjadi pusat kegiatan memasak dalam upacara-upacara adat yang melibatkan banyak orang.",
    kalimat: {
      arab: "يَجْتَمِعُ الْجِيرَانُ فِي الْمَطْبَخِ الْعَامِّ لِتَحْضِيرِ وَلِيمَةِ الأَعْرَاس",
      indo: "Tetangga berkumpul di dapur umum untuk menyiapkan makanan pesta.",
      rejang: "Tetangga kumpul di bator-bator siap makanan pesta."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "لَمُونَ",
    latin: "Lamuun",
    indo: "lemang",
    rejang: "beni'",
    gambar: "",
    budaya: "Beni' adalah lemang, makanan tradisional Rejang yang terbuat dari beras ketan yang dimasak dalam bambu dengan santan. Lemang biasanya dibuat dalam jumlah besar pada acara-acara adat dan perayaan hari besar Islam.",
    kalimat: {
      arab: "يُطْبَخُ اللَّمُونُ فِي قَصَبَةِ الْخَيْزُرَانِ بِجَوَانِبِ النَّار",
      indo: "Lemang beni' dimasak dalam bambu di atas bara api.",
      rejang: "Beni' dimasak dalam buluh di api."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حَمَّامٌ بُخَارِيّ",
    latin: "Hammaam Bukhaariy",
    indo: "perawatan sauna",
    rejang: "betange",
    gambar: "",
    budaya: "Betange adalah tradisi pengobatan dan perawatan tubuh dengan uap dalam masyarakat Rejang. Metode ini menggunakan ramuan tumbuhan herbal yang direbus dan uapnya digunakan untuk mengobati berbagai penyakit.",
    kalimat: {
      arab: "يُسْتَخْدَمُ الْحَمَّامُ الْبُخَارِيُّ لِعِلَاجِ أَمْرَاضِ الْبَرْد",
      indo: "Perawatan sauna betange digunakan untuk mengobati penyakit dingin.",
      rejang: "Betange gunakan untuk obati penyakit dingin."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِرْجَلٌ",
    latin: "Mirjal",
    indo: "kuali besi",
    rejang: "betano",
    gambar: "",
    budaya: "Betano adalah kuali atau belanga besi tradisional yang digunakan untuk memasak dalam rumah tangga Rejang. Alat masak ini tahan lama dan menghasilkan cita rasa masakan yang khas.",
    kalimat: {
      arab: "تَطْبُخُ الأُمُّ الطَّعَامَ فِي الْمِرْجَلِ الْحَدِيدِيّ",
      indo: "Ibu memasak makanan menggunakan kuali besi betano.",
      rejang: "Indok masak di betano."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "زَرَعَ",
    latin: "Zara'a",
    indo: "menugal padi",
    rejang: "beto'o",
    gambar: "",
    budaya: "Beto'o adalah teknik menanam padi dengan cara menugal atau membuat lubang di tanah menggunakan kayu runcing. Metode bertani ini merupakan kearifan lokal yang ramah lingkungan dan telah dipraktikkan oleh masyarakat Rejang selama berabad-abad.",
    kalimat: {
      arab: "يَزْرَعُ الْفَلَّاحُونَ الأَرُزَّ بِطَرِيقَةِ الْحَفْرِ التَّقْلِيدِيَّة",
      indo: "Para petani menanam padi dengan cara menugal secara tradisional.",
      rejang: "Para petani tanam pai dengan beto'o."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "فَخٌّ",
    latin: "Fakhkh",
    indo: "perangkap",
    rejang: "be'un",
    gambar: "",
    budaya: "Be'un adalah perangkap tradisional yang dibuat oleh masyarakat Rejang untuk berburu atau menangkap hewan. Pembuatan perangkap ini memerlukan keahlian khusus dan menggunakan bahan-bahan alami dari hutan.",
    kalimat: {
      arab: "يَصْنَعُ الصَّيَّادُ فَخًا تَقْلِيدِيًّا مِنَ الْخَيْزُرَان",
      indo: "Pemburu membuat perangkap tradisional be'un dari bambu.",
      rejang: "Pemburu buek be'un dari buluh."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نَهَارٌ",
    latin: "Nahaar",
    indo: "siang hari",
    rejang: "bileui",
    gambar: "",
    budaya: "Konsep waktu dalam bahasa Rejang mencerminkan kearifan lokal masyarakat dalam membagi aktivitas sehari-hari. Siang hari (bileui) adalah waktu utama untuk bekerja di ladang dan sawah.",
    kalimat: {
      arab: "يَعْمَلُ الْفَلَّاحُونَ فِي الْحَقْلِ طَوَالَ النَّهَار",
      indo: "Para petani bekerja di ladang sepanjang siang hari.",
      rejang: "Para petani kuleo di uma sepanjang bileui."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مَاءٌ",
    latin: "Maa'",
    indo: "air/sungai",
    rejang: "bioa",
    gambar: "",
    budaya: "Air (bioa) dalam pandangan dunia masyarakat Rejang adalah sumber kehidupan yang sakral. Sungai-sungai di wilayah Rejang dijaga kelestariannya melalui aturan adat yang melarang pencemaran air.",
    kalimat: {
      arab: "الْمَاءُ أَسَاسُ الْحَيَاةِ لِلإِنْسَانِ وَالنَّبَاتَات",
      indo: "Air adalah sumber kehidupan bagi manusia dan tumbuhan.",
      rejang: "Bioa adalah sumber hidup manusia dan tumbuhan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِيَاهُ نَبْعٍ",
    latin: "Miyaahu Nab'",
    indo: "air pancuran mata air",
    rejang: "bioa kasai",
    gambar: "",
    budaya: "Bioa kasai adalah air dari mata air atau sumber alami yang sering digunakan dalam ritual-ritual adat Rejang. Air mata air dianggap lebih murni dan memiliki kekuatan penyembuhan.",
    kalimat: {
      arab: "يَسْتَخْدِمُ الشَّامَانُ مِيَاهَ النَّبْعِ فِي طُقُوسِ الشِّفَاء",
      indo: "Dukun menggunakan air pancuran mata air dalam ritual pengobatan.",
      rejang: "Dukun gunakan bioa kasai dalam ritual obat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "سُمٌّ",
    latin: "Summ",
    indo: "racun",
    rejang: "biso",
    gambar: "",
    budaya: "Pengetahuan tentang racun (biso) tumbuhan merupakan bagian dari kearifan lokal Rejang dalam berburu dan pengobatan tradisional. Masyarakat Rejang mengenal berbagai jenis tumbuhan beracun dan cara penanganannya.",
    kalimat: {
      arab: "يَجِبُ الْحَذَرُ مِنَ النَّبَاتَاتِ السَّامَّةِ فِي الْغَابَة",
      indo: "Harus berhati-hati dengan tumbuhan beracun di hutan.",
      rejang: "Perlu hati-hati make tumbuhan biso di imbo."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نَجْمُ الصَّبَاح",
    latin: "Najmus Shabaah",
    indo: "bintang kejora",
    rejang: "bitang sulua",
    gambar: "",
    budaya: "Bintang kejora (bitang sulua) dalam tradisi Rejang digunakan sebagai penanda waktu untuk memulai aktivitas pertanian. Kemunculannya di langit menjadi tanda bagi petani untuk mempersiapkan musim tanam.",
    kalimat: {
      arab: "يَسْتَعِينُ الْمَزَارِعُونَ بِنَجْمِ الصَّبَاحِ لِتَحْدِيدِ مَوَاسِمِ الزَّرْع",
      indo: "Petani menggunakan bintang kejora sebagai penanda musim tanam.",
      rejang: "Petani gunakan bitang sulua sebagai tandai musim tanam."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "قَفَّةُ الأَوْرَاق",
    latin: "Qaffatul Awraaq",
    indo: "bakul sirih",
    rejang: "bokoa ibeun",
    gambar: "",
    budaya: "Bokoa ibeun adalah tempat menyimpan daun sirih beserta perlengkapannya (pinang, kapur, gambir) dalam budaya Rejang. Sirih pinang menjadi simbol keramahan dan selalu disajikan untuk tamu dalam acara-acara adat.",
    kalimat: {
      arab: "تُقَدَّمُ قَفَّةُ الأَوْرَاقِ لِلضُّيُوفِ كَعَلَامَةِ التَّرْحِيب",
      indo: "Bakul sirih disajikan kepada tamu sebagai tanda keramahan.",
      rejang: "Bokoa ibeun disajikan kapade rung tamu sebagai tandai keramahan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "قَاعَةٌ",
    latin: "Qaa'ah",
    indo: "aula",
    rejang: "bugei",
    gambar: "",
    budaya: "Bugei adalah ruang besar atau balai pertemuan dalam rumah adat Rejang yang digunakan untuk musyawarah adat dan berbagai acara komunal. Ruangan ini biasanya berada di bagian depan atau tengah rumah adat.",
    kalimat: {
      arab: "يَجْتَمِعُ الزُّعَمَاءُ فِي الْقَاعَةِ لِمُنَاقَشَةِ شُؤُونِ الْقَبِيلَة",
      indo: "Para pemimpin adat berkumpul di aula bugei untuk bermusyawarah.",
      rejang: "Para pemimpin kumpul di bugei untuk musyawarah."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَرُزٌّ ذُرَةٍ",
    latin: "Aruzz Dzurah",
    indo: "nasi jagung",
    rejang: "buneu",
    gambar: "",
    budaya: "Buneu (nasi jagung) adalah makanan pokok alternatif masyarakat Rejang di masa lalu ketika padi tidak cukup. Saat ini buneu tetap dibuat sebagai warisan kuliner yang mencerminkan ketangguhan dan kreativitas masyarakat Rejang.",
    kalimat: {
      arab: "يَأْكُلُ الْفَلَّاحُونَ أَرُزَّ الذُّرَةِ خِلَالَ مَوْسِمِ الجَفَاف",
      indo: "Petani makan nasi jagung buneu di saat musim kering.",
      rejang: "Petani makan buneu saat musim kering."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "شَاهِدُ قَبْر",
    latin: "Syaahidu Qabr",
    indo: "batu nisan",
    rejang: "butau",
    gambar: "",
    budaya: "Butau adalah batu nisan dalam tradisi pemakaman Rejang. Desain batu nisan tradisional Rejang memiliki ciri khas tersendiri yang berbeda dari batu nisan umum dan sering memuat aksara Kaganga.",
    kalimat: {
      arab: "تَحْمِلُ شَوَاهِدُ الْقُبُورِ نُقُوشًا بِالأَحْرُفِ التَّقْلِيدِيَّة",
      indo: "Batu nisan butau berukir aksara Kaganga dalam tradisi Rejang.",
      rejang: "Butau ukir aksara Kaganga dalam tradisi Rejang."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "غَابَةٌ",
    latin: "Ghaabah",
    indo: "hutan",
    rejang: "imbo",
    gambar: "",
    budaya: "Hutan (imbo) dalam pandangan masyarakat Rejang adalah sumber kehidupan yang harus dijaga. Aturan adat mengatur pemanfaatan hutan secara berkelanjutan, dan terdapat kawasan-kawasan hutan yang disakralkan dan tidak boleh diganggu.",
    kalimat: {
      arab: "تُوَفِّرُ الْغَابَةُ الْهَوَاءَ النَّقِيَّ وَالْمِيَاهَ الصَّافِيَة",
      indo: "Hutan imbo menyediakan udara segar dan air bersih untuk kehidupan.",
      rejang: "Imbo sediakan uaro seger dan bioa bersih untuk hidup."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حِنَّاءٌ",
    latin: "Hinnaa'",
    indo: "memakai henna",
    rejang: "inai/beinai",
    gambar: "",
    budaya: "Tradisi memakai henna (beinai) dalam budaya Rejang dilakukan dalam rangkaian upacara pernikahan. Pengantin wanita dihiasi dengan motif henna khas Rejang yang memiliki makna simbolis keindahan dan keberuntungan.",
    kalimat: {
      arab: "تُزَيِّنُ الْعَرُوسُ يَدَيْهَا بِالْحِنَّاءِ قَبْلَ لَيْلَةِ الزَّفَاف",
      indo: "Pengantin wanita menghias tangannya dengan henna sebelum malam pernikahan.",
      rejang: "Pengantin perempuan hiasi tangan make inai sebelum malam pernikahan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِشْكَاةٌ",
    latin: "Mishkaa",
    indo: "rumah",
    rejang: "umea'",
    gambar: "",
    budaya: "Umea' adalah rumah panggung tradisional Rejang yang dibangun dari kayu pilihan. Desainnya mencerminkan kearifan lokal dalam beradaptasi dengan iklim tropis dan memiliki ruangan-ruangan yang berfungsi sesuai adat.",
    kalimat: {
      arab: "يَبْنِي أَهْلُ رِيجَانْغ بُيُوتَهُمْ مِنَ الْخَشَبِ الصُّلْب",
      indo: "Masyarakat Rejang membangun rumah umea' dari kayu yang kuat.",
      rejang: "Masyarakat Rejang buek umea' dari kayu yang kuat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حَقْلٌ",
    latin: "Haql",
    indo: "sawah",
    rejang: "sawah",
    gambar: "",
    budaya: "Sawah adalah lahan pertanian utama masyarakat Rejang untuk menanam padi. Sistem pengairan sawah tradisional Rejang memanfaatkan sumber air alami dan mencerminkan kearifan lokal dalam pengelolaan sumber daya air.",
    kalimat: {
      arab: "يَعْمَلُ الْفَلَّاحُونَ فِي الْحَقْلِ مِنَ الصَّبَاحِ حَتَّى الْمَسَاء",
      indo: "Para petani bekerja di sawah dari pagi hingga sore hari.",
      rejang: "Para petani kuleo di sawah dari pagi sampai sore."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مَزْرَعَةٌ",
    latin: "Mazra'ah",
    indo: "ladang",
    rejang: "uma",
    gambar: "",
    budaya: "Uma (ladang) adalah lahan pertanian kering yang dikelola masyarakat Rejang untuk berbagai tanaman. Sistem ladang berpindah tradisional Rejang memiliki kearifan dalam menjaga kesuburan tanah secara alami.",
    kalimat: {
      arab: "يَزْرَعُ الْفَلَّاحُ الْخُضَارَ فِي الْمَزْرَعَة",
      indo: "Petani menanam sayuran di ladang uma.",
      rejang: "Petani tanam sayur di uma."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نِعَالٌ",
    latin: "Ni'aal",
    indo: "sandal",
    rejang: "setelma",
    gambar: "",
    budaya: "Sandal (setelma) tradisional Rejang dibuat dari bahan alami seperti kulit atau kain. Desain sandal tradisional mencerminkan kreativitas dan keahlian pengrajin lokal.",
    kalimat: {
      arab: "يَلْبَسُ الْأَطْفَالُ النِّعَالَ التَّقْلِيدِيَّةَ فِي الْقَرْيَة",
      indo: "Anak-anak mengenakan sandal tradisional di kampung.",
      rejang: "Anok-anok pakai setelma tuo di sadeui."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حَبْلٌ",
    latin: "Habl",
    indo: "tali",
    rejang: "tali",
    gambar: "",
    budaya: "Tali tradisional Rejang dibuat dari serat tumbuhan seperti kulit kayu atau daun palmyra. Keahlian membuat tali merupakan salah satu keterampilan dasar masyarakat Rejang.",
    kalimat: {
      arab: "يَعْقِدُ الْفَلَّاحُ الْحَبْلَ بِقُوَّة",
      indo: "Petani mengikat tali dengan kuat.",
      rejang: "Petani ikat tali make kuat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "سِلَّةٌ",
    latin: "Sillah",
    indo: "keranjang",
    rejang: "kita",
    gambar: "",
    budaya: "Keranjang (kita) adalah wadah yang dibuat dengan menganyam bambu atau rotan. Keranjang tradisional digunakan untuk menyimpan dan mengangkut berbagai barang di kehidupan sehari-hari masyarakat Rejang.",
    kalimat: {
      arab: "تَملأُ الْفَتَاةُ السِّلَّةَ بِالْفَاكِهَة",
      indo: "Gadis mengisi keranjang dengan buah-buahan.",
      rejang: "Rung mengisi kita make buah-buahan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "جَرَّةٌ",
    latin: "Jarrah",
    indo: "guci/tempayan",
    rejang: "kendi",
    gambar: "",
    budaya: "Kendi adalah tempayan tradisional Rejang yang terbuat dari tanah liat yang dibakar. Kendi digunakan untuk menyimpan air dan berbagai keperluan domestik rumah tangga.",
    kalimat: {
      arab: "تَحْفَظُ الْجَرَّةُ الْمَاءَ بَارِدًا",
      indo: "Kendi menjaga air tetap sejuk.",
      rejang: "Kendi jago bioa supaya sejuk."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِصْبَاحٌ",
    latin: "Mishbah",
    indo: "lampu",
    rejang: "lampu",
    gambar: "",
    budaya: "Lampu tradisional Rejang dibuat dari bahan-bahan sederhana seperti minyak dan sumbu. Sebelum adanya listrik, lampu minyak adalah satu-satunya sumber pencahayaan di malam hari.",
    kalimat: {
      arab: "يُوقِدُ الْجَدُّ الْمِصْبَاحَ عِنْدَ حُلُولِ اللَّيْل",
      indo: "Kakek menyalakan lampu saat malam tiba.",
      rejang: "Niniek nyalakan lampu saat malam datang."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "فُرْشَاةٌ",
    latin: "Furshah",
    indo: "sapu",
    rejang: "sumbat",
    gambar: "",
    budaya: "Sapu (sumbat) tradisional Rejang dibuat dari bahan alami seperti rumput atau ranting yang diikat bersama. Alat pembersih ini masih banyak digunakan di daerah pedesaan Rejang.",
    kalimat: {
      arab: "تَمسَحُ الأُمُّ الأَرْضَ بِالْفُرْشَاة",
      indo: "Ibu menyapu lantai dengan sapu tradisional.",
      rejang: "Indok sapu lantai make sumbat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِنْجَلٌ",
    latin: "Minjal",
    indo: "sabit",
    rejang: "rikhon",
    gambar: "",
    budaya: "Sabit (rikhon) adalah alat pertanian tradisional Rejang yang digunakan untuk memotong padi atau rumput. Alat ini memiliki desain yang telah dioptimalkan selama berabad-abad untuk pekerjaan berkebun.",
    kalimat: {
      arab: "يَحْمِلُ الْفَلَّاحُ الْمِنْجَلَ إِلَى الْحَقْل",
      indo: "Petani membawa sabit ke ladang.",
      rejang: "Petani bawok rikhon ke uma."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "فَأْسٌ",
    latin: "Fa's",
    indo: "kapak",
    rejang: "kapak",
    gambar: "",
    budaya: "Kapak tradisional Rejang dibuat dari besi dan kayu dengan desain yang nyaman untuk digenggam. Alat ini digunakan untuk berbagai pekerjaan mulai dari menebang pohon hingga membersihkan lahan.",
    kalimat: {
      arab: "يُمسِكُ الرَّجُلُ الْفَأْسَ بِقُوَّة",
      indo: "Pria memegang kapak dengan kuat.",
      rejang: "Lelaki pegang kapak make kuat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِعْزَقَةٌ",
    latin: "Mi'zaqah",
    indo: "cangkul",
    rejang: "pacul",
    gambar: "",
    budaya: "Cangkul (pacul) adalah alat pertanian yang paling penting bagi masyarakat Rejang. Alat ini digunakan untuk mengolah tanah, membuat lubang tanam, dan berbagai pekerjaan pertanian lainnya.",
    kalimat: {
      arab: "يَحْفِرُ الْفَلَّاحُ الأَرْضَ بِالْمِعْزَقَة",
      indo: "Petani menggali tanah dengan cangkul.",
      rejang: "Petani gali tanah make pacul."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "كِيسٌ",
    latin: "Kiis",
    indo: "karung",
    rejang: "karung",
    gambar: "",
    budaya: "Karung tradisional Rejang dibuat dari bahan tenunan atau plastik yang digunakan untuk menyimpan padi dan hasil pertanian lainnya.",
    kalimat: {
      arab: "يَمْلأُ الْفَلَّاحُ الْكِيسَ بِالأَرُزّ",
      indo: "Petani mengisi karung dengan beras.",
      rejang: "Petani isi karung make pai."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَرِيكَةٌ",
    latin: "Ariikah",
    indo: "tempat tidur",
    rejang: "petiduran",
    gambar: "",
    budaya: "Petiduran tradisional Rejang biasanya dibuat dari kayu dan disusun di atas panggung rumah. Desainnya sederhana namun ergonomis untuk istirahat yang nyaman.",
    kalimat: {
      arab: "يَنَامُ الطِّفْلُ عَلَى أَرِيكَتِهِ",
      indo: "Anak tidur di tempat tidurnya.",
      rejang: "Anok tido di petiduran kamenye."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "وِسَادَةٌ",
    latin: "Wisaadah",
    indo: "bantal",
    rejang: "bantal",
    gambar: "",
    budaya: "Bantal tradisional Rejang diisi dengan kapas atau bahan alami lainnya dan ditutupi dengan kain. Bantal digunakan untuk kenyamanan tidur dan istirahat.",
    kalimat: {
      arab: "تَضَعُ الأُمُّ الْوِسَادَةَ تَحْتَ رَأْسِ الطِّفْل",
      indo: "Ibu meletakkan bantal di bawah kepala anak.",
      rejang: "Indok letakkan bantal di bawah kepala anok."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "غِطَاءٌ",
    latin: "Ghitaa'",
    indo: "selimut",
    rejang: "selimut",
    gambar: "",
    budaya: "Selimut tradisional Rejang dibuat dari kain yang tebal dan hangat. Selimut digunakan untuk menghangatkan badan pada malam yang dingin atau saat istirahat.",
    kalimat: {
      arab: "يَتَغَطَّى الطِّفْلُ بِالْغِطَاءِ",
      indo: "Anak tertutup dengan selimut.",
      rejang: "Anok tutup make selimut."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِرْآةٌ",
    latin: "Mir'aah",
    indo: "cermin",
    rejang: "cermin",
    gambar: "",
    budaya: "Cermin tradisional Rejang terbuat dari bahan yang dapat memantulkan cahaya. Cermin digunakan dalam kehidupan sehari-hari untuk berpakaian dan berdandan.",
    kalimat: {
      arab: "تَنْظُرُ الْفَتَاةُ إِلَى الْمِرْآة",
      indo: "Gadis melihat dirinya di cermin.",
      rejang: "Rung tengok di cermin."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِشْطٌ",
    latin: "Misht",
    indo: "sisir",
    rejang: "sisir",
    gambar: "",
    budaya: "Sisir tradisional Rejang dapat terbuat dari kayu atau tulang. Sisir digunakan untuk merapikan rambut dan merupakan bagian dari tata kecantikan tradisional.",
    kalimat: {
      arab: "تُمَشِّطُ الأُمُّ شَعْرَ بِنْتِهَا",
      indo: "Ibu menyisir rambut anak perempuannya.",
      rejang: "Indok sisir rambut anak perempuan kamenye."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "سِنَانٌ",
    latin: "Sinaan",
    indo: "ikan",
    rejang: "ikong",
    gambar: "",
    budaya: "Ikan (ikong) merupakan sumber protein penting bagi masyarakat Rejang yang tinggal dekat sungai. Berbagai jenis ikan sungai ditangkap menggunakan alat tradisional seperti pancing atau jala.",
    kalimat: {
      arab: "يَصْطَادُ الرَّجُلُ السَّمَكَ مِنَ النَّهْر",
      indo: "Pria menangkap ikan dari sungai.",
      rejang: "Lelaki tangkap ikong dari sungai."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "طَائِرٌ",
    latin: "Thaa'ir",
    indo: "burung",
    rejang: "burong",
    gambar: "",
    budaya: "Burung (burong) dalam budaya Rejang memiliki makna simbolis dalam berbagai ritual dan kepercayaan. Burung-burung liar di hutan Rejang dilindungi dalam sistem adat lokal.",
    kalimat: {
      arab: "يُغَرِّدُ الطَّائِرُ عِنْدَ الْفَجْر",
      indo: "Burung berkicau saat fajar tiba.",
      rejang: "Burong nyanyi saat subuh datang."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "ثَعْلَبٌ",
    latin: "Tha'lab",
    indo: "rubah",
    rejang: "rubah",
    gambar: "",
    budaya: "Rubah (rubah) dalam cerita rakyat Rejang sering digambarkan sebagai makhluk yang cerdik. Hewan ini jarang terlihat di permukaan tetapi kehadiraannya dikhawatirkan oleh peternak.",
    kalimat: {
      arab: "الثَّعْلَبُ حَيَوَانٌ ماكِرٌ",
      indo: "Rubah adalah hewan yang licik.",
      rejang: "Rubah adalah hewan yang cerdik."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "غَنَمٌ",
    latin: "Ghanam",
    indo: "domba",
    rejang: "biri-biri",
    gambar: "",
    budaya: "Domba (biri-biri) mulai diternakkan oleh beberapa masyarakat Rejang sebagai sumber daging dan wool. Ternak ini beradaptasi cukup baik dengan iklim Rejang.",
    kalimat: {
      arab: "تَرْعَى الْغَنَمُ فِي الْمَرْعَى",
      indo: "Domba merumput di padang rumput.",
      rejang: "Biri-biri makan rumput di padang."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَقَرَةٌ",
    latin: "Baqarah",
    indo: "sapi",
    rejang: "lembu",
    gambar: "",
    budaya: "Sapi (lembu) merupakan hewan ternak penting dalam budaya Rejang, terutama digunakan untuk membajak sawah atau mengangkut barang berat.",
    kalimat: {
      arab: "يُحَرِّثُ الرَّجُلُ الْحَقْلَ بِالْبَقَرَة",
      indo: "Pria membajak sawah dengan sapi.",
      rejang: "Lelaki garap sawah make lembu."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "خِنْزِيرٌ",
    latin: "Khinzir",
    indo: "babi hutan",
    rejang: "babi",
    gambar: "",
    budaya: "Babi hutan (babi) hidup liar di hutan Rejang dan sering mengganggu hasil pertanian. Berburu babi merupakan tradisi berburu yang masih dilakukan oleh masyarakat Rejang.",
    kalimat: {
      arab: "يَصْطَادُ الصَّيَّادُ الْخِنْزِيرَ الْبَرِّيَّ",
      indo: "Pemburu memburu babi hutan.",
      rejang: "Pemburu tangkap babi hutan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَرْنَبٌ",
    latin: "Arnab",
    indo: "kelinci",
    rejang: "kelinci",
    gambar: "",
    budaya: "Kelinci (kelinci) hidup di hutan dan semak-semak daerah Rejang. Binatang ini berburu untuk dimakan atau dipelihara sebagai hewan peliharaan.",
    kalimat: {
      arab: "يَلْحَقُ الْكَلْبُ بِالأَرْنَب",
      indo: "Anjing mengejar kelinci.",
      rejang: "Asu kejar kelinci."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "ضَفْدَعٌ",
    latin: "Dafd'a'",
    indo: "kodok",
    rejang: "kodok",
    gambar: "",
    budaya: "Kodok (kodok) dalam malam yang cerah di Rejang sering terdengar suaranya dari sawah dan rawa. Kodok merupakan bagian dari ekosistem pertanian tradisional.",
    kalimat: {
      arab: "يَنْقِقُ الضَّفْدَعُ فِي السَّاحَة الرَّطْبَة",
      indo: "Kodok berkoar di rawa.",
      rejang: "Kodok nyanyi di sawah."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَفْعَىٰ",
    latin: "Af'a",
    indo: "ular",
    rejang: "ular",
    gambar: "",
    budaya: "Ular (ular) hidup di berbagai tempat di wilayah Rejang. Masyarakat Rejang telah mengembangkan pengetahuan tentang jenis-jenis ular, yang beracun dan cara mengatasinya.",
    kalimat: {
      arab: "يَجِبُ الْحَذَرُ مِنَ الأَفْعَىٰ السَّامَّة",
      indo: "Harus berhati-hati dengan ular berbisa.",
      rejang: "Perlu hati-hati make ular biso."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نَحْلَةٌ",
    latin: "Nahlah",
    indo: "lebah",
    rejang: "lebah",
    gambar: "",
    budaya: "Lebah (lebah) di hutan Rejang menghasilkan madu berkualitas tinggi. Mengambil madu dari sarang lebah liar (sialang) merupakan tradisi berburu yang penting dalam budaya Rejang.",
    kalimat: {
      arab: "تَجْمَعُ النَّحْلَةُ الرَّحِيقَ مِنَ الْأَزْهَار",
      indo: "Lebah mengumpulkan nektar dari bunga.",
      rejang: "Lebah kumpul nektar dari bunga."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "دِيكٌ",
    latin: "Diik",
    indo: "ayam jantan",
    rejang: "ayam jantan",
    gambar: "",
    budaya: "Ayam jantan (ayam jantan) merupakan hewan peliharaan penting dalam setiap rumah Rejang. Ayam tidak hanya menyediakan daging dan telur, tetapi juga digunakan dalam berbagai ritual adat.",
    kalimat: {
      arab: "يَصِيحُ الدِّيكُ عِنْدَ الْفَجْر",
      indo: "Ayam jantan berkokok saat fajar.",
      rejang: "Ayam jantan kokok saat subuh."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "دَجَاجَةٌ",
    latin: "Dajajah",
    indo: "ayam betina",
    rejang: "ayam betina",
    gambar: "",
    budaya: "Ayam betina (ayam betina) dipelihara terutama untuk menghasilkan telur yang merupakan sumber protein penting dalam keluarga Rejang.",
    kalimat: {
      arab: "تَضَعُ الدَّجَاجَةُ الْبَيْضَة",
      indo: "Ayam betina bertelur.",
      rejang: "Ayam betina kelak teluk."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَطَّةٌ",
    latin: "Batthah",
    indo: "bebek",
    rejang: "bebek",
    gambar: "",
    budaya: "Bebek (bebek) dipelihara oleh sebagian masyarakat Rejang karena tahan terhadap penyakit dan menghasilkan daging yang lezat.",
    kalimat: {
      arab: "تَسْبَحُ الْبَطَّةُ فِي الْبِركَة",
      indo: "Bebek berenang di kolam.",
      rejang: "Bebek berenang di kolam."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "قَطَّةٌ",
    latin: "Qattah",
    indo: "kucing",
    rejang: "kucing",
    gambar: "",
    budaya: "Kucing (kucing) hidup bersama manusia di rumah-rumah Rejang untuk menangkap tikus dan hewan pengerat lainnya yang mengganggu hasil panen.",
    kalimat: {
      arab: "تَصْطَادُ الْقَطَّةُ الْفِئْرَان",
      indo: "Kucing menangkap tikus.",
      rejang: "Kucing tangkap tikus."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "كَلْبٌ",
    latin: "Kalb",
    indo: "anjing",
    rejang: "asu",
    gambar: "",
    budaya: "Anjing (asu) dipelihara sebagai hewan peliharaan dan pembantu dalam berburu. Anjing sangat setia dan membantu melindungi kampung dari ancaman.",
    kalimat: {
      arab: "يُحِبُّ الطِّفْلُ كَلْبَهُ كَثِيرًا",
      indo: "Anak sangat menyukai anjingnya.",
      rejang: "Anok nyapu asu kamenye kayaknya."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حِصَانٌ",
    latin: "Hisaan",
    indo: "kuda",
    rejang: "kuda",
    gambar: "",
    budaya: "Kuda (kuda) jarang ditemukan di Rejang karena iklim dan medan yang kurang cocok, tetapi beberapa masyarakat memeliharanya untuk mengangkut barang.",
    kalimat: {
      arab: "يَرْكَبُ الرَّجُلُ الْحِصَانَ إِلَى السُّوق",
      indo: "Pria menunggangi kuda ke pasar.",
      rejang: "Lelaki naik kuda ke pasar."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نَمْرٌ",
    latin: "Namr",
    indo: "harimau",
    rejang: "imeu",
    gambar: "",
    budaya: "Harimau (imeu) dalam tradisi Rejang adalah makhluk yang sakral dan ditakuti. Dalam cerita lama, harimau dianggap sebagai penjaga hutan dan memiliki hubungan mistis dengan leluhur.",
    kalimat: {
      arab: "الْنَّمِرُ مِنْ أَخْطَرِ الْحَيَوَانَات فِي الْغَابَة",
      indo: "Harimau adalah salah satu hewan paling berbahaya di hutan.",
      rejang: "Imeu adalah hewan yang paling menakutkan di imbo."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "فِيلٌ",
    latin: "Fiil",
    indo: "gajah",
    rejang: "gajah",
    gambar: "",
    budaya: "Gajah (gajah) tidak hidup di wilayah Rejang secara alami, namun dalam cerita rakyat dan kepercayaan lama, gajah dianggap sebagai simbol kekuatan.",
    kalimat: {
      arab: "الْفِيلُ حَيَوَانٌ ضَخْمٌ وَقَوِيّ",
      indo: "Gajah adalah hewan yang besar dan kuat.",
      rejang: "Gajah adalah hewan yang beso dan kuat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَسَدٌ",
    latin: "Asad",
    indo: "singa",
    rejang: "singa",
    gambar: "",
    budaya: "Singa (singa) tidak hidup di Rejang tetapi sering disebutkan dalam cerita rakyat sebagai lambang keberanian dan kekuatan.",
    kalimat: {
      arab: "الأَسَدُ مَلِكُ الْوُحُوش",
      indo: "Singa adalah raja binatang buas.",
      rejang: "Singa adalah raja hewan.",
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نَخْلَةٌ",
    latin: "Nakhlah",
    indo: "pohon kelapa",
    rejang: "kelapa",
    gambar: "",
    budaya: "Pohon kelapa (kelapa) adalah tanaman penting bagi masyarakat Rejang. Kelapa digunakan untuk berbagai keperluan mulai dari makanan hingga bahan bakar.",
    kalimat: {
      arab: "تَنْمُو نَخْلَةُ الْجَوْزِ بِسُرْعَةٍ",
      indo: "Pohon kelapa tumbuh dengan cepat.",
      rejang: "Pohon kelapa tumbu make cepat."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَرْزٌ",
    latin: "Aruzz",
    indo: "padi",
    rejang: "pai",
    gambar: "",
    budaya: "Padi (pai) adalah tanaman utama dalam kehidupan ekonomi dan budaya masyarakat Rejang. Padi ditanam dengan ritual adat dan menjadi pusat dari sistem pertanian tradisional.",
    kalimat: {
      arab: "يَزْرَعُ الْفَلَّاحُونَ الأَرُزَّ فِي الصَّيْف",
      indo: "Petani menanam padi di musim panas.",
      rejang: "Petani tanam pai di musim panas."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "شَاي",
    latin: "Syai",
    indo: "teh",
    rejang: "teh",
    gambar: "",
    budaya: "Teh (teh) menjadi bagian dari kehidupan sehari-hari masyarakat Rejang modern, meskipun minuman tradisional lain masih sering diminum.",
    kalimat: {
      arab: "تَشْرَبُ الأُسْرَةُ الشَّايَ مَعًا",
      indo: "Keluarga minum teh bersama.",
      rejang: "Keluargo minum teh basamo."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "قَهْوَةٌ",
    latin: "Qahwah",
    indo: "kopi",
    rejang: "kopi",
    gambar: "",
    budaya: "Kopi (kopi) ditanam oleh beberapa petani Rejang sebagai tanaman perkebunan yang menguntungkan. Kopi Rejang mulai dikenal memiliki rasa yang khas.",
    kalimat: {
      arab: "يَشْرَبُ الرَّجُلُ الْقَهْوَةَ فِي الصَّبَاح",
      indo: "Pria minum kopi di pagi hari.",
      rejang: "Lelaki minum kopi di pagi hari."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "عَسَلٌ",
    latin: "'Asal",
    indo: "madu",
    rejang: "madu",
    gambar: "",
    budaya: "Madu (madu) dari hutan Rejang sangat dikenal karena kualitasnya yang baik. Madu sialang (dari pohon-pohon besar di hutan) dipanen dengan ritual dan adat khusus.",
    kalimat: {
      arab: "الْعَسَلُ حُلْوٌ وَمُفِيدٌ لِلصِّحَّة",
      indo: "Madu manis dan bermanfaat untuk kesehatan.",
      rejang: "Madu manis dan gunakan untuk kesehatan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "سُكَّرٌ",
    latin: "Sukkar",
    indo: "gula",
    rejang: "gulo",
    gambar: "",
    budaya: "Gula (gulo) tradisional Rejang dibuat dari nira pohon aren yang dimasak hingga mengental. Gula merah tradisional ini masih diproduksi oleh beberapa pengrajin lokal.",
    kalimat: {
      arab: "يُحِبُّ الأَطْفَالُ الْحَلْوَيَات الْمَصْنُوعَة مِنَ السُّكَّر",
      indo: "Anak-anak menyukai permen yang terbuat dari gula.",
      rejang: "Anok-anok nyapu makanan manis dari gulo."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَرْزَّ مَطْهِوّ",
    latin: "Aruzz Mathhy",
    indo: "nasi",
    rejang: "pai masak",
    gambar: "",
    budaya: "Nasi (pai masak) adalah makanan pokok yang dimakan oleh seluruh masyarakat Rejang setiap hari. Nasi dimasak dengan berbagai cara dan disajikan dengan lauk-pauk tradisional.",
    kalimat: {
      arab: "نَأْكُلُ الأَرُزَّ الْمَطْهُوَّ كُلَّ يَوْمٍ",
      indo: "Kami makan nasi setiap hari.",
      rejang: "Kito makan pai masak kutian."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "خُبْزٌ",
    latin: "Khubz",
    indo: "roti",
    rejang: "roti",
    gambar: "",
    budaya: "Roti (roti) semakin populer di kalangan masyarakat Rejang modern, terutama di kota-kota kecil. Namun, makanan tradisional masih lebih banyak dikonsumsi di daerah pedesaan.",
    kalimat: {
      arab: "تَأْكُلُ الأُسْرَةُ الْخُبْزَ عَلَى الْإِفْطَار",
      indo: "Keluarga makan roti untuk sarapan.",
      rejang: "Keluargo makan roti untuk sarapan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "لَحْمٌ",
    latin: "Lahm",
    indo: "daging",
    rejang: "daging",
    gambar: "",
    budaya: "Daging (daging) dalam budaya Rejang biasanya dimakan pada hari-hari penting seperti hari raya atau upacara adat. Daging biasanya berasal dari hewan ternak atau hasil buruan.",
    kalimat: {
      arab: "تَطْهُو الأُمُّ اللَّحْمَ الطَّرِيَّ",
      indo: "Ibu memasak daging segar.",
      rejang: "Indok masak daging sego."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَيْضَةٌ",
    latin: "Baydah",
    indo: "telur",
    rejang: "teluk",
    gambar: "",
    budaya: "Telur (teluk) adalah sumber protein yang mudah diperoleh dari ayam-ayam peliharaan di setiap rumah Rejang.",
    kalimat: {
      arab: "تَطْهُو الأُمُّ الْبَيْضَة لِلْإِفْطَار",
      indo: "Ibu memasak telur untuk sarapan.",
      rejang: "Indok masak teluk untuk sarapan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مِلْحٌ",
    latin: "Milh",
    indo: "garam",
    rejang: "garam",
    gambar: "",
    budaya: "Garam (garam) adalah bumbu penting dalam memasak tradisional Rejang. Garam laut atau garam halus digunakan untuk berbagai hidangan.",
    kalimat: {
      arab: "نَضَعُ الْمِلْحَ فِي الطَّعَامِ",
      indo: "Kami menambahkan garam dalam makanan.",
      rejang: "Kito tambahkan garam dalam makanan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "فِلْفِلٌ",
    latin: "Filfiil",
    indo: "cabai",
    rejang: "cabai",
    gambar: "",
    budaya: "Cabai (cabai) merupakan bumbu utama dalam masakan Rejang yang memberikan rasa pedas dan gurih. Cabai ditanam di halaman rumah atau di ladang.",
    kalimat: {
      arab: "يُضِيفُ الطَّبَّاخُ الْفِلْفِلَ إِلَى الطَّعَامِ",
      indo: "Koki menambahkan cabai ke dalam masakan.",
      rejang: "Tukang masak tambahkan cabai dalam makanan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "ثُومٌ",
    latin: "Tsum",
    indo: "bawang putih",
    rejang: "bawong putih",
    gambar: "",
    budaya: "Bawang putih (bawong putih) digunakan dalam berbagai masakan tradisional Rejang untuk menambah rasa dan aroma yang khas.",
    kalimat: {
      arab: "يَقْطَعُ الطَّبَّاخُ الثُّومَ إِلَى قِطَعٍ صَغِيرَة",
      indo: "Koki memotong bawang putih menjadi potongan kecil.",
      rejang: "Tukang masak potong bawong putih make kecil."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَصَلٌ",
    latin: "Basal",
    indo: "bawang merah",
    rejang: "bawong merah",
    gambar: "",
    budaya: "Bawang merah (bawong merah) adalah bahan wajib dalam masakan Rejang yang digunakan untuk berbagai hidangan.",
    kalimat: {
      arab: "تُقَلِّي الأُمُّ الْبَصَلَ فِي الزَّيْتِ",
      indo: "Ibu menggoreng bawang merah dalam minyak.",
      rejang: "Indok goreng bawong merah dalam minyak."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "زَيْتٌ",
    latin: "Zayt",
    indo: "minyak",
    rejang: "minyak",
    gambar: "",
    budaya: "Minyak (minyak) baik minyak kelapa maupun minyak lainnya digunakan dalam proses memasak tradisional masyarakat Rejang.",
    kalimat: {
      arab: "تَضَعُ الأُمُّ الزَّيْتَ فِي الْمِقْلَاة",
      indo: "Ibu menuangkan minyak ke dalam penggorengan.",
      rejang: "Indok tuang minyak dalam wajan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "سَمْنٌ",
    latin: "Samn",
    indo: "ghee/minyak sapi",
    rejang: "minyak sapi",
    gambar: "",
    budaya: "Ghee atau minyak sapi (minyak sapi) tradisional dibuat dari mentega yang dipanaskan sampai cairnya terpisah dari padatan.",
    kalimat: {
      arab: "يُسْتَخْدَمُ السَّمْنُ فِي الطَّبْخِ",
      indo: "Ghee digunakan dalam memasak.",
      rejang: "Minyak sapi gunakan dalam masak."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "خَلٌّ",
    latin: "Khall",
    indo: "cuka",
    rejang: "asam",
    gambar: "",
    budaya: "Cuka atau asam (asam) tradisional dibuat dari nira atau bahan-bahan alami lainnya dan digunakan dalam berbagai masakan.",
    kalimat: {
      arab: "نَضَعُ الْخَلَّ فِي السَّلَطَة",
      indo: "Kami menambahkan cuka dalam salad.",
      rejang: "Kito tambahkan asam dalam salad."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "نَوْمَةٌ",
    latin: "Nawmah",
    indo: "tidur",
    rejang: "tido",
    gambar: "",
    budaya: "Tidur (tido) dalam budaya Rejang sangat dihormati sebagai waktu istirahat yang penting. Waktu tidur di malam hari dianggap sebagai saat yang tenang dan spiritual.",
    kalimat: {
      arab: "يَنَامُ الطِّفْلُ بِسِلَامٍ",
      indo: "Anak tidur dengan damai.",
      rejang: "Anok tido make aman."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حُلْمٌ",
    latin: "Hulm",
    indo: "mimpi",
    rejang: "mimpi",
    gambar: "",
    budaya: "Mimpi (mimpi) dalam kepercayaan tradisional Rejang sering dianggap memiliki makna atau pesan tertentu dari leluhur atau alam spiritual.",
    kalimat: {
      arab: "حَكَىٰ الطِّفْلُ حُلْمَهُ الْجَمِيلَ",
      indo: "Anak menceritakan mimpi indahnya.",
      rejang: "Anok cerite mimpi indah kamenye."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "حُمَّىٰ",
    latin: "Hummaa",
    indo: "demam",
    rejang: "panas",
    gambar: "",
    budaya: "Demam atau panas (panas) dalam pengobatan tradisional Rejang diobati dengan berbagai ramuan herbal yang disiapkan oleh dukun atau orang tua.",
    kalimat: {
      arab: "أَصِيبَ الطِّفْلُ بِالْحُمَّىٰ",
      indo: "Anak terkena demam.",
      rejang: "Anok kena panas."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "مَرَضٌ",
    latin: "Maradh",
    indo: "penyakit",
    rejang: "penyakit",
    gambar: "",
    budaya: "Penyakit (penyakit) dalam pandangan tradisional Rejang sering dianggap disebabkan oleh ketidakseimbangan spiritual atau kesalahan dalam mengikuti adat.",
    kalimat: {
      arab: "يُعَالِجُ الدُّكَانُ الْمَرَضَ",
      indo: "Dukun mengobati penyakit.",
      rejang: "Dukun obati penyakit."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "جِسْمٌ",
    latin: "Jism",
    indo: "tubuh",
    rejang: "badan",
    gambar: "",
    budaya: "Tubuh atau badan (badan) dalam budaya Rejang dianggap sebagai candi yang suci yang harus dijaga kebersihan dan kesehatannya.",
    kalimat: {
      arab: "يَسْتَحِمُّ الطِّفْلُ لِتَنْظِيفِ جِسْمِهِ",
      indo: "Anak mandi untuk membersihkan tubuhnya.",
      rejang: "Anok mandi untuk bersihkan badan kamenye."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "قَلْبٌ",
    latin: "Qalb",
    indo: "hati",
    rejang: "hati",
    gambar: "",
    budaya: "Hati (hati) dalam budaya Rejang dianggap sebagai pusat perasaan dan kehendak. Kebaikan hati sangat dihargai dalam masyarakat.",
    kalimat: {
      arab: "قَلْبُهُ طَيِّبٌ",
      indo: "Hatinya baik.",
      rejang: "Hati kamenye baik."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "عَقْلٌ",
    latin: "'Aql",
    indo: "akal",
    rejang: "akal",
    gambar: "",
    budaya: "Akal (akal) dalam budaya Rejang sangat dihormati sebagai kemampuan untuk berpikir dan membuat keputusan yang bijak.",
    kalimat: {
      arab: "يَسْتَخْدِمُ الْحِكِيمُ عَقْلَهُ",
      indo: "Orang bijak menggunakan akalnya.",
      rejang: "Orang bijak gunakan akal kamenye."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "عَيْنٌ",
    latin: "'Ayn",
    indo: "mata",
    rejang: "mata",
    gambar: "",
    budaya: "Mata (mata) dalam budaya Rejang adalah jendela hati dan jiwa. Pandangan seseorang mencerminkan karakter dan ketulusannya.",
    kalimat: {
      arab: "نَظَرَ بِعَيْنَيْهِ بِحُب",
      indo: "Dia melihat dengan mata yang penuh kasih sayang.",
      rejang: "Kamenye tengok make mata yang penuh kasih."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أُذُنٌ",
    latin: "Uzun",
    indo: "telinga",
    rejang: "telinga",
    gambar: "",
    budaya: "Telinga (telinga) dalam budaya Rejang dianggap sebagai media mendengarkan nasihat dan ajaran dari orang tua dan pemimpin adat.",
    kalimat: {
      arab: "اسْمَعْ بِأُذُنِكَ جَيِّدًا",
      indo: "Dengarkan dengan telinga yang baik.",
      rejang: "Dengar make telinga yang baik."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "أَنْفٌ",
    latin: "Anf",
    indo: "hidung",
    rejang: "hidung",
    gambar: "",
    budaya: "Hidung (hidung) dalam bahasa Rejang memiliki berbagai makna metaforis yang berkaitan dengan harga diri dan kehormatan.",
    kalimat: {
      arab: "يَشُمُّ رَائِحَةَ الطَّعَامِ",
      indo: "Dia mencium aroma makanan.",
      rejang: "Kamenye cium bau makanan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "فَمٌ",
    latin: "Fam",
    indo: "mulut",
    rejang: "mulut",
    gambar: "",
    budaya: "Mulut (mulut) dalam adat Rejang sangat diperhatikan karena kata-kata yang keluar dari mulut mencerminkan jiwa dan pikiran seseorang.",
    kalimat: {
      arab: "تَحَدَّثَ بِفَمِهِ",
      indo: "Dia berbicara dengan mulutnya.",
      rejang: "Kamenye kece' make mulut."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "سِنٌّ",
    latin: "Sinn",
    indo: "gigi",
    rejang: "gigi",
    gambar: "",
    budaya: "Gigi (gigi) dalam budaya Rejang dirawat dengan berbagai cara tradisional. Perawatan gigi bahkan menjadi bagian dari ritual adat tertentu.",
    kalimat: {
      arab: "يَنْظِفُ أَسْنَانَهُ كُلَّ يَوْمٍ",
      indo: "Dia membersihkan giginya setiap hari.",
      rejang: "Kamenye bersihkan gigi kutian."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "لِسَانٌ",
    latin: "Lisaan",
    indo: "lidah",
    rejang: "lidah",
    gambar: "",
    budaya: "Lidah (lidah) dalam budaya Rejang melambangkan kemampuan berbicara dan berkomunikasi. Lidah yang budi bahasa sangat dihargai.",
    kalimat: {
      arab: "تَذَوَّقَ بِلِسَانِهِ",
      indo: "Dia merasakan dengan lidahnya.",
      rejang: "Kamenye raso make lidah."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "رَأْسٌ",
    latin: "Ra's",
    indo: "kepala",
    rejang: "kepala",
    gambar: "",
    budaya: "Kepala (kepala) dalam budaya Rejang dianggap sebagai bagian yang paling mulia dari tubuh. Kepala diperlakukan dengan hormat dalam berbagai ritual.",
    kalimat: {
      arab: "يَرْفَعُ رَأْسَهُ بِفَخْرٍ",
      indo: "Dia mengangkat kepalanya dengan bangga.",
      rejang: "Kamenye angkat kepala make bangga."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "شَعْرٌ",
    latin: "Sha'r",
    indo: "rambut",
    rejang: "rambut",
    gambar: "",
    budaya: "Rambut (rambut) dalam budaya Rejang diperlakukan dengan khusus. Memotong rambut anak pertama kali sering disertai dengan ritual adat.",
    kalimat: {
      arab: "تَنْسِجُ الْأُمُّ شَعْرَ بِنْتِهَا",
      indo: "Ibu mengepang rambut anak perempuannya.",
      rejang: "Indok mengepang rambut anak perempuan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "وَجْهٌ",
    latin: "Wajh",
    indo: "wajah",
    rejang: "moko",
    gambar: "",
    budaya: "Wajah atau muka (moko) dalam budaya Rejang mencerminkan kepribadian dan karakter seseorang. Ekspresi wajah yang baik menunjukkan kesejahteraan dan kebahagiaan.",
    kalimat: {
      arab: "وَجْهُهُ مُشْرِقٌ",
      indo: "Wajahnya bersinar.",
      rejang: "Moko kamenye bersinar."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "يَدٌ",
    latin: "Yad",
    indo: "tangan",
    rejang: "tangan",
    gambar: "",
    budaya: "Tangan (tangan) dalam budaya Rejang digunakan untuk bekerja keras dan saling membantu. Tangan yang bekerja dianggap sebagai tanda kemurahan hati.",
    kalimat: {
      arab: "يَعْمَلُ بِيَدَيْهِ",
      indo: "Dia bekerja dengan tangannya.",
      rejang: "Kamenye kuleo make tangan."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "إِصْبِعٌ",
    latin: "Ishbi'",
    indo: "jari",
    rejang: "jemari",
    gambar: "",
    budaya: "Jari atau jemari (jemari) dalam budaya Rejang memiliki makna khusus dalam berbagai ritual dan cara berkomunikasi melalui gerakan.",
    kalimat: {
      arab: "أَشَارَ بِإِصْبِعِهِ",
      indo: "Dia menunjuk dengan jarinya.",
      rejang: "Kamenye tunjuk make jemari."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "ظَهْرٌ",
    latin: "Zahr",
    indo: "punggung",
    rejang: "punggung",
    gambar: "",
    budaya: "Punggung (punggung) dalam budaya Rejang melambangkan kekuatan dan tanggung jawab untuk membawa beban keluarga atau masyarakat.",
    kalimat: {
      arab: "حَمَلَ الْحِمْلَ عَلَى ظَهْرِهِ",
      indo: "Dia memikul beban di punggungnya.",
      rejang: "Kamenye pikul beban di punggung."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "صَدْرٌ",
    latin: "Shadr",
    indo: "dada",
    rejang: "dada",
    gambar: "",
    budaya: "Dada (dada) dalam budaya Rejang melambangkan keberanian dan keteguhan hati dalam menghadapi kesulitan.",
    kalimat: {
      arab: "نَفَخَ صَدْرَهُ بِكِبْرِيَاءٍ",
      indo: "Dia menyombongkan dadanya dengan bangga.",
      rejang: "Kamenye sombong dada make bangga."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "بَطْنٌ",
    latin: "Batn",
    indo: "perut",
    rejang: "perut",
    gambar: "",
    budaya: "Perut (perut) dalam bahasa Rejang sering digunakan secara metaforis untuk merujuk pada kerakusan atau keserakahan.",
    kalimat: {
      arab: "جَاعَ فَأَكَلَ حَتَّىٰ امْتَلأَ بَطْنُهُ",
      indo: "Dia lapar lalu makan sampai perutnya penuh.",
      rejang: "Kamenye lapok terus makan sampai perut peno."
    }
  },
  {
    kat: "Kearifan Lokal",
    arab: "رِجْلٌ",
    latin: "Rijl",
    indo: "kaki",
    rejang: "kaki",
    gambar: "",
    budaya: "Kaki (kaki) dalam budaya Rejang adalah alat untuk berjalan dan bekerja. Kaki yang kuat menunjukkan kesehatan dan keaktifan.",
    kalimat: {
      arab: "يَجْرِي بِرِجْلَيْهِ",
      indo: "Dia berlari dengan kakinya.",
      rejang: "Kamenye lari make kaki."
    }
  },
  {
    kat: "Bahasa",
    arab: "سَتَّةٌ",
    latin: "Sittah",
    indo: "angka enam",
    rejang: "anam",
    gambar: "",
    budaya: "Angka enam (anam) dalam sistem bilangan bahasa Rejang adalah bagian dari pembelajaran dasar aritmetika.",
    kalimat: {
      arab: "سِتَّةُ أَيَّامٍ",
      indo: "Enam hari.",
      rejang: "Anam hari."
    }
  },
  {
    kat: "Bahasa",
    arab: "سَبْعَةٌ",
    latin: "Sab'ah",
    indo: "angka tujuh",
    rejang: "tujuh",
    gambar: "",
    budaya: "Angka tujuh (tujuh) dalam budaya Rejang memiliki makna spiritual yang berkaitan dengan tujuh lapis langit dan bumi.",
    kalimat: {
      arab: "سَبْعَةُ أَيَّامٍ فِي الأُسْبُوعِ",
      indo: "Tujuh hari dalam seminggu.",
      rejang: "Tujuh hari dalam sepekan."
    }
  },
  {
    kat: "Bahasa",
    arab: "ثَمَانِيَةٌ",
    latin: "Tsomaniyah",
    indo: "angka delapan",
    rejang: "delapan",
    gambar: "",
    budaya: "Angka delapan (delapan) dalam sistem bilangan bahasa Rejang terus digunakan dalam kehidupan sehari-hari.",
    kalimat: {
      arab: "ثَمَانِيَةُ طُلَّابٍ",
      indo: "Delapan murid.",
      rejang: "Delapan murik."
    }
  },
  {
    kat: "Bahasa",
    arab: "تِسْعَةٌ",
    latin: "Tis'ah",
    indo: "angka sembilan",
    rejang: "sembilan",
    gambar: "",
    budaya: "Angka sembilan (sembilan) dalam budaya Rejang sering diasosiasikan dengan kesempurnaan karena berbagai makna simbolis.",
    kalimat: {
      arab: "تِسْعَةُ أَشْهُرٍ",
      indo: "Sembilan bulan.",
      rejang: "Sembilan bulan."
    }
  },
  {
    kat: "Bahasa",
    arab: "عَشْرَةٌ",
    latin: "'Ashrah",
    indo: "angka sepuluh",
    rejang: "sepuluh",
    gambar: "",
    budaya: "Angka sepuluh (sepuluh) adalah angka bulat yang sering digunakan dalam berbagai hitungan tradisional masyarakat Rejang.",
    kalimat: {
      arab: "عَشْرَةُ أَصَابِعَ",
      indo: "Sepuluh jari.",
      rejang: "Sepuluh jemari."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "رِحْلَةٌ",
    latin: "Rihlah",
    indo: "perjalanan",
    rejang: "perjalanan",
    gambar: "",
    budaya: "Perjalanan (perjalanan) dalam budaya Rejang sering dilakukan untuk mengunjungi keluarga jauh atau untuk urusan dagang. Perjalanan panjang biasanya dilakukan dengan persiapan ritual adat.",
    kalimat: {
      arab: "بَدَأَ الرِّحْلَةَ صَبَاحًا",
      indo: "Dia memulai perjalanan pagi hari.",
      rejang: "Kamenye mulai perjalanan pagi."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "قَبِيلَةٌ",
    latin: "Qabiilah",
    indo: "suku/marga",
    rejang: "margo",
    gambar: "",
    budaya: "Suku atau marga (margo) adalah unit sosial terpenting dalam organisasi masyarakat Rejang. Setiap marga memiliki garis keturunan, tanah, dan adat tersendiri.",
    kalimat: {
      arab: "يَنْتَمِي إِلَى قَبِيلَةِ مُعَيَّنَة",
      indo: "Dia termasuk dalam marga tertentu.",
      rejang: "Kamenye termasuk dalam margo tertentu."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "أَشْيَاخٌ",
    latin: "Ashaykh",
    indo: "sesepuh/pemimpin adat",
    rejang: "pemimpin adat",
    gambar: "",
    budaya: "Sesepuh atau pemimpin adat (pemimpin adat) dalam masyarakat Rejang adalah orang-orang yang ditunjuk atau dihormati karena kebijaksanaan dan pengetahuan tentang adat.",
    kalimat: {
      arab: "اجْتَمَعَ الأَشْيَاخُ لِمُنَاقَشَةِ الْمَسَائِلِ",
      indo: "Para sesepuh berkumpul untuk membahas masalah.",
      rejang: "Para pemimpin kumpul untuk bicarang masalah."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "ضَيْفٌ",
    latin: "Dhayf",
    indo: "tamu",
    rejang: "rung tamu",
    gambar: "",
    budaya: "Tamu (rung tamu) dalam budaya Rejang sangat dihormati dan diperlakukan dengan baik. Menyambut tamu dengan murah hati adalah nilai penting dalam adat Rejang.",
    kalimat: {
      arab: "اسْتَقْبَلُوا الضَّيْفَ بِحَفَاوَة",
      indo: "Mereka menyambut tamu dengan hangat.",
      rejang: "Mereka sambut rung tamu make hangat."
    }
  },
  {
    kat: "Adat-Istiadat",
    arab: "مَنْزِلٌ",
    latin: "Manzil",
    indo: "perkampungan",
    rejang: "perkampungan",
    gambar: "",
    budaya: "Perkampungan (perkampungan) dalam budaya Rejang adalah wilayah tempat tinggal dari satu marga atau kelompok keluarga yang saling mengenal dan saling membantu.",
    kalimat: {
      arab: "يَسْكُنُ فِي مَنْزِلٍ جَمِيلٍ",
      indo: "Dia tinggal di perkampungan yang indah.",
      rejang: "Kamenye tudo di perkampungan yang indah."
    }
  }
];

console.log(`=== DATABASE KOSAKATA LENGKAP 268 ENTRI ===`);
console.log(`Total entri: ${kosakata.length}`);
const stats = {
  Bahasa: kosakata.filter(k => k.kat === "Bahasa").length,
  Kesenian: kosakata.filter(k => k.kat === "Kesenian").length,
  "Adat-Istiadat": kosakata.filter(k => k.kat === "Adat-Istiadat").length,
  "Kearifan Lokal": kosakata.filter(k => k.kat === "Kearifan Lokal").length
};
console.log(`Per kategori:`, stats);

console.log(`=== DATABASE KOSAKATA LENGKAP ===`);
console.log(`Total entri: ${kosakata.length}`);
const stats = {
  Bahasa: kosakata.filter(k => k.kat === "Bahasa").length,
  Kesenian: kosakata.filter(k => k.kat === "Kesenian").length,
  "Adat-Istiadat": kosakata.filter(k => k.kat === "Adat-Istiadat").length,
  "Kearifan Lokal": kosakata.filter(k => k.kat === "Kearifan Lokal").length
};
console.log(`Per kategori:`, stats);
