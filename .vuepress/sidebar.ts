export default {
	'/querylist3/guide/': [
		{
			text: 'Get Started',
			children: [
				{
					text: '介绍',
					link: 'overview.md'
				},
				'installation.md',
				'integration.md',
				'start.md',
				'scraper-single.md',
				'scraper-list.md'
			]
		},
		{
			text: '技巧',
			children: [
				'content-filiter.md',
				{
					text: '回调函数中传参数',
					link: 'callback.md'
				},
				'multi-level.md',
				'content-processing.md',
				'range.md',
				{
					text: '更复杂的HTTP操作',
					link: 'http-more.md'
				}
			]
		},
		{
			text: '插件',
			children: [
				'extension-development.md',
				{
					text: 'Request',
					link: 'Request.md'
				},
				{
					text: 'Login',
					link: 'Login.md'
				},
				{
					text: 'Multi',
					link: 'Multi.md'
				},
				{
					text: 'DImage',
					link: 'DImage.md'
				}
			]
		}
	],
	'/querylist3/api/': [
		{
			text: 'Get Started',
			children: [
				{
					text: 'API手册',
					link: 'overview.md'
				},
				{
					text: 'QueryList选择器',
					link: 'jQuery.md'
				}
			]
		},
		{
			text: 'API',
			children: [
				{
					text: 'Query',
					link: 'Query.md'
				},
				{
					text: 'setLog',
					link: 'setLog.md'
				},
				{
					text: 'setQuery',
					link: 'setQuery.md'
				},
				{
					text: 'getData',
					link: 'getData.md'
				},
				{
					text: 'getHtml',
					link: 'getHtml.md'
				},
				{
					text: 'run',
					link: 'run.md'
				},
				{
					text: 'getInstance',
					link: 'getInstance.md'
				},
				{
					text: 'data、html',
					link: 'data_html.md'
				}
			]
		}
	],
	'/querylist4/guide/': [
		{
			text: 'Get Started',
			children: [
				'quick-look.md',
				{
					text: '介绍',
					link: 'overview.md'
				},
				'example.md',
				'installation.md',
				'integration.md',
				'faq.md',
				{
					text: '更新日志',
					link: 'changelog.md'
				}
			]
		},
		{
			text: '基础',
			children: ['http-client.md', 'scraper-single.md', 'scraper-list.md', 'content-filiter.md', 'content-processing.md', 'processing-data.md']
		},
		{
			text: '进阶',
			children: [
				'modify-dom.md',
				'bind.md',
				'use.md',
				'config.md',
				{
					text: '插件开发一',
					link: 'extension-development.md'
				},
				{
					text: '插件开发二',
					link: 'extension-development-2.md'
				}
			]
		},
		{
			text: '技巧',
			children: ['table.md', 'multi-level.md', 'ignore-http-error.md']
		},
		{
			text: '插件推荐',
			children: [
				{
					text: 'AbsoluteUrl',
					link: 'AbsoluteUrl.md'
				},
				{
					text: 'Puppeteer',
					link: 'Puppeteer.md'
				},
				{
					text: 'PhantomJS',
					link: 'PhantomJS.md'
				},
				{
					text: 'CurlMulti',
					link: 'CurlMulti.md'
				},
				{
					text: 'Baidu',
					link: 'Baidu.md'
				},
				{
					text: 'Google',
					link: 'Google.md'
				},
				{
					text: '获取更多插件',
					link: 'more-plugin.md'
				}
			]
		}
	],
	'/querylist4/api/': [
		{
			text: 'Get Started',
			children: [
				{
					text: 'API手册',
					link: 'overview.md'
				},
				'phpQuery.md',
				{
					text: 'jQuery选择器',
					link: 'jQuery.md'
				}
			]
		},
		{
			text: '基础API',
			children: [
				{
					text: 'html',
					link: 'html.md'
				},
				{
					text: 'getHtml',
					link: 'getHtml.md'
				},
				{
					text: 'rules',
					link: 'rules.md'
				},
				{
					text: 'range',
					link: 'range.md'
				},
				{
					text: 'removeHead',
					link: 'removeHead.md'
				},
				{
					text: 'query',
					link: 'query.md'
				},
				{
					text: 'getData',
					link: 'getData.md'
				},
				{
					text: 'queryData',
					link: 'queryData.md'
				},
				{
					text: 'getInstance',
					link: 'getInstance.md'
				},
				{
					text: 'destruct',
					link: 'destruct.md'
				},
				{
					text: 'destructDocuments',
					link: 'destructDocuments.md'
				},
				{
					text: 'pipe',
					link: 'pipe.md'
				}
			]
		},
		{
			text: '特殊API',
			children: [
				{
					text: 'find',
					link: 'find.md'
				},
				{
					text: 'Elements对象介绍',
					link: 'Elements-introduce.md'
				},
				'Elements-class.md'
			]
		},
		{
			text: '高级API',
			children: [
				{
					text: 'setData',
					link: 'setData.md'
				},
				{
					text: 'bind',
					link: 'bind.md'
				},
				{
					text: 'use',
					link: 'use.md'
				},
				{
					text: 'config',
					link: 'config.md'
				}
			]
		},
		{
			text: '默认插件',
			children: [
				{
					text: 'get',
					link: 'get.md'
				},
				{
					text: 'post',
					link: 'post.md'
				},
				{
					text: 'multiGet',
					link: 'multi-get.md'
				},
				{
					text: 'multiPost',
					link: 'multi-post.md'
				},
				{
					text: 'encoding',
					link: 'encoding.md'
				}
			]
		}
	]
};
