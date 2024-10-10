# 新时代的 JavaScript 

自 1995 年发布第一个标准版 JavaScript 以来，经过 20 多年的发展，JavaScript 尤其是在最近几年加速淘汰旧设计和语法，推出了更简洁的新标准。目前，三大框架都使用 ES6+ 语法开发，Node.js 也成为前端开发的核心技术之一，帮助解决工程和工具上的诸多问题。此外，TypeScript 现已全面融入前端开发体系，广泛用于提高代码质量和效率。ES6+、Node.js 和 TypeScript 已成为现代前端技术的基础，掌握这些关键知识对于后续框架开发至关重要。

### 1.  ES6+ ：下一代语法标准

ES6+ 指从 ECMAScript 第 6 版起到现今的所有更新。ES6 是 JavaScript 语法的分水岭，自此之后几乎每年都有新版本发布，新增功能以应对前端需求变化。ES6 是最关键的版本，许多创新如 Promise、class 和模块化等都源自这一版，因此从 ES6 开始学习。

#### 1.1 变量与字符串的扩展

##### 1. 变量解构赋值

ES6 中新增了声明关键字let 和   const。关于这两个关键字和 var 关键字的用法及区别请第2章。其实，总结起来就是，const 关键字用于声明常量，let 关键字用于声明局部变量。与之前的版本相比，除了声明方式有变化，ES6 中变量/常量的读取方式也有了较大的简化，示例如下：

```javascript
var foods={
    best: "小龙虾",
    good:"火锅",
    normal:"快餐",
    bad:"方便面"
}

// 获取foods中的best和bad
var best =foods.best
var bad = foods.bad;

//解构赋值
var{best,bad}=foods
console.log(best)
console.log(bad)

//也可为属性设置别名
var{best:best1,bad:bad1,hello}=foods
console.log(best1);
console.log(bad);
console.log(hello);
```

也可对多层嵌套对象起作用，示例如下：

```javascript
var address = {
 city: {
 name: '北京市',
 area: {
 name: '海淀区',
 school: {
 name: '北京⼤学',
 },
 },
 },
}
// 分别取出城市、区和学校
console.log(address.city.name) // 北京市
console.log(address.city.area.name) // 海淀区
console.log(address.city.area.school.name) // 北京⼤学


//解构赋值
let {
 city: {
 name: city_name,
 area: {
 name: area_name,
 school: { name: school_name },
 },
 },
} = address
console.log(city_name) // 北京市
console.log(area_name) // 海淀区
console.log(school_name) // 北京⼤学
```

除了对象，数组也可以被解构。二者的区别在于：对象解构根据属性，数组解构则根据位置。示例如下：

```javascript
var foods = ['⼩⻰虾', ['⽺⾁串', '板筋', ['烤鸡腿', '烤鸡⽖']]]
//解构赋值
let [a, [b1, b2, [c1, c2]]] = foods
console.log(a) //⼩⻰虾
console.log(b1, b2) //⽺⾁串 板筋
console.log(c1, c2) //烤鸡腿 烤鸡⽖
```

##### 2. 字符串的扩展

在项目开发中字符串是使用得最多的数据类型之一。字符串操作包括但不限于拼接、截取、取某个位置的值等。ES6 提供了许多字符串操作方法。

