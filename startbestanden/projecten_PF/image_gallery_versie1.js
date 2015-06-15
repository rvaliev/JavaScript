// Image gallery versie 1

/**
 * window.onload - wachten tot de document tree geladen is
 */
window.onload = function()
{
    var eImg = document.getElementById('plaatshouder'); // referentievariabele naar image plaatshouder
    var eSidebar = document.querySelector('aside'); // selecteer 'aside' element en zijn inhoud
    var eLinks = eSidebar.getElementsByTagName('a'); // selecteer enkel links binnen eSidebar


    console.log('sidebarLinks %s', eLinks.length);

    for(var i = 0; i < eLinks.length; i++)
    {
        eLinks[i].addEventListener('click', function(e)
        {
            e.preventDefault();
            toonFoto(this, eImg);
        })
    }

};