import react from '@vitejs/plugin-react';
import { isoImport } from 'vite-plugin-iso-import';
import { configDefaults, defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), isoImport()],
	test: {
		exclude: [
			...configDefaults.exclude,
			'**/.*/**',
		]
	}
});
