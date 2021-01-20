//  About start

var g = function mgallryt() {
    var body, article;
    //get body
    body = document.getElementById('body');
    //create article under body
    article = document.createElement('article');
    body.appendChild(article)
        //set class in article 
    article.setAttribute('class', 'article05');
	article.setAttribute('id','Gallery')
    //create some basic elements in article 
    article.innerHTML += '<div class="container"><div class="row text-center"><h6>Our Gallery</h6></div></div>';

    var mygal = function(img) {
        this.img = img;
    }
    var img01 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-01.jpg');
    var img02 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-2.jpg');
    var img03 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-galleru-3.jpg');
    var img04 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-4.jpg');
    var img05 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-5.jpg');
    var img06 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-6.jpg');
    var img07 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-7.jpg');
    var img08 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-w5dgwehwvf.jpg');
    var img09 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-10.jpg');
    var img10 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-11.jpg');
    var img11 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-12.jpg');
    var img12 = new mygal('images/atharv-hospital-sarkanda-bilaspur-chhattisgarh-hospitals-gallery-13.jpg');




    var arr = [img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12];
    for (var i in arr) {
        document.querySelector('.article05>.container>.row').innerHTML += `
           <div class="col-md-3">
               <div class="myGallery">
                   <img src="${arr[i].img}" alt="${arr[i].img}">
               </div>
           </div>
        `;
    }

}
g();