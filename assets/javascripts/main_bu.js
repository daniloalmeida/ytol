// JavaScript Document

$(document).ready(function() {
	
	function goSocial() {
		$('a#link-go-social').click(function(event) {
			$('html, body').animate({
				scrollTop: $("#fb-container").offset().top
			}, 1000);
		});
	}
	
	function noPageModal() {
		var myUrl = window.top.location.href;
		var isNoPage = myUrl.indexOf("#nopage");
		var msgSuccess = myUrl.indexOf("#msgtrue");
		
		if ( isNoPage != -1 ){
			$('div#modal-container').fadeIn('fast');
			$('div#modal-container a#close-modal').click(function(event) {
				$('div#modal-container').fadeOut('fast');
			});
		};
		
		$('li.nav-link a').click(function(event) {
			if ( isNoPage != -1 ){
				$('div#modal-container').fadeIn('fast');
				$('div#modal-container a#close-modal').click(function(event) {
					$('div#modal-container').fadeOut('fast');
				});
			};
		});
		
		if ( msgSuccess != -1 ){
			$('div#modal-container').fadeIn('fast');
			$('div#modal-container div#modal-window h2').text('Message Sent Successfully!');
			$('div#modal-container div#modal-window p').text('Thank you very much for your message! We will get back to you soon!');
			$('div#modal-container a#close-modal').click(function(event) {
				$('div#modal-container').fadeOut('fast');
			});
		};
	}
	
	function homeMaryAnimation() {
		var hasMary = $('div#right-col-Mary').length;
		if ( hasMary > 0 ){
			$('div#right-col-Mary img').load(function() {
				$('div#right-col-Mary').css('right', '-550px');
				$('div#right-col-Mary').animate({
					opacity: 1,
					display: "block",
					right: "-250px"
				}, "slow");
			});
		};
	}
	
	function populateDob() {
		var hasDob = $('div.ytol-dob').length;
		if ( hasDob > 0 ){
			var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
			
			$('select#new-dob-day').append('<option value="Day">Day</option>');
			for (var i = 0; i < 31; i++) {
				$('select#new-dob-day').append('<option value="'+(i+1)+'">'+(i+1)+'</option>');
			};
			
			$('select#new-dob-month').append('<option value="Month">Month</option>');
			for (var m = 0; m < monthArray.length; m++) {
				$('select#new-dob-month').append('<option value="'+(m+1)+'">'+(monthArray[m])+'</option>');
			};
			
			$('select#new-dob-year').append('<option value="Year">Year</option>');
			for (var y = 2013; y > 1900; y--) {
				$('select#new-dob-year').append('<option value="'+(y)+'">'+(y)+'</option>');
			};
		};
	}
	
	function populateCountries(){
		var hasCountry = $('div.has-country').length;
		if ( hasCountry > 0 ){
			var allCountries = new Array("Afghanistan", "Akrotiri", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Australia", "Austria", "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Bassas da India", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Coral Sea Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dhekelia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jersey", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paracel Islands", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tromelin Island", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");
			$('select#new-country').append('<option value="Select">Select</option>');
			for (var i = 0; i < allCountries.length; i++) {
				$('select#new-country').append('<option value="'+allCountries[i]+'">'+allCountries[i]+'</option>');
			};
		};
	}
	
	function docsSearch() {
		var isDocs = $('div#ytol-documents').length;
		if ( isDocs > 0 ){
			$('div.search-bar input#search-input').focus(function(event) {
				$(this).val("");
			});
			$('div.search-bar input#search-input').keypress(function(event) {
				if ( event.which == 13 ) {
					event.preventDefault();
					var myValue = $(this).val().toLowerCase();
					$('div#docs-container ul li').hide();

					$('div#docs-container ul li span.keywords').each(function(index) {
						if ( myValue != "" ){
							var myKeys = $(this).text().toLowerCase();
							if ( myKeys.indexOf(myValue) != -1 ){
								$(this).parent('li').show();
							};
						}else{
							$(this).parent('li').show();
						};
					});
				}
			});
		};
	}
	
	function ourMediaImgs(){
		var onMedia = $('div#media-container').length;
		
		if ( onMedia > 0 ){
			
			$('div.media-photo img').each(function(index) {
				$(this).resizeToParent({parent: 'a'});
			});
			
		};
	}
	
	function mediaSearch() {
		var onMedia = $('div#media-container').length;
		if ( onMedia > 0 ){
			$('div.search-bar input#search-input').focus(function(event) {
				$(this).val("");
			});
			$('div.search-bar input#search-input').keypress(function(event) {
				if ( event.which == 13 ) {
					event.preventDefault();
					var myValue = $(this).val().toLowerCase();
					$('div#media-container div.media-box').hide();

					$('div#media-container div.media-box span.keywords').each(function(index) {
						if ( myValue != "" ){
							var myKeys = $(this).text().toLowerCase();
							if ( myKeys.indexOf(myValue) != -1 ){
								$(this).parent('div').show();
							};
						}else{
							$(this).parent('div').show();
						};
					});
				}
			});
		};
	}
	
	function mapModal() {
		var isMap = $('body.where-we-are').length;
		
		if ( isMap > 0 ){
			var imgArray = new Array("assets/images/where-we-are/responsibles/ytol-resp-brean.jpg",			// INTERNATIONAL
									"assets/images/where-we-are/responsibles/ytol-resp-melca.jpg",             // BRAZIL
									"assets/images/where-we-are/responsibles/ytol-resp-allan.jpg",          // COSTA RICA
									"assets/images/where-we-are/responsibles/ytol-resp-malanie.jpg",          // USA
									"assets/images/where-we-are/responsibles/ytol-resp-michael.jpg",          // CANADA
									"assets/images/where-we-are/responsibles/ytol-resp-rodolfo.jpg",        // PORTUGAL
									"assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg",        // ANGOLA
									"assets/images/where-we-are/responsibles/ytol-resp-juan.jpg",           // SPAIN
									"assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg",        // FRANCE
									"assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg",        // HAITI
									"assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg",        // ITALY
									"assets/images/where-we-are/responsibles/ytol-resp-joelle.jpg",        // LEBANON
									"assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg",        // MOZAMBIQUE
									"assets/images/where-we-are/responsibles/ytol-resp-george.jpg",        // SYRIA
									"assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg",        // PANAMA
									"assets/images/where-we-are/responsibles/ytol-resp-joelle.jpg");       // LEBANON
			
			var nameArray = new Array("Brean Bettencourt",							// INTERNATIONAL
									"Melca Pontes",                              	// BRAZIL
									"Allan R. Berrocal",                            // COSTA RICA
									"Malanie Oliveira",                             // USA
									"Michael Walecki",                              // CANADA
									"Rodolfo Nona",                                 // PORTUGAL
									"Janio",                                        // ANGOLA
									"Juan Carvajo Lucena",                          // SPAIN
									"Coming Soon...",                               // FRANCE
									"Coming Soon...",                               // HAITI
									"Coming Soon...",                               // ITALY
									"Joelle Azar",                                  // LEBANON
									"Coming Soon...",                               // MOZAMBIQUE
									"George Koko",                                  // SYRIA
									"Coming Soon...",                               // PANAMA
									"Joelle Azar");                                 // LEBANON
			
			var funArray = new Array("International Responsible",					// INTERNATIONAL
									"National Responsible - Brazil",                // BRAZIL
									"National Responsible - Costa Rica",            // COSTA RICA
									"National Responsible - USA",                   // USA
									"National Responsible - Canada",                // CANADA
									"National Responsible - Portugal",              // PORTUGAL
									"National Responsible - Angola",                // ANGOLA
									"National Responsible - Spain",                 // SPAIN
									"National Responsible - France",                // FRANCE
									"National Responsible - Haiti",                 // HAITI
									"National Responsible - Italy",                 // ITALY
									"National Responsible - Lebanon",               // LEBANON
									"National Responsible - Mozambique",            // MOZAMBIQUE
									"National Responsible - Syria",                 // SYRIA
									"National Responsible - Panama",                // PANAMA
									"National Responsible - Lebanon");              // LEBANON
									
			var mailArray = new Array("responsible@ytolinternational.com",			// INTERNATIONAL
									"responsavel.nacional@ejnsbrasil.com.br",		// BRAZIL
									"ensjcostarica@hotmail.com",					// COSTA RICA
									"yatolus@gmail.com",							// USA
									"ytolcanada@gmail.com",							// CANADA
									"responsavelnacional@gmail.com",				// PORTUGAL
									"janiozbela1@hotmail.com",						// ANGOLA
									"nacional@ensjovenes.es",					    // SPAIN
									"responsable.national@endj.fr",					// FRANCE
									"endjdhaiti@gmail.com",							// HAITI
									"resp.nazionale@endg.it",						// ITALY
									"endj.liban@gmail.com",							// LEBANON
									"ccmassona@yahoo.com.br",						// MOZAMBIQUE
									"basselelias@hotmail.com",						// SYRIA
									"responsible@ytolinternational.com",			// PANAMA
									"endj.liban@gmail.com");						// LEBANON
			
			var siteArray = new Array("http://www.ytolinternational.com",				// INTERNATIONAL
									"http://www.ejnsbrasil.com.br",						// BRAZIL
									"http://www.ensjcostarica.blogspot.com.br",			// COSTA RICA
									"http://yatolus.wix.com/yatolusa",					// USA
									"http://www.ytol.org",								// CANADA
									"http://ejnsportugal.weebly.com",					// PORTUGAL
									"http://ejns-angola.blogspot.com.br",				// ANGOLA
									"http://www.ensjovenes.es",							// SPAIN
									"http://www.ytolinternational.com",					// FRANCE
									"http://www.ytolinternational.com",					// HAITI
									"http://www.endg.it",								// ITALY
									"http://www.ytolinternational.com",					// LEBANON
									"http://www.ytolinternational.com",					// MOZAMBIQUE
									"http://www.ytolinternational.com",					// SYRIA
									"http://www.ytolinternational.com",					// PANAMA
									"http://www.ytolinternational.com");				// LEBANON
															
			var descArray = new Array("","","",	"",	"",	"",	"",	"",	"",	"",	"",	"",	"",	"",	"",	"");
			
			var currentIndex = 0;
			
			$('div#modal-window-glass').height(330);
			$('div#modal-window').height(330);
			
			$('div#modal-form input').click(function(event) {
				$(this).val('');
			});
			$('div#modal-form input').focus(function(event) {
				$(this).val('');
			});
			
			$('div#modal-form textarea').click(function(event) {
				$(this).val('');
			});
			$('div#modal-form textarea').focus(function(event) {
				$(this).val('');
			});
			
			$('div.country-info li.country-action a').click(function(event) {
				$('div#modal-window').animate({"height": "650px"}, "fast");
				$('div#modal-window-glass').animate({"height": "650px"}, "fast");
				$('div#modal-form').slideDown('fast');
				
				$('input#msg-destination').val($(this).parents("ul").find('li:eq(2) a').text());
			});
			
			$('div.pin-map a').click(function(event) {
				event.preventDefault();
				
				$('div#modal-container div#modal-header h2').text($(this).text());
				$('div#modal-container').fadeIn('fast');
				
				$('div#modal-container div.country-info img').attr('src', imgArray[7]);
				
				currentIndex = $(this).attr('rel');
				
				if ( currentIndex == 3 ){
					$('div#modal-container div.country-info:eq(1)').css('display', 'block');
					$('div#modal-container div.country-info:eq(1) img').attr('src', imgArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(0)').text(nameArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(1)').text(funArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').text(mailArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').attr('href', mailArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').text(siteArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').attr('href', siteArray[0]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(4)').text(descArray[0]);
				}else if( currentIndex == 2 ){
					$('div#modal-container div.country-info:eq(1)').css('display', 'block');
					$('div#modal-container div.country-info:eq(1) img').attr('src', imgArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(0)').text(nameArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(1)').text(funArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').text(mailArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').attr('href', mailArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').text(siteArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').attr('href', siteArray[14]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(4)').text(descArray[14]);
				}else if( currentIndex == 5 ){
					$('div#modal-container div.country-info:eq(1)').css('display', 'block');
					$('div#modal-container div.country-info:eq(1) img').attr('src', imgArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(0)').text(nameArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(1)').text(funArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').text(mailArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').attr('href', mailArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').text(siteArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').attr('href', siteArray[7]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(4)').text(descArray[7]);
				}else if( currentIndex == 13 ){
					$('div#modal-container div.country-info:eq(1)').css('display', 'block');
					$('div#modal-container div.country-info:eq(1) img').attr('src', imgArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(0)').text(nameArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(1)').text(funArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').text(mailArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(2) a').attr('href', mailArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').text(siteArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(3) a').attr('href', siteArray[15]);
					$('div#modal-container div.country-info:eq(1) ul li:eq(4)').text(descArray[15]);
				}else{
					$('div#modal-container div.country-info:eq(1)').css('display', 'none');
				};
				
				$('div#modal-container div.country-info:eq(0) img').attr('src', imgArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(0)').text(nameArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(1)').text(funArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(2) a').text(mailArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(2) a').attr('href', mailArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(3) a').text(siteArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(3) a').attr('href', siteArray[currentIndex]);
				$('div#modal-container div.country-info:eq(0) ul li:eq(4)').text(descArray[currentIndex]);
				
			});
			
			$('div#modal-container div#modal-header a').click(function(event) {
				$('div#modal-window-glass').height(330);
				$('div#modal-window').height(330);
				$('div#modal-form').css('display', 'none');
				
				$('div#modal-container').fadeOut('fast');
			});
		};
	}
	
	function setupImModal(){
		$('div#modal-im').hide();
	}
	
	function setupYearUpdate(){
		var getDate = new Date();
		var getYear = getDate.getFullYear();
		$('span.year-update').text(getYear);
	}
	
	goSocial();
	noPageModal();
	homeMaryAnimation();
	populateDob();
	populateCountries();
	docsSearch();
	ourMediaImgs();
	mediaSearch();
	mapModal();
	setupImModal();
	setupYearUpdate();
	
});
