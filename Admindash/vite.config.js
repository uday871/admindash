import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/admindash/', // Make sure this is correct
  plugins: [react()],
});
