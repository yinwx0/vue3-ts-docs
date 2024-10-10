# 掌握前端 “三架马车”

无论前端如何发展，其根基始终是HTML、CSS 和 JavaScript。这“三驾⻢⻋”是前端永不过时的基础。随着现代前端技术的进步，JavaScript 不断进化，HTML 和 CSS 也变得更强大，增加了许多新元素和属性，能够实现更多复杂功能。

### 1.  HTML：搭建页面的结构

HTML 是伴随浏览器一起出现的超文本标记语言。HTML 由一系列的元素组成，在浏览器上可以看到的所有消息（如文字、图片和视频等）都是基于   HTML 元素搭建的。

HTML 的基本结构如下：

```html
<!DOCTYPE html>
<html>
    <head>
        <metacharset="utf-8"/>
        <title>Hello World</title>
    </head>
    <body>
        <divid="app"></div>
    </body>
</html>

```

上述代码展示了HTML 结构中最基本的3 个元素。

< html > 元素：应用的根元素，用来包裹所有元素；

< head > 元素：该元素的内容对用户不可⻅，主要包含文档的配置信息；< body > 元素：所有可⻅元素的父元素，包含期望让用户在访问⻚面时可以看到的所有文档内容。

#### 1.1 核心 DOM 体系

HTML 是由元素组成的。

以 < p > 元素为例，左边是开始标签（Start Tag）(< p >)，右边是结束标签（End Tag）(< /p >)，中间是元素的内容。一对标签再加上中间的内容，经过浏览器渲染，就变成一个元素（Element）。

除了包含标签和内容，元素还看可以指定属性（Attribute）。属性的作用是为元素添加额外的信息。

当元素被渲染后，JavaScript 中会有一套 Web API 来访问这些元素，这套 API 被称为DOM（文档对象模型）。DOM 会将 HTML 文档的每个元素解析为节点和对象，最终将其组合成一棵DOM 树，这棵DOM 树的结构与 HTML 文档的结构一一映射。

DOM 不仅是一套接口，更是一套规范。DOM 作为W3C规范的一部分，约束了浏览器中的 JavaScript与  HTML 之间的交互方式。

##### 1. DOM 树的解析

DOM 以树的形态存在，树中的最小单位是节点。在DOM 中的一切都是节点，文本是节点，属性是节点，注释也是节点，元素也是节点。

DOM 中主要有4 种类型的节点。

Document：整个DOM 树；

Element：单个元素；

Text：元素内的纯文本；

Attribute：元素的属性。

一份 HTML 文档会被浏览器解析成各种节点，这些节点组成DOM 树。

![屏幕截图 2024-09-07 012523](https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/item1.png)

DOM 树的节点之间或是平级关系或是嵌套关系，所以可以把DOM 树中节点之间的关系分为两大类。

父子节点：节点之间是嵌套关系

兄弟节点：节点之间是平级关系

