/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-console */
import 'babel-polyfill';
import 'particlesjs';
import particles from '../data/particles.json';
particlesJS("projects-bg", particles);

var ageSpan = document.getElementById('age');
var age = (Date.now() - new Date(1998,0,29,0,15)) / 31557600000;
var lastTime;

window.requestAnimationFrame(updateAge);

function updateAge(currentTime) {
  if(!lastTime){lastTime = currentTime;}
  dif = currentTime - lastTime; lastTime = currentTime;
  age += dif / 31557600000;
  ageSpan.children[0].textContent = makeString(age).slice(0,3);
  ageSpan.children[1].textContent = makeString(age).slice(3);
  window.requestAnimationFrame(updateAge);
}
function makeString(n) { return n.toFixed(10); }
