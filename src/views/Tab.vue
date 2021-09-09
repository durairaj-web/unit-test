<template>
  <div>
    <h1>Tab Example</h1>
    <button v-for="tab in tabs" :key="tab" @click="component = tab">
      {{ tab }}
    </button>
    <keep-alive>
      <component :is="component" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";

@Component({
  components: {
    About,
    Contact,
  },
})
export default class Tab extends Vue {
  public tabs: string[] = [];
  public component: any = "";

  mounted(): void {
    this.tabs = ["About", "Contact"];
    this.component = About;
  }
}
</script>