![](https://ywxbucket.oss-cn-beijing.aliyuncs.com/images/item2.png)

基本的 DOM 操作：

获取页面上的 < div > 元素

```javascript
var div=document.getElementById('div')
var div=document.querySelector('#div')
var div=document.getElementByTagName('div')[0]
```

对 < div > 元素进行操作

```javascript
// 修改属性
div.style.width='300px'
// 修改元素内容
div.innerHTML='我的 div 的内容'
// 带标签的元素内容
div.innerHTML='<span>我的 div 的内容</span>'
// 删除元素
div.remove()

```

创建一个新元素

```javascript
// 获取父节点
var parent=document.getElementById('parent')
// 创建新节点
var span=document.createElement('span')
// 设置 span 节点的内容
span.innerHTML = 'hello world'
// 把新创建的元素加入父节点
parent.appendChild(span)

```

##### 2. < head > 元素的解析

```
<head> 元素规定了文档相关的配置信息（元数据），包括文档的标题、引用的文档样式和脚本等，要求至少包含一个<title> 元素来指定文档的标题。
<head>元素通常包含以下4个子元素。
<title>元素：用于设置文档标题；
<link>元素：用于引入外部资源，通常引入的是CSS 和图标；
<script>元素：用于引入JavaScript 或执行JavaScript 脚本；
<meta>元素：用于配置元数据。
```

  （1）< link > 元素

```html
// 加载网⻚的 icon 图标
<link rel="icon" href=""xxx.ico"/>
// 加载 CSS 文件
<link rel="stylesheet" href="xxx.css"/>
// 加载 iOS 的 icon 图标
<link rel="apple-touch-icon" href="xxx.png"/>
// 应用被安装到桌面时加载的配置文件
<link rel="manifest" href="xxx.json"/>
```

通过 CSS 在打印时变成白色

```css
@mediaprint{
    body{
        background:#fff;
    }
}
```

< link > 元素可以通过 media 属性来指定媒体类型

```css
<link rel="stylesheet" media="print" href="./print.css"/>
// print.css
body{
    background:#fff;
}
```

（2）< meta > 元素

```html
<meta charset="utf-8"/>
```

这个元数据用于指定网⻚的字符编码是 UTF-8 

< meta > 元素可以通过 name 属性和 content 属性来指定表示的内容

```html
<!-- 为了更好地进行 SEO -->
<meta name="author" content="wxyin"/>
<meta name="keywords"content="HTML，CSS，JavaScript，AJAX"/>
<meta name="description"content="前端学习教程"/>
```

对移动端而言至关重要的属性是 viewport，使用该属性可以控制⻚面的大小等等。viewport被翻译为视口，视口又分为布局视口（Layout Viewport）和视觉视口（Visual Viewport）。



#### 1.2 语义化元素

所有用户在网⻚上可⻅的元素，都需要作为子元素添加在 < body > 元素中。< body > 元素可以包含任意内容（如标题、段落、图片、视频和表格等），不同的内容实用不同的元素来表示。

假设需要添加一段文字和一张图片，可以使用如下代码：

```html
<p>前端开发实战</p>
<img src="xxx.png"/>
```

##### 1. 元素的分类

可以将< body > 元素中的子元素分为以下两类。

内容元素：如文字、图片等用于展现内容的元素；

布局元素：不直接展示内容，而是将内容元素更好地排列布局。

内容元素包括内容展示元素和内容操作元素，示例如下：

```html
<!-- 标题 -->
<h1>一级标题</h1>
<h2>二级标题</h2>
<!-- 段落和文本 -->
<p>这里是一段很⻓的文本，还嵌套<span>span</span>等元素</p>
<!-- 图片和链接 -->
<img src="images/logo.png"/>
<a href="http://www.xxx.com">链接</a>
<!-- 按钮 -->
<button>按钮</button>
<!-- 文本框 -->
<input type="text"value="可编辑的内容"/>
<textarea value="可编辑的大段内容"/>
```

内容元素一般就是行内元素和表单，是网⻚的最小单元。

最经典的布局元素就是< div > 元素，该元素可以装载万物。

早期的前端网⻚基本上都采用DIV + CSS 的布局方式，不同的布局区域全靠类名进行区分。虽然能实现目的，但是并不推荐采用这种方式，主要原因如下：

如果全部使用DIV 布局，代码结构看上去就会很混乱，可读性比较差；

开发者难以区分代码结构，浏览器自然也无法区分，这就会导致 SEO 的效果很糟糕。

##### 2. 使用语义化的布局元素

下面引入一个全部使用< div > 元素布局⻚面的示例，代码如下：

```html
<divclass="head">
    <span>我是标题</span>
    </div>
<divclass="nav">
    <ahref="html.html">HTML</a>
    <ahref="css.html">CSS</a>
    </div><divclass="box">
        <divclass="menu">
            <span>侧边栏</span>
            </div>
        <divclass="content">
            <span>主体内容区域</span>
            <divclass="text-area">
                <p>具体的文章内容</p>
                <imgsrc="xxx.png"/>
                </div>
            </div>
        </div>
<divclass="foot">
    <p>这是尾部</p>
    </div>

```

将上述< div > 元素布局改造成符合语义化的布局结构，如下：

```html
<header>
    <h1>我是标题</h1>
</header>
<nav>
    <a href="html.html">HTML</a>
    <a href="css.html">CSS</a>
</nav>
<section>
    <aside>
        <span>侧边栏</span>
    </aside>
    <main>
        <h2>主体内容区域</h2>
        <article>
            <p>具体的文章内容</p>
            <img src="xxx.png"/>
        </article>
    </main>
</section>
<footer>
    <p>这是尾部</p></footer>

```

```html
代码中的语义化元素是HTML 5 新增的，其具体含义如下：
<header> 元素：网⻚的头部区域；
<nav> 元素：导航区域，用于展示⻚面切换导航；
<section> 元素：⻚面中的一块子区域；
<aside> 元素：侧边栏，一般是侧边菜单；
<main> 元素：⻚面内容区域，不包括导航、菜单、侧边栏、头部和尾部等部分；
<article> 元素：文章区域，一般在<main> 元素中；
<footer> 元素：网⻚的尾部区域。
```

#### 1.3 了解 HTML 5

HTML 5 的新特性主要包括以下几点：

增加了音频元素< audio > 和视频元素< video >

增加了绘画元素< canvas > 和 < svg > 

增强了对表单的支持

引入了本地存储机制

支持地理定位和拖放

支持 WebWorkers

支持 WebSocket

##### 1. 认识音/视频元素

音/视频元素主要有3 个：

< audio > 是音频元素

< video > 是视频元素

< source > 元素包裹在   < audio > 元素或< video > 元素中

主要从来指定音/视频类型和资源地址。

引入一个简单的音频播放器的代码如下：

```html
<audio controls>
    <source src="test.mp3"type="audio/mpeg"/>
    <span>您的浏览器不支持 audio 标签</span>
</audio>
```

引入一个基本的视频播放器的代码如下：

```html
<videoid="video1"controls>
    <source src="test.mp4"type="video/mp4"/>
    <span>您的浏览器不支持 video 标签</span>
    </video>

```

```html
<video> 元素中有多个属性可以配置如何播放视频，常用的如下：
poster：视频封面，视频没有播放时显示的图片；
autoplay：自动播放；
loop：循环播放；
controls：显示视频控制条
muted：是否禁音
```

##### 2. 使用 JavaScript 操作视频

通过 DOM API 来操作视频，示例代码如下：

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport"content="width=device-width, initial-scale=1.0"/>
        <title>使用 JavaScript 操作视频</title>
    </head>
    <body>
        <div style="width:800px;height:600px">
            <video id="video1" style="width:100%;height:100%;object-fit:fill"controls><source src="test.mp4"type="video/mp4"/>
                <span>您的浏览器不支持 video 标签</span></video>
        </div>
        <buttonon click="toPlay()">暂停/播放</button><buttonon click="setVolume()">设置音量</button>
        <buttonon click="forward()">快进 15 秒</button><script>
        const video = document.getElementById('video1')
        //   播放/暂停
        const toPlay=()=>{if(video.paused){video.play()
        // 播放
        }else{
            video.pause()
            // 暂停
        }
        }
        // 设置音量，音量范围为 0~1
        const setVolume=()=>{video.volume=0.3
        // 30%
        // video.volume = 0    
        // 静音
        }
        // 快进 15 秒
        const forward=()=>{
        // video.duration 表示视频总时⻓，单位为秒
        // video.currentTime 表示视频已播放时⻓，单位
        letlong=15
        if(video.duration>video.currentTime+long){
        // 快进 15 秒还没到总时⻓，就加 15 秒
 video.currentTime=video.currentTime+long
        }else{
            video.currentTime=video.duration
            // 直接到末尾
        }
        }
        </script>
    </body>
</html>
```

在Banner 图下面放一段循环播放的小视频作为背景

```html
<video id="video2"loopmutedautoplay>
    <source src="test.mp4"type="video/mp4"/>
</video>

```



#### 1.4 实现表单与验证

##### 1. < input > 元素的新功能

表单新type新属性一览：

```html
<!-- 选择⽇期 -->
<input type="date" />
<!-- 选择时间 -->
<input type="time" />
<!-- 选择⽇期时间 -->
<input type="datetime-local" />
<!-- 选择⽉份 -->
<input type="month" />
<!-- 选择颜⾊ -->
<input type="color" />
<!-- 数字⽂本框 -->
<input type="number" min="1" max="10" />
<!-- 邮箱⽂本框 -->
<input type="email" />
<!-- 滑动条 -->
<input type="range" min="1" max="10" />

```

其他常用属性：

- autofucus：⾃动聚焦； 
- autocomplete：⾃动填充； 
- max/min：最⼤/最⼩值； 
- maxlength：最⼤字符⻓度； 
- disabled：禁⽤元素； 
- readonly：元素只读； 
- form：指定所属表单； 
- required：必填； 
- pattern：⾃定义验证规则； 
- novalidate：提交表单时不验证。

值得注意的是，required、pattern 和 form 属于表单项的属性，不仅适⽤于< input >元素，还适⽤于其他能作为表单项的元素。

##### 2. 为表单提交添加验证

```html
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0"
/>
 <title>Document</title>
 </head>
 <body>
 <form id="form1">
 <input
 type="text"
 name="name"
 placeholder="输⼊姓名"
 maxlength="5"
 required
 />
 <input
 type="number"
 name="age"
 placeholder="输⼊年龄"
 min="15"
 max="65"
 required
 style="width: 100px"
 />
 <input
 type="text"
 name="gender"
 value="男"
 placeholder="输⼊性别"
 required
 disabled
 />
 <input type="submit" value="提交" />
 <input form="form1" name="other" placeholder="输⼊额外信息" required /
>
 </form>
 </body>
</html>
```

直接点击“提交”按钮时，第一个< input > 元素的验证会被触发。

下面验证数值文本框。当单击“提交”按钮时，触发最大/最小值验证。

第三个input是性别输入验证，既有required，又有disbaled，试验结果表示，当元素被设置 为 disabled 时，表单的验证失效，将 disabled 换为 readonly 后，效果是⼀样的。这说明，只有当表单项可编辑时，才会有表单验证，否则表单验证⽆效。

disabled和readonly两者虽相似也仍有异处，如下：

- disabled 属性对所有表单类元素有⽤，readonly 属性只对⽂本和密码⽂本框有⽤； 

- 设置 disabled 属性后，JavaScript 获取不到⽬标元素，设置 readonly 属性则可以； 

- 设置 disabled 属性后，表单数据不会传输，设置 readonly 属性则依然可以传输； 

- disabled 属性和 readonly 属性都会使表单验证失效。

  

由此，在元素兼有 disabled 属性或 readonly 属性的情况下，相当于同时设置了 novalidate 属性。

在所有验证通过后，表单的逻辑是将数据提交到某个地址，此时会刷新⻚⾯，这不是我们想要 的。在前后端分离的开发模式下，通常希望只获取验证后的输⼊值，不刷新⻚⾯，获取值后⾃⾏处理，这应该如何实现呢？ 其实很简单，在  元素中添加⼀个 onsubmit 事件：

```html
<form id="form1" onsubmit="onSubmit(this);return false;">
 ...
</form>
```

这⾥调⽤了 onSubmit() ⽅法，参数 this 表示当前的  元素；关键是在最后⾯加 上“return false”，这样就可以阻⽌默认的⻚⾯刷新了。

 onSubmit() ⽅法只会在表单验证通过后调⽤，所以不⽤考虑未验证通过的情况。只需要在 onSubmit() ⽅法中获取到每个表单项的 name 和 value，组成⼀个我们需要的数据对象即可：

```javascript
function onSubmit(e) {
 let formData = {}
 Array.from(e.children)
 .filter((el) => el.name)
 .forEach((el) => {
 formData[el.name] = el.value
 })
 console.log(formData)
}
```



### 2.  CSS：修饰页面的布局和样式

#### 2.1 3种页面布局方案

##### 1. 浮动布局

```html
<div id="app">
 <div class="menu">我是菜单</div>
 <div class="content">我是内容</div>
</div>
<style>
 #app .menu {
 width: 200px;
 height: 400px;
 float: left;
 background: pink;
 }
 #app .content {
 height: 400px;
 background: lightblue;
 }
