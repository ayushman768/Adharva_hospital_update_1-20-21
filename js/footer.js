(function() {

    var body = document.getElementById('body');
    var footer = document.createElement('footer');
    body.appendChild(footer);
	footer.setAttribute('id','Contact')
    footer.setAttribute('class', 'pad-10');
    footer.innerHTML += "<div class='layer'><div class='container'><div class='row'></div></div></div>";
    var Footer_Data = [{
            footer_nav01: "Home",
            footer_nav02: "About",
            footer_nav03: "Service",
            footer_nav04: "Gallery",
            footer_nav05: "Contact Us"
        },
        {
            footer_Service01: "24 Hours Emergency Operation",
            footer_Service02: "Treatment & Operation",
            footer_Service03: "Complete immunization every day",
        },
        {
            footer_adsress: "front of family planning Office(CMHO),Nutan Chowk,Seepat Road,Sarkanda Bilaspur",
            footer_phone: "07752-400825",
            footer_phone01: "81035-71337",
            footer_email: "dr.deepak.tandan84@gmail.com"
        }
    ];
    document.querySelector('footer>.layer>.container>.row').innerHTML += `
        <div class="col-md-4">
        <div class="footer_nav">
            <p><b>My Navigation</b></p>
             <ul>
				
				<li>
					<iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Frainbowhospitalbilaspur.in%2F&layout=button_count&size=large&appId=314664339193680&width=88&height=28" width="88" height="28" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
				</li>
				<li>
					<a data-action="share/whatsapp/share" href="whatsapp://send?text=http://rainbowhospitalbilaspur.in/" title="Adharva Hospital whatsapp number">
					<img id="whatsapp" src="https://1.bp.blogspot.com/-710D4dnbKKE/WPOEG8eaRNI/AAAAAAAAB2g/olpVqcQiKdMmGHEjVkcEJWxDVEhs5qr5wCLcB/s1600/Whatsapp-48.png" style="width:58px"></a>
				</li>
				<li>
				   <a target="_blank" href="tel:07752-400825">
					  <img src="images/atharva-hospital-Phone-Number.png" style="width:70px;" alt="adhrva_hospital  phone Number Bilaspur Chhattisgarh" >
				   </a>
				</li>
				<li>
					<a target="_blank" href="mailto:dr.deepak.tandan84@gmail.com">
						<span class="glyphicon glyphicon-envelope" style="font-size:36px;border:1px solid rgb(41 16 97);    left: 18px;"></span>
					</a>
				</li>
				

			</ul>
        </div>
    </div>
    <div class="col-md-4">
        <div class="footer_nav">
            <p><b>Our facilities</b></p>
            <ul>
                <li><a href="">${Footer_Data[1].footer_Service01}</a>
                </li>
                <li><a href="">${Footer_Data[1].footer_Service02}</a>
                </li>
                <li><a href="">${Footer_Data[1].footer_Service03}</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="col-md-4">
        <div class="footer_nav">
            <p><b>Address</b></p>
            <ul class="pad-10">
                <li><a href=""><i class="fa fa-map-marker" style="font-size:24px"></i>  ${Footer_Data[2].footer_adsress}</a>
                </li>
                <li><a href="tel:${Footer_Data[2].footer_phone}"><i class="fa fa-phone" style="font-size:18px"></i> ${Footer_Data[2].footer_phone}</a>
                </li>
                <li><a href="tel:${Footer_Data[2].footer_phone01}"><i class="fa fa-phone" style="font-size:18px"></i> ${Footer_Data[2].footer_phone01}</a>
                </li>
                <li><a href="mailto:${Footer_Data[2].footer_email}"><i class="fa fa-envelope" style="font-size:18px;color:white;"></i>  ${Footer_Data[2].footer_email}</a>
                </li>
            </ul>
        </div>

    </div>
    <div class="footer_bottom"></div>
     `;

})(); //footer function