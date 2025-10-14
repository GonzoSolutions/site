export default {
    srcDir: 'src', 
    publicDir: 'public', 
    outDir: 'out', 
    server: {
        port: 9000, 
    }, 
    vite: {
        resolve: {
            alias: {
                '@pages': '/src/pages',
                '@styles': '/src/styles',
                '@sections': '/src/sections',
                '@components': '/src/components',
            },
        },
    }
}