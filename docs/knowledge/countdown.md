#                               倒计时计时器开发笔记  

### 准备工作 

在开始开发一个倒计时计时器组件之前，首先需要准备开发环境和一些基础知识。

以下是我所需的准备工作：

1. 环境搭建： 

   1. 确保安装了 Node.js 和 npm，以便使用 Vue CLI 创建项目。   

   2. - 使用 Vue CLI 创建一个新的 Vue 3 项目。    

      - ```bash   
        vue create countdown-timer   
        cd countdown-timer
        ```

2. 安装依赖：

   确保项目依赖已经安装完毕

3. 知识储备：

   了解 Vue 3 的基本概念，包括组合式 API 和响应式数据。

   熟悉 TypeScript 的基本语法，尤其是如何在 Vue 中使用 TypeScript。

   理解如何创建和使用 Composables。

### 实施步骤

1. 创建 Composable 函数

   首先，我们需要创建一个组合式函数（Composable），用于实现倒计时逻辑。这个 Composable 将负责处理计时器的开始、暂停和重置功能。

   ```typescript
   import { ref } from 'vue';
   
   export function useCountdown(initialTime: number) {
     const timeLeft = ref(initialTime); 
     const intervalId = ref<number | null>(null); 
   
     const start = () => {
       if (intervalId.value) return; 
       intervalId.value = setInterval(() => {
         if (timeLeft.value > 0) {
           timeLeft.value--;
         } else {
           clearInterval(intervalId.value);
           intervalId.value = null;
         }
       }, 1000);
     };
   
     const pause = () => {
       if (intervalId.value) {
         clearInterval(intervalId.value);
         intervalId.value = null;
       }
     };
   
     const reset = () => {
       pause();
       timeLeft.value = initialTime;
     };
     return { timeLeft, start, pause, reset };
   }
   ```

   

2. 创建组件

   接下来，创建一个 Vue 组件来使用我们刚刚定义的 Composable。

   ```vue
   <template>
     <div class="countdown-timer">
       <p class="time-left">倒计时：{{ timeLeft }}秒</p>
       <div class="button-group">
         <button @click="start" class="btn">开始</button>
         <button @click="pause" class="btn">暂停</button>
         <button @click="reset()" class="btn">重置</button>
       </div>
     </div>
   </template>
   
   <script setup lang="ts">
   import { useCountdown } from '../composables/useCountDown';
   
   const { timeLeft, start, pause, reset } = useCountdown(60);
   </script>
   
   <style scoped>
   .countdown-timer {
     max-width: 300px;
     margin: 0 auto;
     padding: 20px;
     border: 2px solid #007bff;
     border-radius: 8px;
     background-color: #f0f8ff;
     box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
     text-align: center;
   }
   
   .time-left {
     font-size: 2em;
     color: #333;
     margin-bottom: 20px;
   }
   
   .button-group {
     display: flex;
     justify-content: space-between;
   }
   
   .btn {
     flex: 1;
     padding: 10px;
     margin: 0 5px;
     font-size: 1em;
     color: white;
     background-color: #007bff;
     border: none;
     border-radius: 5px;
     cursor: pointer;
     transition: background-color 0.3s, transform 0.2s;
   }
   
   .btn:hover {
     background-color: #0056b3;
     transform: scale(1.05);
   }
   
   .btn:active {
     transform: scale(0.95);
   }
   </style>
   ```

   

3. 运行项目

   完成组件后，可以通过以下命令启动 Vue 项目，查看倒计时器的实际效果：

   ```bash
   npm run dev
   ```

   访问 `http://localhost:5174`，即可看到计时器组件。

### 运行演示

![](https://ywxbucket.oss-cn-beijing.aliyuncs.com/GIF/countdown.gif)



### 代码分析

Composable 函数：`useCountdown.ts`

- `timeLeft`：使用 `ref` 创建响应式变量，初始值为传入的 `initialTime`。每当 `timeLeft` 变化时，依赖它的视图会自动更新。

- `intervalId`：存储 `setInterval` 的返回值，以便后续可以清除定时器。

- `start` 方法：

  首先检查是否已经有一个定时器在运行，如果有则直接返回。

  否则，调用 `setInterval` 每秒减少 `timeLeft` 的值。

  当 `timeLeft` 为 0 时，清除定时器并将 `intervalId` 置为 `null`。

- `pause` 方法：停止计时器的运行，清除定时器 ID。

- `reset` 方法：先暂停计时器，然后将 `timeLeft` 重置为初始值。



计时器组件：`CountdownTimer.vue`

- `<template>` 部分：

  显示当前的倒计时，使用 `{{ timeLeft }}` 来绑定响应式数据。

  包含三个按钮：开始、暂停和重置，分别绑定到 `start`、`pause` 和 `reset` 方法。

- `<script setup>`部分：

​		导入 `useCountdown` Composable，并初始化为 60 秒。

​		通过解构，获取 `timeLeft`、`start`、`pause` 和 `reset`。



样式部分：

​		组件样式使用了简单的 CSS，设置了最大宽度、边框、背景色和阴影，提供了良好的视觉效果。

​		按钮使用了 Flexbox 布局，确保在不同屏幕上都能良好展示，并添加了悬停和点击效果，提升用户体验。



### 感想

在实现这个倒计时计时器的过程中，我深刻体会到了 Vue 3 组合式 API 带来的便利。通过组合式函数，我们可以将业务逻辑与 UI 分离，提升代码的可维护性和可重用性。

- 组合式函数：它们使得功能复用变得简单，特别是涉及到多个组件共享相同逻辑时。
- 响应式编程：Vue 3 的响应式系统使得数据变化能自动反映在 UI 上，减少了手动 DOM 操作的复杂性。
- 样式设计：通过简单的 CSS，可以使组件看起来更加美观，提升用户体验。

总的来说，这个项目不仅巩固了我的 Vue 3 和 TypeScript 知识，还让我对组合式 API 有了更深刻的理解。我期待在未来的项目中，继续使用这些技术来构建更复杂和高效的组件。