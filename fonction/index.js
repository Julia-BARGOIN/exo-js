'use strict';


/**
 * compute Surface M2 
 * @param {int} long
 * @param {int} larg
 * @return {int} result
 */
function computeSurfaceM2(long, larg){
    var result = long * larg;
    return result + "m²";
}
console.log(computeSurfaceM2(6, 2));


/**
 * createMyButton 
 * @return {html} newButton
 */
function createMyButton(){
  var newButton = document.createElement('button');
  var text = document.createTextNode("CLIQUEZ MOI !!!");
  newButton.appendChild(text);
  document.body.appendChild(newButton);
}
/**
 * DetectMyAgeByNight
 * @param 
 * @param 
 * @return 
 */
"click", function detectMyAgeByNight(age){
  var age = parseInt(prompt('Quel age a-tu ?'));
  if(age <= 17){
    alert('vous etes mineur');
  }
  if(age >= 18 && age <=41){
    alert('Bienvenu');
  }
  if(age >= 42){
    alert('vous etes le patron');
  }
}












