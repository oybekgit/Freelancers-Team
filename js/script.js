window.addEventListener('DOMContentLoaded', () => {
	let loader = document.querySelector('.loader')
	setTimeout(() => {
		loader.style.opacity = '0'
		setTimeout(() => {
			loader.style.display = 'none'
		}, 100);
	}, 2000);

	/* var soniyaa = 0
	function foiz() {
		soniyaa++
		if (soniyaa < 100) {
			setTimeout(() => {
				foiz()
				//	console.log(soniyaa);
				document.querySelector('.foiz').innerHTML = soniyaa + '%'
			}, 5);
		}
	}
	foiz() */
})
window.addEventListener('DOMContentLoaded', () => {
	/* let loader = document.querySelector('.loader')
	setTimeout(() => {
		loader.style.opacity = '0'
		setTimeout(() => {
			loader.style.display = 'none'
		}, 100);
	}, 1500);
 */
	var soniyaa = 0
	function foiz() {
		soniyaa++
		if (soniyaa < 100) {
			setTimeout(() => {
				foiz()
				//	console.log(soniyaa);
				document.querySelector('.foiz').innerHTML = soniyaa + '%'
			}, 15);
		}
	}
	foiz()
})

let nav = document.querySelector('.nav');
let navCont = document.querySelector('.nav__container');
var scrollBtn = document.querySelector('.scroll__up-btn')

window.addEventListener('scroll', () => {
	if (window.scrollY >= 300) {
		nav.style.top = '-100px'
		nav.style.opacity = '0'
		scrollBtn.classList.add('show')
	} if (window.scrollY > 400) {
		nav.style.position = 'fixed'
		nav.style.top = 0
		nav.style.width = '100%'
		navCont.style.boxShadow = 'unset'
		navCont.style.backgroundColor = 'rgb(211, 230, 255)'
		nav.style.opacity = '1'
		nav.style.backgroundColor = 'rgb(211, 230, 255)'
		nav.style.boxShadow = '0px 8px 10px rgba(0, 5, 36, 0.15)'
	} if (window.scrollY < 300) {
		nav.style.top = '40px'
		nav.style.position = 'absolute'
		scrollBtn.classList.remove('show')
		nav.style.backgroundColor = 'unset'
		navCont.style.backgroundColor = '#fff'
		nav.style.boxShadow = 'none'
		navCont.style.boxShadow = '0px 20px 40px rgba(0, 5, 36, 0.15)'
		nav.style.opacity = '1'
	}
});

scrollBtn.addEventListener('click', function () {
	window.location = '#body'
});

var navList = document.querySelector('.nav__list')
var navMenu = document.querySelector('.nav__menu')
var menuBtn = navMenu.querySelector('.menu__btn')
navMenu.addEventListener('click', () => {
	menuBtn.classList.toggle("fa-times")
	if (menuBtn.classList.contains("fa-times")) {
		navList.style.top = '0'
	} else {
		navList.style.top = '-100%'
	}
})

var colRight = document.querySelector('.col__right')
if (window.innerWidth <= 375) {
	colRight.innerHTML = `<a href="index.html" class="footer__logo">
		        <img src = "img/logo.png" alt="" class="f__logo">
			<p class="f__text">Freelancers<span>Team</span></p>
				</a>
			<p class="footer__text">Siz bizdan loyihangiz uchun kerak bo'ladigan barcha
							xizmatlarni topishingiz mumkin.</p>
			<div class="footer__icons">
				<a href="#!" class="fab fa-facebook-f"></a>
				<a href="#!" class="fab fa-instagram"></a>
				<a href="#!" class="fab fa-telegram-plane"></a>
			</div>`


}


// scroll reveal
ScrollReveal({
	reset: true,
	distance: '250px',
	duration: 1500,
	delay: 100,
});
ScrollReveal().reveal(' .narx__card, .about__item', { origin: 'bottom', });
ScrollReveal().reveal('.about-us__img, .wrapper, .savdo__foto, .header__content', { origin: 'left', duration: 800, });
ScrollReveal().reveal('.about-us__info, .savdo__content, .saytlar__card', { delay: 600, origin: 'right', });
ScrollReveal().reveal('.saytlar__card', { delay: 1, origin: 'bottom', duration: 2000, });
ScrollReveal().reveal('.header__foto', { delay: 600, origin: 'top', distance: '300px', duration: 2000, });

// counterUp
$(".count").counterUp({
	delay: 10,
	time: 1500
});