知道某个字符串中是否包含某个字符片段，用 indexOf( 方法来判断。示例如下：

```javascript
var str='You are best engineer'
console.log(str.indexOf('best'))
// 8
console.log(str.indexOf('bst'))
//-1
```

ES6 提供的3 个新方法可以更便捷地判断包含关系，并且这 3个新方法都返回布尔值。

includes()：判断字符串中是否包含某个字符。

startsWith()：判断字符串是否以某个字符开头。

endsWith()：判断字符串是否以某个字符结尾。

示例如下：

```javascript
let str = 'You are best engineer';
console.log(str.includes('best')); // true
console.log(str.startsWith('You')); // true
console.log(str.endsWith('neer')); // true
```

使用    repeat() 方法可以将字符串重复N 次。

```javascript
let str = '测试内容';
str = str.repeat(3);
console.log(str); 
// '测试内容测试内容测试内容'
```

将字符串中的字符 A 全部替换为字符 B，ES6 新增了replaceAlI() 方法，利用该方法可以快速替换所有内容

```javascript
let str = 'I love you, superstar is you';
str = str.replaceAll('you', 'me');
console.log(str); 
// 'I love me, superstar is me'
```

ES6 提供的最强大的字符串功能当属模板字符串。模板字符串用反引号(``)标识，这不仅大简化了字符串与变量的拼接，还提供了格式保留（如换行、缩进等），使字符串的使用和展示都非常友好。

```javascript
let title = '块级元素';
let divstr = `
  <div>
    <span>${title}</span>
  </div>
`;
console.log(divstr);
```

在   JavaScript 中，对象无处不在。ES6 新增的属性、方法、特性不仅简化了数据操作的方式，还增强了数据操作的能力。ES5 要求在对象中定义属性和方法时必须采用key:value 的方式。ES6 则允许在key==value 时只使用一个属性，这是一种简化用法。示例如下：

```javascript
let obj = { city: '北京' };
let desc = Object.getOwnPropertyDescriptor(obj, 'city');
console.log(desc); 
// { value: '北京', writable: true, enumerable: true, configurable: true }
Object.defineProperty(obj, 'city', { writable: false });
obj.city = '上海';
console.log(obj.city); 
// '北京'，因为 writable 为 false，不能修改
```



#### 1.2 对象的扩展

##### 1. 扩展运算符

使用该运算符可以将对象中的“剩余属性”另存到一个新对象中。剩余属性是指原对象中未显式解构的属性/方法。

```javascript
let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let { a, b, ...other } = obj;
console.log(other); 
// { c: 3, d: 4, e: 5 }
```

在一个对象未显示解构任意属性只提供了扩展运算符时，新对象会包含原对象的所有属性，这样就实现了对象的“复制”。

```javascript
var obj = { a:1 , b:2 }
let{ ...copy } = obj
console.log( copy )
// { a: 1, b: 2 }
// 等同于
let copy = { ...obj }
console.log( copy )
// { a: 1, b: 2 
```



##### 2. 描述对象

对象的每个属性都有一个描述对象（Descriptor）用控制该属性的行为。使用Object.getOwnPropertyDescriptor() 方法可以获取描述对象：

```javascript
let obj = { city: '北京' };
let desc = Object.getOwnPropertyDescriptor(obj, 'city');
console.log(desc); 
// { value: '北京', writable: true, enumerable: true, configurable: true }
Object.defineProperty(obj, 'city', { writable: false });
obj.city = '上海';
console.log(obj.city); 
// '北京'，因为 writable 为 false，不能修改
```

##### 3. 对象遍历

ES6 提供了便捷的方法来遍历对象的属性和值：

Object.keys()：获取对象的属性数组。

Object.values()：获取对象的值数组。

Object.entries()：获取对象的属性和值的数组。

```javascript
let obj = { name: '李小龙', position: '香港', skill: '中国武术' };
console.log(Object.keys(obj)); 
// [ 'name', 'position', 'skill' ]
console.log(Object.values(obj)); 
// [ '李小龙', '香港', '中国武术' ]
console.log(Object.entries(obj)); 
// [ ['name', '李小龙'], ['position', '香港'], ['skill', '中国武术']
```

##### 4. 对象拷贝

###### 1. 浅拷贝

在修改变量b时变量a也会改变，这复制方式就叫作浅拷⻉。

```javascript
var a = { name: '前端' };
var b = a;
b.name = '后端';
console.log(b); // { name: '后端' }
console.log(a); // { name: '后端' }
```

ES6 的扩展运算符 `...` 可以实现浅拷贝。

```javascript
var a = { name: '前端' };
var b = { ...a };
b.name = '后端';
console.log(b); // { name: '后端' }
console.log(a); // { name: '前端' }
```

b 是 a 的浅拷贝

###### 2. 深拷贝

深拷⻉是指对复制后的对象修改属性/方法时不会影响原对象。

```javascript
var obj = {
    name: '电影',
    category: {
    cartoon: '动漫',
    kungfu: '武侠',
    love: '爱情',
    },
    platform: ['腾讯视频', '爱奇艺', '优酷'],
};
var obj2 = JSON.parse(JSON.stringify(obj));
obj2.category.kungfu = '仙侠';
obj2.platform[2] = '哗哩哗哩';

console.log(obj2.category.kungfu, obj2.platform[2]); 
// 仙侠 哗哩哗哩
console.log(obj.category.kungfu, obj.platform[2]); 
// 武侠 优酷
```

obj2 是 obj 的深拷贝

数组常常与对象结合使用，二者组成了复杂的 JSON 数据。数组的扩展主要表现在查询、过滤、遍历和转换4 个方面。

#### 1.3 数组的扩展

##### 1. 数组查询

数组查询分为元素查询和索引查询两类，是指在一个数组中查询满足某个条件的数组或索引并回。ES6中的数组查询包括4 个方法，分别为

find(）、findLast() 、findlndex() 和 findLastlndex()

```javascript
var arrs = [
    { name: '赛罗', color: '红蓝' },
    { name: '捷德', color: '红黑' },
    { name: '维克特利', color: '红黑' },
    { name: '迪迦', color: '红蓝' }
];

// 查找匹配的第一个元素
var row = arrs.find((row) => row.color == '红蓝');
console.log(row.name); 
// 赛罗
// 查找匹配的最后一个元素
var row2 = arrs.findLast((row) => row.color == '红蓝');
console.log(row2.name); 
// 迪迦
// 查找匹配的第一个索引
var index = arrs.findIndex((row) => row.color == '红黑');
console.log(index); 
// 1
// 查找匹配的最后一个索引
var index2 = arrs.findLastIndex((row) => row.color == '红黑');
console.log(index2); 
// 2
```

##### 2. 数组过滤

数组过滤是指从数组中筛选出我们想要的元素并返回新数组。常用的数组过滤方法包括filter() 方法和slice() 方法。

```javascript
var generals = [
    { id: 1, name: '吕布' },
    { id: 2, name: '关羽' },
    { id: 3, name: '马超' },
    { id: 4, name: '邢道荣' }
];
// 按条件过滤数组
var flarr = generals.filter((row) => row.id >= 3);
console.log(flarr); 
// [{ id: 3, name: '马超' }, { id: 4, name: '邢道荣' }]
// 根据下标切片
var flarr2 = generals.slice(1, 3);
console.log(flarr2); 
// [{ id: 2, name: '关羽' }, { id: 3, name: '马超' }]
```

##### 3. 数组遍历

数组遍历是指按照元素顺序依次执行函数。JavaScript 原始的遍历方式是 for 循环，ES6 为数组新增了有遍历功能的便捷方法，主要包括 forEach() 方法和map() 方法。

```javascript
var arrs = [1, 2, 3, 4, 5];
// 使用 forEach 遍历数组
arrs.forEach((n) => {
    console.log(n); 
    // 分别打印出 1, 2, 3, 4, 5
});
// 使用 map 遍历并生成新数组
let res = arrs.map((n) => n * 2);
console.log(res); 
// [2, 4, 6, 8, 10]
```

##### 4. 数组转换

数组转换表示将原数组根据需要转换成另一种格式，一般是指修改数组的组织方式。数组转包括   from() 方法、flat() 方法和sort() 方法。

```javascript
// 类数组转数组
var like_arr = { 0: 'a', 1: 'b', length: 2 };
var arr = Array.from(like_arr);
console.log(arr); 
// ['a', 'b']

// 数组去重
var arr2 = [1, 2, 3, 2, 1];
var set = new Set(arr2);
var uniqueArr = Array.from(set);
console.log(uniqueArr); 
// [1, 2, 3]

// 数组扁平化
var arr3 = ['a', 'b', ['c', 'd', ['e']]];
var flatArr = arr3.flat(2);
console.log(flatArr); 
// ['a', 'b', 'c', 'd', 'e']

// 数组排序
var arrs4 = ['萧炎', '美杜莎', '云韵', '海波东'];
arrs4.sort((row1, row2) => row1.localeCompare(row2) ? 1 : -1);
console.log(arrs4); 
// ['海波东', '美杜莎', '云韵', '萧炎']
```

#### 1.4 函数的扩展

ES6 提供了函数的最新格式，即箭头函数，使函数的编写更加简洁：

```javascript
// ES5 中的⽤法
function getName(name) {
 return name
}
// 箭头函数的⽤法
const getName = (name) => name
```

除了语法上的简化，箭头函数更大的不同在于上下文的变化。上下文就是的指向，下面通过示例查看其变化：

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
 <script>
 var obj = {
 fun1() {
 console.log('fun1:', this) // {fun1: ƒ, fun2: ƒ}
 },
 fun2: () => {
 console.log('fun2:', this) // Window
 },
 }
 obj.fun1()
 obj.fun2()
 </script>
 </body>
</html>
```

在   ES6 之前函数的参数不能指定默认值，但是 ES6 支持指定默认值：

```javascript
function eat(food='苹果'){
    console.log(food)
}
eat()// 苹果
eat('香蕉')//香蕉
```

函数的参数不仅可以指定默认值，还支持指定 rest 参数。rest 参数与前面的扩展运算符的用法基本一致。如果一个函数的参数是动态的，并且数量不固定，那么使用 rest 参数可以很方便地取到剩余参数。

```javascript
const myLog=(tag,...args)=>{
    console.log(`${tag}:`,args)
}
myLog('水果','火⻰果')
// 水果: [ '火⻰果' ]
myLog('零⻝','坚果','芒果干','辣条')
// 零⻝: [ '坚果', '芒果干', '辣条' 
```

#### 1.5 异步编程方案

pro 是一种应用广泛的现代异步方案，比传统的回调函数更简洁。

```javascript
const promise = new Promise((resolve, reject) => {
    // 模拟异步请求
    const success = true;
    if (success) {
        resolve('请求成功');
    } else {
        reject('请求失败');
    }
});

promise
    .then((data) => console.log(data))   // 请求成功时执行
    .catch((err) => console.log(err))    // 请求失败时执行
    .finally(() => console.log('操作完成')); // 无论成功还是失败，最终都会执行
```

`Promise.all()` 和 `Promise.race()` 可以用来处理多个异步操作：

```javascript
const promise1 = new Promise((resolve) => setTimeout(resolve, 100, '结果1'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 200, '结果2'));

Promise.all([promise1, promise2]).then((results) => {
    console.log(results); 
    // ['结果1', '结果2']
});

Promise.race([promise1, promise2]).then((result) => {
    console.log(result); 
    // '结果1'
});
```

`async/await` 是 `Promise` 的语法糖，提供了更清晰的异步代码书写方式：

```
const getData = async () => {
    try {
        let res = await fetch('http://xxx.json');
        console.log(res);
    } catch (error) {
        console.log(error);
    }
};
getData();
```

#### 1.6 模块体系

早期的JavaScript 中并没有模块化的功能，所以代码难以分块隔离，更不能实现导入/导出。最早大规模引入模块系统的是Node.js。

```javascript
 // commonjsModule.js
const path = require('path');

module.exports = {
    getPath: () => path.resolve(__dirname)
};
```

ES6 并没有沿用CommonJS，而是创造了自己的模块方案，即 ESModule

```javascript
 // esModule.js
import util from './util.js';

export default {
    getPath: util.getPath()
};
```

可以导出模块的变量：

```javascript
// a.js
exportconstname='大闸蟹'
exportconstgetAttr=()=>{
return name
}
// b.js
import{name,getAttr}from'./a.js'
console.log(name)
// 大闸蟹
console.log(getAttr())
// 大闸蟹
```

a.js 可以换一种写法，以实现完全相同的效果，并且b.js 也可以为变量指定别名。代码如下：

```javascript
// a.js
export const name='大闸蟹'
constgetAttr=()=>{
return name
}
export default{ name,getAttr }
//b.js
import{nameasmyName,getAttrasmyFun}from'./a.js'
console.log(myName)
// 大闸蟹
console.log(myFun())
// 大闸蟹
```

ES2020 引入了 import() 函数，支持动态加载模块。

```javascript
if(true){
import('./xxx.json').then((json)=>{
console.log(json)
})
}
```

后续在介绍框架路由时，路由组件就是用 import(）函数动态导入的。

### 2.  Node.js：服务端的 JavaScript

在浏览器环境中，JavaScript 可以操作 DOM，具有Document、W  indow 等浏览器对象。而在N  ode.js 环境中，JavaScript 且有系统访问权限（如操作文件、执行 shell 命令），可以提供后端服务（如操作数据库、运行Web 服务器），这些实现起来非常容易。

#### 2.1 Node.js 基础

##### 1. 安装 Node.js

通过官网上下载安装包

##### 2. node 命令

使用  node 命令创建 Node.js 环境有以下两种方式

运行脚本文件

使用命令行交互（REPL ）

最常⽤的是运⾏脚本⽂件。创建⼀个 app.js ⽂件，编写如下代码：

```
// app.js
const path = require('path')
console.log(path.resolve(__filename))
```

打开命令⾏⼯具，切换到 app.js ⽂件所在的⽂件夹下，执⾏如下命令：

```
node app.js
 'E:\\for-more\\front-end\\NodeJS\\模块系统\\app.js' # app.js ⽂件的地址
```

##### 3. 命令参数

使⽤ node 命令运⾏脚本⽂件还可以传递参数，以及在⽂件中接收参数，脚⼿架的很多功能就 是基于此特性实现的。

先将 app.js ⽂件中的内容修改为如下形式：

```
// app.js
var argv = process.argv
console.log('参数：', argv)
```

再通过以下命令执⾏⽂件并传递参数：

```
node app.js tag=test name=node
# 输出结果如下
参数： [                                               
  'C:\\Program Files\\nodejs\\node.exe',        
  'E:\\for-more\\front-end\\NodeJS\\模块系统\\app.js',
  'tag=test',  
  'name=node'
]
[ 'tag=test', 'name=node' ]
```

第一项是node命令的路径，第二项是所执行文件的路径，第三项开始才是参数，因此若想获取参数，可如下操作

```
// app.js
var argv = process.argv.slice(2)
console.log('参数：', argv)
```

项目运行结果为：

```
参数： [ 'tag=test', 'name=node' ]
```

##### 4. 模块系统

Node.js 自带模块系统，每个文件都是一个独立的模块，通过 CommonJS 规范实现模块的导入和导出。

CommonJS 规范

- 导入模块：使用 `require()` 方法。
- 导出模块：使用 `module.exports` 对象。

假设有两个文件 `a.js` 和 `b.js`，其中 `a.js` 显式导出一个对象，而 `b.js` 导入并使用它：

```
 // a.js
var config = { name: 'broccoli' };
module.exports = config;
// b.js
var config = require('./a.js');
console.log(config); // 输出：{ name: 'broccoli' }
```

this 指向的区别

- 控制台（REPL）：`this` 指向全局对象 `global`。

- 模块中：`this` 指向 `module.exports` 对象。

  ```
  // 在 REPL 中
  node
  > this
  Object [global] { ... }
  
  // 在模块中
  // app.js
  this.name = 'app';
  console.log(module.exports); // 输出：{ name: 'app' }
  ```

#### 2.2 Node.js 的内置模块

Node.js 中的模块分为以下两⼤类。

- 内置模块
- 第三⽅模块

##### 1. path 模块

path 模块便是用于处理文件路径，屏蔽不同操作系统之间路径表示的差异。常用 API 包括：

- path.join()：将多个路径拼接为一个规范化路径
- path.resolve()：将路径解析为绝对路径

```
const path = require('path');
console.log(path.join('./', 'a.js')); // 输出: ./a.js
console.log(path.resolve('./', 'a.js')); // 输出: /绝对路径/a.js
```

##### 2. fs 模块

fs 模块提供文件系统操作功能，如文件的创建、修改和删除。常用的异步和同步 API 包括：

- fs.readFile()：异步读取文件内容
- fs.readFileSync()：同步读取文件内容
- fs.writeFileSync()：同步写入文件内容
- fs.statSync()：检查文件状态（是否存在、大小等）

```
 const fs = require('fs');
// 异步读取文件
fs.readFile('/path/to/file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('文件内容:', data);
});
// 同步写入文件
try {
  fs.writeFileSync('/path/to/file.txt', '新内容');
  console.log('文件写入成功');
} catch (err) {
  console.error(err);
}
// 同步检查文件状态
try {
  const stats = fs.statSync('/path/to/file.txt');
  console.log('文件大小:', stats.size);
} catch (err) {
  console.error(err);
}
```

##### 3. http模块

`http` 模块用于创建 HTTP 服务器。常用方法包括 `http.createServer()`，它的回调函数包含两个参数：请求对象 `request` 和响应对象 `response`

```
 const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200; // 设置状态码
  res.setHeader('Content-Type', 'text/plain'); // 设置响应头
  res.end('Hello World'); // 发送响应数据
});
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
```

#### 2.3 Npm 包管理

检查 npm 版本：

```bash
npm -v
```

初始化 npm 项目：

```bash
npm init
```

执行上述命令后，会生成 `package.json` 文件，同时在该文件中会加入以下依赖标识：

```json
 {
  "dependencies": {
    "axios": "^1.7.7"
  }
}
```

与此同时，在当前目录下还会生成 `node_modules` 文件夹，这个文件夹中存放的是所有的第三方软件包，安装的 `axios` 包也在这个目录下。

##### 1. Npm 包的基础命令

安装 `axios` 包：

```bash
npm install axios
```

安装 `axios` 包后，可以在项目中导入该模块并使用：

```javascript
const axios = require('axios');
axios.get('...')
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

