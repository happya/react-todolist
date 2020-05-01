This is a tiny project to keep record of my learning process of React.JS. Starting from the basic `TodoList` project, we can learn a lot of basics of React.

## ```Virtual DOM```

动机：For efficient rendering.

#### ```Normal steps```
  - step1: state 数据
  - step2: JSX模板
  - step3: 数据+模板，生成真实dom，来显示
  - state发生改变
  - 数据+模板结合，生成真实dom,贴换原始dom

#### 缺陷：
- 第一次生成了完整的dom片段
- 第二次生成了完整的dom片段
- 第二次的dom替换第一次的，非常耗性能

#### ```Improve idea 1```
- state数据
- jsx模板
- 数据+模板生成真实dom
- state改变
- 数据+模板结合，生成真实dom,并不直接替换原始的dom
- 新的dom和原始的dom作比对，找差异
- 只用新的dom的发生变化的元素，替换到老的dom中的元素

#### 缺陷：
 - 性能提升不明显


#### ```Improve idea 2```
  - step1: state 数据
  - step2: JSX模板
  - step3: 数据+模板，生成真实dom，来显示
  -生成虚拟dom(一个js对象，用来描述真实的dom), 嵌套的标签属性和内容
  - state发生变化
  - 数据+模板生成新的虚拟dom
  - 比较原始和新的虚拟dom的区别, 直接操作dom，更新

#### Benefits:
  - 减小了对真实dom的创建

#### ```真实步骤```
1. state 数据
2. JSX模板
3. 数据+模板生成虚拟dom
4. 用虚拟dom生成真实dom，来显示

数据改变：
1. 数据+模板生成新的虚拟dom
2. 比较原始和新的虚拟dom的区别
3. 直接操作dom，更新

## 组件传值
### 父组件向子组件传值： 属性(props)
#### 变量
父组件中:
> `item`: 父组件中的变量
子组件中：
```react
<ChildItem content={item} />
```

#### 也可以传递父组件中的函数
父组件中:
```react
deleteItem={this.handleItemDelete}
```

子组件中：
```react
<div> { this.props.content} </div>
```

### 子组件向父组件传值

1. 结构变量赋值

比如要使用`this.props.content`
可以先定义结构数据： 
```react
const { content } = this.props
```
然后使用的时候可以直接使用content


2. this的绑定
可以放在`constructor`里面

bind(this)

prevState做状态改变：