</style>

```

缺点：

元素浮动后会脱离正常的⽂档流，导致⽗元素⽆法被撑开，⾼度变成 0，⽽浮动的元素⼜与其他元素混在⼀ 起，看起来⾮常奇怪且难以理解。

可在CSS 中通过 clear:both 属性清除浮动，但以此一来，便仍有限。

##### 2. inline-block 布局

⽐浮动布局稍好⼀些的是 inline-block 布局。因为在设置 display:inline-block 属性后，元素 本身就会⾃动横向排列，同时还可以设置宽度、⾼度、内边距和外边距等，实现起来更直观。

```html
<style>
 #app {
 display: inline-block;
 }
 #app .menu {
 width: 200px;
 height: 400px;
 display: inline-block;
 background: pink;
 }
 #app .content {
 display: inline-block;
 width: 800px;
 height: 400px;
 background: lightblue;
 }
</style>
```



可以看到采用这种布局会导致元素间的默认留白，可用letter-spacing属性来处理：

```html
<style>
 #app {
 ...
 /* 负号后⾯的值可以尽量⼤⼀些 */
 letter-spacing: -100px;
 }
 #app .menu {
 ...
 letter-spacing: 0;
 }
 #app .content {
 ...
 letter-spacing: 0;
 }
</style>
```



##### 3. Flex 布局

最后便是万众瞩目的flex布局，其有 3 个重要的概念：容器、主轴、交叉轴。容器很简单。

只需要将任意元素设置为 display: flex，该元素就是⼀个使⽤ Flex 布局的容器了。在这个容器下，⼦元素会按照主轴的⽅向按顺序排列。主轴的默认⽅向为横向，也就是元素从左到右排列。交叉轴与主轴的⽅向正好相差 90 度，如果主轴为从左到右排列，那么交叉轴位从上到下排列。
容器的主轴⽅向是可以设置的，并且设置的⽅式也很简单：

```html
#app {
 display: flex;
 flex-direction: column;
}
```

这⾥是使⽤ flex-direction 属性来设置主轴⽅向，该属性的可选值有以下 4 个：

row：横向从左到右（默认）

row-reverse：横向从右到左

column：纵向从上到下

column-reverse：纵向从下到上

当主轴的⽅向改变时，交叉轴的⽅向也随之改变。当主轴的⽅向变成纵向时，交叉轴的⽅向就 变成横向。在确定主轴和交叉轴的⽅向之后，接下来就可以考虑如何对⻬两个轴上的元素。主轴通过 justify-content 属性来设置元素的对⻬⽅式，该属性的可选值如下： 

flex-start：从左到右

flex-end：从右到左 

center：居中对⻬

space-between：两端对⻬(元素本身没有间距，所以会贴着两边对⻬)

space-around：两端对⻬(元素之间的间距要 相同，相当于各⾃有⼀个相等的 margin，所以不会贴着两边对⻬)

除了设置主轴⽅向的元素对⻬，还可以⽤ align-items 属性设置交叉轴⽅向的元素对⻬， align-items 属性的可选值如下：

flex-start：从上到下

flex-end：从下到上 

center：居中对⻬

baseline：基线对⻬(指按照文字的基线对齐)

stretch：填满整个⾼度（表示填满整个⽗元素的⾼度，如上⾯提到的左右布局，如果希望任意⼀列的⾼度改变 时，另⼀列能以最⾼的⾼度显示，永远填满⽗元素，那么此时使⽤ stretch 就可以）

可以通过 flex-wrap 属性设置。flex-wrap 属性的可选值如下：

nowrap：不换⾏（默认） 

wrap：换⾏，第⼀⾏在上 

wrap-reverse：换⾏，第⼀⾏在下

#### 2.2 样式与动画解析

##### 1. 渐变

线性渐变：上下/左右/对⻆⽅向改变颜⾊
					通过linear-gradient（）函数实现，其第一个参数表示渐变的方向，通过一个角度来控制。实例如下：

​					0deg：0 度，表示从下到上渐变；

​					90deg：90 度，表示从左到右渐变； 

​					180deg：180 度，表示从上到下渐变； 

​					-90deg：-90 度，表示从右到左渐变。

​					如果要实现⼀个 120 度的渐变背景⾊，那么代码如下：

```html
background-image: linear-gradient(120deg, red, yellow, blue);
```

渐变色文字实现：

```html
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0"
/>
 <title>⽂字渐变</title>
 <style>
 h1 {
 background: linear-gradient(120deg, red, yellow, blue);
 color: transparent;
 background-clip: text;
 -webkit-background-clip: text;
 }
 </style>
 </head>
 <body>
 <h1>
