import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";

import FooterWrapper from "@/components/FooterWrapper.vue";

describe("When I create the FooterWrapper component", () => {
  const createFooterWrapperWrapper = () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const router = new VueRouter();

    return shallowMount(FooterWrapper, {
      localVue,
      router
    });
  };

  it(`should exists`, () => {
    const wrapper = createFooterWrapperWrapper();
    const footer = wrapper.find(".footer");
    expect(wrapper.exists()).toBe(true);
    expect(footer.exists()).toBe(true);
    expect(footer.attributes().id).toBe("footer");
  });

  it(`should have a image logo that it's a link`, () => {
    const wrapper = createFooterWrapperWrapper();
    const link = wrapper.find(".div-1>:nth-child(1)");
    expect(wrapper.exists()).toBe(true);
    expect(link.exists()).toBe(true);
    expect(link.attributes().class).toContain("footer-logo-link");
    expect(link.attributes().class).toContain("w-inline-block");
    expect(link.attributes().title).toBe("Logo");
    expect(link.attributes()["aria-label"]).toBe("Logo Image Link");
    const img = wrapper.find(".div-1>:nth-child(1)>img");
    expect(img.exists()).toBe(true);
    expect(img.attributes().src).toContain("logo.png");
    expect(img.attributes().alt).toBe("Logo");
  });

  it(`should have some list with links`, () => {
    const wrapper = createFooterWrapperWrapper();
    expect(wrapper.exists()).toBe(true);
    const links = wrapper.findAll(".w-list-unstyled>li>a");
    for (let index = 0; index < links.length; index++) {
      expect(links.at(index).exists()).toBe(true);
      expect(links.at(index).attributes().class).toContain("footer-link");
    }
  });

  it(`should have a copyrighted section`, () => {
    const wrapper = createFooterWrapperWrapper();
    expect(wrapper.exists()).toBe(true);
    const copyright = wrapper.find(".div-5>.footer-copyright");
    expect(copyright.exists()).toBe(true);
    expect(copyright.text()).toBe("© 2020 Lynxx. All rights reserved.");
    const links = wrapper.findAll(".div-5 a");
    for (let index = 0; index < links.length; index++) {
      expect(links.at(index).exists()).toBe(true);
      expect(links.at(index).attributes().class).toContain("footer-copyright-link");
    }
  });

  it("should match snapshot", () => {
    const wrapper = createFooterWrapperWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
