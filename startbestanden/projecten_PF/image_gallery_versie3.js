// Image gallery versie 1

var versie = ": versie 3.0";
/**
 * window.onload - wachten tot de document tree geladen is
 */
window.onload = function()
{
    // noscript verbergen
    var eNoScript = document.getElementById('noscript');
    eNoScript.style.display = "none";



    // is array van images vanuit andere bestand geladen?
    if(typeof aModernArt == "undefined")
    {
        throw new Error("array a ModernArt niet gevonden");
    }
    else
    {
       // console.log(aModernArt);
    }





    // versie info
    var eKop = document.querySelector('h1');
    eKop.innerHTML = eKop.innerHTML + versie;
    var eImg = document.getElementById('plaatshouder'); // referentievariabele naar image plaatshouder

    // var eSidebar = document.querySelector('aside'); // selecteer 'aside' element en zijn inhoud
    // var eLinks = eSidebar.getElementsByTagName('a'); // selecteer enkel links binnen eSidebar
    //eLinks = document.querySelectorAll('aside a'); // vervangt bovenste 2 lijnen

    // dynamische keuzelijst
    var eKeuzeLijst = maakKeuzeLijst(aModernArt);
    console.log(eKeuzeLijst);
    var eSidebar = document.querySelector('aside');
    eSidebar.appendChild(eKeuzeLijst);

    function maakKeuzeLijst(a)
    {
        var nArt = a.length; // lengte van array
        var eSelect = document.createElement('select'); // creer <select>
        eSelect.id = "keuzelijst"; // geef id <select id="keuzelijst">

        // EERSTE option element (of standaard option element)
        var eOption = document.createElement('option'); // creer <option>
        eOption.innerHTML = "Maak een keuze"; // voeg tekst binnen 1ste <option>
        eOption.setAttribute("value", ""); // geef value aan 1ste option: <option value="">
        eSelect.appendChild(eOption); // voeg 1ste <option> binnen <select>

        // andere option elementen met artiesten maken
        for(var i = 0; i < nArt; i++)
        {
            var eOptionLijst = document.createElement('option');
            eOptionLijst.innerHTML = a[i][2];
            eOptionLijst.value = i;
            eSelect.appendChild(eOptionLijst);
        }

        return eSelect
    }


    eKeuzeLijst.addEventListener("change", function(e)
    {
        var waarde = this.value;
        //console.log(waarde);
        if(waarde != '' && waarde != null)
        {
            toonFoto(waarde,eImg);
        }
    }); // end event listener




    /**
     * Toont foto in image houder
     * @param eLink - een hyperlink element
     * @param eImg - image plaatshouder
     */
    function toonFoto(nIndex, eImg)
    {
        var aArt = aModernArt[nIndex];
        var sPad = aArt[0]; // source
        var sInfo = aArt[1]; // info



// HIER GESTOPT P.53 PROJECTEN *************************************************************

        console.log(nIndex[0]);

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