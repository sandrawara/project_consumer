# project_consumer

## Innehåll av filer

### Länk till webbplats http://sandrawara.se/portfolio/project/index.php

<p> Consumer innehåller en indexsida, en adminsida, style scss, gulpfile och ett Fetch Api.</p>

För körning i exempelvis postman, kör dessa länkar:
<ul>
 <li> Get:http://sandrawara.se/portfolio/project/read_single.php?table=web_pages // Web pages tabellen</li>
 <li>Get: http://sandrawara.se/portfolio/project/read_single.php?table=education // Education tabellen</li>
 <li>Get: http://sandrawara.se/portfolio/project/read_single.php?table=work // Work tabellen</li>
 <li>Post: http://sandrawara.se/portfolio/project/create.php</li>
 <li>Put: http://sandrawara.se/portfolio/project/update.php</li>
 <li>Delete: http://sandrawara.se/portfolio/project/delete.php</li>
</ul>

1. Index - Innehåller funktioner som skriver ut data från en databas med specifikationer skickade med Fetch Api.
2. Administrationssida som innehåller ett enklare inloggningssytem med en logga ut knapp som tar en vidare till indexsidan. 
Denna sidan innehåller all data där man kan uppdatera, radera och lägga till nya poster. Användarnamn är admin och lösenord är admin.
3. Gulpfile innehåller paket och funktioner som gör att ECMAScript omvandlas till JavaScript.
Sass omvandlas till css och php som överförs till distmappen. JavaScriptet komprimeras och en funktion för livereaload finns även med.
4. Genom en JS-fil skapas en Fetch API som hämtar data från Restobjektet och skriver ut det på indexsidan.

## Följande gulp-paket har används
<ul> 
<li>Gulp babel</li>   
<li>Gulp uglify</li>
<li>Gulp sass</li>  
<li>Gulp livereload - automatiserar och kollar efter ändringar i webbläsaren</li> 
</ul>

### Användning
<p> För att starta igång behöver man installera gulp globalt npm install --save gulp-install 
eller lokalt npm install --save-dev gulp-install. Man behöver dock har det installerat lokalt för att 
kunna köra det globalt. Att installera lokalt är dock att föredra. Därefter bör man installera de 
paket man ska använda och vidare skapa tasks eller funktioner.</p>

<ul>
<li>gulp copyHtml - överför html-kod från src till dist(den publika mappen).</li> 
<li>gulp sass - Omvandlar sass till css och komprimerar css-filen.</li> 
<li>gulp scripts - slår ihop js-filer och komprimerar (uglify) koden.</li> 
<li>gulp babel - omvandlar ECMAScript till JavaScript.
<li>gulp watch - automatiserar ändringar.</li> 
<li>gulp - skapat en array som genomför alla tasks utan att aktivera watch.</li> 
</ul>
