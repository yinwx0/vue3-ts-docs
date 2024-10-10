# Vue.js 学习笔记

## 初识 Vue.js 3

Vue是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue 都可以胜任。

### 声明式渲染

Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系。

### 组件系统

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构。

## Vue.js 的基础概念

### 插值语法{{}}

```vue
<template>
  <div class="container">
    <h2>姓名: {{ name }}</h2>
    <p>称号: {{ title }}</p>
    <p>简介: {{ description }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref<string>("孙悟空");
const title = ref<string>("齐天大圣");
const description = ref<string>("孙悟空，亦称美猴王，是中国古典小说《西游记》中的主要角色，拥有强大的法力和不屈的精神。当年,他被押去斩妖台,刀砍斧别,枪刺剑刳,毫发无伤。如今,他却用自己换了你来。");

console.log(name.value, title.value, description.value);
</script>

<style scoped>
</style>

```

### 属性绑定 v-bind :

```vue
<template>
    <div>
        <!-- 绑定 isDisabled 属性 -->
         <!-- <button v-bind="isDisabled">点击</button> -->
         <button :disabled="isDisabled">点击</button>
           <img :src="url" alt="">
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const isDisabled =ref<boolean>(false)
const url=ref<string>('https://img0.baidu.com/it/u=3851590697,1173264875&fm=253&fmt=auto&app=138&f=JPEG?w=1422&h=800')
</script>

 
```

### 样式绑定

#### 绑定 class

```vue
<template>
    <div>
     <p :class="pClass">这是一段文字</p>
     <button @click="toggleClass">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const isHighLight =ref<boolean>(false)

//  动态切换的样式名
const pClass =ref<{[key:string]:boolean}>({
    isHighLight:isHighLight.value,
    normal:!isHighLight.value
})

// 切换类名的函数
const toggleClass=()=>{
        isHighLight.value=!isHighLight.value,
    pClass.value={
       isHighLight:isHighLight.value,
    normal:!isHighLight.value
    }
}

</script>

<style scoped>
</style>

```

#### 绑定 style

```vue
<template>
    <div>
        <p :style="pStyle">这是一段文字</p>
        <button @click="toggleStyle">切换样式</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isBold = ref<boolean>(false)

const pStyle = ref<{
    fontWeight: string,
    color: string
}>({
    fontWeight: 'normal',
    color: 'black'
})

const toggleStyle = () => {
    isBold.value = !isBold.value
    pStyle.value = {
        fontWeight: isBold.value ? 'bold' : 'normal',
        color: isBold.value ? 'blue' : 'black'
    }
}
</script>
<style scoped>
</style>
```

孙悟空形态切换练习：

```vue
<template>
    <div class="story-container">
        <h2> {{ username }}</h2>
        <h2> {{ form }}</h2>
        <button @click="toggleForm">改变形态</button>
        <p> {{ story }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const username = ref<string>('孙悟空')
const form = ref<string>('齐天大圣')
const story = ref<string>('在《西游记》中，孙悟空是一个勇敢无畏，机智聪明的角色，以其强大的能力和不屈的精神著称。')
const toggleForm = () => {
    username.value = '斗战圣佛'
}
</script>
<style scoped>
</style>
```

### 条件渲染

```vue
<template>
    <div>
<p>当前计数：{{ count }}</p>
<button @click="increment">增加计数</button>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped>
</style>
```

孙悟空条件渲染练习：

```vue
<template>
    <div class="skills-container">
        <h2>技能列表</h2>
        <ul>
            <li v-for="skill in skills" :key="skill.id" class="skill-item">
                {{ skill.name }}
                <span v-if="skill.lock" class="lock">已解锁</span>
                <span v-else class="unlock">未解锁</span>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    interface skill {
        id : number
        name : string
        lock:boolean
    }

    const skills = ref<skill[]>([
        { id : 1 , name : '七十二变' , lock : true},
        { id : 2 , name : '火眼金睛' , lock : false},
        { id : 3 , name : '筋斗云' , lock : true}
    ])
</script>

<style scoped>  
</style>
```

### 计算属性

