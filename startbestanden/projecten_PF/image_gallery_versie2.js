// Image gallery versie 1

var versie = ": versie 2.0";
/**
 * window.onload - wachten tot de document tree geladen is
 */
window.onload = function()
{
    // versie info
    var eKop = document.querySelector('h1');
    eKop.innerHTML = eKop.innerHTML + versie;
    var eImg = document.getElementById('plaatshouder'); // referentievariabele naar image plaatshouder

    // var eSidebar = document.querySelector('aside'); // selecteer 'aside' element en zijn inhoud
    // var eLinks = eSidebar.getElementsByTagName('a'); // selecteer enkel links binnen eSidebar
    eLinks = document.querySelectorAll('aside a'); // vervangt bovenste 2 lijnen



    for(var i = 0; i < eLinks.length; i++)
    {
        /**
         * instellen van een nieuwe event handler in voor het 'mouseover' event,
         * waarbij 'e' willekeurige naam is.
         */
        eLinks[i].addEventListener('mouseover', function(e)
        {
            e.preventDefault();
            toonFoto(this, eImg); // 'this' stelt het object voor waarop de eventhandler plaatsheeft.
        })
    }

    /**
     * Toont foto in image houder
     * @param eLink - een hyperlink element
     * @param eImg - image plaatshouder
     */
    function toonFoto(eLink, eImg)
    {
        var sInfo = eLink.getAttribute('title'); // ophalen van titel van een img
        var eInfo = document.getElementById('info');
        if(eInfo)
        {
            // <p id="info"> bestaat reeds, moet geen <p id="info"> gemaakt meer worden, dus enkel de tekstuele inhoud moet veranderden
            eInfo.innerHTML = sInfo;
        }
        else
        {
            var eInfo = document.createElement('p'); // creer een <p></p>
            eInfo.id = "info"; // voeg id bij <p>: <p id="info"></p>
            eInfo.innerHTML = sInfo; // voeg titel van img (sInfo) binnen <p>: <p id="info">...</p>
            /**
             * voeg <p> na de <img>
             * eImg.parentNode - selecteren ouderlijke Node van <img>: <div id="kader">...</div>
             * eImg.parentNode.appendChild - voegen child element <p> onderaan bij <div id="kader">...</div>
             */
            eImg.parentNode.appendChild(eInfo);
            /**
             * Beschrijving <p> boven de <img> zetten
             * insertBefore(inTeVoegenNode, voorDezeNode)
             */
            eImg.parentNode.insertBefore(eInfo, eImg.parentNode.firstChild);
        }

        console.log(sInfo);
        eImg.src = eLink.href; // 'src' van image plaatshouder wordt vervangen door nieuwe link

    }

};