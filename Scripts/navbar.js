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

function scroll()
{
    document.querySelectorAll('a[href^="#"]').forEach(element => {element.addEventListener('click', function(e) 
        { 
            e.preventDefault();
            const targetElement = document.querySelector(this.getAttribute("href"));

            if(targetElement)
            {
                window.scroll({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                })
            }
        });
    });
}

scroll()
updateTitle()
window.addEventListener("resize", updateTitle);