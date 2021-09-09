<template>
  <ul>
    <li v-for="(list, index) in todoList" :key="index">{{ list }}</li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Lists extends Vue {
  @Prop({ default: () => [] }) public todoList!: string[];
}
</script>
