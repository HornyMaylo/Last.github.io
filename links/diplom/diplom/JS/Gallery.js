const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	mousewheel: true,
	parallax: true,
	breakpoints: {
		0: {
			slidesPerView: 2.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})

let desc = document.querySelector('.description')
sliderMain.on('slideChange', e => {
	sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})

for (let i = 0; i < 10; i++) { 
	let title = document.querySelectorAll('.slider__title')[i]
	let text = document.querySelectorAll('.slider__text')[i]
	let btn = document.querySelectorAll('.slider__button')[i]
	let first = document.querySelectorAll('.slider__item')[i]

	first.addEventListener('click', event => {
		title.classList.toggle('opened')
		text.classList.toggle('opened')
		btn.classList.toggle('opened')
	})
}
