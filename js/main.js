for (let contatore = 1; contatore < 101 ; contatore++) {
    const contenitore = document.getElementById("container");
    if (contatore % 15 == 0) {
        contenitore.innerHTML += `<div class="box">FizzBuzz</div>`;
    } else if (contatore % 3 == 0) {
        contenitore.innerHTML += `<div class="box">Fizz</div>`;
    } else if (contatore % 5 == 0) {
        contenitore.innerHTML += `<div class="box">Buzz</div>`;
    } else  {
        contenitore.innerHTML += `<div class="box">${contatore}</div>`;
    }
}