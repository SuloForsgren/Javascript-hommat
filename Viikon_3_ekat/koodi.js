function myfunction()
{
  var pari = parseInt(document.getElementById('luku').value);
    var khyl = "<p>";
  for(var i = 2; i <= pari; i= i+2) {
    khyl+=i;
      khyl+=" ";
}
  khyl+="</p>";

    document.getElementById('parilliset').innerHTML = khyl;
}
/* Muutaman kerran jouduin menemään katsomaan netistä
ja myös katsoin miten sinä Jyri olit sen tehnyt jotta ymmärsin miten toimii*/

function salasana()
{
  var kirjotettusana = document.getElementById('sana').value;
    var salasana = "<p>";
  for(var s = 0; s < kirjotettusana.length; s++)
  {
    salasana = salasana + kirjotettusana[s] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('demo').innerHTML = salasana;
}
//Tätä oli ihan hauska tehdä! :D

function kirjaimenetsin()
{
  var sana = document.getElementById('osana').value;
  var vastaus = 'Sanasta ei löydy kirjainta ö!';
  for(var k = 0; k < sana.length; k++)
  {
    if(sana[k] == 'ö' || sana[k] == 'Ö')
    {
      vastaus = 'sanasta löytyy kirjain ö!';
    }
  }
  document.getElementById('kirjain').innerHTML = '<p>' + vastaus + '</p>';
}
//Tuokin oli ihan hauska :-)
function Kertoma()
{
  var kertaa = document.getElementById('taasjokin').value;
      var laskettu = 1;
    for(var z = 1; z <= kertaa; z++)
  {
    laskettu*=z;
  }
  document.getElementById('kertomaVastaus').innerHTML = '<p>Annoit luvun ' + kertaa + ' ja sen kertoma on '+laskettu + '</p>';
}

function hipHeijaa()
{
  var tuloste = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tuloste+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tuloste+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tuloste+='Hip ';
    }
    else {
      tuloste+=y+' ';
    }
    document.getElementById('lukujenTulostus').innerHTML = tuloste;
  }
}
/*Tuota en täysin ymmärtänyt joten kopioin koodisi nähdäkseni miten olet koodin
tehnyt ja sain selville :D*/

function ekatkym()
{
  var juu = '<p>';
  for(var l = 1; l <=10; l++)
  {
    juu += l + ' ';
  }
  juu += '</p>';
  document.getElementById('luvuton').innerHTML = juu;
}

function tollanen()
{
  yhteensa = 0;
  for(var r = 1; r <=10; r++)
  {
    yhteensa += r;
  }
  document.getElementById("luvutyk").innerHTML = "<p>"+ yhteensa + "</p>";
}

function etsiSuurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
    //alert(taulu);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusT').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}
function muokkaaSalasana()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('salis').value;
  alert(pw);
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    //alert[pw];
    //alert[eka];
    temp.push(eka);
    //alert(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
    //alert(toka);
  }
  lop = temp.join('');
  document.getElementById('lukujenTulostusS').innerHTML = lop;
}
function llisettomat()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('pnro').value);
  nro2 = document.getElementById('inro').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}


/*Kolme viimeistä tehtävää jouduin kopioimaan suoraan koska aika oli melkein loppu
ja muutenkaan en oikein osannut/ymmärtänyt miten ne olisi pitänyt tehdä...
Koitan selvittää tällä viikolla 3 mitä nuo tekevät ja miten ne toimivat
ja opin virheistäni*/
