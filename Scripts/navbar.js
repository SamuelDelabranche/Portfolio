// main.js

import * as config from './config.js';

function updateTitle()
{
    const link = document.getElementById("TitlePage");
    if (window.innerWidth <= config.TITLE_WIDTH_LIMIT){
        link.textContent = config.RESIZED_TITLE_TEXT;
    } else {
        link.textContent = config.DEFAULT_TITLE_TEXT;
    }
}

updateTitle()
window.addEventListener("resize", updateTitle);