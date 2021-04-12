function munfunktio() {
  var luku1 = parseInt(document.getElementById("eka").value);
    var luku2 = parseInt(document.getElementById("toka").value);
      var luku3 = parseInt(document.getElementById("kolmas").value);
          var luku4 = parseInt(document.getElementById("neljas").value);
              var luku5 = parseInt(document.getElementById("viides").value);
  var summa = (luku1 + luku2 + luku3 + luku4 + luku5);
  var keskiarvo = (summa / 5);
var tulos = ("lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo)
document.getElementById("demo").innerHTML = tulos
console.log(tulos);
alert(tulos);
}
