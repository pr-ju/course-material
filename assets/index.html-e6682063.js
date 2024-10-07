import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://runestone.academy/ns/books/published//thinkcspy/index.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/ClassesBasics/toctree.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://runestone.academy/runestone/books/published/thinkcspy/ClassesDiggingDeeper/toctree.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "python-object-oriented-programming",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#python-object-oriented-programming",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Python Object-Oriented Programming")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("So far in the course we have primarily used "),
        createBaseVNode("em", null, "imperative programming"),
        createTextVNode(" (a program consists of a sequence of statements to be executed), but we have also used a bit "),
        createBaseVNode("em", null, "object-oriented programming"),
        createTextVNode(" since each value in Python actually is an object. In this lecture we take a closer look at what an object is and how we can describe them using classes.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/vCW5wLTEj2w",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="python-object-oriented-programming.pdf">python-object-oriented-programming.pdf</a></li><li><a href="python-object-oriented-programming.pptx">python-object-oriented-programming.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _cache[3] || (_cache[3] = createTextVNode("The following chapters in the book ")),
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("How to Think Like a Computer Scientist: Interactive Edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[4] || (_cache[4] = createTextVNode(": ")),
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_2, [
              _cache[1] || (_cache[1] = createTextVNode("17. Classes and Objects - the Basics")),
              createVNode(_component_ExternalLinkIcon)
            ])
          ]),
          createBaseVNode("li", null, [
            createBaseVNode("a", _hoisted_3, [
              _cache[2] || (_cache[2] = createTextVNode("18. Classes and Objects - Digging a Little Deeper")),
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
