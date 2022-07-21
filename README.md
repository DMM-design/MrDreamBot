# MrDreamBot for Twitch

Twitch panel and bot chat, for streamers that need power to control the integration with chat,  and getting fun with the viewers. Games like roll the roulette, feed the animal, and more… are added to  this program, and additional functionality like create a poll, announce (with color), ect…

## Used Technologies
|Technology | links |
--- | --- |
|FRONTEND
|<img src="https://cdn-icons-png.flaticon.com/512/1051/1051277.png" alt="html" title="HTML" width="30"/>| https://www.w3schools.com/html/html_intro.asp|
|<img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" alt="css" title="CSS" width="30"/> | https://www.w3schools.com/css/
| <img src="https://cdn-icons-png.flaticon.com/512/1199/1199124.png" alt="js" title="JavaScript" width="30"/> | https://www.w3schools.com/js/ 
| <img alt="Sass" height="30" src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg"> | https://sass-lang.com/guide
|<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.nuxtjs.cn%2Flogos%2Fnuxt-icon-white%402x.png&f=1&nofb=1" alt="nuxtjs" title="NuxtJS" width="30"/> |https://v3.nuxtjs.org/getting-started/quick-start
|LIBRARIES
| <img src="https://d33wubrfki0l68.cloudfront.net/4112b407ce93d899a0e499bbefa9fc172b11685e/49ffa/meta/tauri_logo_dark.svg" alt="tauri" title="Tauri" width="65"/> | https://tauri.app/v1/guides/
|<img src="https://avatars.githubusercontent.com/u/35773245?s=48&v=4" alt="comfyjs" title="ComfyJS" width="30"/> | https://github.com/instafluff/ComfyJS
|API
|<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1611.81 623"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Asset 20</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M0,460.15c0-52.48,30.7-92.82,86.75-92.82,25.35,0,48.46,12.39,59.17,31.67V296h29V550h-29V521c-10.71,19.63-33.82,32-59.17,32C30.7,553,0,512.63,0,460.15Zm148.87,0c0-40.7-23.57-67.11-59.62-67.11s-60,26.41-60,67.11,23.92,67.12,60,67.12S148.87,500.85,148.87,460.15ZM368.92,492c-6.06,36.77-38,61-82.61,61-53.2,0-88.89-42.48-88.89-93.89,0-52.84,32.84-91.75,85.67-91.75,52.48,0,83.9,36.42,83.9,84.25A106.94,106.94,0,0,1,365.92,464h-140c2.15,37.13,26.47,63.62,60.39,63.62,29.27,0,47.9-13.13,53.61-35.62Zm-142-51h111c-2.14-30.34-22.7-49.39-54.83-49.39C252.75,391.61,232.28,409.23,226.92,441Zm140-71h29l51.35,144.41L497.92,370h30l-66,180h-29Zm330,122c-6.06,36.77-38.2,61-82.82,61-53.2,0-88.9-42.48-88.9-93.89,0-52.84,32.85-91.75,85.68-91.75,52.48,0,83.9,36.42,83.9,84.25a112.11,112.11,0,0,1-.86,12.42h-140c2.15,37.13,26.26,63.62,60.18,63.62,29.27,0,48.11-13.13,53.82-35.62ZM554.83,441.23H665.5c-2.14-30.34-22.49-49.62-54.62-49.62C580.54,391.61,560.19,409.46,554.83,441.23ZM720.92,296h29V550h-29ZM773.7,460.15c0-54.26,38.2-92.82,91.39-92.82,53.55,0,91.75,38.56,91.75,92.82,0,53.91-38.2,92.82-91.75,92.82C811.9,553,773.7,514.06,773.7,460.15Zm153.87,0c0-39.27-25.35-67.11-62.48-67.11C828.32,393,803,420.88,803,460.15s25.34,67.12,62.11,67.12C902.22,527.27,927.57,499.42,927.57,460.15ZM980.92,370h29v30c11.07-19.63,33.81-32.67,59.52-32.67,55.69,0,86.39,40.34,86.39,92.82S1124.41,553,1068.72,553c-25.34,0-48.09-12.69-58.8-32V623h-29Zm145.28,90.15c0-40.7-23.56-67.11-59.62-67.11S1007,419.45,1007,460.15s23.56,67.12,59.62,67.12S1126.2,500.85,1126.2,460.15ZM1342.92,492c-6.06,36.77-37.51,61-82.14,61-53.19,0-88.89-42.48-88.89-93.89,0-52.84,32.84-91.75,85.68-91.75,52.48,0,83.89,36.42,83.89,84.25a121.33,121.33,0,0,1-.54,12.42h-141c2.15,37.13,26.95,63.62,60.86,63.62,29.28,0,47.43-13.13,53.14-35.62Zm-141.4-50.77h110.67c-2.14-30.34-22.49-49.62-54.62-49.62C1227.22,391.61,1206.88,409.46,1201.52,441.23ZM1442.92,396c-36.41,0-47.05,32.38-47.05,73.86l.05,80.14h-29V370h29l-.05,36.6c7.49-24.63,22.49-36.41,48.9-36.41l23.15-.19v26Zm31,96h28c2.5,23.2,17.79,36,43.85,36,22.49,0,37.48-12.5,37.48-27.13,0-53.55-104.6-5.36-104.6-83.18,0-30.35,25.71-50.34,63.55-50.34,39.63,0,66.58,21.47,68.72,54.67h-28c-2.49-22.85-25-30.39-41.43-30.39-21.07,0-35,10-35,25.7,0,48.55,105.31.36,105.31,82.82,0,32.13-26.41,52.84-66,52.84C1504,553,1476.78,529.48,1473.92,492ZM335.92,70V0h-80V210l40,40h110V170h-70V150h70V70Zm290,0V170h-20V70h-80V170h-20V70h-80V210l40,40h240V70Zm100,0V250h80V70Zm0-70V50h80V0Zm310,70-40,40V210l40,40h120V170h-80V150h80V70Zm280,0h-60V0h-80V250h80V150h20V250h80V110Zm-410,0V0h-80V210l40,40h110V170h-70V150h70V70Z"></path></g></g></svg> | https://dev.twitch.tv


## Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
