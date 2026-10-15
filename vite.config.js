import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages(Actions) 빌드에서는 '/저장소이름/' base 사용, 그 외(VPS, 로컬)에서는 '/'
  base: process.env.GITHUB_ACTIONS ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/',
  // 로컬 개발(pnpm dev) 중에는 /api 요청을 node server/index.js(3000번)로 넘깁니다.
  server: {
    proxy: { '/api': 'http://127.0.0.1:3000' }
  }
})

