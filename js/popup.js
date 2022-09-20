function toBlur() {
    var blurB = document.getElementById('blur')
    blurB.classList.toggle('active')
    var pop = document.getElementById('popup')
    pop.classList.toggle('active')
}



var box  = document.getElementById('box');
var down = false;


function toggleNotifi(){
	if (down) {
		box.style.height  = '0px';
		box.style.opacity = 0;
		down = false;
	}else {
		box.style.height  = '150px';
		box.style.opacity = 1;
		down = true;
	}
}