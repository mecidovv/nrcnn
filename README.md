# Qamil və Nurcan

Vite və Three.js üzərində qurulmuş, instanced sözlərdən ibarət 3D animasiya.

## Lokal başladılma

Node.js quraşdırıldıqdan sonra layihə qovluğunda:

```sh
npm install
npm run dev
```

Vite terminalda göstərdiyi ünvanı brauzerdə açın. İstehsal build-i yaratmaq və yerli yoxlamaq üçün:

```sh
npm run build
npm run preview
```

## Yayımlama

`npm run build` nəticəsində yaranan `dist/` qovluğunu Netlify və ya Vercel-də statik sayt kimi yayımlayın; build əmri `npm run build`, build qovluğu isə `dist` olmalıdır.

GitHub Pages üçün Actions workflow-da Node.js quraşdırın, `npm ci` və `npm run build` icra edin, sonra `dist/` qovluğunu Pages artifact-i kimi yükləyib yayımlayın. Repository alt-yolunda yayımlanırsa build-dən əvvəl `VITE_BASE_PATH=/repository-name/` təyin edin. Məsələn, PowerShell-də:

```powershell
$env:VITE_BASE_PATH = "/repository-name/"
npm run build
```
