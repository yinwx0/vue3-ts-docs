#  Spring Boot 学习笔记

## 1. Spring Boot 基础介绍

### 1.1 诞生背景

传统的Spring 框架需要基于 Spring 集成使用，要用到 XML 配置文件，或注解式的 Java 代码配置，但⽆论是使⽤ XML 或者代码配置⽅式，都需要对相关组件的配置有⾜够的了解，然后再编写⼤量冗⻓的配置代 码，这显然加⼤了开发者对 Spring 的使⽤难度。为了简化使⽤ Spring 框架的难度，让 Spring 组件能达到开箱即⽤，让开发者能更快 速上⼿为⽬的，Spring Boot 框架便诞⽣了！

### 1.2 基本介绍

Spring 官网对Spring Boot 的原文介绍，译为：

Spring Boot 可以轻松创建独立的、基于 Spring 的生产级应用程序，您可以“直接运行”这些应用程序。

我们对 Spring 平台和第三方库持固执己见的看法，因此您可以毫不费力地开始使用。大多数 Spring Boot 应用程序需要最少的 Spring 配置。

如果您正在查找有关特定版本的信息，或有关如何从早期版本升级的说明，请查看我们 wiki 上的[项目发行说明部分](https://github.com/spring-projects/spring-boot/wiki#release-notes)。

### 1.3 核心思想

Spring Boot 框架的核⼼思想是：约定优（⼤）于配置（convention over configuration）

### 1.4 组件关系

Spring Boot、Spring MVC、Spring 三者之间是互相依存的关系。

## 2. Spring Boot 基本特性

官网对Spring Boot 特性的描述。

* 创建独立的 Spring 应用程序 

* 直接嵌入 Tomcat、Jetty 或 Undertow（无需部署 WAR 文件） 

* 提供自定义的“启动器”依赖项来简化您的构建配置 

* 尽可能自动配置 Spring 和第三方库 

* 提供可用于生产的功能，例如指标、健康检查和外部化配置 

* 完全无需代码生成，也无需 XML 配置

## 3. Spring Boot 核心模块

### 3.1 spring-boot

这是 Spring Boot 框架的主模块，也是⽀持其他模块的核⼼模块。

### 3.2 spring-boot-autoconfigure

这个模块提供了常⽤的 Java 主流技术的⾃动配置组件。

### 3.3 spring-boot-starters

这个模块是所有 Starters 启动器的基础依赖。

### 3.4 spring-boot-cli

这是 Spring Boot 提供的命令⾏⼯具，也是另外⼀种创建 Spring 应⽤的⽅式，⽀持编译和 运⾏ Groovy 应⽤程序。

### 3.5 spring-boot-actuator

这是 Spring Boot 提供的监控模块。

### 3.6 spring-boot-actuator-autoconfigure

这个模块是为 spring-boot-actuator 监控模块提供⾃动配置的模块。

### 3.7 spring-boot-test

这个模块是 Spring Boot 的测试模块。

### 3.8 spring-boot-test-autoconfigure

这个模块是为 spring-boot-test 测试模块提供⾃动配置的模块。

### 3.9 spring-boot-loader

这个模块⽤于将 Spring Boot 应⽤程序构建⼀个单独可执⾏的 jar 包，使⽤ java -jar 就能直接运⾏。

### 3.10 spring-boot-devtools

这是 Spring Boot 开发者⼯具模块，主要⽤于 Spring Boot 应⽤程序的开发阶段，它提供 ⼀些显著提升开发效率的特性。

## 4. Spring Boot 版本选择

### 4.1 版本周期

GA（general availability）：正式版本，表示一般可用的版本。

CURRENT：最新正式版本，表示最新的 GA 版本。

SNAPSHOT：快照版本，表示最新测试版本。

PRE（pre release）预览版本。

### 4.2 支持版本

### 4.3 Spring Boot 3 新特性

#### 4.3.1 基于 Java 17 的支持

Java 17 成为了 Spring Boot 3 的最低版本要求。

#### 4.3.2 原生（Native）应用支持

Spring Boot 3 深⼊集成了 GraalVM Native Image，⽀持⽣成原⽣可执⾏⽂件。

#### 4.3.3 模块化支持增强

更好地⽀持 Java Platform Module System ( JPMS )。

#### 4.3.4 Spring AOT（Ahead-of-Time）编译

引⼊了 Spring AOT 编译器，⽤于提前编译（AOT，Ahead-of-Time Compilation），优化应⽤的运⾏时性能。

#### 4.3.5 Spring Framework 6 的兼容性

Spring Boot 3 与 Spring Framework 6 紧密集成，利⽤其所有的新特性和改进。

#### 4.3.6 Jakarta EE 9+ 支持

​	Spring Boot 3 完全基于 Jakarta EE 9+ 。

#### 4.3.7 观察性（Observability）增强

Micrometer 和 Micrometer Tracing 成为 Spring Boot 3 内建的观测性解决⽅案， 替代了以前的 Spring Boot Actuator 监控⽅式。

#### 4.3.8 安全性改进

Spring Security 6 的全⾯⽀持，带来了增强的安全性特性。

#### 4.3.9 配置和属性改进

Spring Boot 3 对配置⽂件和属性处理进⾏了优化，允许更灵活的配置选项和更好的类 型安全性。

#### 4.3.10 废弃和删除的特性

对于⼀些过时的技术和特性进⾏了清理和废弃。

#### 4.3.11 性能优化和现代化改进

Spring Boot 3 对底层核⼼组件进⾏了多处优化。

## 5. Spring Boot 启动分析

### 5.1 启动流程

* ⼊⼝类： main ⽅法 

* 创建 SpringApplication 对象 

* 执⾏ run ⽅法 

* 准备环境 

* 打印 Banner 

* 创建 ApplicationContext 

* 初始化 ApplicationContext 

* 刷新 ApplicationContext 

* 启动 Web 服务器（如果是 Web 应⽤） 

* 回调 ApplicationRunner 和 CommandLineRunner 

* 启动完成： 应⽤程序开始运⾏并监听请求 

* 关闭流程： 在应⽤终⽌时执⾏清理



## 6. JDK 8 ~ JDK 17 主要的新特性学习

1. lambda 表达式

   Lambda表达式允许以更简洁的方式编写匿名函数。它们可用于替代单个抽象方法的接口的实现。

   最简单的Lambda表达式可由逗号分隔的参数列表、->符号和语句块组成

2. 函数式接口

   函数接口指的是只有一个函数的接口，这样的接口可以隐式转换为Lambda表达式。

3. 方法引用

   方法引用允许直接引用已有的方法，而不是通过lambda表达式来描述行为。

   方法引用的基本语法：

   静态方法引用：	`Class::static_method`

   实例方法引用：	`instance::method`

   对象方法引用：	`class::method`

   构造方法引用：	`Class::new`

   如原始代码：

   `.noneMatch(exitingMeeting -> exitingMeeting.isOverlapping(newMeeting))`

   经过改进后的代码：

   `.noneMatch(newMeeting::isOverlapping)`

4. Stream API

   创建stream通过of方法

   创建stream通过iterate方法

   也是生成无限长度的Stream

   先获取一个无限长度的正整数集合的Stream，然后取出前10个打印。记得使用limit方法，不然会无限打印下去。

5. Clock时钟

   首先，Clock类使用时区来返回当前的纳秒时间和日期。Clock可以替代System.currentTimeMillis()和TimeZone.getDefault()。

6. 创建Optional类对象的方法

   Optional.of(T t) :  				创建一个 Optional 实例，t必须非空

   Optional.empty() : 			  创建一个空的 Optional 实例

   Optional.ofNullable(T t)：  t可以为null

7. 判断Optional容器中是否包含对象

   boolean isPresent() : 判断是否包含对象

   void ifPresent(Consumer< ? super T > consumer) ：如果有值，就执行Consumer接口的实现代码，并且该值会作为参数传给它

8. 改进的集合工厂方法

   1. List.of（） 创建一个不可变的List集合

   2. Set.of（）创建一个不可变的Set集合

   3. Map.of（）创建一个不可变的Map集合


## 7. 常用的 IDEA 插件使用

1. Rainbow Brackets

   彩色的括号往往会比灰色的更好看

2. Lombok

   能通过注解自动生成包括但不限于 getter/setter 等，简化代码

3. ‌Alibaba Java Coding Guidelines‌

   提供实时检测和批量修复代码功能，新手小白的最爱

4. maven-search

   帮助快速查找maven依赖，支持查找全网类

5. Key Promoter X

   在代码操作时能显示对应的快捷键，帮助逐步熟悉 IDEA 的快捷键，提高效率

6. MybatisX

   提供便捷的 MyBatis 开发工具

7. Code With Me

   提供多人在线同时编辑，适合小组实训时使用

8. Maven Helper

   帮助解决 Maven 依赖冲突问题，提供项目管理支持

9. SonarLint 代码质量检测

   帮助检测代码质量问题的一个好用的插件

10. Git Integration

    提供了与 Git 代码版本管理工具集成的功能，方便进行代码版本控制和协作开发

    

