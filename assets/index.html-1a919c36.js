import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://medium.com/@Jeffijoe/dependency-injection-in-node-js-2016-edition-f2a88efdd427",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://github.com/jeffijoe/awilix",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode(
      "h1",
      {
        id: "dependency-injection-in-node-js",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#dependency-injection-in-node-js",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Dependency Injection in Node.js")
      ],
      -1
      /* HOISTED */
    )),
    _cache[4] || (_cache[4] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("When writing tests, we optimally want to test one function at a time in our application, but often it's more complicated than that. For example, we have one function calling another function, which then in turn calls another function, and so on. How can we test just the outer most function without worrying about errors in the inner most functions? "),
        createBaseVNode("em", null, "Dependency injection"),
        createTextVNode(" to the rescue, which is not only useful for testing, but also for fast prototyping and simulation.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/AHo1l9128eI",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="dependency-injection-in-node-js.pdf">dependency-injection-in-node-js.pdf</a></li><li><a href="dependency-injection-in-node-js.pptx">dependency-injection-in-node-js.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("Dependency Injection in Node.js - 2016 edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[1] || (_cache[1] = createTextVNode(" (all three parts)"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[2] || (_cache[2] = createTextVNode("Awilix")),
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
