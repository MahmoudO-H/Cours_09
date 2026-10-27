import { defineConfig } from 'vite';
 
export default defineConfig({
    base: "/Cours_09/",
    build: {
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'index.html',
            },
        },
    },
});