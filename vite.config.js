import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: process.env.IS_DEV !== 'true' ? './' : '/',
  server:{
    port: 3000
  }

})
