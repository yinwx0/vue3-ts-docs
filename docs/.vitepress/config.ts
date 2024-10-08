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
            { text:"springboot", link:"/springboot/"},
            { text:"vue3", link:"/vue3/"},
            { text:"API 参考", link:"/api/"},
            { text:"常见问题", link:"/faq/"},
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/yinwx0/vue3-ts-docs/tree/main?tab=readme-ov-file' },
        ],
        sidebar: {
            '/springboot/': [
                {
                    text: 'SpringBoot',
                    collapsible: true,
                    items: [
                        { text: '介绍', link: '/springboot/' },
                        { text: '安装', link: '/springboot/installation' },
                        { text: '基本概念', link: '/springboot/concepts' },
                    ],
                },
            ],
            '/vue3/': [
                {
                    text: 'Vue3',
                    collapsible: true,
                    items: [
                        { text: '介绍', link: '/vue3/' },
                        { text: '安装', link: '/vue3/installation' },
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
