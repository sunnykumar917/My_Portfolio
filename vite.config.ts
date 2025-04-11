{/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})*/}


export default {
  server: {
    host: '0.0.0.0',  // Allow external access
    port: process.env.PORT || 5173, // Use the environment variable for the port, default to 5173
  },
};