加油！！！！！！！！！！！！！！
 </h1>
 </body>
</html>
```

-webkit-background-clip: text;这一条将背景色的应用区域局限在文字上，即隔离了文字以外的区域的背景色，并把文字设为透明，实现效果

径向渐变：由中⼼点向外扩散改变颜⾊。线性渐变和径向渐变⼤同⼩异。径向渐变通过 radial-gradient() 函数来实现。径向渐变默认 展示⼀个椭圆形状，中⼼点在正中央。 radial-gradient() 函数第⼀个参数 shape 表示形状，⽀持 圆形（circle）和椭圆（ellipse）两种。
基于上⾯的代码实现⼀个圆形的径向渐变：

```css
<style>
 .box {
 width: 400px;
 height: 200px;
 background-color: red;
 border-image: radial-gradient(circle, red, yellow, blue);
 }
</style>
```

##### 2. 转换

CSS 转换（Transform）可以对元素本身进⾏改变，包括移动、缩放、转动或拉伸。这个特性⾮常适合做⿏标指针移⼊动画，如常⻅的某个按钮，⿏标指针移⼊时变⼤或出现阴 影，移出后元素恢复原状，⽤转换实现⾮常轻松。转换分为 2D 转换和 3D 转换，常⽤的是 2D转换。2D 转换的分类及其对应的实现函数如下： 

位移：translate(x,y) 

旋转：rotate(0deg) 

缩放：scale(x,y)

倾斜：skew(x,y)

```html
<!DOCTYPE html>
<html lang="en">
 <head>
 <meta charset="UTF-8" />
 <meta name="viewport" content="width=device-width, initial-scale=1.0"
