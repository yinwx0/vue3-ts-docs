import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: 'Vue 3 + TypeScript 学习文档',
    description: "详细学习 Vue 3 和 TypeScript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "/assets/logo.png",
        nav: [
            { text:"首页", link:"/"},
            { text:"知识库", link:"/knowledge/"},
            { text:"vue3", link:"/vue3/"},
            { text:"API 参考", link:"/api/"},
            { text:"常见问题", link:"/faq/"},
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yinwx0/vue3-ts-docs/tree/main?tab=readme-ov-file' },
        ],
        sidebar: {
            '/knowledge/': [
                {
                    text: '知识库',
                    collapsible: true,
                    items: [
                        { text: 'VueUse', link: '/knowledge/VueUse' },
                        { text: 'VitePress', link: '/knowledge/VitePress' },
                        { text: 'Unibest', link: '/knowledge/Unibest' },
                        { text: 'Spring Boot', link: '/knowledge/SpringBoot' },
                        { text: 'Vue.js', link: '/knowledge/VueJS' },
                        { text: 'ES6+', link: '/knowledge/ES6' },
                        { text: '前端发展的几个时代', link: '/knowledge/themeToggle' },
                        { text: '前端基础的三架马车', link: '/knowledge/ThreeItem' },
                        { text: '案例：倒计时', link: '/knowledge/countdown' }
                    ],
                },
            ],
            '/vue3/': [
                {
                    text: 'Vue3',
                    collapsible: true,
                    items: [
                        { text: '介绍', link: '/vue3/' },
                        { text: '组合式函数 Composables', link: '/vue3/composables' },
                        { text: '基本概念', link: '/vue3/concepts' },
                    ],
                },
            ],
        },
        footer: {
            message: "用心学习 Vue3 和 TypeScript",
            copyright: 'Cppyright © 2024 wxyin',
        },
    },
});
