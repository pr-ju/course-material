import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "http://interactivepython.org/courselib/static/thinkcspy/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/MoreAboutIteration/toctree.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[4] || (_cache[4] = createBaseVNode(
      "h1",
      {
        id: "python-loops",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#python-loops",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Python Loops")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("You already know how to use the "),
        createBaseVNode("code", null, "for"),
        createTextVNode(" loop, but Python have an even more powerful loop known as the "),
        createBaseVNode("code", null, "while"),
        createTextVNode(" loop. Let's go through how this loop works.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/rE8_IVmdWVI",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="python-loops.pdf">python-loops.pdf</a></li><li><a href="python-loops.pptx">python-loops.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[2] || (_cache[2] = createTextVNode("The following chapters in the book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("How to Think Like a Computer Scientist: Interactive Edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[3] || (_cache[3] = createTextVNode(": ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[1] || (_cache[1] = createTextVNode("8. More about iteration")),
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