/>
 <title>渐变</title>
 <style>
 .box {
 margin: 100px;
 width: 300px;
 height: 300px;
 background-color: lightblue;
 /* 右移 20 像素，上移 30 像素 */
 transform: translate(20px, 20px);
 /* 旋转 60 度 */
 transform: rotate(60deg);
 /* 放⼤ 1.2 倍 */
 transform: scale(1.2);
 /* X 轴倾斜 10 度，Y 轴倾斜 20 度 */
 transform: skew(10deg, 20deg);
 }
 </style>
 </head>
 <body>
 <div class="box"></div>
 </body>
</html>

```

⽤两个参数表示 X 轴和 Y 轴如何转换的⽅法，也可以拆成两个单独的⽅法分别设置 X 轴和 Y 轴上的变化。例如，可以将位移函数 translate(20px,30px) 拆分为如下形式： 

translateX(20px)：X 轴位移 20 像素； 

translateY(30px)：Y 轴位移 30 像素； 

transform 属性还⽀持同时定义多个参数。例如，设置⼀个元素，⿏标指针移⼊时放⼤并旋转，代码如下：

```
.box:hover {
 transform: scale(1.2) rotate(30deg)
}
```

##### 3. 过渡

在CSS3中，过渡（Transition）是一种让元素在属性变化时，通过指定时间进行平滑过渡的效果，而不是瞬间变化。这样可以提升用户体验，避免界面变化过于生硬。实现过渡的基本步骤：

指定过渡的CSS属性：定义哪些属性在变化时会应用过渡效果。

设置过渡持续时间：定义效果持续的时间长度。

示例：假设一个元素在鼠标移入时高度增加50像素，移出时恢复原状，且动画持续1秒：

```
.box {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  transition: height 1s;
}

.box:hover {
  height: 250px;
}
```

同时改变多个属性，过渡支持多个属性同时变化。例如，当鼠标移入时，元素高度增加50像素，向右移动50像素，同时放大1.1倍，可以这样设置：

```
.box {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  transition: height 1s, transform 1s;
}

.box:hover {
  height: 250px;
  transform: translate(50px) scale(1.1);
}
```

过渡的四个属性:

transition-property：指定过渡的CSS属性。

transition-duration：指定过渡的时间。

transition-timing-function：控制过渡的速度曲线，例如匀速（linear）、ease-in、ease-out等，还可以使用贝塞尔曲线自定义速度。

transition-delay：指定过渡的延迟时间。

##### 4. 动画

在CSS中，过渡效果只能实现从一个状态到另一个状态的线性变化。如果需要创建连续动画，比如让元素不停旋转，则需要使用 `animation` 属性。

创建动画的步骤

1. 定义动画：使用 `@keyframes` 定义动画的不同阶段（例如开始和结束）。
2. 应用动画：将定义的动画赋值给元素，并设置动画时长等属性。

示例：元素不停旋转

```css
/* 定义动画 */
@keyframes myAnimation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 应用动画 */
.box {
  width: 200px;
  height: 200px;
  background-color: lightblue;
  animation: myAnimation 12s linear infinite;
}
```

常用的动画属性

- **animation-name**：动画的名称。
- **animation-duration**：动画持续的时间。
- **animation-timing-function**：动画速度曲线（如线性、贝塞尔曲线）。
- **animation-delay**：动画延迟时间。
- **animation-iteration-count**：动画播放次数（如 `infinite` 表示无限次）。

示例：跑马灯效果

```css
/* 定义滚动动画 */
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

