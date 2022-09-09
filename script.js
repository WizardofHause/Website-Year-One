const h2 = document.createElement('h2');

h2.textContent = "I'm the goddamn Batman";

document.querySelector('body').appendChild(h2);

const input = document.getElementsByClassName("Terminator")[0];

function clickAlert () {
    alert('Hasta la vista, bay-bee!');
};

input.addEventListener('click', clickAlert);