var allText = '';
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

$(document).ready(function() {

  $('#pagina-principal').on('click', function() {
    readTextFile('principal.txt');
    $('#main-container').html(allText);
  });

  $('#Nosotros').on('click', function() {
    readTextFile('nosotros.txt');
    $('#main-container').html(allText);
  });
  $('#Servicios').on('click', function() {
    readTextFile('servicios.txt');
    $('#main-container').html(allText);
  });
  $('#Galeria').on('click', function() {
    readTextFile('galeria.txt');
    $('#main-container').html(allText);
  });
  $('#Contacto').on('click', function() {
    readTextFile('contacto.txt');
    $('#main-container').html(allText);
  });
});
