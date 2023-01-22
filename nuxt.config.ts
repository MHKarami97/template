export default {
    head: {
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {
                hid: 'description',
                name: 'description',
                content: 'template'
            }
        ],
        bodyAttrs: {
            dir: 'rtl'
        }
    },
    modules: [
        '@pinia/nuxt',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: [
        '@/assets/css/main.css',
    ]
}