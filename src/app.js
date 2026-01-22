import "bootstrap";
import "./style.css";

window.onload = function () {
  //write your code here
  let who = ['Mi perro', 'Mi abuela', 'El cartero', 'El pájaro'];
  let action = ['se comió', 'hizo trizas', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el automóvil', 'la computadora'];
  let when = ['antes de la clase', 'cuando estaba durmiendo', 'mientras ejercitaba', 'durante mi almuerzo', 'mientras estaba rezando'];

  let excuse = who[Math.floor(Math.random() * who.length) ] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)];

  document.querySelector("#excuse").innerHTML = excuse;
  
  // let parrafo = document.getElementById("excuse");  
  // parrafo.innerHTML = excuse;

  // document.getElementById("excuse").textContent = excuse;
};