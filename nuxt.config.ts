import { defineNuxtConfig } from 'nuxt'
import { fileURLToPath } from 'url'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: './client/',
    app:{
        head: {
            "title": "DreamBOT",
            "meta": [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: "author", content: "Domingo Mesa Maliniak" },
                { name: "keywords", content: "BOT, DreamBOT, TwitchBot, Twitch, Streaming, Game" },
                { name: "description", content: "Bot" }
            ],
            "link": [],
            "style": [],
            "script": [ ]
        },
    },
    css: [
        '@/assets/css/main.css'
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/main.scss";',
                },
            },
        },
    },
    alias: {
        "@": fileURLToPath(new URL('./client', import.meta.url)),
        "icons": fileURLToPath(new URL('./client/assets/icons', import.meta.url)),
        "images": fileURLToPath(new URL('./client/assets/images', import.meta.url))
    }
})
