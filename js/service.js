//service strat 

var s = function myService() {
    var body, article;
    //get body
    body = document.getElementById('body');
    //create article
    article = document.createElement('article');
    body.appendChild(article);
    //set attribute
    article.setAttribute('class', 'article_01');
    article.setAttribute('id', 'EyeCare')
        // create some basic Elements in articles
    article.innerHTML += `<div class="container"><div class="row text-center"><h3>Our Services for Eye Care</h3></div></div>`;

    var service = class {
        constructor(image, service_name) {
            this.image = image;
            this.service_name = service_name;
        }
    }
    var service01 = new service('images/computereyetesting.jpg', 'Computer eye testing');
    var service02 = new service('images/eye-surgery-cataract-surgery.jpg', 'Cataract surgery');
    var service03 = new service('images/phaco_surgery_bilaspur_atharva+hospital.jpg', 'Phaco surgery');
    var service04 = new service('images/contact_Lens.jpg', 'Contact lenses');
    var service05 = new service('images/eetinopathy_of_Prematurity.jpg', 'Retinopathy of Prematurity');
    var service06 = new service('images/glaucoma_treatment.jpg', 'Glaucoma treatment');
    var service07 = new service('images/uveitis-treatment.png', 'Uveitis treatment');
    var service08 = new service('images/dry-eye-symptoms-treatment-causes.jpg', 'Dry eyes treatment');
    var service09 = new service('images/headache.jpg', 'Headache');
    var service10 = new service('images/computer-vision-syndrome-cvs-Homeopathic-treatment-india-bilaspur.jpg', 'computer vision syndrome');
    var service11 = new service('images/ocular_surface_disorders.jpg', 'Ocular surface disorders');

    var arr = [service01, service02, service03, service04, service05, service06, service07, service08, service09, service10, service11];

    for (var i in arr) {
        document.querySelector('.article_01>.container>.row').innerHTML += `
        <div class="col-md-3">
            <div class="myservice">
                <img src="${arr[i].image}">
                <p>${arr[i].service_name}</p>
            </div>
        </div>
`;
    }

    var body, article;
    //get body
    body = document.getElementById('body');
    //create article
    article = document.createElement('article');
    body.appendChild(article);
    //set attribute
    article.setAttribute('class', 'article_02');
    article.setAttribute('id', 'Chlidcare');
    // create some basic Elements in articles
    article.innerHTML += `<div class="container"><div class="row text-center"><h3>Our Services for Chlid care</h3></div></div>`;

    var service = class {
        constructor(image01, service_name01) {
            this.image01 = image01;
            this.service_name01 = service_name01;
        }
    }
    var ser01 = new service('images/emer24.png', '24 hours emergency care');
    var ser02 = new service('images/treatment_of_newborns.jpg', 'Treatment of newborns');
    var ser03 = new service('images/complete_immunization_every day.jpg', 'Complete immunization every day');
    var ser04 = new service('images/asthma.jpg', 'Asthma');
    var ser05 = new service('images/lung_cleaning_with_nebulizer.jpg', 'Lung cleaning with nebulizer');
    
    var ser07 = new service('images/blood-disorders.jpg', 'Blood related disease');
    var ser08 = new service('images/thalassemia.jpg', 'Thalassemia');
    var ser09 = new service('images/sikal_sel_anemia.jpg', 'Sikal cell anemia');
    var ser10 = new service('images/children_dietary_information.jpg', 'Children dietary information');
    var ser11 = new service('images/pilia-jaundice-causes-symptoms-and-treatment.jpg', 'Pilia treatment');
    arr01 = [ser01, ser02, ser03, ser04, ser05, ser07, ser08, ser09, ser10, ser11]
    for (var f in arr01) {
        document.querySelector('.article_02>.container>.row').innerHTML += `
        <div class="col-md-3">
            <div class="myservice">
                <img src="${arr01[f].image01}">
                <p>${arr01[f].service_name01}</p>
            </div>
        </div>
`;
    }

}
s();