更新 `axios` 包到最新版本：

```bash
npm update axios
```

如果不再需要 `axios` 包，可以快速将其移除：

```bash
npm uninstall axios
```

全局安装 `axios` 包（可以在任意位置使用）：

```bash
npm install -g axios
```

查看全局依赖包的安装位置：

```bash
npm root -g
```

输出类似于：

```bash
 D:\nodeJs\node_global\node_modules
```

##### 2. package.json 文件解析

`package.json` 文件是项目的清单，不仅记录第三方软件包的依赖，还包括项目的配置信息和一些命令的定义。以下是几个重要的配置项：

- `name`：应用程序/软件包的名称；
- `version`：当前版本号；
- `description`：应用程序/软件包的描述；
- `main`：应用程序的入口点；
- `scripts`：定义一组命令；
- `dependencies`：第三方依赖列表；
- `devDependencies`：第三方开发依赖列表。

通过 `npm init` 命令初始化生成的 `package.json` 文件中的内容，具体如下：

```
 {
  "name": "node-demo",
  "version": "1.0.0",
  "description": "Node.js 项目小样",
  "main": "app.js",
  "scripts": {
    "test": "echo \"this is test command\""
  },
  "author": "mqxu",
  "license": "ISC",
  "dependencies": {
    "axios": "^1.7.7"
  }
}
```

