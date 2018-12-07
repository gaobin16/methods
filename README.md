# methods
记录一些经常用的方法，选用的框架是layui

# 开发流程
一开始初始化4大模块，html，css，js和框架，主模块添加在最外层index.html中，没个分模块有个list列表。

主模块添加：
 <li class="layui-nav-item">
          <a href="javascript:;">框架</a>
          <dl class="layui-nav-child">
            <dd><a href="./view/frame/react/reactList.html" target="iframe">react</a></dd>
          </dl>
        </li>


每个模块的list列表在components中有模版，数据在mock中添加；

detail直接写
