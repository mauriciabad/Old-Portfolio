var loggedin = false;

var params;
var access_token;
var state;

function generateSchedule(){
  divSchedule = document.getElementById("div-schedule");
  $.ajax({
    url: 'https://api.fib.upc.edu/v2/jo/classes/',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + access_token
    },
    success: function (response) {
      var times = response.count;
      var div = document.getElementById('div-schedule');
      grid = document.createElement("div");
      grid.className = "schedule";
      div.appendChild(grid);
      for(var i=0; i < times; i++){
          addSchedClass(grid, response.results[i].codi_assig, response.results[i].aules, response.results[i].durada, response.results[i].dia_setmana, response.results[i].inici)
      }
    }
  });
}

function addSchedClass(div, subject, room, duration, day, hour) {
  hour = hour.substring(0,2);
  Number(hour);
  hour -= 7;
  var clas = document.createElement("div");
  clas.className = "class";
  clas.style = "grid-row: " + hour + " / span " + duration + "; grid-column: " + day + ";"
  nameSubject = document.createElement("div");
  nameSubject.className = "subject";
  nameSubject.className += " " + getSubjectColor(subject);
  nameSubject.innerHTML = subject;
  nameRoom = document.createElement("div");
  nameRoom.className = "room";
  nameRoom.innerHTML = room;
  clas.appendChild(nameSubject);
  clas.appendChild(nameRoom);

  div.appendChild(clas);
}

function getSubjectColor(subject) {
  switch (subject) {
    case "PE":
      return "cyan"
      break;
    case "SO":
      return "yellow"
      break;
    case "EDA":
      return "orange"
      break;
    case "CI":
      return "green"
      break;
    case "BD":
      return "blue"
      break;
    case "EC":
      return "green"
      break;
    case "PRO1":
      return "orange"
      break;
    case "PRO2":
      return "red"
      break;
    default:

  }
}

function checkLogStatus() {
  params = getHashParams();
  access_token = params.access_token;
  state = params.state;

  if (access_token) {
    userLoggedIn();

  } else {
    loggedin = false;
    document.getElementById("div-login").style.display = "block";
  }
}

function racoLogin() {
  window.location = "https://api.fib.upc.edu/v2/o/authorize/?client_id=9zOcihfA1uPxtUNCKMOhgmIPwdQKkZHHlbuwvCm5&redirect_uri=http://www.mauriciabad.com/raco/&response_type=token&state=random_state_string";
}

function generateRandomString(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function getHashParams() {
  var hashParams = {};
  var e, r = /([^&;=]+)=?([^&;]*)/g,
  q = window.location.hash.substring(1);
  while (e = r.exec(q)) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

function changeTabTo(destination){
  document.getElementById('div-schedule').style.display = "none";
  document.getElementById('div-news').style.display = "none";
  document.getElementById('div-marcks').style.display = "none";
  document.getElementById('div-others').style.display = "none";
  if (loggedin) {
    document.getElementById("div-" + destination).style.display = "block";
  } else{
    toast("Inicia sessió capsigrany");
  }
}

function toast(text) {
    var x = document.getElementById("snackbar");
    x.innerHTML = text;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function userLoggedIn(){
  loggedin = true;
  changeTabTo("news");

  generateSchedule();
  loadOthers();
  loadNews();
}

function loadNews() {
  $.ajax({
    url: 'https://api.fib.upc.edu/v2/jo/avisos/',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + access_token
    },
    success: function (response) {
      var times = response.count;
      for(var i=0; i < times; i++){
        var div = document.getElementById('div-news');
          addNew(div, response.results[i].titol, response.results[i].codi_assig, response.results[i].text, response.results[i].data_modificacio, response.results[i].adjunts)
      }
    }
  });
}

function addNew(div, title, subject, text, dateMod, appended) {
  if(text.length > 700){
    text = text.substring(0, 700) + "...";
  }
  var card = document.createElement("div");
  card.className = "new-card-div";
  card.innerHTML= '<img src="paperclip.svg" alt="Appended" class="new-card-append"><p class="new-card-subject" style="color: ' + getRandomColor() + '";>' + subject + '</p><p class="new-card-title">' + title + '</p><div class="new-card-content">' + text +'</div><p class="new-card-time">' + dateMod + '</p>';



  div.appendChild(card);
}

function loadOthers() {
  $.ajax({
    url: 'https://api.fib.upc.edu/v2/jo/',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + access_token
    },
    success: function (response) {
      document.getElementById('others-my-name').innerHTML = response.nom + " " + response.cognoms;
    }
  });

  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.fib.upc.edu/v2/jo/foto.jpg', true);
  request.setRequestHeader('Authorization', 'Bearer ' + access_token);
  request.responseType = 'arraybuffer';
  request.onload = function (e) {
    var data = new Uint8Array(this.response);
    var raw = String.fromCharCode.apply(null, data);
    var base64 = btoa(raw);
    var src = "data:image;base64," + base64;

    document.getElementById('foto').setAttribute('src', src);
  };

  request.send();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
