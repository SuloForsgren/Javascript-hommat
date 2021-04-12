function munfunktio() {
console.clear();
var x = document.getElementById("kakku").value;
for(let i = 1; i <= 10; i++) {

    const vastaus = i * x;

    console.log(`${x} * ${i} = ${vastaus}`);

  }
}
