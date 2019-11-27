var validation = document.getElementById('validé');
validation.addEventListener('click', f_valid);
function f_valid() {
// Déclaration des variables
var Uno = document.getElementById('Uno').value;
var Dos = document.getElementById('Dos').value;
// déclaration de la variable qui affichera le resulta de Uno % Dos.
var result = Uno % Dos;
alert(result);
}
