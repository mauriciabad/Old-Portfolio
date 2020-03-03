/* eslint-disable import/no-webpack-loader-syntax */
/* eslint-disable no-console */
import 'babel-polyfill';
import particles from 'particles.js';
import particlesData from '../data/particles.json';

particles.particlesJS.load('projects-bg', particlesData);

const ageSpan = document.getElementById('age');
let age = (Date.now() - new Date(1998, 0, 29, 0, 15)) / 31557600000;
let lastTime;
let dif;

function updateAge(currentTime) {
  if (!lastTime) lastTime = currentTime;
  dif = currentTime - lastTime;
  lastTime = currentTime;
  age += dif / 31557600000;

  ageSpan.children[0].textContent = age.toFixed(10).slice(0, 3);
  ageSpan.children[1].textContent = age.toFixed(10).slice(3);

  window.requestAnimationFrame(updateAge);
}

window.requestAnimationFrame(updateAge);
