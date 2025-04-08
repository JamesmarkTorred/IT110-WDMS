import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.', // Explicit root directory
  base: '/', // Ensure base URL is correct
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir: 'dist', // Must match Vercel's output directory
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html' // Explicit entry point
      }
    }
  },
  optimizeDeps: {
    include: [
      'remixicon/fonts/remixicon.css',
      'remixicon/fonts/remixicon.woff2'
    ]
  }
})
