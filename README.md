# Genezin Kepekci Website

Bu repo, `Genezin Kepekci` icin hazirlanmis statik bir GitHub Pages sitesidir.

## Dosyalar

- `index.html`: Ana sayfa icerigi
- `styles.css`: Tum gorunumsellik
- `.github/workflows/deploy.yml`: GitHub Pages otomatik yayinlama ayari

## Kisisellestirme

Asagidaki yerleri duzenle:

- `index.html` icindeki uygulama kartlarinin basliklari, aciklamalari ve linkleri
- `genezinsalig@gmail.com` adresini gerekirse yeni mailin ile degistir
- GitHub ve LinkedIn linklerini kendi profillerin ile guncelle

## GitHub Pages ile yayinlama

1. Bu klasoru bir GitHub reposuna gonder.
2. GitHub'da `Settings > Pages` kismina git.
3. `Source` olarak `GitHub Actions` secili kalsin.
4. `main` branch'ine her push yaptiginda site otomatik deploy edilir.

## Ornek git komutlari

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/REPO_ADI.git
git push -u origin main
```

## Ozel alan adi

Kendi domainini baglamak istersen daha sonra `CNAME` dosyasi da ekleyebiliriz.
