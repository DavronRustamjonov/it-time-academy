
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

		// TODO: Add keyboard support
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
