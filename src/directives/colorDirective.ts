import { DirectiveOptions } from "vue";

const colorDirective: DirectiveOptions = {
  inserted(el, node) {
    el.style.color = node.value.color;
    el.style.backgroundColor = node.value.background;
  },
};

export default colorDirective;
