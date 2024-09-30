import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  server:{
    proxy:{
      '/api': 'http://localhost:8000',
    },
  },
  plugins: [react()],
  define: {
    'process.env': process.env, // Pass process.env to frontend
  },
});
