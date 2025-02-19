import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	server: {
		port: 6969,
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"vue": "@vue/compat" // Alias to enable the template compiler
		}
	},
	define: {
		__VUE_OPTIONS_API__: true,
		__VUE_PROD_DEVTOOLS__: true
	}
});
