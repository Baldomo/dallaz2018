# README - dallaz2018
## Indice
- [Requisiti](#requisiti)
- [Preparazione ambiente](#preparazione-ambiente)
- [Esecuzione](#esecuzione)
- [Modifica file](#modifica-file)

## Requisiti
- Per lavorare sul codice sono necessario [Node.js](https://nodejs.org/en/) e [yarn](https://yarnpkg.com/en/docs/install)
- I linguaggi usati sono HTML5, Javascript (jQuery) e SASS (CSS standard con qualche aggiunta)
- Unico framework integrato è [Bootstrap 4](https://getbootstrap.com/)
- Per facilitare lo sviluppo sono utilizzati [gulp](https://gulpjs.com/) e [BrowserSync](https://browsersync.io/): creano un server dinamico che aggiorna in automatico il contenuto della pagina del browser man mano che si modificano i file

## Preparazione ambiente
1. `git clone https://github.com/Baldomo/dallaz2018.git`
2. `cd dallaz2018`
3. `yarn install`

## Esecuzione
- `yarn run server`

## Modifica file
- I file/cartelle da modificare sono:
    - `src/js/app.js` - Script principale JS
    - `src/scss/styles.scss` - CSS globale
    - `src/index.html` - Pagina HTML principale
    - `assets/` - Contiene immagini e roba varia di contenuti per tenere ordine
- Gli altri file sono generati automaticamente da `gulp`, modificarli non fa nulla