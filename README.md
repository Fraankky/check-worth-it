# check-worth-it — Dokumentasi Proyek

Deskripsi singkat  
AI-powered marketplace price tracking and product decision assistant — sistem yang melacak harga produk di marketplace, menyimpan histori harga, dan memberikan rekomendasi/pembantu keputusan berbasis AI untuk membantu pengguna memutuskan apakah suatu produk "worth it" untuk dibeli.

---

Daftar Isi
- [Gambaran Umum](#gambaran-umum)
- [Arsitektur & Aliran Data](#arsitektur--aliran-data)
- [Struktur Repositori](#struktur-repositori)
- [Modul & Komponen (Detail)](#modul--komponen-detail)
  - [apps/web (Frontend)](#appsweb-frontend)
  - [apps/scraper-api (Scraper & API)](#appsscraper-api-scraper--api)
  - [packages/db (Prisma & DB)](#packagesdb-prisma--db)
- [Model Data (Entitas Utama)](#model-data-entitas-utama)
- [Logika AI / Decision Assistant](#logika-ai--decision-assistant)
- [Integrasi Marketplace & Scraping Strategy](#integrasi-marketplace--scraping-strategy)
- [Konfigurasi & Setup Lokal](#konfigurasi--setup-lokal)
- [Build / Lint / Test & Perintah Berguna](#build--lint--test--perintah-berguna)
- [Deployment & Docker Compose](#deployment--docker-compose)
- [Keamanan & Rahasia Lingkungan](#keamanan--rahasia-lingkungan)
- [Troubleshooting Umum](#troubleshooting-umum)
- [Panduan Kontribusi](#panduan-kontribusi)
- [Roadmap & Ide Fitur Berikutnya](#roadmap--ide-fitur-berikutnya)
- [Kontak & Lisensi](#kontak--lisensi)

---

Gambaran Umum
- Tujuan: Mempermudah pengguna melacak perubahan harga produk di berbagai marketplace dan memberikan rekomendasi pembelian berdasarkan histori harga, tren, dan analisis AI.
- Pengguna utama: pemburu diskon, pembeli yang ingin mendapatkan harga terbaik, tim analitik produk.
- Komponen inti: scraper yang mengambil data harga, API yang menyimpan dan mengekspose data, frontend yang menampilkan data & asisten AI.

---

Arsitektur & Aliran Data
1. Scraper (apps/scraper-api) mengambil halaman produk dari marketplace (per schedule / request).
2. Scraper mem-parse harga, judul, stok, dan metadata lain → mengirimkannya ke database (packages/db) melalui Prisma.
3. Backend API menyajikan endpoint untuk frontend, webhooks, atau konsumsi pihak ketiga.
4. Frontend (apps/web) menampilkan produk, grafik histori harga, peringatan, dan panel keputusan (AI assistant).
5. Decision assistant mengirimkan prompt & data histori ke model AI (lokal/3rd-party) lalu mengembalikan analisis/rekomendasi.
6. Notifikasi / alerts: pengguna bisa set watchlist / triggers — backend mengecek dan mengirim notifikasi (email / push).

Diagram ringkas (tekstual)
- Scraper -> Database (Prisma) <- Backend API -> Frontend
- Frontend -> Backend -> AI Service (rekues & respon)
- Scheduler (cron/worker) -> Scraper

---

Struktur Repositori
- apps/
  - web/ — Next.js 16 (App Router), frontend React + TypeScript + Tailwind
  - scraper-api/ — FastAPI (Python) yang menjalankan scraper API dan endpoint
- packages/
  - db/ — Prisma schema, migration scripts, shared types & Prisma client
- docker-compose.yml — orkestrasi lokal (DB, mungkin Redis, layanan lainnya)
- README / docs / scripts — konfigurasi dan utilitas

(Perhatikan: struktur di atas sesuai konvensi monorepo yang disebutkan.)

---

Modul & Komponen (Detail)

apps/web (Frontend)
- Teknologi: Next.js 16 (App Router), React 19, TypeScript (strict), Tailwind CSS
- Tujuan: UI untuk melihat produk, histori harga, notifikasi, dan AI decision assistant.
- Halaman / Routes utama (saran/konvensi):
  - / — Dashboard ringkas: watchlist & perubahan harga terbaru
  - /products — daftar produk yang ter-tracking
  - /product/[id] — detail produk, grafik histori harga, tombol "Track / Untrack"
  - /watchlist — daftar produk yang dipantau pengguna
  - /settings — konfigurasi akun & notifikasi
  - /assistant — UI untuk request decision/summary dari AI
- Komponen penting:
  - ProductCard — ringkasan produk (nama, harga terkini, perubahan %)
  - PriceChart — grafik histori harga (mis. menggunakan chart library)
  - WatchToggle — tambah/hapus watchlist
  - AssistantPanel — input untuk AI prompt + hasil rekomendasi
- State management:
  - Rekomendasi: gunakan react-query / SWR untuk fetch & caching
  - Local UI state: useState / useReducer
- Styling:
  - Tailwind CSS; dark mode diaktifkan
- Tips pengembangan:
  - Gunakan absolute imports `@/` untuk path internal
  - Strict typing: semua props & API responses diberi interface/tipe
- Env variables (contoh):
  - NEXT_PUBLIC_API_URL=http://localhost:8000
  - NEXTAUTH_URL=... (jika memakai NextAuth)
- Dev:
  - Jalankan: pnpm dev:web (peta: Next.js di port 3000)

apps/scraper-api (Scraper & API)
- Teknologi: FastAPI (Python), Scraping code (requests/HTTP client), Celery/async workers (opsional), database via Prisma client (diakses via packages/db atau langsung pakai SQLAlchemy jika diperlukan)
- Tujuan: menyediakan API untuk frontend, melakukan scraping marketplace, menyimpan data histori harga
- Endpoint contoh (disarankan pola REST):
  - GET /health
  - POST /scrape/url — enqueue URL untuk scraping
  - POST /products — tambah produk secara manual
  - GET /products — daftar produk
  - GET /products/{id} — detail produk + histori harga
  - GET /markets — daftar marketplace yang didukung
  - POST /webhook/price-change — (opsional) webhook untuk notifikasi eksternal
- Scraping strategy:
  - Scheduler/worker: jalankan job terjadwal (cron atau worker queue)
  - Rate limiting & politeness: gunakan proxy pool, jeda acak, dan rotasi user-agent
  - Anti-bot: if required gunakan headless browser (playwright/selenium) untuk render JS
  - Parsing: gunakan CSS selectors / XPath yang robust; fallback ketika struktur berubah
- Error handling:
  - retry dengan backoff, simpan last-failed-at & failure reason
  - simpan raw HTML snapshot untuk debugging
- Env variables (contoh):
  - DATABASE_URL=postgresql://user:pass@db:5432/checkworthit
  - SCRAPER_USER_AGENTS=...
  - PROXY_POOL_URL=...
- Dev:
  - Jalankan: pnpm dev:scraper-api (menjalankan FastAPI di port 8000)
  - Pastikan DB dan migration siap

packages/db (Prisma & DB)
- Peran: schema Prisma, model, migration, shared types & generated Prisma client
- File penting:
  - schema.prisma — definisi model (Product, PriceHistory, Marketplace, User, Watchlist, DecisionRequest)
  - migrations/ — riwayat migrasi
  - client exports — wrapper untuk import di apps
- Perintah:
  - pnpm dev:db:generate — generate Prisma client
  - pnpm dev:db:migrate — menjalankan migrasi ke DB
- Praktik:
  - Gunakan tipe yang konsisten antara backend Python & Prisma (apabila backend Python memakai prisma-client-py atau akses DB langsung, buat shim/adapter)
  - Pastikan timezone & tipe numeric (decimal) untuk harga

---

Model Data (Entitas Utama)
Catatan: contoh skema konseptual — sesuaikan dengan schema.prisma aktual.

- Product
  - id: string/UUID
  - marketplaceId: string
  - externalId: string (id produk dari marketplace)
  - title: string
  - url: string
  - imageUrl: string
  - currentPrice: Decimal
  - currency: string
  - lastFetchedAt: DateTime

- PriceHistory
  - id
  - productId (FK)
  - price: Decimal
  - currency
  - fetchedAt: DateTime
  - metadata (seller, promoTag)

- Marketplace
  - id
  - name
  - domain
  - selectors (opsional: bagaimana parse halaman)

- User
  - id
  - email
  - settings (notif preferences)

- Watchlist / Watch
  - id
  - userId
  - productId
  - targetPrice
  - notifyOn (drop/below/percentage)

- DecisionRequest (AI assistant log)
  - id
  - userId (opsional)
  - productId
  - inputSnapshot (price history + metadata)
  - aiResponse
  - createdAt

---

Logika AI / Decision Assistant
- Tujuan: analisis apakah suatu produk "worth it" berdasarkan histori harga + faktor lain (promo, stok, tren)
- Alur:
  1. Ambil histori harga & metadata produk
  2. Bentuk prompt: ringkasan statistik (min/max/median/ultimo n hari), perbandingan harga kompetitor (jika ada), konteks promo
  3. Kirim prompt ke model AI (OpenAI, self-hosted LLM, atau internal service)
  4. Proses respon: normalisasi jawaban, simpan pada DecisionRequest, tampilkan di UI
- Contoh metrik yang dihadirkan pada prompt:
  - Harga saat ini vs rata-rata 30 hari
  - Persentil harga
  - Trennya: menurun/naik/fluktuatif
  - Saran: beli sekarang / tunggu / pantau lagi + alasan singkat
- Praktik:
  - Batasi frekuensi panggilan model (caching), gunakan cache TTL per product
  - Simpan prompt & respon (audit)
  - Rate-limit per user & logging untuk debugging
- Keamanan:
  - Sanitasi data input ke model (jaga PII)
  - Batasi panjang prompt

---

Integrasi Marketplace & Scraping Strategy
- Marketplace umum: Tokopedia, Shopee, Amazon, Lazada, Bukalapak (sesuaikan daftar integrasi nyata)
- Strategi:
  - Gunakan modular parser per marketplace (pattern: MarketplaceParser interface)
  - Configurable selectors & transform functions per marketplace
  - Monitoring kesehatan parser (alert jika banyak 404/DOM perubahan)
- Headless browsing:
  - Gunakan Playwright/Chromium untuk halaman yang heavy-JS
  - Cadangan simpler HTTP fetch ketika memungkinkan (lebih cepat & ringan)
- Proxy & Anti-blocking:
  - Rotasi IP/Proxy pool
  - Rotasi user-agent, gunakan delay, respect robots.txt
- Legal & Etika:
  - Patuhi terms of service marketplace
  - Batasi scraping frekuensi; berikan mekanisme untuk menghormati robots.txt

---

Konfigurasi & Setup Lokal

Prasyarat
- Node.js (versi LTS yang kompatibel), pnpm
- Python 3.10+ (untuk FastAPI)
- PostgreSQL (lokal atau via docker-compose)
- Docker & docker-compose (direkomendasikan untuk environment isolasi)

Langkah cepat (lokal)
1. Clone repositori
   - git clone https://github.com/Fraankky/check-worth-it.git
   - cd check-worth-it
2. Install dependencies
   - pnpm install
   - (Python env) cd apps/scraper-api && python -m venv .venv && pip install -r requirements.txt
3. Siapkan file .env (contoh di bawah)
4. Database
   - Pastikan PostgreSQL running
   - export DATABASE_URL=postgresql://user:pass@localhost:5432/checkworthit
   - pnpm dev:db:migrate
   - pnpm dev:db:generate
5. Jalankan services
   - pnpm dev:web (Next.js di :3000)
   - pnpm dev:scraper-api (FastAPI di :8000)
   - (opsional) docker-compose up -d untuk DB & layanan pendukung

Contoh .env (ringkas)
```
# apps/web
NEXT_PUBLIC_API_URL=http://localhost:8000

# apps/scraper-api
DATABASE_URL=postgresql://postgres:postgres@db:5432/checkworthit
PROXY_POOL_URL=http://localhost:6000
SCRAPER_USER_AGENTS="Mozilla/5.0..."
LOG_LEVEL=info

# ai
AI_PROVIDER=openai
OPENAI_API_KEY=sk-...
```

---

Build / Lint / Test & Perintah Berguna
- Web dev: pnpm dev:web (Next.js on port 3000)
- Scraper API dev: pnpm dev:scraper-api (FastAPI on port 8000)
- Database migrate: pnpm dev:db:migrate
- Database generate: pnpm dev:db:generate
- Lint: cd apps/web && npx eslint .
- Type check: cd apps/web && npx tsc --noEmit
- Single test: belum ada test framework terpasang (tulis tests di masa mendatang)

Tips:
- Gunakan `pnpm -w` untuk workspace-wide commands jika diperlukan.
- Jalankan lint & type-check sebelum PR.

---

Deployment & Docker Compose
- Disarankan deploy dengan Docker Compose / Kubernetes.
- docker-compose.yml (lokal) harus memuat:
  - service db (Postgres)
  - service web (build Next.js)
  - service scraper-api (FastAPI)
  - (opsional) redis (queue/cache), proxy pool, worker
- Environment di production:
  - Gunakan secrets manager (Vault / GitHub Secrets / AWS Secrets Manager)
  - Set database backups & monitoring
- Scaling:
  - Scaling scraper: jalankan worker pool horizontal, gunakan queue (RabbitMQ/Celery/Redis Queue)
  - Scaling web: gunakan server-side rendering cache, CDN untuk aset

---

Keamanan & Rahasia Lingkungan
- Jangan commit credential / API keys. Simpan di .env (ignored) dan secret store di CI/CD.
- Batasi akses DB & gunakan TLS di production.
- Sanitasi & validasi semua input ke API.
- Audit akses model AI jika memakai third-party provider.

---

Troubleshooting Umum
- FastAPI tidak bisa connect ke DB:
  - Periksa DATABASE_URL, pastikan DB reachable dari container/service.
- Prisma migrate gagal:
  - Jalankan pnpm dev:db:generate sebelum migrate jika ada perubahan schema.
- Scraper sering diblokir:
  - Tambah proxy/rotasi user-agent, gunakan headless browser, turunkan frequency.
- Next.js build error (TS):
  - Jalankan cd apps/web && npx tsc --noEmit untuk menemukan tipe error.

---

Panduan Kontribusi
- Fork repo & buat feature branch: feat/..., fix/...
- Ikuti code style rules (TypeScript strict, ESLint & Prettier)
- Tulis unit/integration tests jika menambah logic penting (kapan test framework disetup)
- Buka Pull Request dengan deskripsi perubahan, link issue (jika ada), dan langkah manual testing
- Reviewer cek: types, lint, manual test pada UI & API

Template PR checklist (saran)
- [ ] Lint & type-check lulus
- [ ] Migration & DB changes dicatat
- [ ] End-to-end manual test dilakukan
- [ ] Update dokumentasi jika perlu

---

Roadmap & Ide Fitur Berikutnya
- Integrasi lebih banyak marketplace & API resmi (jika tersedia)
- Mode notifikasi multi-channel (SMS, Telegram, push)
- Export laporan harga & trend CSV / PDF
- Backtesting strategy alert (mis. prediksi harga turun)
- Setting granular watch rules (percentage drop, time window)
- Unit & integration test suite + CI pipeline

---

Kontak & Lisensi
- Repo: [https://github.com/Fraankky/check-worth-it](https://github.com/Fraankky/check-worth-it)
- Pemilik / Maintainer: Fraankky (lihat profil GitHub)
- Lisensi: (isi sesuai repo; kalau belum ada, tambahkan LICENSE, mis. MIT)

---

Catatan terakhir
Dokumentasi ini dibuat sebagai panduan komprehensif namun ringkas untuk memahami komponen, alur, dan pengembangan proyek check-worth-it. Beberapa bagian (contoh skema data, endpoint, dan file env) bersifat rekomendasi/konseptual — periksa file kode aktual (schema.prisma, apps/scraper-api routes, dan apps/web pages) untuk implementasi detil dan sesuaikan dokumentasi ketika skema atau API berubah.
