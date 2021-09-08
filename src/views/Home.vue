<template>
  <div class="page-container">
    <h1>Todo List</h1>
    <section class="todo">
      <input
        type="text"
        name="newItem"
        v-model.trim="newItem"
        autocomplete="off"
        @keyup.enter="appendNewItem"
      />
      <button @click="appendNewItem">Add</button>
      <Lists class="todo-list" :todoList="todoList" v-slot="{msg}">
        <p>hello</p>
        {{msg}}
      </Lists>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Lists from "../components/Lists.vue";

@Component({
  components: {
    Lists
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
