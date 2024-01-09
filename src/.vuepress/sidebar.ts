import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Mac",
      prefix: "mac/",
      link: "mac/",
      children: "structure",
    },
    {
      text: "Win",
      prefix: "win/",
      link: "win/",
      children: "structure",
    },
    {
      text: "Net",
      prefix: "net/",
      link: "net/",
      children: "structure",
    },
  ],
});
