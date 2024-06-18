
  class Accordions {
	constructor(element, options = {}) {
		this.element = element;
		this.headers = this.element.querySelectorAll(".next-header");
		this.panels = this.element.querySelectorAll(".panel");
		this.options = {
			closeDelay: options.closeDelay ? options.closeDelay : 300,
			oneActiveOnly: options.oneActiveOnly ? options.oneActiveOnly : false
		};

		this.init();
	}

	init() {
		const items = this.element.querySelectorAll(".item");

		items.forEach((item, index) => {
			const header = item.querySelector(".next-header");

			header.setAttribute("aria-expanded", "false");

			header.addEventListener("click", (e) => {
				const panel = item.querySelector(".panel");

				if (this.options.oneActiveOnly) {
					this.panels.forEach((region, index) => {
						if (region !== panel) {
							this.headers[index].setAttribute("aria-expanded", "false");
							this.togglePanel(region, false);
						}
					});
				}

				if (header.getAttribute("aria-expanded") == "false") {
					header.setAttribute("aria-expanded", "true");
					this.togglePanel(panel, true);
				} else {
					header.setAttribute("aria-expanded", "false");
					this.togglePanel(panel, false);
				}
			});
		});

	}

	togglePanel(panel, show) {
		if (show) {
			panel.removeAttribute("hidden");
		} else {
			setTimeout(() => {
				panel.setAttribute("hidden", "");
			}, 300);
		}
	}
}

const accordions = new Accordions(document.querySelector(".accordions"));

function changeLanguage(lang) {
    var aboutElement = document.getElementById("about");
    var coursesElement = document.getElementById("courses");
    var newsElement = document.getElementById("news");
    var header_btn = document.getElementById("header_btn");
    var hero_title = document.getElementById("hero_title");
    var hero_span = document.getElementById("hero_span");
    var hero_text = document.getElementById("hero_text");
    var hero_link = document.getElementById("hero_link");
    var section_title = document.getElementById("section_title");

    if (lang === 'en') {
        aboutElement.innerHTML = "About Us";
        coursesElement.innerHTML = "Courses";
        newsElement.innerHTML = "News";
        header_btn.innerHTML = "Free consultation";
        hero_title.innerHTML = "A reliable future based on experience";
        hero_text.innerHTML = "Get your portfolio in a short period";
        hero_link.innerHTML = "Submit Request";
        section_title.innerHTML = "Why Us?";
        
    } else if (lang === 'ru') {
        aboutElement.innerHTML = "O нас";
        coursesElement.innerHTML = "Курсы";
        newsElement.innerHTML = "Новости";
        header_btn.innerHTML = "Бесплатная консультация";
        hero_title.innerHTML = "Надежное будущее, основанное на опыте";
        hero_text.innerHTML = "Владейте своим портфолио в короткие сроки";
        hero_link.innerHTML = "Подать запрос";
        section_title.innerHTML = "Почему мы?";
        
    } else {
        aboutElement.innerHTML = "Biz haqimizda";
        coursesElement.innerHTML = "Kurslar";
        newsElement.innerHTML = "Yangiliklar";
        header_btn.innerHTML = "Bepul konsultatsiya";
        hero_title.innerHTML = "Tajribaga asoslangan ishonchli kelajak";
        hero_text.innerHTML = "Qisqa muddatda o'z portfolioyingizga ega bo'ling";
        hero_link.innerHTML = "Ariza qoldirish";
        section_title.innerHTML = "Nega aynan biz?";
    }
}


