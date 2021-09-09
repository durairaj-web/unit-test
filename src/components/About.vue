<template>
  <div>
    <h2>About us</h2>
    <Caption>
      <template #content>
        <img src="https://dummyimage.com/400x200/000/fff" />
      </template>
      <template #caption="{source}">
        Source: <a href="https://dummyimage.com/">{{ source }}</a>
      </template>
    </Caption>

    <div v-for="index in 10" :key="index">{{ index }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Caption from "./Caption.vue";

@Component({
  components: {
    Caption,
  },
})
export default class About extends Vue {}
</script>
