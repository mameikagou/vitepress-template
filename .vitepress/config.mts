import { defineConfig } from "vitepress";

// 文件放在根目录, 或者建一个src; link

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Personal Bolg",
  description: "Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    // 顶部导航栏的配置; 
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    // 侧边栏的配置;
    sidebar: [
      {
        text: "Examples",
        collapsed: false,
        items: [
          {
            text: "Markdown Examples",
            link: "/markdown-examples",
            items: [{ text: "在items里面嵌套对象即可" }],
          },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
