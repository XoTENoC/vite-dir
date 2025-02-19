<template>
	<div class="waveform">
		<div class="waveform--image"></div>
		<!-- <svg width="1000" height="50" xmlns="http://www.w3.org/2000/svg" fill="#fff">
			<path :d="path" />
		</svg> -->
	</div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent } from 'vue';

export default defineComponent({
	name: "waveform",

	setup() {
		const audioPeaks = ref<number[]>([
			0, 0.3, 0.7, 1, 0.8, 0.5, 0.1, -0.2, -0.6, -0.9,
			-1, -0.9, -0.7, -0.4, 0, 0.4, 0.8, 0.9, 1, 0.6,
			0.2, -0.1, -0.5, -0.8, -1, -0.8, -0.4, 0, 0.5, 0.9,
			1, 0.7, 0.3, -0.1, -0.6, -0.9, -1, -0.8, -0.5, -0.1,
			0.2, 0.6, 0.9, 1, 0.9, 0.7, 0.3, 0, -0.4, -0.8,
			-1, -0.9, -0.6, -0.2, 0.2, 0.6, 1, 0.8, 0.5, 0.1,
			-0.3, -0.7, -1, -0.9, -0.6, -0.2, 0.3, 0.8, 1, 0.7,
			0.2, -0.1, -0.5, -0.9, -1, -0.7, -0.3, 0.1, 0.6, 0.9,
			1, 0.8, 0.5, 0.2, -0.2, -0.7, -1, -0.8, -0.4, 0,
			0.4, 0.9, 1, 0.7, 0.3, -0.2, -0.6, -1, -0.9, -0.6,
			-0.2, 0.3, 0.8, 1, 0.8, 0.5, 0.1, -0.4, -0.9, -1,
			-0.7, -0.3, 0.2, 0.7, 1, 0.9, 0.6, 0.2, -0.2, -0.7,
			-1, -0.9, -0.5, -0.1, 0.4, 0.8, 1, 0.8, 0.4, 0,
			-0.4, -0.8, -1, -0.8, -0.5, -0.1, 0.3, 0.8, 1, 0.9,
			0.7, 0.3, -0.1, -0.6, -1, -0.9, -0.6, -0.2, 0.4, 0.9,
			1, 0.8, 0.4, 0, -0.5, -0.9, -1, -0.7, -0.3, 0.2,
			0.7, 1, 0.9, 0.6, 0.2, -0.3, -0.8, -1, -0.8, -0.5,
			-0.1, 0.3, 0.7, 1, 0.8, 0.5, 0.1, -0.3, -0.7, -1,
			-0.9, -0.6, -0.2, 0.2, 0.7, 1, 0.9, 0.7, 0.3, -0.1,
			-0.5, -1, -0.9, -0.7, -0.3, 0.1, 0.5, 1, 0.9, 0.7
		]);
		const path = ref<string>("");

		// Calculate the hovered index based on mouse position within the SVG
		const setHoverByMousePosition = (event: MouseEvent) => {
		};

		onMounted(() => {
			let svgPath = "";

			const rectangleGenerator = (amplitude: number, point: [number, number]) => {
				const convertedPeak = amplitude * 50;
				const peak = convertedPeak > 0 ? Math.min(convertedPeak, 50) : Math.max(convertedPeak, 0);
				let path = `M ${point[0]} ${point[1]} `
				path += `L ${point[0]} ${50 - peak} `
				path += `L ${point[0] + 2} ${50 - peak} `
				path += `L ${point[0] + 2} ${point[1]} Z `
				return path;
			}

			let startPoint: [number, number] = [0, 50];

			audioPeaks.value.forEach(peak => {
				svgPath += rectangleGenerator(peak, startPoint);

				startPoint[0] += 3;
			})

			path.value = svgPath
		});

		onUnmounted(() => {
		});

		return {
			audioPeaks,
			path,
		};
	},
});
</script>
