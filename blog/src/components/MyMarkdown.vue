<template>
  <section :is="articleComponent"></section>
</template>

<script>
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

const highlightCode = () => {
  const preEl = document.querySelectorAll("pre");

  preEl.forEach(el => {
    hljs.highlightBlock(el);
  });
};

export default {
  name: 'myMarkdown',
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      articleComponent: ""
    };
  },
  created() {
    this.$options.components[
      'myMarkdown'
    ] = require(`@/assets/md/${this.name}.md`).default;
    this.articleComponent = 'myMarkdown';
  },
  mounted() {
    highlightCode();
  },

  updated() {
    highlightCode();
  }
};
</script>
