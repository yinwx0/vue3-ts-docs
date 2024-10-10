# unibest 学习笔记

## 简介

`unibest` 是最好的 `uniapp` 开发框架，由 `uniapp` + `Vue3` + `Ts` + `Vite4` + `UnoCss` + `VSCode`(可选 `webstorm`) + `uni插件`+ `wot-ui`（可选其他 UI 库）构建，集成了多种工具和技术，使用了最新的前端技术栈，无需依靠 `HBuilderX`，通过命令行方式即可运行 `web`、小程序 和 `App`。（注：`App` 还是需要 `HBuilderX`）

`unibest` 内置了 约定式路由、layout布局、请求封装、请求拦截、登录拦截、UnoCSS、i18n多语言等基础功能，提供了 代码提示、自动格式化、统一配置、代码片段等辅助功能，让你编写 `uniapp` 拥有 `best` 体验。

> `unibest` 目前支持 `H5`、`小程序` 和 `App`。



### ⭐ Star History

Github Star History 实时地址：https://star-history.com/#codercup/unibest&Date 。

![](https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/star%20history.png)



### ✨ 特性

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [esbuild](https://github.com/evanw/esbuild) - 就是快！
- 🔥 最新语法 - `<script lang="ts" setup>` 语法
- 🎨 [UnoCSS](https://unocss.dev/) - 高性能且极具灵活性的即时原子化 CSS 引擎
- 😃 [UnoCSS Icons](https://unocss.dev/presets/icons) & [icones](https://icones.js.org/) - 海量图标供你选择
- 🍍 [pinia](https://pinia.vuejs.org/) & [pinia-plugin-persistedstate](https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/) - 全端适配的全局数据管理
- 🗂 `uni.request` 请求封装 - 一键引入，快捷使用
- 📦 `路由拦截` 基础封装，支持扩展，快捷使用，拒绝黑盒
- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 无需引入
- 🎉 `v3` Code Snippets 加快你的页面生成
- 🦾 `Pritter` & `ESLint` & `Stylelint` & `husky` & `lint-staged` + `commitlint` - 保证代码质量
- 🌈 `TypeScript` 加持，同时又兼容 `js` ，同时满足不同人群
- 💡 `ES6 import` 自动排序，`css 属性` 自动排序，增强编码一致性
- 🖥 `多环境` 配置分开，想则怎么配置就怎么配置



## 快速开始

### 前置依赖

**Node.js** - `>=v18`

**pnpm** - `>=7.30`（推荐使用 `8.12+`）

**`VSCode`** - 可选 `WebStrom`

**`HBuilderX`** - `APP` 的运行和发布还是离不开它

**Vue-Office** - `1.8x`，别升到 `2.x` ！



### 创建项目

通过下面的命令可以快速生成项目模板

```bash
npm create unibest@latest my-project
```

实际操作截图：

![](https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/install.png)

![](https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/unibest%E6%A8%A1%E6%9D%BF.png)



`create unibest` 支持 `-t` 参数选择模板，目前已有两大类 `8` 个模板

- `普通` 模板( `4个` ）：分别是 `base`、`tabbar`、`i18n`、`demo`、`js`
- `hbx` 模板(`2个` ）：分别是 `hbx-base`、`hbx-demo`。

不带 `-t` 参数时会默认生成 `base` 模板。

`base` 模板是最基本的模板，更新最及时，推荐使用 `base` 模板创建新项目。其他几个模板也是基于 `base` 模板得到的。 `demo` 模板则作为参考用。



### 安装，运行

```bash
pnpm i
pnpm dev
```



### v3 代码块

在 `vue` 文件中，输入 `v3` 按 `tab` 即可快速生成页面模板，可以大大加快页面生成。