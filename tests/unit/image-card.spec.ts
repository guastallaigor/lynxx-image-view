import { createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import VLazyImage from "v-lazy-image";

import ImageCard from "@/components/ImageCard.vue";

describe("When I create the ImageCard component", () => {
  const createImageCardWrapper = (propsData = {}) => {
    const localVue = createLocalVue();
    localVue.use(VLazyImage);
    localVue.use(VueRouter);
    const router = new VueRouter();

    return shallowMount(ImageCard, {
      propsData,
      localVue,
      router
    });
  };

  const props = {
    id: "1",
    src: "https://ik.imagekit.io/6xhf1gnexgdgk/lion_BllLvaqVn.jpg",
    caption: "Lion",
    minHeightAuto: false
  };

  it(`should exists`, () => {
    const wrapper = createImageCardWrapper({ ...props });
    const imageCard = wrapper.find(".image-card");
    expect(wrapper.exists()).toBe(true);
    expect(imageCard.exists()).toBe(true);
    expect(imageCard.attributes().class).toContain("min-h-300");
  });

  it("should validate all props", () => {
    const consoleLog = console.error;
    console.error = jest.fn();
    const wrapper = createImageCardWrapper({ ...props });
    const { id }: any = wrapper?.vm?.$options?.props;
    expect(id.required).toBeTruthy();
    expect(id.type).toBe(String);
    expect(id.default).toBeUndefined();
    const { src }: any = wrapper?.vm?.$options?.props;
    expect(src.required).toBeTruthy();
    expect(src.type).toBe(String);
    expect(src.default).toBeUndefined();
    const { caption }: any = wrapper?.vm?.$options?.props;
    expect(caption.required).toBeTruthy();
    expect(caption.type).toBe(String);
    expect(caption.default).toBeUndefined();
    const { minHeightAuto }: any = wrapper?.vm?.$options?.props;
    expect(minHeightAuto.required).toBeFalsy();
    expect(minHeightAuto.type).toBe(Boolean);
    expect(minHeightAuto.default).toBeFalsy();
    console.error = consoleLog;
  });

  it(`should have an image`, () => {
    const wrapper = createImageCardWrapper({ ...props });
    expect(wrapper.exists()).toBe(true);
    const img = wrapper.find(".image-card>:nth-child(1)");
    expect(img.exists()).toBe(true);
    expect(img.attributes().class).toContain("pointer");
    expect(img.attributes().alt).toBe(props.caption);
    expect(img.attributes().title).toBe(props.caption);
    expect(img.attributes().src).toBe(props.src);
  });

  it(`should have a caption below the image`, () => {
    const wrapper = createImageCardWrapper({ ...props });
    expect(wrapper.exists()).toBe(true);
    const caption = wrapper.find(".image-card>:nth-child(2)");
    expect(caption.exists()).toBe(true);
    expect(caption.text()).toBe(props.caption);
  });

  it(`should change the minHeight to auto`, () => {
    const wrapper = createImageCardWrapper({ ...props, minHeightAuto: true });
    expect(wrapper.exists()).toBe(true);
    const imageCard = wrapper.find(".image-card");
    expect(imageCard.exists()).toBe(true);
    expect(imageCard.attributes().class).toContain("min-h-auto");
  });

  it(`should click and redirect to another URL`, async () => {
    const wrapper = createImageCardWrapper({ ...props });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.$route.path).toBe("/");
    const imageCard = wrapper.find(".image-card");
    expect(imageCard.exists()).toBe(true);
    imageCard.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$route.path).toBe("/image/1");
    await wrapper.vm.$router.push("/");
  });

  it(`should block the click if has no id`, async () => {
    const consoleLog = console.error;
    console.error = jest.fn();
    const wrapper = createImageCardWrapper({ ...props, id: null });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.vm.$route.path).toBe("/");
    const imageCard = wrapper.find(".image-card");
    expect(imageCard.exists()).toBe(true);
    imageCard.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.$route.path).toBe("/");
    console.error = consoleLog;
  });

  it("should match snapshot", () => {
    const wrapper = createImageCardWrapper({ ...props });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
