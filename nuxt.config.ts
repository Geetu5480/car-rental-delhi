// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: true,

    nitro: {
        preset: 'github-pages'
    },

    modules: ['@nuxtjs/tailwindcss'],

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            title: 'Premium Sedan Car Rental with Driver | Delhi NCR',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Book premium sedan with professional driver in Delhi NCR. Airport transfers, corporate travel, outstation trips. 24/7 service. Starting ₹2,999.',
                },
                { name: 'theme-color', content: '#0a0a0a' },
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico?v=2',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32.png?v=2',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect',
                    href: 'https://fonts.gstatic.com',
                    crossorigin: '',
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
                },
            ],
        },
    },

    compatibilityDate: '2024-11-01',
})
