import { shallowMount } from "@vue/test-utils";
import GithubCorner from "@/components/GithubCorner.vue";

describe("When I create the GithubCorner component", () => {
  const createGithubWrapper = () => shallowMount(GithubCorner, {});

  it(`should exists`, () => {
    const wrapper = createGithubWrapper();
    const github = wrapper.find(".github-corner");
    expect(wrapper.exists()).toBe(true);
    expect(github.exists()).toBe(true);
  });

  it(`should have a github icon link`, () => {
    const wrapper = createGithubWrapper();
    const link = wrapper.find(".github-corner>a:first-child");
    expect(wrapper.exists()).toBe(true);
    expect(link.exists()).toBe(true);
    expect(link.attributes().href).toBe("https://github.com/guastallaigor/lynxx-image-view");
    expect(link.attributes().target).toBe("_blank");
    expect(link.attributes().rel).toBe("noopener");
    expect(link.attributes()["aria-label"]).toBe("View source on GitHub");
  });

  it(`should have a svg inside the github link`, () => {
    const wrapper = createGithubWrapper();
    const svg = wrapper.find(".github-corner>a:first-child>svg");
    expect(wrapper.exists()).toBe(true);
    expect(svg.exists()).toBe(true);
    expect(svg.attributes().width).toBe("80");
    expect(svg.attributes().height).toBe("80");
    expect(svg.attributes().viewBox).toBe("0 0 250 250");
    expect(svg.attributes().style).toBe("fill: #f89a02; color: rgb(248, 154, 2);");
  });

  it("should match snapshot", () => {
    const wrapper = createGithubWrapper();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
