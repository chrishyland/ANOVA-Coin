// Load Header and Footer
$(function(){
	$("#load_header").load("/header.html");
	$("#load_footer").load("/footer.html");
});

// Hide homepage slider indicator on mobile devices
document.onload = HideIndicators();
function HideIndicators() {
	if (document.getElementsByClassName("carousel-indicators")
	 && $(window).width() < 768) {
		document.getElementsByClassName("carousel-indicators")[0].innerHTML = "";
	}
}

$( window ).resize(function() {
	windowsize = $(window).width();
	if (document.getElementsByClassName("carousel-indicators")) {
		if (windowsize < 768) {
			document.getElementsByClassName("carousel-indicators")[0].innerHTML = "";
		} else {
			document.getElementsByClassName("carousel-indicators")[0].innerHTML =
				`<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
				 <li data-target="#myCarousel" data-slide-to="1"></li>
				 <li data-target="#myCarousel" data-slide-to="2"></li>`;
		}
	}
});

// When click or scrolling outside the dropdown menu, hide the menu
// $(document).on('click',function(){
//    $('#navbar-collapse-x').collapse('hide');
// });
// $(document).on('scroll',function(){
//    $('#navbar-collapse-x').collapse('hide');
// });

// Facebook plugin
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s);
	js.id = id;
	js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.11';
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function openNav() {
    document.getElementById("my-nav").style.height = "100%";
}
function closeNav() {
    document.getElementById("my-nav").style.height = "0%";
}

// Scroll Reveal
window.sr = ScrollReveal({reset: true});
sr.reveal('.scroll-animation', {duration: 1700});
sr.reveal('.scroll-animation .student', {
	duration: 2000,
	origin: 'left',
	distance: '100px'
});
sr.reveal('.scroll-animation .industry', {
	duration: 2000,
	origin: 'right',
	distance: '100px'
});
sr.reveal('.scroll-animation-list p', {duration: 1700}, 400);
