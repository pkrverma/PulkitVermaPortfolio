// Navbar button
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function showHideNav() {
  const menuBtn = document.getElementById('myNavBar');

  if (window.innerWidth <= 720) {
    menuBtn.innerHTML = '<div class="title"><h2><a href="#banner" aria-current="page">Pulkit Kumar Verma</a></h2></div><div class="nav-tab sidebar" id="mySidebar"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()"> &times;</a><ul><li><a href="#about">About</a></li><li><a href="#skill">Skills</a></li><li><a href="#project">Projects</a></li><li><a href="#contact">Contact</a></li></ul></div><div id="main"><button class="openbtn" onclick="openNav()"><i class="fa-solid fa-bars"></i></button></div>';
  } else {
    menuBtn.innerHTML = '<div class="title"><h2><a href="#banner" aria-current="page">Pulkit Kumar Verma</a></h2></div><div class="nav-tab sidebar" id="mySidebar"><ul><li><a href="#about">About</a></li><li><a href="#skill">Skills</a></li><li><a href="#project">Projects</a></li><li><a href="#contact">Contact</a></li></ul></div>';
  }
}

window.onload = showHideNav;
window.onresize = showHideNav;


// banner text animatiom

consoleText(['Frontend Developer', 'Content Writer', 'UI/UX Designer'], 'text', ['White']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}