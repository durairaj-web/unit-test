<template>
  <div class="page-container">
    <h1 v-colorDirective="{ color: 'white', background: 'green' }">
      {{ "Todo List" | Capitalize }}
    </h1>
    <section class="todo">
      <input
        type="text"
        name="newItem"
        v-model.trim="newItem"
        autocomplete="off"
        @keyup.enter="appendNewItem"
      />
      <button @click="appendNewItem">Add</button>
      <Lists class="todo-list" :todoList="todoList"> </Lists>
      <router-link class="goto-tab" to="/tab">Goto Tab</router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Lists from "../components/Lists.vue";
import colorDirective from "../directives/colorDirective";

@Component({
  components: {
    Lists,
  },
  directives: {
    colorDirective,
  },
  filters: {
    Capitalize(value: string) {
      return value.replace(/(^\w{1})|(\s+\w{1})/g, (letter: string) =>
        letter.toUpperCase()
      );
    },
  },
})
export default class TodoList extends Vue {
  public todoList: string[] = [];
  public newItem = "";

  // life cycle
  mounted(): void {
    this.todoList = ["one", "two", "three"];
  }

  // event
  appendNewItem(): void {
    this.todoList.push(this.newItem);
    this.newItem = "";
  }
}
</script>
