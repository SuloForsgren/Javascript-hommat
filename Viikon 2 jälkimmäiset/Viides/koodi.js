function munfunktio() {
var kluku = parseInt(document.getElementById('kerto').value);
var lausemuuttuja = "";
for (var k=1;k<=10;k++)
{
  lausemuuttuja += kluku + 'x' + k +' = ' + kluku * k + ' /n';
  }
  document.getElementById('vastaus5').innerHTML = "<pre>" + lausemuuttuja + "</pre>"
}
