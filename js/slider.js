//Slider
var mySlider = function myslider() {
    //get body 
    var body, section;
    body = document.getElementById('body');
    //create Section for banner
    section = document.createElement('section');
    body.appendChild(section);

    var sec_el = [{
        banner01: 'images/adharav_banner.jpg',
		banner02: 'images/adharav_banner_slider_2.png',	
		banner03: 'images/atharvhospitalsarkandabilaspurchhattisgarhhospitalsgallery12 (1).jpg',
		banner04: 'images/arvhospitalsarkandabilaspurchhattisgarhhospitalsgalleru3.jpg',
		banner05: 'images/atharvhospitalsarkandabilaspurchhattisgarhhospitalsgallery6.jpg'
    }]
    document.querySelector('section').innerHTML += `
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="${sec_el[0].banner01}" alt="${sec_el[0].banner01}">
                </div>

                <div class="item">
                    <img src="${sec_el[0].banner02}" alt="${sec_el[0].banner02}">
                </div> 
				<div class="item">
                    <img src="${sec_el[0].banner03}" alt="${sec_el[0].banner03}">
                </div>
				<div class="item">
                    <img src="${sec_el[0].banner04}" alt="${sec_el[0].banner04}">
                </div>
				<div class="item">
                    <img src="${sec_el[0].banner05}" alt="${sec_el[0].banner05}">
                </div>


            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    `;

}
mySlider();