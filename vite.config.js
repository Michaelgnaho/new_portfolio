import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.PNG'], // Treat .PNG files as assets
  plugins: [react()],
})