#### 2.4 环境与环境变量

在编程中，环境指的是应用程序运行的环境。对于 JavaScript 来说，代码可以运行在浏览器或 Node.js 环境中。实际上，任何编程语言都需要在某种环境下才能运行，环境就是执行代码的地方。

环境通常由某种应用程序创建。操作系统本质上是一个巨大的应用程序，因此，环境一般可以分为两大类：

- 系统环境：由操作系统（如 Linux、macOS、Windows）启动时创建。例如，系统启动后，环境中就会存在系统变量，如操作系统路径、当前用户信息等。
- 应用环境：由应用程序（如 Node.js）启动时创建。当 Node.js 启动后，Node.js 进程就会有自己的一套环境，这个环境中包含了很多有用的信息，如当前工作目录、进程 ID、内存使用情况等。

环境变量可以进一步分为系统环境变量和应用环境变量

在 Node.js 中，环境变量存储在 `process.env` 对象中。`process.env` 是一个全局对象，包含了当前运行环境的所有环境变量。

其中，最常用的一个环境变量是 `NODE_ENV`，它表示当前环境的类型。常见的环境类型有：

- `development`：开发环境，通常用于本地开发和调试。
- `production`：生产环境，用于正式上线的运行环境。
- `test`：测试环境，通常用于测试执行。

