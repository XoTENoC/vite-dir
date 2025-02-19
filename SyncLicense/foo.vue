<template>
	<div class="test-container">
		<div class="test-row">
			<SyncLicenseModal />
		</div>
	</div>
</template>

<script>
import SyncLicenseModal from "../../../multitracks/melodies/markup/markup.multitracks.com/js/main/vue/sync/SyncLicenseModal.vue"

export default {
	components: {
		SyncLicenseModal,
	},
	data() {
		return {
			isLoading: null,
		};
	},
};
</script>
