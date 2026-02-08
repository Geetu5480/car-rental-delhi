// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    ssr: false,

    nitro: {
        preset: 'github-pages'
    },

    modules: ['@nuxtjs/tailwindcss'],

    css: ['~/assets/css/main.css'],

    app: {
        head: {
            title: 'Premium Honda City Rental with Driver',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content: 'Experience executive comfort with our premium Honda City rental service. Professional drivers, corporate travel, airport transfers, and special events.',
                },
                { name: 'theme-color', content: '#0a0a0a' },
            ],
            link: [
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
