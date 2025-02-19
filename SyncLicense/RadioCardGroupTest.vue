<template>
	<div class="test-container">
		<div class="test-row">
			<RadioCardGroup v-model="card2Selection" :options="cardOptions2" />
		</div>
		<div class="test-row">
			Selection: {{ card2Selection }}
		</div>
		<div class="test-row">
			<RadioCardGroup v-model="cardSelection" :options="cardOptions">
				<template #radio="{ option, index }">
					<div v-if="index === 0">
						<p>Video used in a regularly occurring service or event:</p>
						<p><strong>Offering, Sermon Bumper, General Social Media Content</strong></p>
					</div>
					<div v-else-if="index === 1">
						<p>Video used for the promotion of a special service or event:</p>
						<p><strong>Ticketed events, Conferences, Youth Camps</strong></p>
					</div>
					<div v-else-if="index === 2">
						<p>Video used for commercial or other purposes:</p>
						<p><strong>TV/Radio Commercial, Branding, Advertisement</strong></p>
					</div>
				</template>
			</RadioCardGroup>
		</div>
		<div class="test-row">
			Selection: {{ cardSelection }}
		</div>
	</div>
</template>

<script>
import RadioCardGroup from "path to component"

export default {
	components: {
		RadioCardGroup,
	},
	data() {
		return {
			message: "Hello from Vue 2 Component!",
			cardOptions: [
				{
					heading: "Standard",
					description: true,
				},
				{
					heading: "Promotional",
					description: true,
				},
				{
					heading: "Commercial",
					description: true,
				},
			],
			cardOptions2: [
				{
					heading: "Personal",
				},
				{
					heading: "Professional",
				},
			],
			cardSelection: null,
			card2Selection: null,
		};
	},
	created() {
	},
};
</script>