/* 应用跑马灯效果 */
.marquee {
  width: 300px;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
}

.marquee-content {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}
```

#### 2.3 CSS工程化

##### 1. 预处理器：Less/Sass

CSS 预处理器（如 Less 和 Sass）增强了CSS的功能，使其更具可维护性和复用性。它们的主要特性包括：

**嵌套代码**：允许样式规则的嵌套，使代码更具层次感。

**模块化引用**：通过`@import`引入其他样式文件，方便代码组织。

**变量支持**：可以定义全局或局部变量，提高样式的一致性。

**混入（Mixins）**：实现代码片段的复用。

```less
// a.less
@main-color: red;

.box {
  background: @main-color;
}

// b.less
@import './a.less';
.box2 {
  background: blue;
}
```

##### 2. 代码复用：变量和混入

```css
// 使用Sass定义变量与混入
$main-color: red;

@mixin custom-shadow {
  box-shadow: 2px 0px 2px 1px #f3f3f3;
  &:hover {
    box-shadow: 2px 2px 10px 2px #ddd;
  }
}

.box1 {
  background: $main-color;
  @include custom-shadow;
}
```

Sass使用`$`符号定义变量，使用`@mixin`和`@include`实现代码片段的复用（混入），提高代码的可维护性。

##### 3. 后处理器：PostCSS

预处理器提供了一系列高级功能，最终将代码转换成 CSS 代码。但是转换成 CSS 代码后，并不是就万事大吉了，如果一些新属性需要做浏览器兼容，那么需要添加一些浏览器指定的前缀。

```css
.box {
 transition: all 4s ease;
 -webkit-transition: all 4s ease;
 -moz-transition: all 4s ease;
 -ms-transition: all 4s ease;
 -o-transition: all 4s ease;
}
```

有了 PostCSS 就可以完全忽略浏览器指定的前缀。在 预处理器将代码转换成 CSS 代码后，PostCSS 会监测到⼀些需要兼容的属性，并且⾃动在属性 前添加前缀，这是通过 autoprefixer 实现的。 除了⾃动添加前缀，PostCSS 还⽀持直接使⽤未来的 CSS 语法，并且可以⾃动处理 polyfills。

#### 2.4 动态值与响应式

响应式布局通过动态调整页面元素的样式，以适应不同屏幕尺寸的设备。例如，PC上的文字大小可以是20px，平板电脑上是18px，手机上是16px。这种调整通常通过CSS媒体查询和动态单位（如`rem`、`vw`、`vh`）来实现。

```css
 body {
  font-size: 20px;
}

@media screen and (max-width: 850px) {
  body {
    font-size: 18px;
  }
}

@media screen and (max-width: 400px) {
  body {
    font-size: 16px;
  }
}
```

上面的代码通过媒体查询调整不同设备上的字体大小。

```css
 html {
  font-size: 10px;
}

body h2 {
  font-size: 2rem; /* 在根元素字体大小基础上计算 */
}

.box {
  width: 20vw;  /* 占浏览器宽度的20% */
  height: 20vh; /* 占浏览器高度的20% */
}
```

`rem`是相对于根元素字体大小的单位，而`vw`和`vh`是相对于视口宽度和高度的单位。通过这些单位，可以实现更为灵活的响应式布局。

```css
 html {
  font-size: calc(10px + 0.5vw); /* 动态计算根元素字体大小 */
}

body {
  font-size: 1.5rem; /* 基于根元素字体大小 */
}
```

通过`calc()`函数，可以将像素与动态单位结合，进一css步增强布局的响应性。

### 3.  JavaScript：⻚⾯运⾏的核⼼原理

#### 3.1 数据类型与函数

JavaScript 数据类型分为两种：基本类型（如 String、Number、Boolean 等）和 引用类型（如 Object、Array、Function 等）。基本类型保存在栈内存中，赋值时是值的拷贝；引用类型保存在堆内存中，赋值时拷贝的是引用。

例如：

```javascript
var a = '前端真好玩';
var b = a;
b = '前端真有趣';
console.log('a:', a); // '前端真好玩'
console.log('b:', b); // '前端真有趣'

var a1 = { name: '前端人' };
var b1 = a1;
b1.name = '程序员';
console.log('a1:', a1); // { name: '程序员' }
console.log('b1:', b1); // { name: '程序员' }
```

JavaScript 有 6 种基本类型：

- String
- Number
- Boolean
- Null
- Undefined
- Symbol

使用 `typeof` 可以判断这些基本类型，但 `typeof null` 返回的是 `"object"`，这与引用类型的结果相同。

常见的引用类型包括：

- Object
- Array
- Function
- Date
- RegExp

为了准确判断引用类型和 Null，可以使用 `Object.prototype.toString.call()` 方法：

```javascript
 Object.prototype.toString.call([]); // [object Array]
Object.prototype.toString.call(null); // [object Null]
```

另一种判断引用类型的方式是使用 `instanceof` 关键字：

```javascript
 [] instanceof Array; // true
