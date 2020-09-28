import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import Toolbar from "@/components/Toolbar.vue";

describe("When I create the Toolbar component", () => {
  const createToolbarWrapper = () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    return shallowMount(Toolbar, {
      localVue,
      router
    });
  };

  it(`should exists`, () => {
    const wrapper = createToolbarWrapper();
    const toolbar = wrapper.find(".navbar");
    expect(wrapper.exists()).toBe(true);
    expect(toolbar.exists()).toBe(true);
    expect(toolbar.attributes().role).toBe("banner");
    expect(toolbar.attributes().title).toBe("Banner");
    expect(toolbar.attributes()["aria-label"]).toBe("Header");
  });

  it(`should have a image logo that it's a link`, () => {
    const wrapper = createToolbarWrapper();
    const link = wrapper.find(".nav-container>:nth-child(1)");
    expect(wrapper.exists()).toBe(true);
    expect(link.exists()).toBe(true);
    expect(link.attributes().to).toBe("/");
    expect(link.attributes().class).toContain("brand");
    expect(link.attributes().class).toContain("link");
    expect(link.attributes().title).toBe("Favorite Views");
    expect(link.attributes()["aria-label"]).toBe("Logo Image Link");
    const img = wrapper.find(".nav-container>:nth-child(1)>img");
    expect(img.exists()).toBe(true);
    expect(img.attributes().src).toContain("logo.png");
    expect(img.attributes().alt).toBe("Logo");
  });

  it(`should have a navbar that has a home link`, () => {
    const wrapper = createToolbarWrapper();
    expect(wrapper.exists()).toBe(true);
    const navMenu = wrapper.find(".nav-menu");
    expect(navMenu.exists()).toBe(true);
    expect(navMenu.attributes().role).toBe("navigation");
    expect(navMenu.attributes().title).toBe("Navigation Bar");
    expect(navMenu.attributes()["aria-label"]).toBe("Navigation bar");
  });

  it(`should have a favorite views button/link`, () => {
    const wrapper = createToolbarWrapper();
    expect(wrapper.exists()).toBe(true);
    const link = wrapper.find(".nav-menu>:nth-child(2)");
    expect(link.exists()).toBe(true);
    expect(link.attributes().to).toBe("/favorite-views");
    expect(link.attributes().class).toContain("link");
    expect(link.attributes().title).toBe("Favorite Views");
    expect(link.attributes()["aria-label"]).toBe("Favorite Views Button");
    expect(link.text()).toBe("Favorite Views");
  });

  it(`should have a home link`, () => {
    const wrapper = createToolbarWrapper();
    expect(wrapper.exists()).toBe(true);
    const link = wrapper.find(".nav-menu>:nth-child(1)");
    expect(link.exists()).toBe(true);
    expect(link.attributes().to).toBe("/");
    expect(link.attributes().class).toContain("link");
    expect(link.attributes().title).toBe("Home");
    expect(link.attributes()["aria-label"]).toBe("Home Link");
    expect(link.text()).toBe("Home");
  });

  it("should match snapshot", () => {
    const wrapper = createToolbarWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
