// doctore article

var d = function myart() {
    var body, article;
    // get body
    body = document.getElementById('body');
    //create article
    article = document.createElement('article');
    body.appendChild(article);
    article.setAttribute('class', 'article03');
    article.setAttribute('id', 'dr');
    article.innerHTML += '<div class="container"><div class="row text-center"><h4>Our Doctors</h4></div></div>';

    var doctor = function(img, name, qualification, contact) {
        this.img = img;
        this.name = name;
        this.qualification = qualification;
        this.contact = contact;
    }
    var dr01 = new doctor('images/dr_monika_mahilang.png', 'Dr. Monika Mahilang', 'MBBS,MS(Opthalmology)', '77088-6363');
    var dr02 = new doctor('images/dr_deepak_kumar.png', 'Dr. Deepak Kumar', 'MBBS,MD (Paediatrics)', '84638-23155');

    arr = [dr01, dr02];
    for (var i in arr) {
        document.querySelector('.article03>.container>.row').innerHTML += `
           <div class="col-md-6">
               <div class="dr">
                <img  src="${arr[i].img}" class="img-responsive">
                  <h5> ${arr[i].name}</h5>
                  <p> ${arr[i].qualification}</p>
                  <a href="tel:${arr[i].contact}"><i class="fa fa-phone" style="font-size:18px"></i>  ${arr[i].contact}</a>
               </div>
           </div>
        `;
    }


}
d();