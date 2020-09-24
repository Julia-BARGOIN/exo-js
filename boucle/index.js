'use strict';

/* exo 1
var table = prompt("tapez un entier compris entre 1 et 9");
document.write("<h3>la table de multiplication par : " + table +"</h3>"); 
for (i = 1; i <= 10; i++){
  var result = table * i; 
    document.write(i + " x " + table + " = " + result + "</br>");  
}
*/

//exo 2
for(var i = 5; i <= 5; i++) {
  for(var j = 0; j <= 10; j++){
    var resultat = j * i;
    //document.write(i + " x " + j + " = " + resultat + "</br>");
  }
}
/*
var nombre = 5;
for(var i = 0; i <= 10; i++) {
    var resultat = nombre * i;
  document.write(i + " x " + nombre + " = " + resultat + "</br>");   
}
*/

// exo 5
var objet = {
  name: '42', 
  age: '42'
}
for (var key in objet) {
  var resultat = objet[key] * objet[key];
}
//console.log(resultat);