var photos = document.getElementById('photo-container');
var bio = document.getElementById('bio-container');
var exit = document.getElementById('close-container');
var overlay = document.getElementById('overlay-container');

//Info buttons
var b1 = document.getElementById('button1');
var b2 = document.getElementById('button2');
var b3 = document.getElementById('button3');
var b4 = document.getElementById('button4');
var b5 = document.getElementById('button5');
var b6 = document.getElementById('button6');

function showOverlay(){
    overlay.classList.remove('hidden');
    overlay.classList.add('active');
}

function hideOverlay(){
    overlay.classList.remove('active');
    overlay.classList.add('hidden');
}

function writeInfo(button){
    var id = button.id;
    
    if(id == 'button1'){
        console.log('1');
        photos.innerHTML = "<img src='img/forward.png'>"
    }  else if(id == 'button2'){
        console.log('2');
    }  else if(id == 'button3'){
        console.log('3');
    }  else if(id == 'button4'){
        console.log('4');
    }  else if(id == 'button5'){
        console.log('5');
    }  else if(id == 'button6'){
        console.log('6');
    }
}