### 3.  TypeScript：支持类型的 JavaScript

#### 3.1 应该使用 TypeScript 吗

##### 1. 静态模型

```
var name:string = '张三'
name = false // 错误：不能将 boolean 类型分配给 string 类型
```

##### 2.快速提示

在 JavaScript 中，可以随意修改变量类型，如下所示：

```javascript
  var name = '张三';
name = false; // 这是合法的，但可能导致运行时错误。
```

使用 TypeScript 后，可以通过类型检查避免这些错误：

```typescript
 var name: string = '张三';
name = false; // 错误：不能将 boolean 类型分配给 string 类型。
```

在使用 TypeScript 时，编辑器（如 VSCode）会根据类型定义提供快捷提示。比如，输入 `.` 后，编辑器会列出对象的所有属性和方法。

示例：定义一个 `Person` 接口并创建一个 `createPerson` 函数

```typescript
 interface Person {
  firstName: string;
  lastName: string;
  age: number;
  greet: () => string;
}

function createPerson(firstName: string, lastName: string, age: number): Person {
  return {
    firstName,
    lastName,
    age,
    greet: function () {
      return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
  };
}
```

当创建 `Person` 对象并调用其方法时，VSCode 会提供智能提示：

```typescript
 const person: Person = createPerson('John', 'Doe', 30);
console.log(person.greet()); // 显示方法提示
// console.log(person.address); // VSCode 会提示错误：属性 "address" 不存在。
```

