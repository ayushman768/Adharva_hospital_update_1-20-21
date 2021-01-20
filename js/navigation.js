//navigation strat

var n = function nav() {
    // get body
    var body = document.getElementById('body');
    //create nav tag
    var nav = document.createElement('nav');
    body.appendChild(nav);
    // /create Some basic elements in nav
    nav.innerHTML += '<div class="container"><div class="row"></div></div>';

    var mynav = [{
        nav01: "Home",
        nav02: "About",
        nav03: "Service",
        nav04: "Gallery",
        nav05: "Contact Us",
        nav06: "Get Appointment"
    }]
    document.querySelector('nav>.container>.row').innerHTML += `
    <div class="col-md-6">
        <div class="navigation">
            <ul class="navbar-nav nav pad-10">
                <li><a href="#${mynav[0].nav01}">${mynav[0].nav01}</a></li>
                <li><a href="#${mynav[0].nav02}">${mynav[0].nav02}</a></li>
                <li><a href="#EyeCare">${mynav[0].nav03}</a></li>
                <li><a href="#${mynav[0].nav04}">${mynav[0].nav04}</a></li>
                <li><a href="#Contact">${mynav[0].nav05}</a></li>
            </ul>
        </div>
    </div>
    <div class="col-md-6">
        <div class="navigation pull-right">
            <ul class="navbar-nav nav pad-10">
                <li><a href="#dr" class="mybtn">${mynav[0].nav06}</a></li>
            </ul>
        </div>
    </div>
`;

    

}
n();