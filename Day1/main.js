//Play Sound
function playSound(e){
    //console.log(e); //shows object, a lot of members, one of them is keyCode
    //console.log(e.keyCode); //shows value from keyboard input for instance A has a value of 65
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return //stop the function from running all together
    // console.log(audio); // shows which audio will be played based on keyCode
    audio.currentTime = 0;
    audio.play();
    //console.log(key); //shows "data-key = "(some input from keyboard)";"
    if (e.keyCode == 69 || e.keyCode == 73 || e.keyCode == 79 || (e.keyCode >= 80 && e.keyCode < 90 && e.keyCode !=83 && e.keyCode != 86 && e.keyCode != 88)){
        key.classList.add('playing1')
    }
    if (e.keyCode == 65 || e.keyCode == 68 || (e.keyCode >= 70 && e.keyCode <= 76 && e.keyCode != 73) || e.keyCode == 83){
        key.classList.add('playing')
    }
    if (e.keyCode == 66 || e.keyCode == 67 || e.keyCode == 77 || e.keyCode == 78 || e.keyCode == 86 || e.keyCode == 88 || e.keyCode == 90){
        key.classList.add('playing2');
    }
}

//Remove class
function removeTransition(e){
    //console.log(e)
    var _this = e.target
    //console.log(_this.dataset)
    if (e.propertyName != 'transform') return // skip it if it's not a transform

    if (_this.dataset.key == 69 || _this.dataset.key == 73 || _this.dataset.key == 79 || (_this.dataset.key >= 80 && _this.dataset.key < 90 && _this.dataset.key != 83 && _this.dataset.key != 86 && _this.dataset.key != 88)){
        this.classList.remove('playing1')
    }
    if (_this.dataset.key == 65 || _this.dataset.key == 68 || (_this.dataset.key >= 70 && _this.dataset.key <= 76 && _this.dataset.key != 73) || _this.dataset.key == 83){
        this.classList.remove('playing')
    }
    else this.classList.remove('playing2')
    //console.log(e.propertyName);
    //console.log(this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);



// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}