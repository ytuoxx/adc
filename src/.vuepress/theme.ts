import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "",

  author: {
    name: "ADC",
    url: "",
  },

  // iconAssets: "fontawesome-with-brands",
  // 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
  // iconAssets: "fontawesome",

  // 你想要的 URL
  iconAssets: "iconfont",

  // 上述内容的数组
  // iconAssets: [
  //   "iconify",
  //   "fontawesome",
  //   "fontawesome-with-brands"
  // ],

  logo: "/assets/images/logo.svg",

  // repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "ADC",

  displayFooter: true,

  // blog: {
  //   description: "一个前端开发者",
  //   intro: "/intro.html",
  //   medias: {
  //     Baidu: "https://example.com",
  //     BiliBili: "https://example.com",
  //     Bitbucket: "https://example.com",
  //     Dingding: "https://example.com",
  //     Discord: "https://example.com",
  //     Dribbble: "https://example.com",
  //     Email: "mailto:info@example.com",
  //     Evernote: "https://example.com",
  //     Facebook: "https://example.com",
  //     Flipboard: "https://example.com",
  //     Gitee: "https://example.com",
  //     GitHub: "https://example.com",
  //     Gitlab: "https://example.com",
  //     Gmail: "mailto:info@example.com",
  //     Instagram: "https://example.com",
  //     Lark: "https://example.com",
  //     Lines: "https://example.com",
  //     Linkedin: "https://example.com",
  //     Pinterest: "https://example.com",
  //     Pocket: "https://example.com",
  //     QQ: "https://example.com",
  //     Qzone: "https://example.com",
  //     Reddit: "https://example.com",
  //     Rss: "https://example.com",
  //     Steam: "https://example.com",
  //     Twitter: "https://example.com",
  //     Wechat: "https://example.com",
  //     Weibo: "https://example.com",
  //     Whatsapp: "https://example.com",
  //     Youtube: "https://example.com",
  //     Zhihu: "https://example.com",
  //   },
  // },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icons/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icons/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icons/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icons/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icons/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icons/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Mac",
            short_name: "Mac",
            url: "/mac/",
            icons: [
              {
                src: "/assets/icons/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
