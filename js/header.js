var x = function headerStart() {
    //header Start
    /////get body
    var body = document.getElementById('body');
    //create Header
    var header = document.createElement('header');
	header.setAttribute('id','Home')
	
    body.appendChild(header);
	
    //create basic Elements under header
    header.innerHTML += '<div class="container"><div class="row"></div></div>';

    var h_c = class Headerelemement {
        constructor(logo, phone, email) {
            this.logo = logo;
            this.phone = phone;
            this.email = email;
        }
    }
    var m_ele = new h_c('Atharv Hospital', '077524 00825', 'dr.deepak.tandan84@gmail.com');
    document.querySelector('header>.container>.row').innerHTML += `
	
    <div class="col-md-6">
        <div class="myLogo">
            <h1><i class="fa fa-bars menu_bar" aria-hidden="true" onclick="My_menu()"></i> ${m_ele.logo}</h1>
        </div>
    </div>
    
    <div class="col-md-6">
        <div class="mywidget">
            <ul class="nav navbar-nav pad-10 ">
                <li><a href="tel:${m_ele.phone}"><i class="fa fa-phone" style="font-size:18px"></i>   ${m_ele.phone}</a></li>
                <li><a href="mailto:${m_ele.email}"><i class="fa fa-envelope" style="font-size:18px;color:white;"></i>   ${m_ele.email}</a></li>
            </ul>
        </div>
    </div>
  `;



}
x();