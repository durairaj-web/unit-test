<template>
  <ul>
    <li v-for="(list, index) in todoList " :key="index">{{ list }}</li>
    <slot :msg="msg"/>
  </ul>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Lists extends Vue {
  @Prop({ default: () => [] }) public todoList!: string[];
  public msg= '';

  mounted(): void{
    this.msg = "from child"
  }
}
</script>
