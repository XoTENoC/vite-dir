class tabAnimation {
	private tabEls: NodeListOf<HTMLElement>;
	private tabHover: HTMLElement;
	private tabContainer: HTMLElement;
	private lastOffsetX: number;
	private isFirstHover: boolean;

	constructor() {
		this.tabEls = document.querySelectorAll<HTMLElement>(".js-tab-item");
		this.tabHover = document.querySelector<HTMLElement>(".js-tab-hover");
		this.tabContainer = document.querySelector<HTMLElement>(".js-tab-container");
		this.lastOffsetX = 0;

		this.getSizeOfTabs();
		this.addEventListeners();
		this.isFirstHover = true;
	}

	private getSizeOfTabs () {
		const self = this;

		window.addEventListener("load", function() {
			let maxWidth = 0;
			const itemheight = self.tabEls[0].offsetHeight;

			self.tabEls.forEach(item => {
				const itemWidth = item.offsetWidth;
				if (itemWidth > maxWidth) {
					maxWidth = itemWidth;
				}
			});

			self.tabEls.forEach(item => {
				item.style.width = maxWidth + "px";
			});

			self.tabHover.style.width = maxWidth + "px";
			self.tabHover.style.height = itemheight + "px";
		});
	}

	private addEventListeners() {
		this.tabEls.forEach((tab, index) => {
			tab.addEventListener("mouseover", (e) => this.moveHover(e));
			tab.addEventListener("click", (e) => this.setActiveTab(e));
		});

		this.tabContainer.addEventListener("mouseleave", () => this.resetHover());
	}

	private moveHover(event: Event) {
		const target = event.target as HTMLElement;
		const targetRect = target.getBoundingClientRect();
		const containerRect = this.tabHover.parentElement!.getBoundingClientRect();

		const offsetX = targetRect.left - containerRect.left;

		if (this.isFirstHover) {
			this.tabHover.style.transition = `opacity 0.5s ease`;
			this.tabHover.style.transform = `translateX(${offsetX}px)`;
			this.tabHover.style.opacity = "1";
			this.isFirstHover = false;
		} else {
			const distance = Math.abs(offsetX - this.lastOffsetX);
			const duration = Math.min(distance / 200, 0.5); // max duration of 0.5 seconds
			const easing = 'cubic-bezier(0.25, 0.8, 0.25, 1)'; // smoother and faster easing

			this.tabHover.style.transition = `transform ${duration}s ${easing}, opacity 0.5s ease`;
			this.tabHover.style.transform = `translateX(${offsetX}px)`;
		}

		this.lastOffsetX = offsetX;

	}

	private setActiveTab(event: Event) {
		const target = event.target as HTMLElement;

		document.querySelector<HTMLElement>(".js-tab-item.active")?.classList.remove("active");

		target.classList.add("active");
	}

	private resetHover() {
		this.isFirstHover = true;
		this.tabHover.style.opacity = "0";
	}
}

new tabAnimation();
