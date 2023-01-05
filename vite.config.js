import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';

// todo найди другой способ определения alias`ов
export default defineConfig({
	plugins: [react(), viteSvgr()],
	resolve: {
		alias: {
			src: path.join(__dirname, 'src'),
			app: path.join(__dirname, 'src', 'app'),
			pages: path.join(__dirname, 'src', 'pages'),
			widgets: path.join(__dirname, 'src', 'widgets'),
			features: path.join(__dirname, 'src', 'features'),
			entities: path.join(__dirname, 'src', 'entities'),
			shared: path.join(__dirname, 'src', 'shared')
		}
	}
});
