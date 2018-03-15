var photos = document.getElementById('photo-container');
var bio = document.getElementById('bio-container');
var exit = document.getElementById('close-container');
var overlay = document.getElementById('overlay-container');

function showOverlay(){
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
}

function hideOverlay(){
    overlay.classList.remove('active');
    overlay.classList.add('hidden');
}