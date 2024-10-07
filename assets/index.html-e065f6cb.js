import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://blog.digitalocean.com/horizontally-scaling-php-applications/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[1] || (_cache[1] = createBaseVNode(
      "h1",
      {
        id: "scaling-web-applications",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#scaling-web-applications",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Scaling Web Applications")
      ],
      -1
      /* HOISTED */
    )),
    _cache[2] || (_cache[2] = createBaseVNode(
      "p",
      null,
      "Even if you optimize the code in your web application as much as possible and have it up and running on the best server available in the world, a day may come when it receives more requests than it has time to handle. That's when you need to scale your web application, and have it up and running on multiple servers to be able to handle the load. Let's take a closer look at an architecture we can use to achieve this and the challenges that comes with it.",
      -1
      /* HOISTED */
    )),
    _cache[3] || (_cache[3] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/vetrqY-7a9g",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[4] || (_cache[4] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="scaling-web-applications.pdf">scaling-web-applications.pdf</a></li><li><a href="scaling-web-applications.pptx">scaling-web-applications.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Horizontally Scaling PHP Applications: A Practical Overview")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
