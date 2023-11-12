import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve : {
    alias : {
      "@" : path.resolve(__dirname,"./src"),
      "@components" : path.resolve(__dirname, "./src/components"),
      "@feature" : path.resolve(__dirname, "./src/feature"),
      "@lib" : path.resolve(__dirname, "./src/lib"),
      "@model" : path.resolve(__dirname, "./src/model"),
      "@api" : path.resolve(__dirname, "./src/api"),
      "@data" : path.resolve(__dirname, "./src/data"),
    }
  },
  server:{
    port:3000,
    host:"localhost",
  },
  base:"/absproxy/3000"
})
