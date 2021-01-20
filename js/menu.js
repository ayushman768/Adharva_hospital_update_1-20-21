function My_menu(){
	    var body,curv;
		var menu = document.querySelector('.navigation');
		
			if(menu.style.display==="none"){
				menu.style.display="block";
			}
			else{
				menu.style.display="none";
				
			}
	
}


var y = document.querySelector('header');
var u = document.querySelector('.mywidget');

var sticky = y.offsetTop;

var header01 = function myheader() {

    if (window.pageYOffset > sticky) {
        y.classList.add('sticky');
		u.classList.add('u');


    } else {
        y.classList.remove('sticky');
		
		u.classList.remove('u');

    }

}

var x = document.querySelector('nav');
var  h = document.querySelector('.mywidget');

var sticky = x.offsetTop;

var nav = function mynav() {

    if (window.pageYOffset > sticky) {
        x.classList.add('sticky');
		h.classList.add('u');


    } else {
        x.classList.remove('sticky');
		
		h.classList.remove('u');

    }

};
