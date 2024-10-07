import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.journaldev.com/31902/gangs-of-four-gof-design-patterns",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "h1",
      {
        id: "android-design-patterns",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-design-patterns",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Design Patterns")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "p",
      null,
      "There are some design patterns that are commonly used in Android applications. Let's go through the most commonly used ones.",
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/ZUJF2bQUtYg",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-design-patterns.pdf">android-design-patterns.pdf</a></li><li><a href="android-design-patterns.pptx">android-design-patterns.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[1] || (_cache[1] = createTextVNode("The book ")),
        _cache[2] || (_cache[2] = createBaseVNode(
          "em",
          null,
          "Design Patterns: Elements of Reusable Object-Oriented Software",
          -1
          /* HOISTED */
        )),
        _cache[3] || (_cache[3] = createTextVNode(" describes many different design patterns. Instead of buying the book you can read the summary of the patterns available on many website, such as: ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_1, [
              _cache[0] || (_cache[0] = createTextVNode("https://www.journaldev.com/31902/gangs-of-four-gof-design-patterns")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ])
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