```vue
<template>
    <div class="health-container">
<h2>血量：{{ blood }}/ {{ maxBlood}} ({{ hpPerrcentage }}%)</h2>
<div class="progress-container" :style="progressBarStyle"></div>
   </div>
</template>

<script setup lang="ts">
        import { computed, ref } from 'vue'
        
        const blood = ref(70)
        const maxBlood= ref(100)

        const hpPerrcentage = computed(() => {
            return(blood.value / maxBlood.value) * 100
        }
        )

        const progressBarStyle = computed(() => {
        let bgColor = 'green'

        if (hpPerrcentage.value <= 50) {
        bgColor = 'orange'
        }
        if (hpPerrcentage.value <= 20) {
        bgColor = 'red'
        }

        return {
        width: hpPerrcentage.value + '%',
        backgroundColor: bgColor,
  }
    }
)


</script>

<style scoped>
</style>
```

```vue
<template>
    <div class="attack-container">
    <div class="input-group">
        <label for="base-attack">基础攻击力：</label>
        <input id="base-attack" v-model="baseAttack" type="number">
    </div>
    <div class="input-group">
        <label for="gear-bonus">装备加成：</label>
        <input id="gear-bonus" v-model="gearBonus" type="number">
    </div>
    <p class="total-attack">总攻击力：<span>{{ totalAttack }}</span></p>
</div>
</template>

<script setup lang="ts">
import { computed,ref } from 'vue';

const baseAttack = ref<number>(50)
const gearBonus = ref<number>(20)

const totalAttack = computed(() => baseAttack.value + gearBonus.value)
</script>

<style scoped>
</style>
```

### 事件处理

事件处理用于捕获和响应DOM事件。通过v-on指令可以监听用户的交互（如点击、输入、提交等）并执行相应的操作。

```vue
<template>
<button @click="handleClick">点击我</button>
<p>{{message}}</p>
</template><scriptsetuplang="ts">
    import{ ref }from'vue'
    // 定义一个消息状态
    const message=ref<string>('还没有点击按钮')
    // 事件处理函数
    const handleClick=():void=>{
    message.value='按钮已被点击'}
    </script>
```

### 表单双向绑定

表单双向绑定通过v-model指令实现，它允许将表单元素（如输入框、复选框、下拉菜单等）的值与Vue组件中的数据进行同步。

```vue
<template>
<div>
<input v-model="name"placeholder="请输入姓名"/>
    <p>您输入的姓名是：{{name}}</p>
    </div>
</template>
<script setuplang="ts">
    import{ref}from'vue'
    // 定义双向绑定的状态
    const name=ref<string>('')
    // 初始值为空字符串
</script>
```

### DOM 操作

Vue3中常⻅的DOM操作包括：

使用ref获取DOM元素的引用；

在生命周期钩子中操作DOM元素；

通过v-bind动态修改属性或类；

操作style和class；

事件处理及自定义指令。

获取并操作DOM元素:

```vue
<template>
<div>
    <input ref="inputElement"type="text"placeholder="聚焦在此"/>
    <button @click="focusInput">点击聚焦输入框</button>
    </div>
</template>
<script setuplang="ts">
    import{ref}from'vue'
    // 获取 DOM 元素的引用
    const inputElement=ref<HTMLInputElement|null>(null)
    // 操作 DOM 元素
    const focusInput=()=>{if(inputElement.value){inputElement.value.focus()
// 让输入框获得焦点}}
</script>
```

## 补充

通过滚动划到底部：

```vue
<template>
    <div class="scroll-demo">
      <button @click="scrollToSkills">滚动到技能展示</button>
        <div class="content">
          <div ref="skillsSection" class="skills">
            <h2>技能展示</h2>
            <div class="skills-container">
        <ul>
            <li v-for="skill in skills" :key="skill.id" class="skill-item">
                {{ skill.name }}
                <span v-if="skill.lock" class="lock">已解锁</span>
                <span v-else class="unlock">未解锁</span>
            </li>
        </ul>
    </div>
          </div>
        </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';

    interface skill {
        id : number
        name : string
        lock:boolean
    }

    const skills = ref<skill[]>([
        { id : 1 , name : '七十二变' , lock : true},
        { id : 2 , name : '火眼金睛' , lock : false},
        { id : 3 , name : '筋斗云' , lock : true}
    ])

  const skillsSection = ref<HTMLElement | null>(null);
  const scrollToSkills = () => {
      skillsSection.value?.scrollIntoView({ behavior: 'smooth' });
  };
  </script>
  
  <style scoped>
  </style>
  
```
