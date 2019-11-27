# personal-website
## 一、FAQ
### 1.配置favicon.ico
在.umirc.ts文件中配置pwa，配置pwa时，package.json文件中一定要设置name。        
创建manifest.json文件，在文件中配置favicon相关的信息。将favicon图标放置在public文件夹下。       
在pages文件夹下创建document.ejs文件可以修改默认的模板。
### 2.支持直接使用样式的类名使样式生效
在.umirc.ts文件中配置cssLoaderOptions。        
umi依赖webpack，默认是开启了CSS Modules特性。      
CSS Modules特性是一种命名规范，将命名变成hash值，成为全局唯一的CSS命名。
