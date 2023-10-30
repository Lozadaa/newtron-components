import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        Form: 'src/components/atoms/Form',
        Input: 'src/components/atoms/Input',
        Button: 'src/components/atoms/Button',
        theme: 'src/theme',
      },
      name: 'newtron-components' // El nombre de tu librería en el ámbito global
    }
  },
})