代码自动补全：能快速查找对象属性和方法，省去查阅文档的麻烦。

错误提示：当输入的属性或方法名有误时，编辑器会及时提示。

#### 3.2 常用类型全览

TypeScript 提供了丰富的类型以应对不同的场景。其中最常⽤的 8 个类型如下。

- string：字符串 
- number：数值 
- boolean：布尔值 
- null：Null 
- undefined：Undefined 
- symbol：Symbol 
- type[]：数组 
- object：对象

##### 1. 基本类型

在 TypeScript 中，为变量指定类型非常简单，只需在变量名后加上“：类型”。如：

```typescript
var godName: string = '孙悟空';
var godAge: number = 100;
var isGod: boolean = true;
```

ES6 新增的基本类型 `Symbol`，在 TypeScript 中对应 `symbol` 类型，示例如下：

```typescript
var smb: symbol = Symbol('标志');
```

##### 2. 引用类型

在 TypeScript 中，数组、对象和函数都是引用类型。定义数组有两种方式：

```typescript
let num1: number[] = [1, 2, 3];
let num2: Array<number> = [4, 5, 6];
```

##### 3. 函数类型

函数类型由参数类型和返回值类型组成。一个无返回值的普通函数和箭头函数可以这样定义：

```typescript
 function fun1(): void {
    console.log('这是一个普通函数');
}

const fun2 = (): void => {
    console.log('这是一个箭头函数');
};
```

