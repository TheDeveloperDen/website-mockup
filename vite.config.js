/** @type {import('vite').UserConfig} */
export default {
    build: {
        root: './src',
        outDir: './dist',
        emptyOutDir: true,
        rollupOptions: {
            output: {
                entryFileNames: `[name].js`,
                chunkFileNames: `[name].js`,
                assetFileNames: `[name].[ext]`,
            },
        },
    }
}

