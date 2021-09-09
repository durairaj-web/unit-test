<template>
  <div>
    <slot name="content">
      <img src="https://dummyimage.com/400x200/000/fff" />
    </slot>
    <p><slot name="caption" :source="source">Caption</slot></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Caption extends Vue {
  public source = "";
  mounted(): void {
    this.source = "dummyimage.com";
  }
}
</script>