new Date() instanceof Date; // true
```

`instanceof` 使用简单，但 `Object.prototype.toString()` 兼容性更好，尤其适用于 Polyfill 方案。理解 `Object.prototype.toString()` 还能帮助我们更好地掌握 JavaScript 的原型链继承。

#### 3.2 变量与作用域

在 JavaScript 中，`var` 关键字声明的变量具有作用域，可以是全局作用域（在任意函数之外声明）或函数作用域（在函数内声明）。例如：

```javascript
 var str1 = '北京';
function test() {
    var str2 = '上海';
    console.log('str1:', str1); // '北京'
}
test();
console.log('str2:', str2); // ReferenceError: str2 is not defined
```

上面的例子说明函数内部可以访问外部变量，但外部无法访问函数内的变量。这就是 JavaScript 的基本作用域机制。如果在当前作用域找不到变量，JavaScript 会向上查找父级作用域，而不会向下查找子级作用域。

ES6 引入了块级作用域，必须使用 `let` 或 `const` 关键字声明变量。与 `var` 不同，`let` 和 `const` 声明的变量有以下特性：

1. **不允许重复声明**：相同变量名不能重复声明，否则会报错。
2. **不存在变量提升**：`let` 和 `const` 声明的变量不会被提升到作用域顶部。

示例代码如下：

```javascript
 {
    let city1 = '上海';
    var city2 = '南京';
}
console.log(city1); // ReferenceError: city1 is not defined
console.log(city2); // '南京'
```

相比 `var`，`let` 和 `const` 更加安全。`let` 不允许在声明之前访问变量，而 `const` 则用于声明常量，赋值后不可修改。同样，`const` 与 `let` 共享块级作用域和禁止重复声明的特性。`const` 关键字还确保常量的不可变性，但对于引用类型的数据，如数组或对象，数据本身是可以修改的，只是引用本身不能更改。

```javascript
 const arr = [1];
arr.push(2);
console.log(arr); // [1, 2]
arr = [1, 2]; // TypeError: Assignment to constant variable.
```

综上，`let` 与 `const` 提供了更严谨的变量声明机制，建议使用 `let` 代替 `var`，并在需要不可变数据时使用 `const`。

#### 3.3 面向对象

JavaScript 是一种面向对象的编程语言，但它不像 Java 那样基于类，而是通过原型（Prototype）和原型链实现继承和复用。

原型是一个对象，用于实现属性和方法的共享。每个构造函数都有一个 `prototype` 属性，指向它的原型对象。而每个实例对象都有一个 `__proto__` 属性，指向其构造函数的原型对象。

```javascript
 function MyCat(name, color) {
  this.name = name;
  this.color = color;
}

MyCat.prototype.call = function () {
  console.log('喵喵喵');
};

let xixi = new MyCat('西西', '白色');
xixi.call();  // 输出：喵喵喵
```

在上面的例子中，`xixi` 实例可以访问 `MyCat.prototype` 上的 `call()` 方法。

原型链

当访问一个对象的属性或方法时，JavaScript 会首先查找该对象自身。如果找不到，它会沿着原型链继续查找，直到找到为止，或者到达原型链的顶端 `Object.prototype`。

```javascript
console.log(xixi.valueOf());  // 输出：'[object Object]'
```

即使 `valueOf()` 方法不在 `MyCat.prototype` 上，JavaScript 仍能找到它，因为 `xixi` 的原型链最终指向了 `Object.prototype`。

ES6 引入了 `class` 语法，使继承更加直观，但底层仍然通过原型链实现。

```javascript
 class MyCat extends MyPets {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  call() {
    console.log('喵喵喵');
  }
}

