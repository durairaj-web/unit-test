<template>
  <div>
    <h2>Contact</h2>
    <input type="text" v-model="name" @input="removeWhiteSpace" />
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Contact extends Vue {
  public name = "";

  removeWhiteSpace(): void {
    this.name = this.name.replace(/\s/g, "");
  }
}
</script>
