// Ohjelma tarkistaa onko vuosi Karkausvuosi
// Otin netistä tämän koodin koska en omaa saanut toimimaan ja oli aika pienestä virheestä kiinni...
function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        alert(year + ' is a leap year');
        console.log(year + ' is a leap year');
    } else {
        alert(year + ' is not a leap year')
        console.log(year + ' is not a leap year');
    }
}

// take input
const year = prompt('Enter a year:');

checkLeapYear(year);
