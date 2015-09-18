$(document).ready(function() {
    function a() {
        $("a#link-go-social").click(function() {
            $("html, body").animate({
                scrollTop: $("#fb-container").offset().top
            }, 1e3)
        })
    }

    function b() {
        var a = window.top.location.href,
            b = a.indexOf("#nopage"),
            c = a.indexOf("#msgtrue"); - 1 != b && ($("div#modal-container").fadeIn("fast"), $("div#modal-container a#close-modal").click(function() {
            $("div#modal-container").fadeOut("fast")
        })), $("li.nav-link a").click(function() {
            -1 != b && ($("div#modal-container").fadeIn("fast"), $("div#modal-container a#close-modal").click(function() {
                $("div#modal-container").fadeOut("fast")
            }))
        }), -1 != c && ($("div#modal-container").fadeIn("fast"), $("div#modal-container div#modal-window h2").text("Message Sent Successfully!"), $("div#modal-container div#modal-window p").text("Thank you very much for your message! We will get back to you soon!"), $("div#modal-container a#close-modal").click(function() {
            $("div#modal-container").fadeOut("fast")
        }))
    }

    function c() {
        var a = $("div#right-col-Mary").length;
        a > 0 && $("div#right-col-Mary img").load(function() {
            $("div#right-col-Mary").css("right", "-550px"), $("div#right-col-Mary").animate({
                opacity: 1,
                display: "block",
                right: "-250px"
            }, "slow")
        })
    }

    function d() {
        var a = $("div.ytol-dob").length;
        if (a > 0) {
            var b = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            $("select#new-dob-day").append('<option value="Day">Day</option>');
            for (var c = 0; 31 > c; c++) $("select#new-dob-day").append('<option value="' + (c + 1) + '">' + (c + 1) + "</option>");
            $("select#new-dob-month").append('<option value="Month">Month</option>');
            for (var d = 0; d < b.length; d++) $("select#new-dob-month").append('<option value="' + (d + 1) + '">' + b[d] + "</option>");
            $("select#new-dob-year").append('<option value="Year">Year</option>');
            for (var e = 2013; e > 1900; e--) $("select#new-dob-year").append('<option value="' + e + '">' + e + "</option>")
        }
    }

    function e() {
        var a = $("div.has-country").length;
        if (a > 0) {
            var b = new Array("Afghanistan", "Akrotiri", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Australia", "Austria", "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Bassas da India", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Coral Sea Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dhekelia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jersey", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paracel Islands", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tromelin Island", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");
            $("select#new-country").append('<option value="Select">Select</option>');
            for (var c = 0; c < b.length; c++) $("select#new-country").append('<option value="' + b[c] + '">' + b[c] + "</option>")
        }
    }

    function f() {
        var a = $("div#ytol-documents").length;
        a > 0 && ($("div.search-bar input#search-input").focus(function() {
            $(this).val("")
        }), $("div.search-bar input#search-input").keypress(function(a) {
            if (13 == a.which) {
                a.preventDefault();
                var b = $(this).val().toLowerCase();
                $("div#docs-container ul li").hide(), $("div#docs-container ul li span.keywords").each(function() {
                    if ("" != b) {
                        var c = $(this).text().toLowerCase(); - 1 != c.indexOf(b) && $(this).parent("li").show()
                    } else $(this).parent("li").show()
                })
            }
        }))
    }

    function g() {
        var a = $("div#media-container").length;
        a > 0 && $("div.media-photo img").each(function() {
            $(this).resizeToParent({
                parent: "a"
            })
        })
    }

    function h() {
        var a = $("div#media-container").length;
        a > 0 && ($("div.search-bar input#search-input").focus(function() {
            $(this).val("")
        }), $("div.search-bar input#search-input").keypress(function(a) {
            if (13 == a.which) {
                a.preventDefault();
                var b = $(this).val().toLowerCase();
                $("div#media-container div.media-box").hide(), $("div#media-container div.media-box span.keywords").each(function() {
                    if ("" != b) {
                        var c = $(this).text().toLowerCase(); - 1 != c.indexOf(b) && $(this).parent("div").show()
                    } else $(this).parent("div").show()
                })
            }
        }))
    }

    function i() {
        var a = $("body.where-we-are").length;
        if (a > 0) {
            var b = new Array("assets/images/where-we-are/responsibles/ytol-resp-brean.jpg", "assets/images/where-we-are/responsibles/ytol-resp-melca.jpg", "assets/images/where-we-are/responsibles/ytol-resp-allan.jpg", "assets/images/where-we-are/responsibles/ytol-resp-malanie.jpg", "assets/images/where-we-are/responsibles/ytol-resp-Justyna-Diana.jpg", "assets/images/where-we-are/responsibles/ytol-resp-rodolfo.jpg", "assets/images/where-we-are/responsibles/ytol-resp-janio.jpg", "assets/images/where-we-are/responsibles/ytol-resp-juan.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-joelle.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-george.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-joelle.jpg"),
                c = new Array("Brean Bettencourt", "Melca Pontes", "Allan R. Berrocal", "Malanie Oliveira", "Justyna Armatowicz & Diana Nega", "Rodolfo Nona", "Janio Joaquim Muandumba", "Juan Carvajo Lucena", "Coming Soon...", "Coming Soon...", "Coming Soon...", "Joelle Azar", "Coming Soon...", "George Koko", "Coming Soon...", "Joelle Azar"),
                d = new Array("International Responsible", "National Responsible - Brazil", "National Responsible - Costa Rica", "National Responsible - USA", "National Responsible - Canada", "National Responsible - Portugal", "National Responsible - Angola", "National Responsible - Spain", "National Responsible - France", "National Responsible - Haiti", "National Responsible - Italy", "National Responsible - Lebanon", "National Responsible - Mozambique", "National Responsible - Syria", "National Responsible - Panama", "National Responsible - Lebanon"),
                e = new Array("responsible@ytolinternational.com", "responsavel.nacional@ejnsbrasil.com.br", "ensjcostarica@hotmail.com", "yatolus@gmail.com", "ytolcanada@gmail.com", "responsavelnacional@gmail.com", "janiomuandumba@hotmail.com", "nacional@ensjovenes.es", "responsable.national@endj.fr", "endjdhaiti@gmail.com", "resp.nazionale@endg.it", "endj.liban@gmail.com", "ccmassona@yahoo.com.br", "endj.syria@gmail.com", "responsible@ytolinternational.com", "endj.liban@gmail.com"),
                f = new Array("http://www.ytolinternational.com", "http://www.ejnsbrasil.com.br", "http://www.ensjcostarica.blogspot.com.br", "http://www.yatolus.us", "http://www.ytol.org", "http://ejnsportugal.weebly.com", "http://ejns-angola.blogspot.com.br", "http://www.ensjovenes.weebly.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.endg.it", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com"),
                g = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                h = 0;
            $("div#modal-window-glass").height(330), $("div#modal-window").height(330), $("div#modal-form input").click(function() {
                $(this).val("")
            }), $("div#modal-form input").focus(function() {
                $(this).val("")
            }), $("div#modal-form textarea").click(function() {
                $(this).val("")
            }), $("div#modal-form textarea").focus(function() {
                $(this).val("")
            }), $("div.country-info li.country-action a").click(function() {
                $("div#modal-window").animate({
                    height: "650px"
                }, "fast"), $("div#modal-window-glass").animate({
                    height: "650px"
                }, "fast"), $("div#modal-form").slideDown("fast"), $("input#msg-destination").val($(this).parents("ul").find("li:eq(2) a").text())
            }), $("div.pin-map a").click(function(a) {
                a.preventDefault(), $("div#modal-container div#modal-header h2").text($(this).text()), $("div#modal-container").fadeIn("fast"), $("div#modal-container div.country-info img").attr("src", b[7]), h = $(this).attr("rel"), 3 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[0])) : 2 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[14])) : 5 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[7])) : 13 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[15])) : $("div#modal-container div.country-info:eq(1)").css("display", "none"), $("div#modal-container div.country-info:eq(0) img").attr("src", b[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(0)").text(c[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(1)").text(d[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(2) a").text(e[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(2) a").attr("href", e[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(3) a").text(f[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(3) a").attr("href", f[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(4)").text(g[h])
            }), $("div#modal-container div#modal-header a").click(function() {
                $("div#modal-window-glass").height(330), $("div#modal-window").height(330), $("div#modal-form").css("display", "none"), $("div#modal-container").fadeOut("fast")
            })
        }
    }

    function j() {
        $("div#modal-im").hide()
    }

    function k() {
        var a = new Date,
            b = a.getFullYear();
        $("span.year-update").text(b)
    }
    a(), b(), c(), d(), e(), f(), g(), h(), i(), j(), k()
});
$(document).ready(function() {
    function a() {
        $("a#link-go-social").click(function() {
            $("html, body").animate({
                scrollTop: $("#fb-container").offset().top
            }, 1e3)
        })
    }

    function b() {
        var a = window.top.location.href,
            b = a.indexOf("#nopage"),
            c = a.indexOf("#msgtrue"); - 1 != b && ($("div#modal-container").fadeIn("fast"), $("div#modal-container a#close-modal").click(function() {
            $("div#modal-container").fadeOut("fast")
        })), $("li.nav-link a").click(function() {
            -1 != b && ($("div#modal-container").fadeIn("fast"), $("div#modal-container a#close-modal").click(function() {
                $("div#modal-container").fadeOut("fast")
            }))
        }), -1 != c && ($("div#modal-container").fadeIn("fast"), $("div#modal-container div#modal-window h2").text("Message Sent Successfully!"), $("div#modal-container div#modal-window p").text("Thank you very much for your message! We will get back to you soon!"), $("div#modal-container a#close-modal").click(function() {
            $("div#modal-container").fadeOut("fast")
        }))
    }

    function c() {
        var a = $("div#right-col-Mary").length;
        a > 0 && $("div#right-col-Mary img").load(function() {
            $("div#right-col-Mary").css("right", "-550px"), $("div#right-col-Mary").animate({
                opacity: 1,
                display: "block",
                right: "-250px"
            }, "slow")
        })
    }

    function d() {
        var a = $("div.ytol-dob").length;
        if (a > 0) {
            var b = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
            $("select#new-dob-day").append('<option value="Day">Day</option>');
            for (var c = 0; 31 > c; c++) $("select#new-dob-day").append('<option value="' + (c + 1) + '">' + (c + 1) + "</option>");
            $("select#new-dob-month").append('<option value="Month">Month</option>');
            for (var d = 0; d < b.length; d++) $("select#new-dob-month").append('<option value="' + (d + 1) + '">' + b[d] + "</option>");
            $("select#new-dob-year").append('<option value="Year">Year</option>');
            for (var e = 2013; e > 1900; e--) $("select#new-dob-year").append('<option value="' + e + '">' + e + "</option>")
        }
    }

    function e() {
        var a = $("div.has-country").length;
        if (a > 0) {
            var b = new Array("Afghanistan", "Akrotiri", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Islands", "Australia", "Austria", "Azerbaijan", "Bahamas, The", "Bahrain", "Bangladesh", "Barbados", "Bassas da India", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Coral Sea Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Dhekelia", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jersey", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Navassa Island", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paracel Islands", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tromelin Island", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wake Island", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Zambia", "Zimbabwe");
            $("select#new-country").append('<option value="Select">Select</option>');
            for (var c = 0; c < b.length; c++) $("select#new-country").append('<option value="' + b[c] + '">' + b[c] + "</option>")
        }
    }

    function f() {
        var a = $("div#ytol-documents").length;
        a > 0 && ($("div.search-bar input#search-input").focus(function() {
            $(this).val("")
        }), $("div.search-bar input#search-input").keypress(function(a) {
            if (13 == a.which) {
                a.preventDefault();
                var b = $(this).val().toLowerCase();
                $("div#docs-container ul li").hide(), $("div#docs-container ul li span.keywords").each(function() {
                    if ("" != b) {
                        var c = $(this).text().toLowerCase(); - 1 != c.indexOf(b) && $(this).parent("li").show()
                    } else $(this).parent("li").show()
                })
            }
        }))
    }

    function g() {
        var a = $("div#media-container").length;
        a > 0 && $("div.media-photo img").each(function() {
            $(this).resizeToParent({
                parent: "a"
            })
        })
    }

    function h() {
        var a = $("div#media-container").length;
        a > 0 && ($("div.search-bar input#search-input").focus(function() {
            $(this).val("")
        }), $("div.search-bar input#search-input").keypress(function(a) {
            if (13 == a.which) {
                a.preventDefault();
                var b = $(this).val().toLowerCase();
                $("div#media-container div.media-box").hide(), $("div#media-container div.media-box span.keywords").each(function() {
                    if ("" != b) {
                        var c = $(this).text().toLowerCase(); - 1 != c.indexOf(b) && $(this).parent("div").show()
                    } else $(this).parent("div").show()
                })
            }
        }))
    }

    function i() {
        var a = $("body.where-we-are").length;
        if (a > 0) {
            var b = new Array("assets/images/where-we-are/responsibles/ytol-resp-brean.jpg", "assets/images/where-we-are/responsibles/ytol-resp-melca.jpg", "assets/images/where-we-are/responsibles/ytol-resp-allan.jpg", "assets/images/where-we-are/responsibles/ytol-resp-malanie.jpg", "assets/images/where-we-are/responsibles/ytol-resp-Justyna-Diana.jpg", "assets/images/where-we-are/responsibles/ytol-resp-rodolfo.jpg", "assets/images/where-we-are/responsibles/ytol-resp-janio.jpg", "assets/images/where-we-are/responsibles/ytol-resp-juan.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-joelle.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-george.jpg", "assets/images/where-we-are/responsibles/ytol-resp-no-prof.jpg", "assets/images/where-we-are/responsibles/ytol-resp-joelle.jpg"),
                c = new Array("Brean Bettencourt", "Melca Pontes", "Allan R. Berrocal", "Melanie Oliveira", "Justyna Armatowicz & Diana Nega", "Rodolfo Nona", "Janio Joaquim Muandumba", "Juan Carvajo Lucena", "Coming Soon...", "Coming Soon...", "Coming Soon...", "Joelle Azar", "Coming Soon...", "George Koko", "Coming Soon...", "Joelle Azar"),
                d = new Array("International Responsible", "National Responsible - Brazil", "National Responsible - Costa Rica", "National Responsible - USA", "National Responsible - Canada", "National Responsible - Portugal", "National Responsible - Angola", "National Responsible - Spain", "National Responsible - France", "National Responsible - Haiti", "National Responsible - Italy", "National Responsible - Lebanon", "National Responsible - Mozambique", "National Responsible - Syria", "National Responsible - Panama", "National Responsible - Lebanon"),
                e = new Array("responsible@ytolinternational.com", "responsavel.nacional@ejnsbrasil.com.br", "ensjcostarica@hotmail.com", "yatolus@gmail.com", "ytolcanada@gmail.com", "responsavelnacional@gmail.com", "janiomuandumba@hotmail.com", "nacional@ensjovenes.es", "responsable.national@endj.fr", "endjdhaiti@gmail.com", "resp.nazionale@endg.it", "endj.liban@gmail.com", "ccmassona@yahoo.com.br", "endj.syria@gmail.com", "responsible@ytolinternational.com", "endj.liban@gmail.com"),
                f = new Array("http://www.ytolinternational.com", "http://www.ejnsbrasil.com.br", "http://www.ensjcostarica.blogspot.com.br", "http://www.yatolus.us", "http://www.ytol.org", "http://ejnsportugal.weebly.com", "http://ejns-angola.blogspot.com.br", "http://www.ensjovenes.weebly.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.endg.it", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com", "http://www.ytolinternational.com"),
                g = new Array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""),
                h = 0;
            $("div#modal-window-glass").height(330), $("div#modal-window").height(330), $("div#modal-form input").click(function() {
                $(this).val("")
            }), $("div#modal-form input").focus(function() {
                $(this).val("")
            }), $("div#modal-form textarea").click(function() {
                $(this).val("")
            }), $("div#modal-form textarea").focus(function() {
                $(this).val("")
            }), $("div.country-info li.country-action a").click(function() {
                $("div#modal-window").animate({
                    height: "650px"
                }, "fast"), $("div#modal-window-glass").animate({
                    height: "650px"
                }, "fast"), $("div#modal-form").slideDown("fast"), $("input#msg-destination").val($(this).parents("ul").find("li:eq(2) a").text())
            }), $("div.pin-map a").click(function(a) {
                a.preventDefault(), $("div#modal-container div#modal-header h2").text($(this).text()), $("div#modal-container").fadeIn("fast"), $("div#modal-container div.country-info img").attr("src", b[7]), h = $(this).attr("rel"), 3 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[0]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[0])) : 2 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[14]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[14])) : 5 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[7]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[7])) : 13 == h ? ($("div#modal-container div.country-info:eq(1)").css("display", "block"), $("div#modal-container div.country-info:eq(1) img").attr("src", b[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(0)").text(c[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(1)").text(d[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").text(e[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(2) a").attr("href", e[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").text(f[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(3) a").attr("href", f[15]), $("div#modal-container div.country-info:eq(1) ul li:eq(4)").text(g[15])) : $("div#modal-container div.country-info:eq(1)").css("display", "none"), $("div#modal-container div.country-info:eq(0) img").attr("src", b[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(0)").text(c[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(1)").text(d[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(2) a").text(e[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(2) a").attr("href", e[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(3) a").text(f[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(3) a").attr("href", f[h]), $("div#modal-container div.country-info:eq(0) ul li:eq(4)").text(g[h])
            }), $("div#modal-container div#modal-header a").click(function() {
                $("div#modal-window-glass").height(330), $("div#modal-window").height(330), $("div#modal-form").css("display", "none"), $("div#modal-container").fadeOut("fast")
            })
        }
    }

    function j() {
        $("div#modal-im").hide()
    }

    function k() {
        var a = new Date,
            b = a.getFullYear();
        $("span.year-update").text(b)
    }
    a(), b(), c(), d(), e(), f(), g(), h(), i(), j(), k()
});