##### 4. 联合类型

联合类型用 `|` 连接多个类型，如：

```typescript
var val3: string | number = 123;
console.log(val3.toString());
```

联合类型只会访问共有属性，若尝试访问不存在的属性，TypeScript 会报错：

```typescript
console.log(val3.length); // 错误
```

可以使用类型断言来强制指定某个类型：

```typescript
let val4: unknown = 'this is a string';
let strLength: number = (val4 as string).length;
```

#### 3.3 接口与泛型

##### 1. 接口

接口是一种用来定义对象结构的类型，可以规定对象的属性名、属性是否可选，以及属性的类型。

```
 interface StudentType {
  id: number;
  name: string;
  desc?: string; // 可选属性
}
const student: StudentType = {
  id: 1,
  name: '小明',
  desc: '三好学生',
};
```

多层嵌套：

```
 interface BaseType {
  value: number;
  label: string;
}
interface ListType {
  tag: string;
  list: BaseType[];
}
const citys: ListType = {
  tag: '高校',
  list: [
    { value: 1, label: '清华大学' },
    { value: 2, label: '北京大学' },
  ],
};
```

##### 2. 泛型

###### 1. 泛型函数

```
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello TypeScript!");
let output2 = identity<number>(42);
```

###### 2. 泛型接口

