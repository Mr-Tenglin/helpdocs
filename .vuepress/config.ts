import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { commentPlugin } from '@vuepress/plugin-comment';
import { searchPlugin } from '@vuepress/plugin-search';
import { defineUserConfig } from 'vuepress';
import navbar from './navbar';
import sidebar from './sidebar';

export default defineUserConfig({
	// 部署站点的基础路径
	base: '/',
	// 站点的语言
	lang: 'zh-CN',
	// 站点的标题
	title: '帮助文档',
	// 站点的描述
	description: '',
	// 最终渲染出的 HTML 的 <head> 标签内加入的额外标签
	head: [],
	// 多语言支持的各个语言 locales
	locales: {},
	// 设置站点要使用的主题
	theme: defaultTheme({
		// 部署的域名
		hostname: null,
		// 多语言支持的各个语言 locales
		locales: {},
		// 默认颜色模式
		colorMode: 'auto',
		// 切换颜色模式的功能
		colorModeSwitch: true,
		// 外部链接上显示外部链接图标
		externalLinkIcon: true,
		// 首页的路径
		home: '/',
		// 导航栏配置, 设置为 false 可以禁用导航栏
		navbar: navbar,
		// Logo 图片的 URL
		logo: null,
		// 在夜间模式中使用的 Logo 图片的 URL
		logoDark: null,
		// 指定 Logo 图片的替代文字
		logoAlt: null,
		// 项目仓库的 URL
		repo: 'Mr-Tenglin/helpdocs',
		// 侧边栏配置, 设置为 false 可以禁用侧边栏
		sidebar: sidebar,
		// 设置根据页面标题自动生成的侧边栏的最大深度
		sidebarDepth: 0,
		// 是否启用 编辑此页 链接
		editLink: false,
		// 编辑此页 链接的 Patter
		editLinkPattern: ':repo/-/edit/:branch/:path',
		// 最近更新时间戳
		lastUpdated: true,
		// 贡献者列表
		contributors: true
	}),
	// 设置站点要使用的打包工具
	bundler: viteBundler(),
	// 指定 vuepress build 命令的输出目录
	// dest: '${sourceDir}/.vuepress/dist',
	// 指定临时文件目录
	// temp: '${sourceDir}/.vuepress/.temp',
	// 指定缓存文件目录
	// cache: '${sourceDir}/.vuepress/.cache',
	// 指定 Public 文件目录
	// public: '${sourceDir}/.vuepress/public',
	// 是否启用 Debug 模式
	debug: false,
	// 指定页面文件的 Patterns 。这些 Patterns 是相对于 Source 目录的
	pagePatterns: ['**/*.md', '!.vuepress', '!node_modules'],
	// 指定为页面生成永久链接的 Pattern
	// permalinkPattern: null,
	// 指定开发服务器的主机名
	// host: '0.0.0.0',
	// 指定开发服务器的端口号
	// port: 8080,
	// 是否在开发服务器启动后打开浏览器
	open: false,
	// 指定开发时使用的 HTML 模板
	// templateDev: '@vuepress/client/templates/dev.html'
	// 一个函数，用来控制哪些文件是需要生成对应的 <link rel="preload"> 标签的。设置为 true 或者 false 来完全启用或禁用它。
	// shouldPreload: true,
	// 一个函数，用来控制哪些文件是需要生成对应的 <link rel="prefetch"> 标签的。设置为 true 或者 false 来完全启用或禁用它。
	// shouldPrefetch: true,
	// 指定构建时使用的 HTML 模板路径
	// templateBuild: '@vuepress/client/templates/build.html',
	// 指定构建时使用的 HTML 模板渲染函数
	// templateBuildRenderer: null,
	// 对 VuePress 内置的 Markdown 语法扩展进行配置 https://github.com/markdown-it/markdown-it
	markdown: {},
	// 该配置项接收一个数组，其中的每一个数组项是一个或一组插件
	plugins: [
		searchPlugin({
			isSearchable: (page) => page.path !== '/'
		}),
		prismjsPlugin({
			theme: 'dark'
		}),
		commentPlugin({
			provider: 'Giscus',
			repo: 'Mr-Tenglin/helpdocs',
			repoId: 'R_kgDONV2QwA',
			category: 'Ideas',
			categoryId: 'DIC_kwDONV2QwM4CkqyJ'
		})
	]
});
