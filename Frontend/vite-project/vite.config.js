import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Specify your desired output directory here
  },
  server:{
    proxy:{
      '/api': "https://mini-project-backend-sy6a.onrender.com",
    },
  },
  plugins: [react()],
})
