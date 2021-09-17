import { mount, createLocalVue } from "@vue/test-utils";
import Home from "../../src/views/Home.vue";
import Lists from "../../src/components/Lists.vue";
import VueRouter from "vue-router";

describe("Home.vue", () => {
  it("mount the Home compoenent", () => {
    const wrapper = mount(Home);
    expect(wrapper.find(".page-container").exists()).toBe(true);
  });

  it("match the Home component h1 title", async () => {
    const title = "Todo List";
    const wrapper = mount(Home);
    expect(wrapper.find("h1").text()).toMatch(title);
  });
  it("test the List component by adding a new list item", async () => {
    const parentWrapper = mount(Home);
    const todo = parentWrapper.vm.$data.todoList;

    const childWrapper = mount(Lists);
    await childWrapper.setProps({ todoList: [...todo, "Four"] });
    expect(childWrapper.html()).toMatchSnapshot();
  });

  it("test the add button", async () => {
    const wrapper = mount(Home);
    await wrapper.setData({ newItem: "new todo" });
    wrapper.find("button").trigger("click");
    expect(wrapper.vm.$data.todoList).toContain("new todo");
    expect(wrapper.vm.$data.todoList.join(",")).toMatchSnapshot();
  });

  it("test the navigation click", async () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    const wrapper = mount(Home, {
      localVue,
      router,
    });

    await wrapper.find(".goto-tab").trigger("click");
    expect(wrapper.vm.$route.path).toEqual("/tab");
  });
});
