// JavaScript Document
(() => {
  console.log('svg script file loaded');

  let svgs = document.querySelectorAll('svg');

  function logThisSVG() {
    console.log(this.id);
  }

  svgs.forEach(svg => svg.addEventListener('click', logThisSVG));



// MOVE ICON
var moveIcon = document.getElementById('moveIcon');

function showMoveIcon() {
  alert("you click move icon");
}

moveIcon.addEventListener('click', showMoveIcon)
//Note Icon
var noteIcon = document.getElementById('noteIcon');  // 1

function showNoteIcon() {  // 3

  alert("you click note icon");
}

noteIcon.addEventListener('click', showNoteIcon)  // 2

// Sound ICON
var soundIcon = document.getElementById('soundIcon');  // 1

function showSoundIcon() {  // 3

  alert("you click sound icon");
}

soundIcon.addEventListener('click', showSoundIcon)  // 2

// mobile ICON
var mobileIcon = document.getElementById('mobileIcon');  // 1

function showMobileIcon() {  // 3

  alert("you click mobile icon");
}

mobileIcon.addEventListener('click', showMobileIcon)  // 2




// Trash ICON
var trashIcon = document.getElementById('trashIcon');

function showTrashIcon() {
  alert("you click trash icon");
} // 2

trashIcon.addEventListener('click', showTrashIcon)




// Power ICON
var powerIcon = document.getElementById('powerIcon');

function showPowerIcon() {
  alert("you click power icon");
}

powerIcon.addEventListener('click', showPowerIcon)



// Mark ICON
var markIcon = document.getElementById('markIcon');

function showMarkIcon() {
  alert("you click mark icon");
}

markIcon.addEventListener('click', showMarkIcon)






// Date ICON
var dateIcon = document.getElementById('dateIcon');

function showDateIcon() {
  alert("you click date icon");
}

dateIcon.addEventListener('click', showDateIcon)





// Video Icon
var videoIcon = document.getElementById('videoIcon');

function showVideoIcon() {
  alert("you click video icon");
}

videoIcon.addEventListener('click', showVideoIcon)





// Battery ICON
var batIcon = document.getElementById('batIcon');

function showBatIcon() {
  alert("you click battery icon");
}

batIcon.addEventListener('click', showBatIcon)

})();
