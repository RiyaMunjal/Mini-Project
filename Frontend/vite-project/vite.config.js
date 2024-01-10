import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":"https://mini-project-backend-sy6a.onrender.com/"
    },
  },
  plugins: [react()],
})
