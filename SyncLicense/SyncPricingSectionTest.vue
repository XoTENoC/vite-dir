<template>
	<div class="test-container">
		<div class="test-row">
			<SyncPricingCard v-model="pricingOptions" />
		</div>
	</div>
</template>

<script>
import SyncPricingCard from "../../../multitracks/melodies/markup/markup.multitracks.com/js/main/vue/components/SyncPricingCard.vue"

export default {
	components: {
		SyncPricingCard,
	},
	data() {
		return {
			pricingOptions: [
				{
					title: "Sync License",
					subtitle: "Includes Original and Instrumental Audio for single use only",
					toolTip: false,
					button: false,
					added: false,
					price: "$249",
				},
				{
					title: "MultiTracks",
					subtitle: "For ultimate control of your soundtrack, add MultiTracks for Stem level access in your project.",
					toolTip: true,
					toolTipSlide: "MultiTracks are all of the individual parts or \"stems\" that make up an Original Master Recording. Take control of your soundtrack by adding MultiTracks to your project, telling your story like never before.",
					button: true,
					added: false,
					price: "$39",
				}
			]
		};
	},
};
</script>
