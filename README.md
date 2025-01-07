# 矿石镇的攻略百科

重写自 https://github.com/mineraltown 项目。

## 改动之处

- 使用 [astro](https://docs.astro.build/zh-cn) 框架，而非手写 html。
- 所有子网页全都汇集到这一个仓库里，便于整体修改。
- 样式微调。
- 所有 url 使用全小写的 kebab-case 命名

## 开发方式

请先阅读 [astro 官方文档](https://docs.astro.build/zh-cn/basics/astro-pages/)，可以跳过 SSR、各大框架、内容集合等部分。

### 启动开发服务器

1. 克隆本仓库，进入项目根目录。
2. 安装依赖：`pnpm i`
3. 运行开发服务器：`pnpm dev`
4. 打开浏览器，访问 `http://localhost:4321/`

### 一些注意事项

- 如果要增改内容，请直接查看 `src/pages` 目录下的 astro 或 markdown 文件。它们比原来的 HTML 更简单好用。
- 目前在样式上仍旧有问题，因为 iframe 特殊的语义，不容易直接复制 css 样式。
- 关于图片，目前是直接放到 `src/pages` 目录下，但按照 [astro 的规则](https://docs.astro.build/zh-cn/guides/routing/#%E6%8E%92%E9%99%A4%E9%A1%B5%E9%9D%A2)，图片名称应该用下划线开头。(或许应该把图片全部放到 `src/assets` 目录下，然后用 typescript alias 指向它。我不确定哪种方式更好。)。注意文件名里不能有 `& [ ]` 等特殊字符，在 astro 里有特殊处理。
- 如果在 `*.astro` 文件里添加图片，建议使用 [`Image` 组件](https://docs.astro.build/zh-cn/guides/images/#%E4%BD%BF%E7%94%A8-image--%E7%BB%84%E4%BB%B6%E6%98%BE%E7%A4%BA%E4%BC%98%E5%8C%96%E5%90%8E%E7%9A%84%E5%9B%BE%E5%83%8F) ，astro 会可以自动压缩图片。

### 重构过程发现的优化点

这些暂未解决，可以探讨下：

- 每款游戏应该加上“返回首页”的链接。
- 需要搜索功能。可要做好搜索，需要认认真真整理数据库。algolia 等全文搜索引擎的效果不好。
- wiki 正文页面不允许鼠标选择文本，不知为何如此设计。
- mineral-town 游戏的目录与 url 不一致。

## 启动

你需要 [安装最新的 Node.js（LTS 版本）](https://www.cnblogs.com/xianshen/p/15695453.html)。还需要使用 pnpm 包管理器，运行 `npm i -g pnpm` 安装即可。

克隆本仓库，进入项目根目录，运行 `pnpm i` 安装依赖，然后运行 `pnpm dev` 启动本地开发服务器。

如果要编译，运行 `pnpm build` 即可。编译完成后，在 `dist` 目录下可以找到编译后的网站。进入 `dist` 目录，就可以开启一个静态网站服务器体验。

建议使用 VSCode 编辑此仓库，还要安装 astro 扩展。

## 许可证

本项目使用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可证。
