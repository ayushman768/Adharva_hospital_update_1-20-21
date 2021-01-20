   //main  contant

   //  About start

   var a = function myAbout() {
       var body, article;
       //get body
       body = document.getElementById('body');
       //create article under body
       article = document.createElement('article');
       body.appendChild(article)
           //set class in article 
       article.setAttribute('class', 'article01');
	   article.setAttribute('id','About')
       //create some basic elements in article 
       article.innerHTML += '<div class="container"><div class="row"></div></div>';

       var a_El = [{
           headin01: "Welcome to Atharva Hospital",
           a_content: "Atharva hospitals 15 Beded Near Nutan Chowk, Sarkanda, Bilaspur is run by Dr. Monika Mahilong (Optho.) and Dr. Deepak Kumar (Ped.) provides modern Medical & Surgical Facilities for children and cataract surgery (Phaco process) of eyes.",
           about_image: "images/about_bannner.png"
       }]
       document.querySelector('article>.container>.row').innerHTML += `
        <div class="col-md-6">
            <div class="my_about">
                <h2>${a_El[0].headin01}</h2>
                <p>${a_El[0].a_content}</p>
            </div>
        </div>
        <div class="col-md-6">
            <div class="my_about">
               <img src="${a_El[0].about_image}" class="img-thumbnail">
            </div>
        </div>
       `;


   }
   a();