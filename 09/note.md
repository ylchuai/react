# 路由组件与一般组件

1. 写法不同

   * 一般组件

    ``` html
    <组件名 />
    ```

   * 路由组件

    ``` html
    <Route path="路径" component={组件名} />
    ```

2. 文件位置不同
   * 一般组件 components
   * 路由组件 pages

3. 收到的props不同
   * 一般组件 不传参不会受到props
   * 路由组件 由Route默认传递了一组参数 `hiotory` `location` `match`

    ```js
    history:
        go: ƒ go(n)
        goBack: ƒ goBack()
        goForward: ƒ goForward()
        push: ƒ push(path, state)
        replace: ƒ replace(path, state)
    location:
        pathname: "/about"
        search: ""
        state: undefined
    match:
        isExact: true
        params: {}
        path: "/about"
        url: "/about"
    ```
