这个项目是基于[Create React App](https://github.com/facebookincubator/create-react-app)创建的.
## Build Setup
  - yarn start
  - yarn test
  - yarn build
  - yarn eject
react-redux-demo/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── assets
    └── components
    └── pages
    └── reducers
    └── utils
    └── index.css
    └── index.js
    └── registerServiceWorker.js
    └── router.js
```
## redux案例
redux 案例 结合官网与实际项目
``` bash
# Counter组件
components/Counter

# Todo组件
components/Todo

# 示例
pages/Home

```
效果如下：
![Image text](https://github.com/zhuangmeili/react-redux-demo/blob/master/static/md/todo.gif)


## 常用移动端组件封装
``` bash
# ComScroll - 无限滚动分页
components/ComScroll


使用方法
<ComScroll loadMore={this.getNextPage}  distance={distance}>
  {/*chlidren*/}
</ComScroll>

# 示例
pages/BuyList

```
效果如下：
![Image text](https://github.com/zhuangmeili/react-redux-demo/blob/master/static/md/scroll.gif)

