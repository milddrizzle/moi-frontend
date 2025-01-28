import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [
      react(),
    ],
    base: '/',
    build: {
      outDir: 'dist',          // Customize the output directory
      sourcemap: false,        // Disable source maps for production
      minify: true,        // Set minification to 'terser'
      terserOptions: {
        compress: {
          drop_console: true,  // Optional: Remove console.log statements in production
        },
      },
    },
  }

  return config
})
