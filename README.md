# CMS-övning

En övning som handlar om localStorage. Uppgiften är att skapa sida där 
användaren kan skapa en blogg och blogg-poster som sparas i webbläsarens localStorage.

## Kriterier

Skapa ett CMS genom att implementera ett system som hanterar bloggar.
Övningen går ut på att ni skall kunna skapa nya bloggar och lagra dessa i localStorage. Information som skall finnas för varje blog:

- Id - tal
- Namn - text
- Författare - text

Ni behöver skapa ett formulär där en användare kan mata in namn och författare i två textfält och
ett id skall genereras automatiskt. Ett objekt skapas upp när användaren trycker på skapa. Detta
objekt skall sedan läggas in i listan som finns i localStorage.
Varje blog kan sedan ha en eller flera inlägg. Ett inlägg består av följande information:

- Titel
- Innehåll
- BlogId

När ett nytt inlägg skapas skall en användare få fylla i titel och innehåll samt välja vilken blog det
skall in på genom att välja blog från en rullgardingsmeny (dropdown). Denna information kommer
att skapa ett nytt objekt (ett post-objekt) när användaren sparar. Detta objekt skall sedan läggas i en
egen lista för inlägg (posts) som också den skall lagras i localStorage.

## För att återskapa

- Klona [repon](https://github.com/mikael-johnsson/MI-CMS)
- *i terminalen* cd MI-CMS
- *i terminalen* npm instal
- *i terminalen* npm run dev
- Nu körs en dev server med projektet