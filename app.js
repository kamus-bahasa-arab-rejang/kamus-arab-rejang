// ============================================================
// KONFIGURASI
// ============================================================
const KATEGORI_LIST = [
  { nama: "Bahasa", kelas: "cat-bahasa" },
  { nama: "Kesenian", kelas: "cat-kesenian" },
  { nama: "Adat-Istiadat", kelas: "cat-adat-istiadat" },
  { nama: "Kearifan Lokal", kelas: "cat-kearifan-lokal" }
];

const JUMLAH_PER_HALAMAN = 8;   // batasi kartu yang dirender sekaligus
const GAMBAR_FALLBACK = "assets/images/placeholder.svg"; // gambar default jika foto asli belum ada

// ============================================================
// STATE
// ============================================================
let hasilSaatIni = [];
let jumlahDitampilkan = 0;
let dataKosakata = (typeof kosakata !== "undefined") ? kosakata : [];

// ============================================================
// ELEMEN DOM
// ============================================================
const el = {
  searchInput: document.getElementById("searchInput"),
  clearSearch: document.getElementById("clearSearch"),
  greetingBox: document.getElementById("greetingBox"),
  categoryGrid: document.getElementById("categoryGrid"),
  resultsSection: document.getElementById("resultsSection"),
  cardGrid: document.getElementById("cardGrid"),
  resultCount: document.getElementById("resultCount"),
  backBtn: document.getElementById("backBtn"),
  emptyState: document.getElementById("emptyState"),
  loadMoreBtn: document.getElementById("loadMoreBtn"),
  searchSection: document.querySelector(".krj-search-section")
};

// ============================================================
// RENDER TOMBOL KATEGORI (di beranda)
// ============================================================
function renderKategori() {
  el.categoryGrid.innerHTML = KATEGORI_LIST.map(k => {
    const jumlah = dataKosakata.filter(d => d.kat === k.nama).length;
    return `
      <button class="krj-cat-card ${k.kelas}" data-kategori="${k.nama}">
        <span class="nama">${k.nama}</span>
        <span class="jumlah">${jumlah} kosakata</span>
      </button>
    `;
  }).join("");

  el.categoryGrid.querySelectorAll(".krj-cat-card").forEach(btn => {
    btn.addEventListener("click", () => {
      const kategori = btn.dataset.kategori;
      tampilkanHasil(dataKosakata.filter(d => d.kat === kategori), `Kategori: ${kategori}`);
    });
  });
}

// ============================================================
// PENCARIAN (dengan sedikit jeda / debounce)
// ============================================================
let debounceTimer;
el.searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  const kataKunci = el.searchInput.value.trim();
  el.clearSearch.hidden = kataKunci.length === 0;

  if (kataKunci.length === 0) {
    kembaliKeBeranda();
    return;
  }

  debounceTimer = setTimeout(() => {
    const hasil = dataKosakata.filter(d =>
      d.arab.includes(kataKunci) ||
      d.indo.toLowerCase().includes(kataKunci.toLowerCase()) ||
      d.rejang.toLowerCase().includes(kataKunci.toLowerCase()) ||
      d.latin.toLowerCase().includes(kataKunci.toLowerCase())
    );
    tampilkanHasil(hasil, `Hasil pencarian "${kataKunci}"`);
  }, 250);
});

el.clearSearch.addEventListener("click", () => {
  el.searchInput.value = "";
  el.clearSearch.hidden = true;
  kembaliKeBeranda();
});

// ============================================================
// TOMBOL KEMBALI
// ============================================================
el.backBtn.addEventListener("click", kembaliKeBeranda);

function kembaliKeBeranda() {
  el.resultsSection.hidden = true;
  el.searchSection.hidden = false;
  el.searchInput.value = "";
  el.clearSearch.hidden = true;
}

// ============================================================
// TAMPILKAN HASIL (dipanggil dari pencarian ATAU klik kategori)
// ============================================================
function tampilkanHasil(hasil, labelJudul) {
  hasilSaatIni = hasil;
  jumlahDitampilkan = 0;

  el.searchSection.hidden = true;
  el.resultsSection.hidden = false;

  el.emptyState.hidden = hasil.length > 0;
  el.cardGrid.innerHTML = "";
  el.loadMoreBtn.hidden = true;

  if (hasil.length === 0) return;

  renderTambahanKartu();
}

function renderTambahanKartu() {
  const batasAkhir = Math.min(jumlahDitampilkan + JUMLAH_PER_HALAMAN, hasilSaatIni.length);
  const bagian = hasilSaatIni.slice(jumlahDitampilkan, batasAkhir);

  el.cardGrid.insertAdjacentHTML("beforeend", bagian.map(buatKartuHTML).join(""));
  jumlahDitampilkan = batasAkhir;

  el.resultCount.textContent = `Menampilkan ${jumlahDitampilkan} dari ${hasilSaatIni.length} kosakata`;
  el.loadMoreBtn.hidden = jumlahDitampilkan >= hasilSaatIni.length;
}

el.loadMoreBtn.addEventListener("click", renderTambahanKartu);

// ============================================================
// TEMPLATE KARTU KOSAKATA
// ============================================================
function buatKartuHTML(item) {
  const gambarSrc = item.gambar && item.gambar.trim() !== "" ? item.gambar : GAMBAR_FALLBACK;
  const adaKalimatRejang = item.kalimat && item.kalimat.rejang && item.kalimat.rejang.trim() !== "";

  return `
    <div class="krj-vcard">
      <div class="krj-vcard-img">
        <span class="krj-vcard-cat">${item.kat}</span>
        <img src="${gambarSrc}" alt="${item.indo}"
             onerror="this.onerror=null; this.src='${GAMBAR_FALLBACK}';">
      </div>
      <div class="krj-vcard-body">

        <div class="krj-word-row">
          <div class="krj-word-lang">
            <div class="krj-lang-line"><span class="krj-lang-code id">ID</span> ${item.indo}</div>
            <div class="krj-lang-line"><span class="krj-lang-code rj">RJ</span> ${item.rejang}</div>
          </div>
          <div class="krj-word-arab-block">
            <div class="krj-lang-line krj-lang-line-right"><span class="krj-lang-code ar">AR</span></div>
            <div class="krj-arab">${item.arab}</div>
            ${item.latin ? `<div class="krj-word-translit">${item.latin}</div>` : ""}
          </div>
        </div>

        ${item.kalimat ? `
        <div class="krj-contoh-label">Contoh Kalimat</div>

        <div class="krj-kalimat-line">
          <span class="krj-lang-code ar">AR</span>
          <div class="krj-kalimat-txt">
            <div class="krj-contoh-arab">${item.kalimat.arab}</div>
            ${item.kalimat.latin ? `<div class="krj-contoh-translit">${item.kalimat.latin}</div>` : ""}
          </div>
        </div>

        ${adaKalimatRejang ? `
        <div class="krj-kalimat-line">
          <span class="krj-lang-code rj">RJ</span>
          <div class="krj-kalimat-txt">${item.kalimat.rejang}</div>
        </div>
        ` : ""}

        <div class="krj-kalimat-line">
          <span class="krj-lang-code id">ID</span>
          <div class="krj-kalimat-txt">${item.kalimat.indo}</div>
        </div>
        ` : ""}

        ${item.budaya ? `
        <div class="krj-budaya-label">Tahukah Kamu?</div>
        <div class="krj-budaya-box">${item.budaya}</div>
        ` : ""}
      </div>
    </div>
  `;
}

// ============================================================
// INISIALISASI
// ============================================================
renderKategori();