let xixi = new MyCat('西西', '白色');
xixi.call();  // 输出：喵喵喵
```

#### 3.4 事件循环

函数调⽤栈。 
JavaScript 代码是分块执⾏的。每个需要执⾏的代码块会被放到⼀个栈中，按照“后进先出”顺序执⾏，这个栈就是函数调⽤栈。

在第⼀次执⾏ JavaScript代码时，全局代码会被推⼊函 数⽤栈执⾏。后⾯每调⽤⼀次函数，就会在栈中推⼀个新的函数并执⾏。执⾏完毕，函数会从栈中弹出。

即是说，代码只有在进⼊函数调⽤栈之后才能被执⾏。在⼀系列函数被推⼊函数调⽤栈之 后，JavaScript 先从栈顶开始执⾏函数，执⾏完⼀个⽴刻出栈再执⾏下⼀个，这个过程⾮常快。

还有⼀种特殊情况，就是异步任务。

⼀个函数（或全局代码）内包含异步任务时，如 setTimeout 的回调函数和 promise.then 的回调函数，这些函数是不能⽴刻被推⼊函数调⽤栈执 ⾏的，需要等到某个时间点后才能决定是否执⾏。不能⽴刻执⾏只能排队等待。 于是这些等待执⾏的任务按照⼀定的规则排队，等待被推到函数调⽤栈中。这个由异步任务组 成的队列就叫作任务队列。

在执行同步代码的过程中，新的宏任务和微任务会分别进入各自的队列。全局代码在执行完同步代码后，会保留在栈中以确保全局变量的可访问性。接着，由 `Promise` 产生的微任务会按顺序进入函数调用栈并依次执行，控制台会打印。

当微任务队列清空后，UI 渲染会进行一次更新，然后进入下一轮任务检查。如果宏任务队列不为空，则提取一个宏任务执行，并可能产生新的宏任务和微任务。这个循环的过程就是事件循环。

宏任务与微任务的区别在于：

宏任务（如全局代码）先执行，宏任务与微任务交替进行。

宏任务一个一个执行，而微任务会一次性执行完毕。

最后，所有 `Promise.then` 的回调函数执行完毕后，才会执行 `setTimeout` 的回调，并打印。

事件循环的基本流程是：一个宏任务 → 一组微任务 → 一个宏任务 → 一组微任务。

#### 3.5 执行上下文与this

若想执行代码，则需要将全局代码或函数推入函数调用栈。

因为代码被推入函数调用栈后创建了执行上下文环境，上下文才是真正执行代码的地方——任何代码都在执行上下文环境中运行

执行上下文主要分为3 种。

- 全局上下文：全局代码所处的环境；
- 函数上下文：函数调用时创建的上下文；
- Eval上下文（几乎已经被废弃，只需要知道即可）

在全局代码作为第一个宏任务进入函数调用栈后，就创建了全局上下文环境。全局上下文有两个明显的标志：一是全局对象（Window 或   Global)；二是this，指向全局对象。

并且，全局代码执行后并不会出栈。按照执行上下文的解释，就是全局上下文一直存在，因此能在代码中一直访问全局变量和 this。
如果全局代码中声明了变量和函数，那么这些变量和函数会一直随着全局上下文存在。如

```javascript
// test.js
var city = '北京'
var area = '海淀区'
function getAddress() {
 return city + area
}
getAddress()
```

上述代码声明了两个变量和⼀个函数，在全局上下⽂创建时会被添加到全局对象 Window 下。虽然我们看不到，但是创建过程是分阶段的。执⾏上下⽂的⽣命周期分为以下两个阶段。 

- 创建阶段：初始化变量和函数等 

- 执⾏阶段：逐⾏执⾏脚本中的代码 

  创建阶段做的事情分为以下⼏个步骤。

  第 1 步：创建全局对象( Window 或 Global)； 

  第 2 步：创建 this，并指向全局对象 

  第 3 步：将变量和函数放到内存中，为变量赋值 undefined

  第 4 步：创建作⽤域链

这也解释了前⾯介绍的变量提升。为什么会出现变量提升呢？从本质上来说，在执⾏上下⽂创 建阶段已经将变量赋值为 undefined，此时代码还未执⾏，在代码执⾏时变量已经存在，这才现了 变量提升的错觉。

当创建阶段的准备⼯作完成后，接下来进⼊执⾏阶段。执⾏阶段是按照先后顺序执⾏代码的遇 到变量赋值时就赋值，遇到函数调⽤时就调⽤，在这个阶段正式开始事件循环。 按照上下⽂的两个阶段进⾏拆分：

```javascript
// 1. 创建阶段
var city = undefined
var area = undefined
function getAddress() {
 var country = '中国'
 return country + city + area
}
// 执⾏阶段
city = '北京'
area = '海淀区'
getAddress()
```

在全局上下⽂的执⾏阶段如果遇到函数，那么函数会被推⼊函数调⽤栈执⾏，此时创建了函数 上下⽂。函数上下⽂也分为创建阶段和执⾏阶段，与全局上下⽂基本⼀致。但⼆者也是有区别的， 具体如下。 

- 创建时机：全局上下⽂是在运⾏脚本时创建的，函数上下⽂是在函数调⽤时创建的。 
- 创建频率：全局上下⽂仅在第⼀次运⾏时创建⼀次，函数上下⽂则是调⽤⼀次创建⼀次。 
- 创建参数：全局上下⽂创建全局对象（Window），函数上下⽂创建参数对象 （argument）。
- this 指向：全局上下⽂指向全局对象，函数上下⽂取决于函数如何被调⽤。

函数调用栈：每次函数被调用时，会创建一个执行上下文并推入栈中。当函数执行完成，这个上下文会从栈中弹出并销毁。函数内的变量也会被销毁，这就是为什么函数内部的变量在函数调用后无法访问的原因。

闭包：当一个函数返回另一个函数时，返回的函数仍然可以访问外部函数的变量。即使外部函数已经执行完毕并销毁，内部函数依然可以访问这些变量。这是因为 JavaScript 保存了外部函数的作用域链。

```
javascript复制代码function funOut(a) {
  return function funIn(b) {
    return a + b;
  }
}

var funAdd = funOut(10);
console.log(funAdd(20)); // 30
```

在这个例子中，`funOut` 返回了 `funIn` 函数。即使 `funOut` 函数已经执行完毕，其局部变量 `a` 仍然可以在 `funIn` 函数中被访问。

作用域链：当 `funIn` 函数被创建时，它保存了 `funOut` 的作用域链。即使 `funOut` 执行完毕，其变量 `a` 依然保存在作用域链中，因此 `funIn` 可以访问它。

### 4.  本章小结

函数调用栈：函数调用时会创建上下文，完成后销毁上下文。

闭包：使得内部函数可以访问外部函数的变量，即使外部函数已经结束执行。