```
interface Pair<T, U> {
  first: T;
  second: U;
}

let pair1: Pair<string, number> = { first: "One", second: 1 };
```

###### 3. 泛型类

```
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(zeroValue: T, addFn: (x: T, y: T) => T) {
    this.zeroValue = zeroValue;
    this.add = addFn;
  }
}

let myGenericNumber = new GenericNumber<number>(0, (x, y) => x + y);
let myGenericString = new GenericNumber<string>("", (x, y) => x + y);
```

###### 4. 泛型约束

```
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("Hello TypeScript!");
logLength([1, 2, 3]);
```

###### 5. 泛型默认类型

```
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("Hello TypeScript!");
logLength([1, 2, 3]);
```

#### 3.4 装饰器

##### 1. 装饰器

类装饰器⽤于修改类的⾏为或为类添加元数据。

```
function LogClass(constructor: Function) {
 console.log(`Class ${constructor.name} is being created`)
}
@LogClass
class MyClass {}
// 输出: Class MyClass is being created
```

##### 2. 方法装饰器

⽅法装饰器可以⽤来修改或扩展⽅法的⾏为。例如，我们可以创建⼀个⽅法装饰器来测量⽅法 执⾏的时间。

```typescript
function LogExecutionTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Executing ${propertyKey}...`);
    const startTime = performance.now();
    const result = originalMethod.apply(this, args);
    const endTime = performance.now();
    console.log(`Execution time: ${endTime - startTime}ms`);
    return result;
  };
}

class MyService {
  @LogExecutionTime
  doSomething() {
    console.log('Doing something');
  }
}

const service = new MyService();
service.doSomething();
```

##### 3. 属性装饰器

```typescript
function DefaultValue(value: any) {
  return function (target: any, propertyKey: string) {
    target[propertyKey] = value;
  };
}

class TestClass {
  @DefaultValue('Hello, World!')
  greeting: string;
}

const testClass = new TestClass();
console.log(testClass.greeting); // 输出: Hello, World!
```

##### 4. 参数装饰器

```typescript
function LogParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  console.log(`Parameter at index ${parameterIndex} in method ${propertyKey}`);
}

class DemoClass {
  greet(@LogParameter message: string) {
    console.log(message);
  }
}

const demoClass = new DemoClass();
demoClass.greet('Hello');
```

#### 3.5 tsconfig.json

tsconfig.json ⽂件中的⼏个主要配置项如下：

```json
{
 "compileOnSave": true,
 "include": [],
 "exclude": [],
 "compilerOptions": {}
}
```

前 3 个配置项都是 tsc 编译器的选项，其含义如下。 

- compileOnSave：是否在⽂件保存时⾃动编译。
- include：指定哪些⽬录/⽂件会被编译。
- exclude：指定哪些⽬录/⽂件不会被编译。

compilerOptions 配置项包含的属性如下。

-  target：编译后的 ES 版本，可选值有 ES3（默认值）、ES5、ES6 和 ESNEXT 等。 
-  module：编译后的模块标准，可选值有 CommonJS 和 ES6。 
-  baseUrl：重要，模块的基本路径。 
-  paths：重要，设置基于 baseUrl 的模块路径。 
-  allowJs：是否允许编译 JavaScript ⽂件，默认值为 false。
-  checkJs：是否检查和报告  
-  sourceMap：是否⽣成 .map ⽂件。 
-  strictNullChecks：是否严格检查 null 和 undefined。

### 4.  本章小结

本章介绍了面向未来的 JavaScript 高级技能：ES6、Node.js 和 TypeScript，它们已成为现代开发中的基础技能。掌握这些内容将奠定坚实的基础，帮助我们成为新时代的 JavaScript 开发者。