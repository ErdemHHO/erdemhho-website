# erdemhho.com — Kişisel Web Sitesi

Erdem Hacıhasanoğlu'nun kişisel portfolyo sitesi. Hakkımda, yetenekler, deneyim, projeler ve iletişim bölümlerinden oluşur.

## Teknolojiler

- React 18 (Create React App)
- Bootstrap 5 / React Bootstrap, Sass
- AOS, react-spring, react-typed, react-vertical-timeline-component
- Docker + GitHub Actions ile deploy

## Kurulum

```bash
npm install
npm start
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Komutlar

| Komut | Açıklama |
| --- | --- |
| `npm start` | Geliştirme sunucusunu başlatır |
| `npm run build` | Production build üretir (`build/`) |
| `npm test` | Testleri çalıştırır |
| `npm run lint` | ESLint ile kontrol eder ve düzeltir |

## İçerik Düzenleme

Site içeriği kodun içinde değil, `public/` altındaki JSON dosyalarında tutulur:

- `public/portfolio_shared_data.json` — yetenekler, projeler, ortak veriler
- `public/res_primaryLanguage.json` — Türkçe içerik (hakkımda, deneyim, iletişim)
- `public/res_secondaryLanguage.json` — İngilizce içerik

Görseller `public/images/` klasöründedir.

## Docker

```bash
docker compose up --build
```

## Deploy

`main` branch'ine push yapıldığında [.github/workflows/deploy.yaml](.github/workflows/deploy.yaml) çalışır: Docker image build edilip Docker Hub'a gönderilir, ardından sunucuda güncel image ile container yeniden ayağa kaldırılır.
