import { createApp } from "vue";
import waveform from "./waveform.vue"

class fooClass {
	constructor() {
		const app = createApp({
			components: { waveform },
			template: `
				<div class="waveform-container">
					<waveform />
				</div>
			`,
		});

		const container = document.querySelector(".container");
		if (container) {
			app.mount(container);
		} else {
			console.error("Container not found");
		}
	}
}

new fooClass();
