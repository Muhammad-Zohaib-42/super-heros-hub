import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  server: {
  proxy: {
    '/superhero': {
      target: 'https://www.superheroapi.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/superhero/, ''),
      configure: (proxy) => {
        proxy.on('proxyReq', (proxyReq) => {
          proxyReq.setHeader('Referer', 'https://www.superheroapi.com/');
          proxyReq.setHeader('Origin', 'https://www.superheroapi.com/');
          proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36');
        });
      }
    }
  }
}
})
