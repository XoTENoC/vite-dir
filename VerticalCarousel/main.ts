class VerticalCarousel {
	private containerEl: HTMLElement;
	private labelBackground: HTMLElement;
	private labelEls: NodeListOf<HTMLElement>;
	private imageEls: NodeListOf<HTMLElement>;
	private dotEls: NodeListOf<HTMLElement>;

	private selectedHeight: Number;
	private movementOffset: Number;

	constructor(el: HTMLElement) {
		this.containerEl = el;

		this.init();
	}

	private init() {
		this.labelBackground = this.containerEl.querySelector(".js-vertical-carousel-label-background");
		this.labelEls = this.containerEl.querySelectorAll(".js-vertical-carousel-label");
		this.imageEls = this.containerEl.querySelectorAll(".js-vertical-carousel-image");
		this.dotEls = this.containerEl.querySelectorAll(".js-vertical-carousel-dot");

		this.setUpClickEvents();
		this.setupHover();
	}

	private setUpClickEvents() {
		this.labelEls.forEach(label => {
			label.addEventListener("click", () => {
				const step = label.dataset.step;

				this.RemoveActive();
				this.AddActive(step);
				this.MoveHover(step);
			})
		})
	}

	private setupHover() {
		this.selectedHeight = this.labelEls[0].offsetHeight;
		this.movementOffset = this.labelEls[1].offsetHeight;

		this.labelBackground.style.height = `${this.selectedHeight}px`;
	}

	private RemoveActive() {
		this.labelEls.forEach(label => {
			label.classList.remove("is-active");
		});

		this.imageEls.forEach(image => {
			image.classList.remove("is-active");
		});

		this.dotEls.forEach(dot => {
			dot.classList.remove("is-active");
		});
	}

	private AddActive(step: String) {
		this.labelEls.forEach(label => {
			if(label.dataset.step === step)
				label.classList.add("is-active");
		});

		this.imageEls.forEach(image => {
			if(image.dataset.step === step)
				image.classList.add("is-active");
		});

		this.dotEls.forEach(dot => {
			if(dot.dataset.step === step)
				dot.classList.add("is-active");
		});
	}

	private MoveHover(step: String) {
		const translateAmount = (+step - 1) * this.movementOffset;
		console.log(translateAmount);
		this.labelBackground.style.transform = `translateY(${translateAmount}px)`;
	}
}

class fooClass {
	constructor() {
		const holder = document.querySelector<HTMLElement>(".js-vertical-carousel");
		window.addEventListener("load", () => {
			new VerticalCarousel(holder as HTMLElement);
		});
	}
}

new fooClass();
